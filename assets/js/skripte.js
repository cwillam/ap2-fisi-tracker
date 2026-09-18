// ======================================================================
// AP2 FISI Tracker v3 — Skript- & Automatisierungs-Labor
// 100% IHK-Katalog Konform: PowerShell, Bash & Ansible / YAML
// ======================================================================

const SCRIPT_TASKS = [
  // ------------------------------------------------------------
  // 1. PowerShell: AD-User Onboarding aus CSV (IHK Dauerbrenner)
  // ------------------------------------------------------------
  {
    id: "ps-01",
    category: "powershell",
    badge: "PowerShell · IHK Klassiker",
    title: "Active Directory: Mitarbeiter aus CSV anlegen",
    difficulty: "Mittel",
    points: 15,
    scenario: "In einer IHK-Prüfungsaufgabe sollst du ein PowerShell-Skript vervollständigen, das eine Personalliste (`mitarbeiter.csv`) zeilenweise einliest und für jeden neuen Mitarbeiter ein AD-Benutzerkonto mit Passwort und aktivierter Anmeldung erstellt.",
    hint: "Cmdlets: `Import-Csv`, `New-ADUser`, Schleife: `foreach ($u in $users)`, Parameter: `-Name`, `-AccountPassword`, `-Enabled $true`.",
    explanation: "In der IHK-Klausur wird fast immer verlangt: 1) Einlesen mit `Import-Csv`, 2) Iteration mit `foreach`, 3) Anlegen mit `New-ADUser` unter Angabe von `-Name`, `-SamAccountName`, `-UserPrincipalName`, `-AccountPassword` (als SecureString konvertiert) und `-Enabled $true`.",
    lines: [
      { text: "# 1. CSV-Datei der Personalabteilung einlesen", type: "comment" },
      { text: "$users = ", type: "code", blank: "Import-Csv", suffix: " -Path \"C:\\HR\\mitarbeiter.csv\" -Delimiter \";\"" },
      { text: "", type: "empty" },
      { text: "# 2. Schleife über alle eingelesenen Mitarbeiter", type: "comment" },
      { text: "", type: "code", blank: "foreach", suffix: " ($u in $users) {" },
      { text: "    $secPassword = ConvertTo-SecureString $u.InitialPass -AsPlainText -Force", type: "code" },
      { text: "", type: "empty" },
      { text: "    # 3. Benutzerkonto im Active Directory erstellen", type: "comment" },
      { text: "    ", type: "code", blank: "New-ADUser", suffix: " `" },
      { text: "        -Name \"$($u.Vorname) $($u.Nachname)\" `", type: "code" },
      { text: "        -SamAccountName $u.Username `", type: "code" },
      { text: "        -UserPrincipalName \"$($u.Username)@firma.local\" `", type: "code" },
      { text: "        -Path $u.OU `", type: "code" },
      { text: "        -AccountPassword $secPassword `", type: "code" },
      { text: "        -Enabled ", type: "code", blank: "$true", suffix: "" },
      { text: "}", type: "code" }
    ],
    terminalOutput: [
      "[INFO] Lese C:\\HR\\mitarbeiter.csv ein (Delimiter: ';')...",
      "[OK] 3 Datensätze gefunden.",
      "[AD] Erstelle Konto: 'Max Mustermann' (OU=Vertrieb,DC=firma,DC=local)",
      "[AD] Erstelle Konto: 'Erika Musterfrau' (OU=IT,DC=firma,DC=local)",
      "[AD] Erstelle Konto: 'Thomas Test' (OU=Einkauf,DC=firma,DC=local)",
      "[SUCCESS] Alle 3 AD-Benutzer wurden erfolgreich initialisiert und aktiviert."
    ]
  },

  // ------------------------------------------------------------
  // 2. PowerShell: Dienst-Watchdog & Auto-Restart
  // ------------------------------------------------------------
  {
    id: "ps-02",
    category: "powershell",
    badge: "PowerShell · Systemdienst",
    title: "Dienst-Überwachung & automatischer Neustart",
    difficulty: "Einfach",
    points: 10,
    scenario: "Der Druckspooler-Dienst (`Spooler`) stürzt gelegentlich ab. Vervollständige das Überwachungsskript, das den Status prüft und den Dienst neu startet, falls er nicht läuft.",
    hint: "Dienst abfragen mit `Get-Service`, Vergleichsoperator `-ne` (not equal), Dienst neu starten mit `Start-Service` oder `Restart-Service`.",
    explanation: "PowerShell verwendet als Vergleichsoperatoren Text-Kürzel (`-eq`, `-ne`, `-gt`, `-lt`) und KEINE C-Style Operatoren wie `!=` oder `==`. Zum Starten/Neustarten wird `Start-Service` bzw. `Restart-Service` genutzt.",
    lines: [
      { text: "$serviceName = \"Spooler\"", type: "code" },
      { text: "# Status des Dienstes abrufen", type: "comment" },
      { text: "$svc = ", type: "code", blank: "Get-Service", suffix: " -Name $serviceName" },
      { text: "", type: "empty" },
      { text: "# Prüfung: Läuft der Dienst gerade?", type: "comment" },
      { text: "if ($svc.Status ", type: "code", blank: "-ne", suffix: " \"Running\") {" },
      { text: "    Write-Warning \"Dienst $serviceName steht! Starte neu...\"", type: "code" },
      { text: "    ", type: "code", blank: "Restart-Service", suffix: " -Name $serviceName -Force" },
      { text: "} else {", type: "code" },
      { text: "    Write-Host \"Dienst $serviceName läuft ordnungsgemäß.\" -ForegroundColor Green", type: "code" },
      { text: "}", type: "code" }
    ],
    terminalOutput: [
      "[WATCHDOG] Prüfe Status von Dienst 'Spooler'...",
      "WARNUNG: Dienst Spooler steht! Starte neu...",
      "[SYSTEM] Restart-Service -Name Spooler -Force ausgeführt.",
      "[OK] Neuer Status: Running (PID: 2844)."
    ]
  },

  // ------------------------------------------------------------
  // 3. PowerShell: Logfile-Archivierung & Löschung nach Alter
  // ------------------------------------------------------------
  {
    id: "ps-03",
    category: "powershell",
    badge: "PowerShell · Maintenance",
    title: "Dateibereinigung: Logfiles älter als 30 Tage löschen",
    difficulty: "Mittel",
    points: 15,
    scenario: "Zur Einhaltung von Speicherplatzgrenzen müssen alle `.log`-Dateien im Verzeichnis `D:\\AppLogs`, die älter als 30 Tage sind, automatisch entfernt werden.",
    hint: "Dateien auflisten: `Get-ChildItem`, Filtern über Pipeline: `Where-Object`, Datum subtrahieren: `AddDays(-30)`, Löschen: `Remove-Item`.",
    explanation: "Die Pipeline (`|`) reicht Dateiobjekte weiter. Über `$_.LastWriteTime` prüft `Where-Object` das Änderungsdatum gegen das aktuelle Datum minus 30 Tage (`(Get-Date).AddDays(-30)`). `Remove-Item -Force` löscht die betroffenen Dateien.",
    lines: [
      { text: "$logPath = \"D:\\AppLogs\"", type: "code" },
      { text: "$limitDate = (Get-Date).", type: "code", blank: "AddDays", suffix: "(-30)" },
      { text: "", type: "empty" },
      { text: "# Dateien rekursiv ermitteln und filtern", type: "comment" },
      { text: "", type: "code", blank: "Get-ChildItem", suffix: " -Path $logPath -Filter \"*.log\" -Recurse |" },
      { text: "    ", type: "code", blank: "Where-Object", suffix: " { $_.LastWriteTime -lt $limitDate } |" },
      { text: "    ", type: "code", blank: "Remove-Item", suffix: " -Force -Verbose" }
    ],
    terminalOutput: [
      "[SCAN] Durchsuche D:\\AppLogs nach *.log älter als 30 Tage...",
      "AUSFÜHRLICH: Ausführen des Vorgangs 'Datei entfernen' für 'D:\\AppLogs\\2026-06-01.log'.",
      "AUSFÜHRLICH: Ausführen des Vorgangs 'Datei entfernen' für 'D:\\AppLogs\\2026-06-15.log'.",
      "[INFO] 2 veraltete Logdateien (42 MB) erfolgreich gelöscht."
    ]
  },

  // ------------------------------------------------------------
  // 4. PowerShell: Bug-Hunt (Fehlersuche im Berechtigungsskript)
  // ------------------------------------------------------------
  {
    id: "ps-04",
    category: "powershell",
    badge: "PowerShell · Fehlersuche",
    title: "Bug Hunt: Falscher Vergleichsoperator & String-Quotes",
    difficulty: "Mittel",
    points: 15,
    scenario: "Ein Kollege hat ein Skript geschrieben, um Administratoren zu finden. Das Skript wirft Fehler oder liefert leere Ergebnisse. Finde die fehlerhaften Stellen!",
    hint: "Achte auf den Vergleichsoperator in der Bedingung (`-eq` statt `==`) und die Pipeline-Variable `$_`.",
    explanation: "Häufige IHK-Falle: In PowerShell existiert kein `==` (das führt zu Syntaxfehlern; korrekt ist `-eq`). Zudem muss in Pipeline-Blöcken mit `$_` (oder `$PSItem`) auf das aktuelle Objekt zugegriffen werden.",
    lines: [
      { text: "$groupName = \"Domänen-Admins\"", type: "code" },
      { text: "$members = Get-ADGroupMember -Identity $groupName", type: "code" },
      { text: "", type: "empty" },
      { text: "# Fehlerzeile 1: C-Style Operator '==' ist in PowerShell ungültig", type: "comment" },
      { text: "$members | Where-Object { ", type: "code", blank: "$_.objectClass", suffix: " -eq \"user\" } |" },
      { text: "    Select-Object Name, SamAccountName |" },
      { text: "    ", type: "code", blank: "Export-Csv", suffix: " -Path \"C:\\Audits\\Admins.csv\" -NoTypeInformation" }
    ],
    terminalOutput: [
      "[AUDIT] Frage Mitglieder der Gruppe 'Domänen-Admins' ab...",
      "[FILTER] Filtere nach objectClass -eq 'user'...",
      "[EXPORT] Exportiere 4 Administratoren nach C:\\Audits\\Admins.csv.",
      "[OK] Datei ohne Type-Information-Header gespeichert."
    ]
  },

  // ------------------------------------------------------------
  // 5. Bash: Logfile-Archivierung mit find & tar (IHK Standard)
  // ------------------------------------------------------------
  {
    id: "bash-01",
    category: "bash",
    badge: "Bash · Linux Klassiker",
    title: "Logfile-Archivierung mit find & tar komprimieren",
    difficulty: "Mittel",
    points: 15,
    scenario: "Auf einem Linux-Server (Debian/Ubuntu) sollen alle `.log`-Dateien unter `/var/log`, die älter als 7 Tage sind, in ein komprimiertes tar.gz-Archiv gepackt und anschließend gelöscht werden.",
    hint: "Shebang: `#!/bin/bash`, Alter filtern: `-mtime +7`, Archiv packen mit `tar -czf`.",
    explanation: "In Bash-Prüfungen verlangt die IHK meist: 1) Shebang `#!/bin/bash`, 2) Datumsgrenzen mit `find -mtime +7`, 3) gzip-Kompression mit `tar -czf archiv.tar.gz`.",
    lines: [
      { text: "", type: "code", blank: "#!/bin/bash", suffix: "" },
      { text: "BACKUP_DIR=\"/backup/logs\"", type: "code" },
      { text: "TIMESTAMP=$(date +\"%Y%m%d\")", type: "code" },
      { text: "ARCHIVE=\"$BACKUP_DIR/logs_$TIMESTAMP.tar.gz\"", type: "code" },
      { text: "", type: "empty" },
      { text: "# Verzeichnis anlegen, falls noch nicht vorhanden", type: "comment" },
      { text: "mkdir -p \"$BACKUP_DIR\"", type: "code" },
      { text: "", type: "empty" },
      { text: "# Dateien suchen, die älter als 7 Tage sind, und archivieren", type: "comment" },
      { text: "", type: "code", blank: "find", suffix: " /var/log -type f -name \"*.log\" -mtime +7 | \\" },
      { text: "    xargs ", type: "code", blank: "tar", suffix: " -czf \"$ARCHIVE\"" },
      { text: "", type: "empty" },
      { text: "# Erfolgsmeldung ausgeben", type: "comment" },
      { text: "echo \"Archivierung abgeschlossen: $ARCHIVE\"", type: "code" }
    ],
    terminalOutput: [
      "root@srv01:~# ./archive_logs.sh",
      "[FIND] Suche *.log mit mtime > 7 Tagen...",
      "[TAR] Packe 14 Dateien nach /backup/logs/logs_20260918.tar.gz (GZIP-Komprimiert)...",
      "Archivierung abgeschlossen: /backup/logs/logs_20260918.tar.gz [2.4 MB]"
    ]
  },

  // ------------------------------------------------------------
  // 6. Bash: Benutzeranlage aus CSV unter Linux
  // ------------------------------------------------------------
  {
    id: "bash-02",
    category: "bash",
    badge: "Bash · Benutzerverwaltung",
    title: "Massenanlage von Linux-Systembenutzern per CSV",
    difficulty: "Mittel",
    points: 15,
    scenario: "Eine Datei `users.csv` enthält Zeilen im Format `username,group,shell`. Ergänze die Schleife, um jeden Benutzer automatisiert mit Home-Verzeichnis anzulegen.",
    hint: "CSV zeilenweise lesen mit `while IFS=',' read -r`, Benutzer anlegen mit `useradd -m`.",
    explanation: "`while IFS=',' read -r` teilt jede CSV-Zeile an den Kommas in Variablen auf. `useradd -m` legt das Home-Verzeichnis `/home/<username>` automatisch an, `-g` bestimmt die Primärgruppe.",
    lines: [
      { text: "#!/bin/bash", type: "code" },
      { text: "CSV_FILE=\"/root/users.csv\"", type: "code" },
      { text: "", type: "empty" },
      { text: "# Zeilenweise durch die CSV iterieren", type: "comment" },
      { text: "", type: "code", blank: "while", suffix: " IFS=',' read -r username group shell; do" },
      { text: "    # Überspringe Kopfzeile", type: "comment" },
      { text: "    [[ \"$username\" == \"username\" ]] && continue", type: "code" },
      { text: "", type: "empty" },
      { text: "    # Benutzer mit Home-Verzeichnis (-m) und Gruppe anlegen", type: "comment" },
      { text: "    ", type: "code", blank: "useradd", suffix: " -m -g \"$group\" -s \"$shell\" \"$username\"" },
      { text: "    echo \"Benutzer $username angelegt.\"", type: "code" },
      { text: "", type: "code", blank: "done", suffix: " < \"$CSV_FILE\"" }
    ],
    terminalOutput: [
      "root@srv01:~# ./create_users.sh",
      "Benutzer d.mueller angelegt. (Home: /home/d.mueller, Shell: /bin/bash)",
      "Benutzer s.schmidt angelegt. (Home: /home/s.schmidt, Shell: /bin/bash)",
      "[OK] 2 Benutzer erfolgreich im Linux-System angelegt."
    ]
  },

  // ------------------------------------------------------------
  // 7. Bash: Ping-Monitoring & Exit-Code ($?)
  // ------------------------------------------------------------
  {
    id: "bash-03",
    category: "bash",
    badge: "Bash · Netzwerk-Watchdog",
    title: "Host-Erreichbarkeit prüfen & Exit-Code ($?) auswerten",
    difficulty: "Einfach",
    points: 10,
    scenario: "Schreibe ein Skript, das per Ping prüft, ob der Gateway-Server erreichbar ist. Falls nicht, soll eine Warnung ausgegeben werden.",
    hint: "Ping mit 1 Paket: `ping -c 1`, Exit-Code der vorherigen Operation: `$?`, Bedingung abschließen mit `fi`.",
    explanation: "In Linux liefert erfolgreicher Befehl den Exit-Code `0`. Bei Fehler (z.B. Host unerreichbar) ist `$?` ungleich 0 (`-ne 0`). In Bash muss jede `if`-Bedingung mit `fi` beendet werden.",
    lines: [
      { text: "#!/bin/bash", type: "code" },
      { text: "TARGET=\"192.168.1.1\"", type: "code" },
      { text: "", type: "empty" },
      { text: "# Sende genau 1 Ping-Paket ohne Bildschirmausgabe", type: "comment" },
      { text: "ping -c 1 \"$TARGET\" > /dev/null 2>&1", type: "code" },
      { text: "", type: "empty" },
      { text: "# Exit-Code prüfen: 0 = Erfolg, != 0 = Fehler", type: "comment" },
      { text: "if [ ", type: "code", blank: "$?", suffix: " -ne 0 ]; then" },
      { text: "    echo \"[ALARM] Gateway $TARGET ist NICHT erreichbar!\"", type: "code" },
      { text: "    exit 1", type: "code" },
      { text: "else", type: "code" },
      { text: "    echo \"[OK] Gateway $TARGET antwortet normal.\"", type: "code" },
      { text: "", type: "code", blank: "fi", suffix: "" }
    ],
    terminalOutput: [
      "root@srv01:~# ./check_gateway.sh",
      "[PING] Sende ICMP Echo Request an 192.168.1.1...",
      "[OK] Gateway 192.168.1.1 antwortet normal. (Exit-Code: 0)"
    ]
  },

  // ------------------------------------------------------------
  // 8. Bash: Bug-Hunt (Fehlersuche im Bash-Backup)
  // ------------------------------------------------------------
  {
    id: "bash-04",
    category: "bash",
    badge: "Bash · Fehlersuche",
    title: "Bug Hunt: Fehlendes 'then', Quoting & Test-Klammern",
    difficulty: "Mittel",
    points: 15,
    scenario: "Das Skript bricht mit `syntax error near unexpected token` ab. Finde und behebe die Fehler in der Verzeichnis-Prüfung!",
    hint: "Bei `if [[ ... ]]` gehört zwingend ein `then` dazu. Verzeichnis-Test: `-d`.",
    explanation: "Häufige IHK-Syntaxfallen in Bash: Vergessenes `then` hinter der Bedingung, Verwechselung von `-f` (normale Datei) und `-d` (Verzeichnis) sowie fehlende Anführungszeichen um Variablen mit Leerzeichen.",
    lines: [
      { text: "#!/bin/bash", type: "code" },
      { text: "DEST_DIR=\"/mnt/backup\"", type: "code" },
      { text: "", type: "empty" },
      { text: "# Fehlerzeile: Nach der Bedingung fehlt das Schlüsselwort 'then'", type: "comment" },
      { text: "if [[ ", type: "code", blank: "-d", suffix: " \"$DEST_DIR\" ]]; " },
      { text: "    ", type: "code", blank: "then", suffix: "" },
      { text: "    echo \"Backup-Verzeichnis existiert. Starte Sync...\"", type: "code" },
      { text: "else", type: "code" },
      { text: "    echo \"FEHLER: $DEST_DIR nicht gemountet!\"", type: "code" },
      { text: "    exit 1", type: "code" },
      { text: "fi", type: "code" }
    ],
    terminalOutput: [
      "root@srv01:~# ./backup_check.sh",
      "[CHECK] Teste ob /mnt/backup ein Verzeichnis ist (-d)...",
      "Backup-Verzeichnis existiert. Starte Sync...",
      "[SUCCESS] Vorbereitung abgeschlossen."
    ]
  },

  // ------------------------------------------------------------
  // 9. Ansible / YAML: Webserver-Provisionierung (Modern AP2)
  // ------------------------------------------------------------
  {
    id: "yaml-01",
    category: "ansible",
    badge: "Ansible · Configuration Management",
    title: "Ansible Playbook: Nginx Webserver einrichten",
    difficulty: "Mittel",
    points: 15,
    scenario: "In modernen IHK-Prüfungen werden zunehmend Ansible-Playbooks abgefragt. Ergänze die Lücken für die Zielhosts, Root-Rechte und das Paketmanagement.",
    hint: "Zielgruppe: `hosts:`, Root-Rechte: `become: true`, Aufgaben-Liste: `tasks:`.",
    explanation: "Ein Ansible Playbook strukturiert sich immer in: `hosts` (Zielsysteme), `become` (Rechteeskalation via sudo), und `tasks` (Liste von Modulen wie `apt`, `service`, `copy`).",
    lines: [
      { text: "---", type: "code" },
      { text: "- name: Webserver vollautomatisiert bereitstellen", type: "code" },
      { text: "  ", type: "code", blank: "hosts", suffix: ": webservers" },
      { text: "  ", type: "code", blank: "become", suffix: ": true" },
      { text: "  ", type: "code", blank: "tasks", suffix: ":" },
      { text: "    - name: Nginx Webserver installieren", type: "code" },
      { text: "      apt:", type: "code" },
      { text: "        name: nginx", type: "code" },
      { text: "        state: present", type: "code" },
      { text: "", type: "empty" },
      { text: "    - name: Nginx-Dienst starten und beim Boot aktivieren", type: "code" },
      { text: "      service:", type: "code" },
      { text: "        name: nginx", type: "code" },
      { text: "        state: started", type: "code" },
      { text: "        enabled: true", type: "code" }
    ],
    terminalOutput: [
      "ansible-playbook -i inventory.ini deploy-web.yml",
      "PLAY [Webserver vollautomatisiert bereitstellen] *************************",
      "TASK [Gathering Facts] **************************************************",
      "ok: [web01.firma.local]",
      "TASK [Nginx Webserver installieren] *************************************",
      "changed: [web01.firma.local]",
      "TASK [Nginx-Dienst starten und beim Boot aktivieren] ********************",
      "ok: [web01.firma.local]",
      "PLAY RECAP **************************************************************",
      "web01.firma.local : ok=3 changed=1 unreachable=0 failed=0"
    ]
  },

  // ------------------------------------------------------------
  // 10. Ansible / YAML: Konfigurationsdatei ausrollen & Handler
  // ------------------------------------------------------------
  {
    id: "yaml-02",
    category: "ansible",
    badge: "Ansible · Handler & Template",
    title: "Konfigurationsdatei übertragen & Dienst neustarten",
    difficulty: "Mittel",
    points: 15,
    scenario: "Eine neue Konfigurationsdatei soll auf alle Webserver kopiert werden. Ändert sich die Datei, muss Nginx über einen Handler (`notify`) neu gestartet werden.",
    hint: "Dateien kopieren mit `copy:`, Benachrichtigung auslösen mit `notify:`, Handler definieren unter `handlers:`.",
    explanation: "Handler in Ansible laufen nur dann an, wenn ein Task den Status `changed` meldet. Dies wird über `notify: <Handler-Name>` gesteuert.",
    lines: [
      { text: "---", type: "code" },
      { text: "- name: Konfiguration verteilen", type: "code" },
      { text: "  hosts: webservers", type: "code" },
      { text: "  become: true", type: "code" },
      { text: "  tasks:", type: "code" },
      { text: "    - name: Kopiere nginx.conf", type: "code" },
      { text: "      ", type: "code", blank: "copy", suffix: ":" },
      { text: "        src: files/nginx.conf", type: "code" },
      { text: "        dest: /etc/nginx/nginx.conf", type: "code" },
      { text: "        mode: '0644'", type: "code" },
      { text: "      ", type: "code", blank: "notify", suffix: ": restart nginx" },
      { text: "", type: "empty" },
      { text: "  ", type: "code", blank: "handlers", suffix: ":" },
      { text: "    - name: restart nginx", type: "code" },
      { text: "      service:", type: "code" },
      { text: "        name: nginx", type: "code" },
      { text: "        state: restarted", type: "code" }
    ],
    terminalOutput: [
      "ansible-playbook -i hosts deploy-conf.yml",
      "TASK [Kopiere nginx.conf] ***********************************************",
      "changed: [web01.firma.local] => (MD5-Checksum neu)",
      "RUNNING HANDLER [restart nginx] *****************************************",
      "changed: [web01.firma.local] => (service nginx restarted)",
      "[OK] Konfiguration erfolgreich aktiv."
    ]
  }
];

// ======================================================================
// App Controller für Skript-Labor
// ======================================================================
const SkripteApp = {
  currentFilter: "all",
  activeTaskId: "ps-01",
  solvedTasks: new Set(),

  init() {
    // Load solved tasks from LocalStorage
    try {
      const saved = localStorage.getItem("ap2_fisi_skripte_solved");
      if (saved) {
        this.solvedTasks = new Set(JSON.parse(saved));
      }
    } catch (e) {}

    this.renderTaskList();
    this.loadTask(this.activeTaskId);
    this.updateProgress();

    if (window.lucide) lucide.createIcons();
  },

  setFilter(cat) {
    this.currentFilter = cat;
    document.querySelectorAll(".cat-tab-btn").forEach((btn) => {
      if (btn.dataset.cat === cat) {
        btn.classList.add("bg-emerald-600/15", "text-emerald-400", "border-emerald-500/40");
        btn.classList.remove("text-dark-muted", "border-dark-border");
      } else {
        btn.classList.remove("bg-emerald-600/15", "text-emerald-400", "border-emerald-500/40");
        btn.classList.add("text-dark-muted", "border-dark-border");
      }
    });

    this.renderTaskList();
    // Wenn aktive Aufgabe nicht im Filter ist, erste sichtbare wählen
    const visible = SCRIPT_TASKS.filter((t) => cat === "all" || t.category === cat);
    if (visible.length > 0 && !visible.some((t) => t.id === this.activeTaskId)) {
      this.loadTask(visible[0].id);
    }
  },

  renderTaskList() {
    const listEl = document.getElementById("taskNavList");
    if (!listEl) return;

    const visible = SCRIPT_TASKS.filter(
      (t) => this.currentFilter === "all" || t.category === this.currentFilter
    );

    listEl.innerHTML = visible
      .map((t) => {
        const isSolved = this.solvedTasks.has(t.id);
        const isActive = t.id === this.activeTaskId;
        const iconColor =
          t.category === "powershell"
            ? "text-blue-400"
            : t.category === "bash"
            ? "text-emerald-400"
            : "text-amber-400";

        return `
          <button
            onclick="SkripteApp.loadTask('${t.id}')"
            class="w-full text-left p-3 rounded-xl border transition-all flex items-start justify-between gap-2.5 ${
              isActive
                ? "bg-dark-card-hover border-emerald-500/50 shadow-sm"
                : "bg-dark-card border-dark-border hover:border-dark-strong"
            }"
          >
            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-2 mb-1">
                <span class="font-mono text-[9px] uppercase font-bold px-1.5 py-0.2 rounded border ${
                  t.category === "powershell"
                    ? "bg-blue-950/40 border-blue-500/30 text-blue-400"
                    : t.category === "bash"
                    ? "bg-emerald-950/40 border-emerald-500/30 text-emerald-400"
                    : "bg-amber-950/40 border-amber-500/30 text-amber-400"
                }">
                  ${t.category.toUpperCase()}
                </span>
                <span class="text-[10px] font-mono text-dark-dim">${t.difficulty}</span>
              </div>
              <h4 class="text-xs font-semibold text-white truncate leading-snug">
                ${t.title}
              </h4>
            </div>
            <div class="shrink-0 pt-0.5">
              ${
                isSolved
                  ? `<span class="w-5 h-5 rounded-full bg-emerald-600/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold border border-emerald-500/40"><i data-lucide="check" class="w-3 h-3"></i></span>`
                  : `<span class="w-2 h-2 rounded-full bg-dark-border mt-1.5 block"></span>`
              }
            </div>
          </button>
        `;
      })
      .join("");

    if (window.lucide) lucide.createIcons();
  },

  loadTask(id) {
    this.activeTaskId = id;
    const task = SCRIPT_TASKS.find((t) => t.id === id);
    if (!task) return;

    // Reset views
    document.getElementById("taskBadge").textContent = task.badge;
    document.getElementById("taskTitle").textContent = task.title;
    document.getElementById("taskScenario").textContent = task.scenario;
    document.getElementById("taskHintBox").classList.add("hidden");
    document.getElementById("taskHintText").textContent = task.hint;
    document.getElementById("taskExplanation").textContent = task.explanation;
    document.getElementById("explanationCard").classList.add("hidden");
    document.getElementById("terminalCard").classList.add("hidden");
    document.getElementById("terminalOutput").innerHTML = "";

    const statusEl = document.getElementById("taskStatusBadge");
    if (this.solvedTasks.has(task.id)) {
      statusEl.className = "kbd-cap text-[10px] text-emerald-400 border-emerald-500/30 bg-emerald-950/40";
      statusEl.textContent = "GELÖST";
    } else {
      statusEl.className = "kbd-cap text-[10px] text-amber-400 border-amber-500/30 bg-amber-950/40";
      statusEl.textContent = "OFFEN";
    }

    // Render code with input blanks
    const codeEl = document.getElementById("codeEditor");
    let blankIndex = 0;

    codeEl.innerHTML = task.lines
      .map((line, idx) => {
        const lineNum = `<span class="inline-block w-6 text-right select-none text-dark-dim mr-3 font-mono text-[11px]">${idx + 1}</span>`;

        if (line.type === "empty") {
          return `<div class="leading-relaxed">${lineNum}</div>`;
        }

        if (line.type === "comment") {
          return `<div class="leading-relaxed text-dark-dim italic font-mono text-xs">${lineNum}<span>${this.escapeHtml(
            line.text
          )}</span></div>`;
        }

        if (line.blank !== undefined) {
          const curIndex = blankIndex++;
          const targetAnswer = line.blank;
          const inputId = `blank_${curIndex}`;

          return `
            <div class="leading-relaxed font-mono text-xs text-zinc-300 flex items-center flex-wrap py-0.5">
              ${lineNum}
              <span>${this.escapeHtml(line.text)}</span>
              <input
                type="text"
                id="${inputId}"
                data-expected="${this.escapeHtml(targetAnswer)}"
                placeholder="[ ? ]"
                autocomplete="off"
                autocorrect="off"
                autocapitalize="off"
                spellcheck="false"
                class="script-blank-input mx-1.5 px-2 py-0.5 rounded border border-dark-border bg-dark-bg text-emerald-400 font-mono text-xs font-semibold focus:outline-none focus:border-emerald-500 transition-all text-center min-w-[110px]"
                onkeydown="if(event.key==='Enter') SkripteApp.checkSolution()"
              />
              <span>${this.escapeHtml(line.suffix || "")}</span>
            </div>
          `;
        }

        return `<div class="leading-relaxed font-mono text-xs text-zinc-300">${lineNum}<span>${this.escapeHtml(
          line.text
        )}</span></div>`;
      })
      .join("");

    this.renderTaskList();
    if (window.lucide) lucide.createIcons();
  },

  checkSolution() {
    const task = SCRIPT_TASKS.find((t) => t.id === this.activeTaskId);
    if (!task) return;

    const inputs = document.querySelectorAll(".script-blank-input");
    let allCorrect = true;

    inputs.forEach((input) => {
      const expected = input.dataset.expected.trim().toLowerCase();
      const actual = input.value.trim().toLowerCase();

      if (actual === expected) {
        input.classList.remove("border-red-500", "bg-red-950/20", "text-red-400");
        input.classList.add("border-emerald-500", "bg-emerald-950/30", "text-emerald-400");
      } else {
        allCorrect = false;
        input.classList.remove("border-emerald-500", "bg-emerald-950/30", "text-emerald-400");
        input.classList.add("border-red-500", "bg-red-950/20", "text-red-400");
      }
    });

    const resultBanner = document.getElementById("validationBanner");
    resultBanner.classList.remove("hidden");

    if (allCorrect) {
      resultBanner.className =
        "p-4 rounded-xl border border-emerald-500/40 bg-emerald-950/20 text-emerald-400 text-xs flex items-center justify-between gap-3";
      resultBanner.innerHTML = `
        <div class="flex items-center gap-2">
          <i data-lucide="check-circle" class="w-4 h-4 shrink-0 text-emerald-400"></i>
          <span><strong>Exzellent!</strong> Alle Befehle und Parameter sind IHK-konform gelöst.</span>
        </div>
        <button
          onclick="SkripteApp.runTerminalSimulation()"
          class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
        >
          <i data-lucide="play" class="w-3.5 h-3.5 fill-white"></i> Terminal ausführen
        </button>
      `;

      this.solvedTasks.add(task.id);
      try {
        localStorage.setItem(
          "ap2_fisi_skripte_solved",
          JSON.stringify(Array.from(this.solvedTasks))
        );
      } catch (e) {}

      document.getElementById("explanationCard").classList.remove("hidden");
      this.updateProgress();
      this.renderTaskList();

      if (typeof confetti === "function") {
        confetti({ particleCount: 35, spread: 60, origin: { y: 0.8 } });
      }
    } else {
      resultBanner.className =
        "p-4 rounded-xl border border-red-500/40 bg-red-950/20 text-red-400 text-xs flex items-center justify-between gap-3";
      resultBanner.innerHTML = `
        <div class="flex items-center gap-2">
          <i data-lucide="alert-circle" class="w-4 h-4 shrink-0 text-red-400"></i>
          <span>Mindestens eine Lücke enthält noch einen Syntax- oder Benennungsfehler. Prüfe die rot markierten Felder.</span>
        </div>
        <button
          onclick="SkripteApp.toggleHint()"
          class="px-2.5 py-1 rounded border border-red-500/30 hover:bg-red-950/40 text-red-300 font-mono text-xs transition-colors"
        >
          Tipp ansehen
        </button>
      `;
    }

    if (window.lucide) lucide.createIcons();
  },

  showSolution() {
    const inputs = document.querySelectorAll(".script-blank-input");
    inputs.forEach((input) => {
      input.value = input.dataset.expected;
      input.classList.remove("border-red-500", "bg-red-950/20", "text-red-400");
      input.classList.add("border-amber-500", "bg-amber-950/20", "text-amber-400");
    });
    document.getElementById("explanationCard").classList.remove("hidden");
    document.getElementById("validationBanner").classList.add("hidden");
  },

  toggleHint() {
    const hintBox = document.getElementById("taskHintBox");
    hintBox.classList.toggle("hidden");
  },

  runTerminalSimulation() {
    const task = SCRIPT_TASKS.find((t) => t.id === this.activeTaskId);
    if (!task) return;

    const termCard = document.getElementById("terminalCard");
    const termOut = document.getElementById("terminalOutput");
    termCard.classList.remove("hidden");
    termOut.innerHTML = "";

    task.terminalOutput.forEach((line, idx) => {
      setTimeout(() => {
        const row = document.createElement("div");
        row.className = "font-mono text-xs leading-relaxed";
        if (line.startsWith("[OK]") || line.startsWith("[SUCCESS]")) {
          row.className += " text-emerald-400";
        } else if (line.startsWith("[INFO]") || line.startsWith("[AD]")) {
          row.className += " text-sky-400";
        } else if (line.startsWith("WARNUNG") || line.startsWith("[ALARM]")) {
          row.className += " text-amber-400";
        } else if (line.startsWith("root@") || line.startsWith("ansible-playbook")) {
          row.className += " text-white font-bold";
        } else {
          row.className += " text-zinc-400";
        }
        row.textContent = line;
        termOut.appendChild(row);
        termOut.scrollTop = termOut.scrollHeight;
      }, idx * 180);
    });

    termCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  },

  updateProgress() {
    const total = SCRIPT_TASKS.length;
    const solved = this.solvedTasks.size;
    const pct = Math.round((solved / total) * 100);

    const countEl = document.getElementById("solvedCountText");
    if (countEl) countEl.textContent = `${solved} / ${total}`;

    const barEl = document.getElementById("skripteProgressBar");
    if (barEl) barEl.style.width = `${pct}%`;
  },

  escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
};

// Start
document.addEventListener("DOMContentLoaded", () => {
  SkripteApp.init();
});
