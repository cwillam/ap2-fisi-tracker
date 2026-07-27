/* SQL-Labor – AP2 FiSi Tracker
 * Admin-fokussierter SQL-Trainer.
 * Features: SELECT/WHERE/ORDER BY/LIMIT/Aggregationen, DDL (CREATE/ALTER),
 *           DML (INSERT/UPDATE/DELETE), GRANT/REVOKE.
 * Vereinfachtes Niveau ohne Joins/Unterabfragen.
 */
(() => {
	/* ===========================================================
	 *  Mock-Datenbank
	 * =========================================================== */
	const INITIAL_DB = {
		Mitarbeiter: {
			columns: [
				{ name: "ID", type: "INT", pk: true },
				{ name: "Name", type: "VARCHAR" },
				{ name: "Position", type: "VARCHAR" },
				{ name: "Gehalt", type: "INT" },
				{ name: "Aktiv", type: "BOOLEAN" },
			],
			rows: [
				{
					ID: 1,
					Name: "Anna Schmidt",
					Position: "Datenbank-Admin",
					Gehalt: 6200,
					Aktiv: true,
				},
				{
					ID: 2,
					Name: "Ben Yilmaz",
					Position: "Netzwerk-Admin",
					Gehalt: 5800,
					Aktiv: true,
				},
				{
					ID: 3,
					Name: "Clara Weber",
					Position: "Helpdesk",
					Gehalt: 3800,
					Aktiv: true,
				},
				{
					ID: 4,
					Name: "David Klein",
					Position: "Server-Admin",
					Gehalt: 5400,
					Aktiv: false,
				},
				{
					ID: 5,
					Name: "Eva Müller",
					Position: "Datenbank-Admin",
					Gehalt: 6500,
					Aktiv: true,
				},
				{
					ID: 6,
					Name: "Felix Roth",
					Position: "Helpdesk",
					Gehalt: 4200,
					Aktiv: true,
				},
				{
					ID: 7,
					Name: "Greta Hoffmann",
					Position: "Netzwerk-Admin",
					Gehalt: 5600,
					Aktiv: true,
				},
				{
					ID: 8,
					Name: "Hannes Schulz",
					Position: "Backup-Operator",
					Gehalt: 4700,
					Aktiv: false,
				},
			],
		},
		Benutzer: {
			columns: [
				{ name: "UID", type: "INT", pk: true },
				{ name: "Username", type: "VARCHAR", pk: true },
				{ name: "Rolle", type: "VARCHAR" },
				{ name: "Rechte", type: "VARCHAR" }, // kommagetrennte Liste: SELECT, INSERT, UPDATE, DELETE, ALL
			],
			rows: [
				{ UID: 1, Username: "anna", Rolle: "DBA", Rechte: "ALL" },
				{ UID: 2, Username: "ben", Rolle: "Netzwerk", Rechte: "SELECT" },
				{
					UID: 3,
					Username: "clara",
					Rolle: "Helpdesk",
					Rechte: "SELECT,INSERT",
				},
				{ UID: 4, Username: "david", Rolle: "Server", Rechte: "SELECT,UPDATE" },
			],
		},
	};

	// Rechte-Tabelle (vom GRANT/REVOKE-Befehl modifiziert)
	const INITIAL_PERMS = [
		{ user: "anna", table: "Mitarbeiter", perms: ["ALL"] },
		{ user: "ben", table: "Mitarbeiter", perms: ["SELECT"] },
		{ user: "clara", table: "Mitarbeiter", perms: ["SELECT", "INSERT"] },
	];

	let db = clone(INITIAL_DB);
	let perms = clone(INITIAL_PERMS);
	let txBackup = null;
	let permsBackup = null;

	function clone(x) {
		return JSON.parse(JSON.stringify(x));
	}
	function reset() {
		db = clone(INITIAL_DB);
		perms = clone(INITIAL_PERMS);
		txBackup = null;
		permsBackup = null;
	}
	function snapshot() {
		return clone(db);
	}

	/* ===========================================================
	 *  Lexer
	 * =========================================================== */
	function stripLineComments(q) {
		return q.replace(/--[^\n]*/g, "");
	}
	function tokenize(q) {
		const norm = stripLineComments(q).trim();
		if (!norm) return [];
		const re =
			/\s*([(),*;]|<>|!=|<=|>=|=|<|>|'[^']*'|"[^"]*"|[A-Za-z_ÄÖÜäöüß][A-Za-z0-9_ÄÖÜäöüß]*|-?\d+(?:\.\d+)?)/g;
		const out = [];
		let m;
		while ((m = re.exec(norm)) !== null) out.push(m[1]);
		return out;
	}
	function isAgg(name) {
		const u = name.toUpperCase();
		return (
			u === "COUNT" || u === "SUM" || u === "AVG" || u === "MIN" || u === "MAX"
		);
	}
	function unquote(s) {
		if (s == null) return s;
		if (
			(s.startsWith("'") && s.endsWith("'")) ||
			(s.startsWith('"') && s.endsWith('"'))
		)
			return s.substring(1, s.length - 1);
		return s;
	}
	function toNum(s) {
		if (typeof s === "number") return s;
		const n = parseFloat(s);
		return isNaN(n) ? null : n;
	}
	function cmpKey(v) {
		return v == null ? " " : String(v);
	}

	/* ===========================================================
	 *  WHERE-Parser
	 * =========================================================== */
	function evalWhereExpr(tokens, row) {
		let i = 0;
		function peek() {
			return tokens[i];
		}
		function eat(t) {
			const x = peek();
			if (x && x.toUpperCase() === t.toUpperCase()) {
				i++;
				return true;
			}
			return false;
		}
		function parseOr() {
			let left = parseAnd();
			while (peek() && peek().toUpperCase() === "OR") {
				i++;
				left = left || parseAnd();
			}
			return left;
		}
		function parseAnd() {
			let left = parseAtom();
			while (peek() && peek().toUpperCase() === "AND") {
				i++;
				left = left && parseAtom();
			}
			return left;
		}
		function parseAtom() {
			if (eat("(")) {
				const v = parseOr();
				eat(")");
				return v;
			}
			const a = peek();
			const b = tokens[i + 1];
			if (a && a.toUpperCase() === "NOT" && b && b.toUpperCase() === "IS") {
				i += 2;
				return row[tokens[i++]] != null;
			}
			if (a && b && b.toUpperCase() === "IS") {
				const colTok = a;
				i += 2;
				const notKw = peek() && peek().toUpperCase() === "NOT";
				if (notKw) i++;
				const nullKw = peek() && peek().toUpperCase() === "NULL";
				if (nullKw) i++;
				return notKw ? row[colTok] != null : row[colTok] == null;
			}
			if (!a) return true;
			if (
				b &&
				(b === "=" ||
					b === "<>" ||
					b === "!=" ||
					b === "<" ||
					b === "<=" ||
					b === ">" ||
					b === ">=")
			) {
				const col = a,
					op = b;
				i += 2;
				const valTok = peek();
				i++;
				return compare(row[col], op, unquote(valTok));
			}
			if (/^[A-Za-z_ÄÖÜäöüß]/.test(a)) {
				i++;
				return !!row[a];
			}
			i++;
			return true;
		}
		return parseOr();
	}

	function compare(a, op, b) {
		if (op === "=") {
			// Boolean-Vergleich case-insensitive
			if (typeof a === "boolean" || typeof b === "boolean") {
				return String(a).toUpperCase() === String(b).toUpperCase();
			}
			return String(a) === String(b);
		}
		if (op === "<>" || op === "!=") {
			if (typeof a === "boolean" || typeof b === "boolean") {
				return String(a).toUpperCase() !== String(b).toUpperCase();
			}
			return String(a) !== String(b);
		}
		const an = toNum(a),
			bn = toNum(b);
		if (an != null && bn != null) {
			if (op === "<") return an < bn;
			if (op === "<=") return an <= bn;
			if (op === ">") return an > bn;
			if (op === ">=") return an >= bn;
		}
		if (an == null && bn == null) {
			const A = String(a),
				B = String(b);
			if (op === "<") return A < B;
			if (op === "<=") return A <= B;
			if (op === ">") return A > B;
			if (op === ">=") return A >= B;
		}
		return false;
	}

	/* ===========================================================
	 *  SELECT
	 * =========================================================== */
	function runSelect(q) {
		const tokens = tokenize(q);
		if (!tokens.length) return { error: "Leere Abfrage" };
		if (tokens[0].toUpperCase() !== "SELECT")
			return { error: "Erwartete SELECT" };
		let i = 1;
		let distinct = false;
		if (tokens[i] && tokens[i].toUpperCase() === "DISTINCT") {
			distinct = true;
			i++;
		}

		const selectCols = [];
		while (i < tokens.length && tokens[i].toUpperCase() !== "FROM") {
			const t = tokens[i];
			if (t === ",") {
				i++;
				continue;
			}
			if (t === "*") {
				selectCols.push({ kind: "star" });
				i++;
				continue;
			}
			if (isAgg(t) && tokens[i + 1] === "(") {
				const fn = t.toUpperCase();
				i += 2;
				const inner = [];
				while (i < tokens.length && tokens[i] !== ")") {
					inner.push(tokens[i]);
					i++;
				}
				i++;
				selectCols.push({ kind: "agg", fn, arg: inner.join(" ").trim() });
				continue;
			}
			const colName = t;
			i++;
			if (tokens[i] && tokens[i].toUpperCase() === "AS") {
				i++;
				selectCols.push({ kind: "col", col: colName, alias: tokens[i] });
				i++;
			} else selectCols.push({ kind: "col", col: colName, alias: null });
		}
		if (tokens[i] && tokens[i].toUpperCase() === "FROM") i++;
		if (!tokens[i]) return { error: "Erwartete Tabelle nach FROM" };
		const tableName = tokens[i];
		i++;
		if (!db[tableName])
			return { error: `Tabelle '${tableName}' existiert nicht` };
		const table = db[tableName];

		let rows = table.rows.slice();
		if (tokens[i] && tokens[i].toUpperCase() === "WHERE") {
			i++;
			const start = i;
			while (
				i < tokens.length &&
				tokens[i] !== ";" &&
				!["GROUP", "ORDER", "LIMIT", "HAVING"].includes(tokens[i].toUpperCase())
			)
				i++;
			const whereTokens = tokens.slice(start, i);
			rows = rows.filter((r) => evalWhereExpr(whereTokens, r));
		}

		let groupCols = null;
		if (tokens[i] && tokens[i].toUpperCase() === "GROUP") {
			i++;
			if (tokens[i] && tokens[i].toUpperCase() === "BY") i++;
			groupCols = [];
			while (
				i < tokens.length &&
				tokens[i] !== ";" &&
				!["ORDER", "LIMIT", "HAVING"].includes(tokens[i].toUpperCase())
			) {
				if (tokens[i] !== ",") groupCols.push(tokens[i]);
				i++;
			}
		}

		if (tokens[i] && tokens[i].toUpperCase() === "ORDER") {
			i++;
			if (tokens[i] && tokens[i].toUpperCase() === "BY") i++;
			const col = tokens[i];
			i++;
			let dir = 1;
			if (
				tokens[i] &&
				(tokens[i].toUpperCase() === "DESC" ||
					tokens[i].toUpperCase() === "ASC")
			) {
				dir = tokens[i].toUpperCase() === "DESC" ? -1 : 1;
				i++;
			}
			rows.sort((a, b) => {
				const av = a[col],
					bv = b[col];
				if (av == null && bv == null) return 0;
				if (av == null) return 1;
				if (bv == null) return -1;
				if (typeof av === "number" && typeof bv === "number")
					return (av - bv) * dir;
				return String(av).localeCompare(String(bv)) * dir;
			});
		}

		if (tokens[i] && tokens[i].toUpperCase() === "LIMIT") {
			i++;
			const n = parseInt(tokens[i], 10);
			if (!isNaN(n)) rows = rows.slice(0, n);
		}

		const hasAgg = selectCols.some((c) => c.kind === "agg");
		let outColumns = [];
		let outRows = [];

		if (groupCols) {
			const groups = new Map();
			for (const row of rows) {
				const key = groupCols.map((c) => cmpKey(row[c])).join("|");
				if (!groups.has(key)) groups.set(key, []);
				groups.get(key).push(row);
			}
			for (const [, groupRows] of groups) {
				const proj = {};
				for (const sel of selectCols) {
					if (sel.kind === "star") Object.assign(proj, groupRows[0]);
					else if (sel.kind === "col")
						proj[sel.alias || sel.col] = groupRows[0][sel.col];
					else if (sel.kind === "agg")
						proj[sel.alias || sel.fn + "(" + (sel.arg || "*") + ")"] =
							computeAgg(sel, groupRows);
				}
				outRows.push(proj);
			}
			outColumns = selectCols.map(
				(c) =>
					c.alias ||
					(c.kind === "agg" ? c.fn + "(" + (c.arg || "*") + ")" : c.col),
			);
		} else if (hasAgg) {
			const aggRow = {};
			for (const sel of selectCols) {
				if (sel.kind !== "agg")
					return { error: `Gemischte Spalten/AGG nicht erlaubt: '${sel.col}'` };
				const label = sel.alias || sel.fn + "(" + (sel.arg || "*") + ")";
				aggRow[label] = computeAgg(sel, rows);
				outColumns.push(label);
			}
			outRows.push(aggRow);
		} else {
			outColumns = selectCols.map((c) => c.alias || c.col);
			for (const r of rows) {
				const proj = {};
				for (const sel of selectCols) {
					if (sel.kind === "star") Object.assign(proj, r);
					else if (sel.kind === "col") proj[sel.alias || sel.col] = r[sel.col];
				}
				outRows.push(proj);
			}
			if (selectCols.length === 1 && selectCols[0].kind === "star")
				outColumns = table.columns.map((c) => c.name);
		}

		if (distinct) {
			const seen = new Set();
			const uniq = [];
			for (const r of outRows) {
				const key = outColumns.map((c) => cmpKey(r[c])).join("|");
				if (!seen.has(key)) {
					seen.add(key);
					uniq.push(r);
				}
			}
			outRows = uniq;
		}

		return { type: "select", columns: outColumns, rows: outRows };
	}

	function computeAgg(sel, rows) {
		const fn = sel.fn,
			arg = sel.arg;
		if (fn === "COUNT") {
			if (!arg || arg === "*") return rows.length;
			return rows.filter((r) => r[arg] != null).length;
		}
		const nums = rows.map((r) => toNum(r[arg])).filter((v) => v != null);
		if (!nums.length) return null;
		if (fn === "SUM") return nums.reduce((a, b) => a + b, 0);
		if (fn === "AVG") return nums.reduce((a, b) => a + b, 0) / nums.length;
		if (fn === "MIN") return Math.min(...nums);
		if (fn === "MAX") return Math.max(...nums);
		return null;
	}

	/* ===========================================================
	 *  DDL – CREATE TABLE
	 * =========================================================== */
	function runCreate(q) {
		const tokens = tokenize(q);
		if (
			tokens[0].toUpperCase() !== "CREATE" ||
			tokens[1].toUpperCase() !== "TABLE"
		)
			return { error: "Erwartete CREATE TABLE" };
		const name = tokens[2];
		let i = 3;
		if (tokens[i] !== "(") return { error: "Erwartete '('" };
		i++;
		const cols = [];
		let cur = "";
		while (i < tokens.length && tokens[i] !== ")") {
			cur += (cur ? " " : "") + tokens[i];
			i++;
			if (tokens[i] === "," || tokens[i] === ")") {
				const m = cur
					.trim()
					.match(/^([A-Za-z_ÄÖÜäöüß]+)\s+([A-Za-z]+)(\s+PRIMARY\s+KEY)?$/i);
				if (m) cols.push({ name: m[1], type: m[2].toUpperCase(), pk: !!m[3] });
				if (tokens[i] === ",") i++;
				cur = "";
			}
		}
		db[name] = { columns: cols, rows: [] };
		return {
			type: "ddl",
			message: `Tabelle '${name}' angelegt (${cols.length} Spalten).`,
		};
	}

	/* ===========================================================
	 *  DDL – ALTER TABLE ... ADD COLUMN
	 * =========================================================== */
	function runAlter(q) {
		const tokens = tokenize(q);
		if (
			tokens[0].toUpperCase() !== "ALTER" ||
			tokens[1].toUpperCase() !== "TABLE"
		)
			return { error: "Erwartete ALTER TABLE" };
		const name = tokens[2];
		if (!db[name]) return { error: `Tabelle '${name}' existiert nicht` };
		if (tokens[3].toUpperCase() !== "ADD") return { error: "ADD erwartet" };
		if (tokens[4].toUpperCase() !== "COLUMN")
			return { error: "COLUMN erwartet" };
		const colName = tokens[5];
		const colType = (tokens[6] || "VARCHAR").toUpperCase();
		db[name].columns.push({ name: colName, type: colType });
		return {
			type: "ddl",
			message: `Spalte '${colName}' (${colType}) zu '${name}' hinzugefügt.`,
		};
	}

	/* ===========================================================
	 *  DML – INSERT
	 * =========================================================== */
	function runInsert(q) {
		const tokens = tokenize(q);
		if (
			tokens[0].toUpperCase() !== "INSERT" ||
			tokens[1].toUpperCase() !== "INTO"
		)
			return { error: "Erwartete INSERT INTO" };
		const name = tokens[2];
		if (!db[name]) return { error: `Tabelle '${name}' existiert nicht` };
		let i = 3;
		let cols = null;
		if (tokens[i] === "(") {
			i++;
			cols = [];
			while (i < tokens.length && tokens[i] !== ")") {
				if (tokens[i] !== ",") cols.push(tokens[i]);
				i++;
			}
			i++;
		}
		if (tokens[i].toUpperCase() !== "VALUES")
			return { error: "VALUES erwartet" };
		i++;
		if (tokens[i] !== "(") return { error: "(' erwartet" };
		i++;
		const vals = [];
		let cur = "";
		while (i < tokens.length && tokens[i] !== ")") {
			if (tokens[i] === ",") {
				vals.push(unquote(cur.trim()));
				cur = "";
				i++;
				continue;
			}
			cur += (cur ? " " : "") + tokens[i];
			i++;
		}
		vals.push(unquote(cur.trim()));
		const row = {};
		if (!cols) cols = db[name].columns.map((c) => c.name);
		for (let j = 0; j < cols.length; j++) {
			const raw = vals[j];
			if (raw === "TRUE" || raw === "true") row[cols[j]] = true;
			else if (raw === "FALSE" || raw === "false") row[cols[j]] = false;
			else
				row[cols[j]] =
					toNum(raw) != null && /^-?\d+(\.\d+)?$/.test(raw) ? toNum(raw) : raw;
		}
		db[name].rows.push(row);
		return {
			type: "dml",
			message: `1 Zeile in '${name}' eingefügt.`,
			rows: db[name].rows.length,
		};
	}

	/* ===========================================================
	 *  DML – UPDATE
	 * =========================================================== */
	function runUpdate(q) {
		const tokens = tokenize(q);
		if (tokens[0].toUpperCase() !== "UPDATE")
			return { error: "Erwartete UPDATE" };
		const name = tokens[1];
		if (!db[name]) return { error: `Tabelle '${name}' existiert nicht` };
		let i = 2;
		if (tokens[i].toUpperCase() !== "SET") return { error: "SET erwartet" };
		i++;
		const sets = {};
		while (i < tokens.length && tokens[i].toUpperCase() !== "WHERE") {
			const col = tokens[i],
				op = tokens[i + 1],
				val = tokens[i + 2];
			i += 3;
			if (tokens[i] === ",") i++;
			let v = op === "=" ? unquote(val) : val;
			if (v === "TRUE" || v === "true") v = true;
			else if (v === "FALSE" || v === "false") v = false;
			else if (toNum(v) != null && /^-?\d+(\.\d+)?$/.test(v)) v = toNum(v);
			sets[col] = v;
		}
		let affected = 0;
		for (const row of db[name].rows) {
			let match = true;
			if (tokens[i] && tokens[i].toUpperCase() === "WHERE") {
				i++;
				const start = i;
				while (i < tokens.length && tokens[i] !== ";") i++;
				match = evalWhereExpr(tokens.slice(start, i), row);
			}
			if (match) {
				Object.assign(row, sets);
				affected++;
			}
		}
		return {
			type: "dml",
			message: `${affected} Zeile(n) aktualisiert.`,
			rows: affected,
		};
	}

	/* ===========================================================
	 *  DML – DELETE
	 * =========================================================== */
	function runDelete(q) {
		const tokens = tokenize(q);
		if (
			tokens[0].toUpperCase() !== "DELETE" ||
			tokens[1].toUpperCase() !== "FROM"
		)
			return { error: "Erwartete DELETE FROM" };
		const name = tokens[2];
		if (!db[name]) return { error: `Tabelle '${name}' existiert nicht` };
		let i = 3;
		const before = db[name].rows.length;
		if (tokens[i] && tokens[i].toUpperCase() === "WHERE") {
			i++;
			const start = i;
			while (i < tokens.length && tokens[i] !== ";") i++;
			db[name].rows = db[name].rows.filter(
				(row) => !evalWhereExpr(tokens.slice(start, i), row),
			);
		} else {
			db[name].rows = [];
		}
		return {
			type: "dml",
			message: `${before - db[name].rows.length} Zeile(n) gelöscht.`,
			rows: before - db[name].rows.length,
		};
	}

	/* ===========================================================
	 *  GRANT / REVOKE
	 * =========================================================== */
	function runGrant(q) {
		const tokens = tokenize(q);
		if (tokens[0].toUpperCase() !== "GRANT")
			return { error: "Erwartete GRANT" };
		const permsList = [];
		let i = 1;
		while (i < tokens.length && tokens[i].toUpperCase() !== "ON") {
			if (tokens[i] !== ",") permsList.push(tokens[i].toUpperCase());
			i++;
		}
		if (tokens[i] && tokens[i].toUpperCase() === "ON") i++;
		const tableName = tokens[i];
		i++;
		if (!db[tableName])
			return { error: `Tabelle '${tableName}' existiert nicht` };
		if (!(tokens[i] && tokens[i].toUpperCase() === "TO"))
			return { error: "TO erwartet" };
		i++;
		const user = tokens[i];

		let entry = perms.find((p) => p.user === user && p.table === tableName);
		if (!entry) {
			entry = { user, table: tableName, perms: [] };
			perms.push(entry);
		}
		const expanded = [];
		for (const p of permsList)
			if (p === "ALL") expanded.push("SELECT", "INSERT", "UPDATE", "DELETE");
			else expanded.push(p);
		for (const p of expanded) if (!entry.perms.includes(p)) entry.perms.push(p);
		return {
			type: "perm",
			message: `Rechte ${expanded.join(", ")} für '${user}' auf '${tableName}' erteilt.`,
			perms: clone(perms),
		};
	}

	function runRevoke(q) {
		const tokens = tokenize(q);
		if (tokens[0].toUpperCase() !== "REVOKE")
			return { error: "Erwartete REVOKE" };
		const permsList = [];
		let i = 1;
		while (i < tokens.length && tokens[i].toUpperCase() !== "ON") {
			if (tokens[i] !== ",") permsList.push(tokens[i].toUpperCase());
			i++;
		}
		if (tokens[i] && tokens[i].toUpperCase() === "ON") i++;
		const tableName = tokens[i];
		i++;
		if (!db[tableName])
			return { error: `Tabelle '${tableName}' existiert nicht` };
		if (!(tokens[i] && tokens[i].toUpperCase() === "FROM"))
			return { error: "FROM erwartet" };
		i++;
		const user = tokens[i];
		const entry = perms.find((p) => p.user === user && p.table === tableName);
		if (entry) {
			const expanded = [];
			for (const p of permsList)
				if (p === "ALL") expanded.push("SELECT", "INSERT", "UPDATE", "DELETE");
				else expanded.push(p);
			entry.perms = entry.perms.filter((p) => !expanded.includes(p));
		}
		return {
			type: "perm",
			message: `Rechte ${permsList.join(", ")} für '${user}' auf '${tableName}' entzogen.`,
			perms: clone(perms),
		};
	}

	function listPerms() {
		return clone(perms);
	}

	/* ===========================================================
	 *  Public API
	 * =========================================================== */
	function execute(q) {
		if (!q || !q.trim()) return { error: "Leere Abfrage" };
		// Multi-Statement: split by ';' and run sequentially
		const parts = q
			.split(/;\s*(?=(?:[^']*'[^']*')*[^']*$)/)
			.map((p) => p.trim())
			.filter(Boolean);
		if (parts.length > 1) {
			const out = [];
			for (const p of parts) {
				const r = executeSingle(p);
				if (r.error) return r;
				out.push(r);
			}
			return out[out.length - 1];
		}
		return executeSingle(q);
	}
	function executeSingle(q) {
		if (!q || !q.trim()) return { error: "Leere Abfrage" };
		const upper = q.trim().toUpperCase();
		if (upper === "COMMIT") {
			txBackup = null;
			permsBackup = null;
			return { type: "tx", message: "Transaktion committed." };
		}
		if (upper === "ROLLBACK") {
			if (txBackup) db = txBackup;
			if (permsBackup) perms = permsBackup;
			txBackup = null;
			permsBackup = null;
			return { type: "tx", message: "Transaktion zurückgerollt." };
		}
		if (upper === "BEGIN" || upper === "START TRANSACTION") {
			txBackup = clone(db);
			permsBackup = clone(perms);
			return { type: "tx", message: "Transaktion gestartet." };
		}
		const u = q.trim().toUpperCase();
		if (u.startsWith("SELECT")) return runSelect(q);
		if (u.startsWith("CREATE TABLE")) return runCreate(q);
		if (u.startsWith("CREATE INDEX")) return runCreateIndex(q);
		if (u.startsWith("ALTER TABLE")) return runAlter(q);
		if (u.startsWith("DROP TABLE")) return runDrop(q);
		if (u.startsWith("INSERT")) return runInsert(q);
		if (u.startsWith("UPDATE")) return runUpdate(q);
		if (u.startsWith("DELETE")) return runDelete(q);
		if (u.startsWith("GRANT")) return runGrant(q);
		if (u.startsWith("REVOKE")) return runRevoke(q);
		return { error: "Nicht unterstützter Befehl: " + q.split(/\s+/)[0] };
	}

	function runDrop(q) {
		const tokens = tokenize(q);
		if (
			tokens[0].toUpperCase() !== "DROP" ||
			tokens[1].toUpperCase() !== "TABLE"
		)
			return { error: "Erwartete DROP TABLE" };
		const name = tokens[2];
		if (!db[name]) return { error: `Tabelle '${name}' existiert nicht` };
		delete db[name];
		return { type: "ddl", message: `Tabelle '${name}' entfernt.` };
	}

	function runCreateIndex(q) {
		const tokens = tokenize(q);
		if (
			tokens[0].toUpperCase() !== "CREATE" ||
			tokens[1].toUpperCase() !== "INDEX"
		)
			return { error: "Erwartete CREATE INDEX" };
		const name = tokens[2];
		if (tokens[3].toUpperCase() !== "ON") return { error: "ON erwartet" };
		const tableName = tokens[4];
		if (!db[tableName])
			return { error: `Tabelle '${tableName}' existiert nicht` };
		if (tokens[5] !== "(") return { error: "( erwartet" };
		const cols = [];
		let i = 6;
		while (i < tokens.length && tokens[i] !== ")") {
			if (tokens[i] !== ",") cols.push(tokens[i]);
			i++;
		}
		return {
			type: "ddl",
			message: `Index '${name}' auf '${tableName}(${cols.join(", ")})' angelegt.`,
		};
	}

	/* ===========================================================
	 *  Tasks – Admin-Fokus
	 * =========================================================== */
	const TASKS = [
		{
			id: 1,
			level: "Stufe 1",
			title: "SELECT *",
			prompt: "Zeige alle Mitarbeiter an.",
			hint: "SELECT * FROM Mitarbeiter;",
			solution: "SELECT * FROM Mitarbeiter;",
			verify: (r) => r.type === "select" && r.rows.length === 8,
		},
		{
			id: 2,
			level: "Stufe 1",
			title: "WHERE-Filter",
			prompt: "Liste alle aktiven Mitarbeiter (Aktiv = TRUE).",
			hint: "SELECT Name, Position FROM Mitarbeiter WHERE Aktiv = TRUE;",
			solution: "SELECT Name, Position FROM Mitarbeiter WHERE Aktiv = TRUE;",
			verify: (r) => r.type === "select" && r.rows.length === 6,
		},
		{
			id: 3,
			level: "Stufe 1",
			title: "Gehaltsauswertung",
			prompt: "Wie viel Gehalt zahlen wir insgesamt an aktive Mitarbeiter?",
			hint: "SELECT SUM(Gehalt) FROM Mitarbeiter WHERE Aktiv = TRUE;",
			solution: "SELECT SUM(Gehalt) FROM Mitarbeiter WHERE Aktiv = TRUE;",
			verify: (r) => r.type === "select" && r.rows[0]["SUM(Gehalt)"] === 32100,
		},
		{
			id: 4,
			level: "Stufe 2 (DDL)",
			title: "Neue Tabelle anlegen",
			prompt:
				"Lege die Tabelle 'AuditLog' an mit Spalten LogID (INT PRIMARY KEY), Aktion (VARCHAR), Zeitstempel (DATE).",
			hint: "CREATE TABLE AuditLog (LogID INT PRIMARY KEY, Aktion VARCHAR, Zeitstempel DATE);",
			solution:
				"CREATE TABLE AuditLog (LogID INT PRIMARY KEY, Aktion VARCHAR, Zeitstempel DATE);",
			verify: (res, _runner) => {
				if (res.error) return false;
				const cols = db.AuditLog ? db.AuditLog.columns.map((c) => c.name) : [];
				return (
					cols.includes("LogID") &&
					cols.includes("Aktion") &&
					cols.includes("Zeitstempel")
				);
			},
		},
		{
			id: 5,
			level: "Stufe 2 (DDL)",
			title: "Spalte hinzufügen",
			prompt: "Füge der Tabelle Benutzer eine VARCHAR-Spalte 'Email' hinzu.",
			hint: "ALTER TABLE Benutzer ADD COLUMN Email VARCHAR;",
			solution: "ALTER TABLE Benutzer ADD COLUMN Email VARCHAR;",
			verify: (res, _runner) => {
				if (res.error) return false;
				return db.Benutzer.columns.some((c) => c.name === "Email");
			},
		},
		{
			id: 6,
			level: "Stufe 3 (DML)",
			title: "Mitarbeiter einfügen",
			prompt:
				"Füge einen neuen Mitarbeiter hinzu: ID=9, Name='Ida Krüger', Position='Datenbank-Admin', Gehalt=6000, Aktiv=TRUE.",
			hint: "INSERT INTO Mitarbeiter (ID, Name, Position, Gehalt, Aktiv) VALUES (9, 'Ida Krüger', 'Datenbank-Admin', 6000, TRUE);",
			solution:
				"INSERT INTO Mitarbeiter (ID, Name, Position, Gehalt, Aktiv) VALUES (9, 'Ida Krüger', 'Datenbank-Admin', 6000, TRUE);",
			verify: (r) => r.type === "dml" && !r.error,
		},
		{
			id: 7,
			level: "Stufe 3 (DML)",
			title: "Gehalt anpassen",
			prompt: "Erhöhe das Gehalt von 'Eva Müller' auf 7000.",
			hint: "UPDATE Mitarbeiter SET Gehalt = 7000 WHERE Name = 'Eva Müller';",
			solution:
				"UPDATE Mitarbeiter SET Gehalt = 7000 WHERE Name = 'Eva Müller';",
			verify: (r) => r.type === "dml" && !r.error,
		},
		{
			id: 8,
			level: "Stufe 3 (DML)",
			title: "Inaktiven Mitarbeiter entfernen",
			prompt: "Lösche alle Mitarbeiter, deren Aktiv-Flag FALSE ist.",
			hint: "DELETE FROM Mitarbeiter WHERE Aktiv = FALSE;",
			solution: "DELETE FROM Mitarbeiter WHERE Aktiv = FALSE;",
			verify: (r) => r.type === "dml" && !r.error,
		},
		{
			id: 9,
			level: "Stufe 4 (Rechte)",
			title: "GRANT – Schreibrechte geben",
			prompt:
				"Erteile dem Benutzer 'ben' das UPDATE-Recht auf die Tabelle Mitarbeiter.",
			hint: "GRANT UPDATE ON Mitarbeiter TO ben;",
			solution: "GRANT UPDATE ON Mitarbeiter TO ben;",
			verify: (res, _runner) => {
				if (res.error) return false;
				const list = listPerms();
				const entry = list.find(
					(p) => p.user === "ben" && p.table === "Mitarbeiter",
				);
				return entry && entry.perms.includes("UPDATE");
			},
		},
		{
			id: 10,
			level: "Stufe 4 (Rechte)",
			title: "REVOKE – Recht entziehen",
			prompt:
				"Entziehe dem Benutzer 'clara' das INSERT-Recht auf die Tabelle Mitarbeiter.",
			hint: "REVOKE INSERT ON Mitarbeiter FROM clara;",
			solution: "REVOKE INSERT ON Mitarbeiter FROM clara;",
			verify: (res, _runner) => {
				if (res.error) return false;
				const list = listPerms();
				const entry = list.find(
					(p) => p.user === "clara" && p.table === "Mitarbeiter",
				);
				return entry && !entry.perms.includes("INSERT");
			},
		},
		{
			id: 11,
			level: "Stufe 1",
			title: "WHERE mit AND",
			prompt: "Liste Datenbank-Admins mit Gehalt über 6000.",
			hint: "SELECT Name, Gehalt FROM Mitarbeiter WHERE Position = 'Datenbank-Admin' AND Gehalt > 6000;",
			solution:
				"SELECT Name, Gehalt FROM Mitarbeiter WHERE Position = 'Datenbank-Admin' AND Gehalt > 6000;",
			verify: (r) =>
				r.type === "select" &&
				r.rows.length === 2 &&
				r.rows.some((x) => x.Gehalt === 6500),
		},
		{
			id: 12,
			level: "Stufe 1",
			title: "Mehrere Aggregate",
			prompt:
				"Wie viele Mitarbeiter und was ist das Durchschnittsgehalt der Helpdesk-Position?",
			hint: "SELECT COUNT(*), AVG(Gehalt) FROM Mitarbeiter WHERE Position = 'Helpdesk';",
			solution:
				"SELECT COUNT(*), AVG(Gehalt) FROM Mitarbeiter WHERE Position = 'Helpdesk';",
			verify: (r) =>
				r.type === "select" &&
				r.rows[0]["COUNT(*)"] === 2 &&
				Math.abs(r.rows[0]["AVG(Gehalt)"] - 4000) < 1,
		},
		{
			id: 13,
			level: "Stufe 2 (DDL)",
			title: "DROP TABLE",
			prompt: "Entferne die (vorhandene) Tabelle 'Benutzer'.",
			hint: "DROP TABLE Benutzer;",
			solution: "DROP TABLE Benutzer;",
			verify: (res, _runner) => {
				if (res.error) return false;
				const list = window.SQL.getDb ? Object.keys(window.SQL.getDb()) : [];
				return !list.includes("Benutzer");
			},
		},
		{
			id: 14,
			level: "Stufe 2 (DDL)",
			title: "CREATE INDEX",
			prompt:
				"Erzeuge einen Index idx_position auf Position der Tabelle Mitarbeiter.",
			hint: "CREATE INDEX idx_position ON Mitarbeiter (Position);",
			solution: "CREATE INDEX idx_position ON Mitarbeiter (Position);",
			verify: (res) => !res.error && res.type === "ddl",
		},
		{
			id: 15,
			level: "Stufe 3 (DML)",
			title: "Transaktion mit COMMIT",
			prompt: "Erhöhe das Gehalt aller Netzwerk-Admins um 200 und committe.",
			hint: "BEGIN; UPDATE Mitarbeiter SET Gehalt = Gehalt + 200 WHERE Position = 'Netzwerk-Admin'; COMMIT;",
			solution:
				"BEGIN;UPDATE Mitarbeiter SET Gehalt = Gehalt + 200 WHERE Position = 'Netzwerk-Admin';COMMIT;",
			verify: (_res, runner) => {
				const queries = [
					"BEGIN",
					"UPDATE Mitarbeiter SET Gehalt = Gehalt + 200 WHERE Position = 'Netzwerk-Admin'",
					"COMMIT",
				];
				return queries.every((q) => !runner(q).error);
			},
		},
		{
			id: 16,
			level: "Stufe 4 (Rechte)",
			title: "GRANT ALL – Volle Rechte",
			prompt:
				"Erteile dem Benutzer 'david' ALLE Rechte auf die Tabelle Mitarbeiter.",
			hint: "GRANT ALL ON Mitarbeiter TO david;",
			solution: "GRANT ALL ON Mitarbeiter TO david;",
			verify: (res, _runner) => {
				if (res.error) return false;
				const list = listPerms();
				const entry = list.find(
					(p) => p.user === "david" && p.table === "Mitarbeiter",
				);
				return entry && entry.perms.length >= 4;
			},
		},
	];

	/* ===========================================================
	 *  UI
	 * =========================================================== */
	function renderSchema() {
		const target = document.getElementById("schemaExplorer");
		if (!target) return;
		const html = Object.entries(db)
			.map(([tname, t]) => {
				const cols = t.columns
					.map((c) => {
						const flags = [];
						if (c.pk) flags.push("PK");
						return `<div class="flex items-center justify-between py-1 px-2 rounded hover:bg-dark-bg/60">
          <span class="font-mono text-xs text-slate-300">${c.name}</span>
          <span class="flex items-center gap-1">
            <span class="text-[10px] text-dark-muted">${c.type}</span>
            ${flags.map((f) => `<span class="text-[9px] bg-dark-accent/15 text-dark-accent px-1 rounded">${f}</span>`).join("")}
          </span>
        </div>`;
					})
					.join("");
				const permBlock =
					tname === "Mitarbeiter"
						? `<div class="mt-2 pt-2 border-t border-dark-border/50">
          <div class="text-[10px] text-dark-muted mb-1">Aktive Rechte:</div>
          ${
						perms
							.filter((p) => p.table === tname)
							.map(
								(p) =>
									`<div class="text-[10px] font-mono text-emerald-400">${p.user}: ${p.perms.join(", ")}</div>`,
							)
							.join("") ||
						'<div class="text-[10px] text-dark-muted">(keine)</div>'
					}
        </div>`
						: "";
				return `<div class="bg-dark-card border border-dark-border rounded-xl p-3">
        <div class="flex items-center gap-2 mb-2">
          <i data-lucide="table-2" class="w-4 h-4 text-dark-accent"></i>
          <span class="font-bold text-white text-sm font-mono">${tname}</span>
          <span class="text-[10px] text-dark-muted ml-auto">${t.rows.length} Z.</span>
        </div>
        <div class="space-y-0.5">${cols}</div>
        ${permBlock}
      </div>`;
			})
			.join("");
		target.innerHTML = html;
		if (window.lucide) lucide.createIcons();
	}

	function renderResult(res) {
		const out = document.getElementById("resultTable");
		if (!out) return;
		if (res.error) {
			out.innerHTML = `<div class="text-red-400 font-mono text-xs p-4 bg-red-500/10 border border-red-500/30 rounded-lg">⚠ ${res.error}</div>`;
			return;
		}
		if (res.type === "select") {
			if (!res.rows.length) {
				out.innerHTML = `<div class="text-dark-muted text-xs p-4 bg-dark-card border border-dark-border rounded-lg font-mono">(0 Zeilen)</div>`;
				return;
			}
			const head = res.columns
				.map(
					(c) =>
						`<th class="px-3 py-2 text-left text-[10px] uppercase tracking-wider text-dark-muted font-mono border-b border-dark-border">${c}</th>`,
				)
				.join("");
			const body = res.rows
				.map(
					(r) =>
						`<tr>${res.columns
							.map((c) => {
								const v = r[c];
								const disp = v === true ? "TRUE" : v === false ? "FALSE" : v;
								return `<td class="px-3 py-1.5 font-mono text-xs text-slate-300 border-b border-dark-border/50">${v == null ? "<span class='text-dark-muted'>NULL</span>" : disp}</td>`;
							})
							.join("")}</tr>`,
				)
				.join("");
			out.innerHTML = `<div class="overflow-x-auto rounded-lg border border-dark-border">
          <table class="w-full"><thead class="bg-dark-bg/80"><tr>${head}</tr></thead><tbody>${body}</tbody></table>
        </div>
        <div class="text-[10px] text-dark-muted mt-2 font-mono">${res.rows.length} Zeile(n) · ${res.columns.length} Spalte(n)</div>`;
			return;
		}
		if (
			res.type === "dml" ||
			res.type === "ddl" ||
			res.type === "tx" ||
			res.type === "perm"
		) {
			out.innerHTML = `<div class="text-emerald-400 font-mono text-xs p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">✓ ${res.message}</div>`;
			return;
		}
		out.innerHTML = `<pre class="text-xs text-slate-300 font-mono whitespace-pre-wrap">${JSON.stringify(res, null, 2)}</pre>`;
	}

	/* ===========================================================
	 *  Game-Logik
	 * =========================================================== */
	let xp = 0,
		streak = 0,
		currentTaskIdx = 0;
	function setXp(v) {
		xp = Math.max(0, v);
		document.getElementById("xpBadge").textContent = `${xp} XP`;
	}
	function setStreak(v) {
		streak = Math.max(0, v);
		document.getElementById("streakBadge").textContent = `🔥 ${streak}`;
	}
	function showTask(idx) {
		if (idx < 0 || idx >= TASKS.length) return;
		currentTaskIdx = idx;
		const t = TASKS[idx];
		document.getElementById("taskLevel").textContent = t.level;
		document.getElementById("taskTitle").textContent = t.title;
		document.getElementById("taskPrompt").textContent = t.prompt;
		document.getElementById("taskCounter").textContent =
			`${idx + 1} / ${TASKS.length}`;
		document.getElementById("editor").value = "";
		document.getElementById("resultTable").innerHTML =
			`<div class="text-dark-muted text-xs font-mono p-3">Tipp: SQL hier eingeben und "Ausführen" drücken.</div>`;
		document.getElementById("feedback").innerHTML = "";
		setNextPulse(false);
	}
	function normalize(q) {
		return q.replace(/\s+/g, " ").trim().replace(/;$/, "").trim();
	}
	function checkAnswer() {
		const userQ = normalize(document.getElementById("editor").value);
		if (!userQ) return;
		const t = TASKS[currentTaskIdx];
		let res;
		try {
			res = execute(userQ);
		} catch (e) {
			res = { error: e.message };
		}
		renderResult(res);
		const fb = document.getElementById("feedback");
		const ok = !res.error && t.verify(res, execute);
		if (ok) {
			setXp(xp + 10);
			setStreak(streak + 1);
			const lastTask = currentTaskIdx >= TASKS.length - 1;
			fb.innerHTML = `<div class="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3 text-sm">
        <div class="text-emerald-400 font-bold mb-1">✓ Richtig! +10 XP</div>
        <div class="text-dark-muted text-xs">Streak: ${streak} in Folge.${lastTask ? " · Alle Aufgaben gelöst!" : ' · Klicke "Weiter" für die nächste Aufgabe.'}</div>
      </div>`;
			if (window.confetti && Math.random() < 0.4) {
				try {
					window.confetti({
						particleCount: 60,
						spread: 70,
						origin: { y: 0.6 },
					});
				} catch (e) {}
			}
			setNextPulse(true);
		} else {
			setStreak(0);
			fb.innerHTML = `<div class="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-sm">
        <div class="text-red-400 font-bold mb-1">✗ Noch nicht richtig.</div>
        <div class="text-dark-muted text-xs mb-2">Tipp: <code class="font-mono text-amber-300">${t.hint}</code></div>
        <details class="text-xs text-dark-muted">
          <summary class="cursor-pointer hover:text-white">Lösung anzeigen</summary>
          <pre class="font-mono text-emerald-300 mt-2 whitespace-pre-wrap">${t.solution}</pre>
        </details>
      </div>`;
		}
		renderSchema();
	}

	function setNextPulse(on) {
		const btn = document.getElementById("btnNext");
		if (!btn) return;
		if (on) {
			btn.classList.add("sql-next-pulse");
			btn.innerHTML =
				'<i data-lucide="check" class="w-3 h-3 inline mr-1"></i> Weiter';
		} else {
			btn.classList.remove("sql-next-pulse");
			btn.innerHTML =
				'Weiter <i data-lucide="chevron-right" class="w-3 h-3 inline"></i>';
		}
		if (window.lucide) lucide.createIcons();
	}

	function nextTask() {
		setNextPulse(false);
		if (currentTaskIdx < TASKS.length - 1) showTask(currentTaskIdx + 1);
		else showTask(0);
	}
	function prevTask() {
		setNextPulse(false);
		if (currentTaskIdx > 0) showTask(currentTaskIdx - 1);
	}
	function resetDb() {
		reset();
		renderSchema();
		document.getElementById("resultTable").innerHTML =
			`<div class="text-dark-muted text-xs font-mono p-3">Datenbank + Rechte zurückgesetzt.</div>`;
		document.getElementById("feedback").innerHTML = "";
	}

	function init() {
		reset();
		setXp(0);
		setStreak(0);
		showTask(0);
		renderSchema();
		document.getElementById("btnRun").addEventListener("click", checkAnswer);
		document.getElementById("btnNext").addEventListener("click", nextTask);
		document.getElementById("btnPrev").addEventListener("click", prevTask);
		document.getElementById("btnReset").addEventListener("click", resetDb);
		document.getElementById("editor").addEventListener("keydown", (e) => {
			if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
				e.preventDefault();
				checkAnswer();
			}
		});
	}

	function selfTest() {
		reset();
		const results = [];
		for (const t of TASKS) {
			reset();
			let ok = true;
			try {
				const res = execute(t.solution);
				ok = !res.error && t.verify(res, execute);
			} catch (e) {
				ok = false;
			}
			results.push({ id: t.id, ok });
		}
		const pass = results.filter((r) => r.ok).length;
		console.log(`SQL-SelfTest: ${pass}/${results.length}`);
		results.filter((r) => !r.ok).forEach((r) => console.log("FAIL", r.id));
		return pass === results.length;
	}

	if (typeof window === "undefined") module.exports = { execute, selfTest };
	window.SQL = { init, execute, resetDb, selfTest, getDb: snapshot, listPerms };
	if (document.readyState === "loading")
		document.addEventListener("DOMContentLoaded", init);
	else init();
})();
