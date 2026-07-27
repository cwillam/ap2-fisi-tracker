// Global states
let currentIpv4 = {};
let currentIpv6 = {};
let currentVlsm = {};
let ipv4Streak = 0;
let ipv6Streak = 0;
let vlsmStreak = 0;

// IPv4 Helper Functions
function intToIp(value) {
	return [
		(value >>> 24) & 255,
		(value >>> 16) & 255,
		(value >>> 8) & 255,
		value & 255
	].join('.');
}

function ipToInt(ip) {
	return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0) >>> 0;
}

function intToBinaryStr(value) {
	return (value >>> 0).toString(2).padStart(32, '0');
}

function formatBinaryWithDot(binStr) {
	return [
		binStr.slice(0, 8),
		binStr.slice(8, 16),
		binStr.slice(16, 24),
		binStr.slice(24, 32)
	].join('.');
}

function generateIPv4() {
	// Clear panel & feedback
	const solutionPanel = document.getElementById("solutionPanel");
	const btnSolution = document.getElementById("btnSolution");
	if (solutionPanel) solutionPanel.classList.add("hidden");
	if (btnSolution) btnSolution.classList.add("hidden");
	clearIPv4Feedback();

	// Generate random subnet sizes
	const prefixes = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
	const cidr = prefixes[Math.floor(Math.random() * prefixes.length)];
	
	// Generate random host IP address
	let rawIp = 0;
	if (cidr >= 24) {
		rawIp = ipToInt(`192.168.${Math.floor(Math.random() * 254) + 1}.${Math.floor(Math.random() * 254) + 1}`);
	} else if (cidr >= 16) {
		rawIp = ipToInt(`172.${Math.floor(Math.random() * 16) + 16}.${Math.floor(Math.random() * 254) + 1}.${Math.floor(Math.random() * 254) + 1}`);
	} else {
		rawIp = ipToInt(`${Math.floor(Math.random() * 125) + 10}.${Math.floor(Math.random() * 254) + 1}.${Math.floor(Math.random() * 254) + 1}.${Math.floor(Math.random() * 254) + 1}`);
	}

	// Calculate Subnet Math
	const maskBinary = ~((1 << (32 - cidr)) - 1) >>> 0;
	const networkBinary = (rawIp & maskBinary) >>> 0;
	const wildcardBinary = ~maskBinary >>> 0;
	const broadcastBinary = (rawIp | wildcardBinary) >>> 0;
	const usableHosts = Math.pow(2, 32 - cidr) - 2;

	currentIpv4 = {
		ip: intToIp(rawIp),
		cidr: cidr,
		mask: intToIp(maskBinary),
		network: intToIp(networkBinary),
		broadcast: intToIp(broadcastBinary),
		firstIp: intToIp(networkBinary + 1),
		lastIp: intToIp(broadcastBinary - 1),
		hosts: usableHosts,
		binary: {
			ip: intToBinaryStr(rawIp),
			mask: intToBinaryStr(maskBinary),
			network: intToBinaryStr(networkBinary)
		}
	};

	const targetEl = document.getElementById("ipv4Target");
	if (targetEl) {
		targetEl.innerText = `${currentIpv4.ip}/${cidr}`;
	}
}

function clearIPv4Feedback() {
	const fields = ["Mask", "Net", "Bcast", "Hosts"];
	fields.forEach(f => {
		const input = document.getElementById("ans" + f);
		const feedback = document.getElementById("feedback" + f);
		if (input) {
			input.value = "";
			input.className = "w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-sm text-white focus:border-dark-accent outline-none font-mono";
		}
		if (feedback) {
			feedback.innerText = "";
		}
	});
}

// IPv6 compression logic
function generateIPv6() {
	const solutionPanelIpv6 = document.getElementById("solutionPanelIpv6");
	const ansIpv6 = document.getElementById("ansIpv6");
	const feedbackIpv6 = document.getElementById("feedbackIpv6");

	if (solutionPanelIpv6) solutionPanelIpv6.classList.add("hidden");
	if (ansIpv6) {
		ansIpv6.value = "";
		ansIpv6.className = "w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-sm text-white focus:border-dark-accent outline-none font-mono";
	}
	if (feedbackIpv6) feedbackIpv6.innerText = "";

	const hextetts = [];
	for (let i = 0; i < 8; i++) {
		// Generate blocks of zeros or standard hex values randomly
		const rand = Math.random();
		if (rand < 0.25) {
			hextetts.push("0000");
		} else if (rand < 0.45) {
			hextetts.push("000" + Math.floor(Math.random() * 9));
		} else {
			hextetts.push(Math.floor(Math.random() * 65536).toString(16).padStart(4, '0'));
		}
	}

	const fullIpv6 = hextetts.join(":");
	currentIpv6 = {
		full: fullIpv6,
		compressed: compressIPv6(fullIpv6)
	};

	const targetEl = document.getElementById("ipv6Target");
	if (targetEl) {
		targetEl.innerText = fullIpv6;
	}
}

function compressIPv6(ip) {
	// 1. Remove leading zeros in blocks
	let blocks = ip.split(':').map(block => {
		let cleaned = block.replace(/^0+/, '');
		return cleaned === '' ? '0' : cleaned;
	});

	// 2. Find longest sequence of '0' blocks
	let maxZeroCount = 0;
	let maxZeroIndex = -1;
	let currentZeroCount = 0;
	let currentZeroIndex = -1;

	for (let i = 0; i < blocks.length; i++) {
		if (blocks[i] === '0') {
			if (currentZeroIndex === -1) {
				currentZeroIndex = i;
			}
			currentZeroCount++;
		} else {
			if (currentZeroCount > maxZeroCount) {
				maxZeroCount = currentZeroCount;
				maxZeroIndex = currentZeroIndex;
			}
			currentZeroCount = 0;
			currentZeroIndex = -1;
		}
	}
	if (currentZeroCount > maxZeroCount) {
		maxZeroCount = currentZeroCount;
		maxZeroIndex = currentZeroIndex;
	}

	// Replace only sequences of length >= 2 with empty string (leads to ::)
	if (maxZeroCount >= 2) {
		blocks.splice(maxZeroIndex, maxZeroCount, '');
		let res = blocks.join(':');
		// Handle cases of double colons on boundaries
		if (res.startsWith(':')) res = ':' + res;
		if (res.endsWith(':')) res = res + ':';
		if (res === '') return '::';
		return res;
	}

	return blocks.join(':');
}

// VLSM Helper Functions
function getVlsmBlock(hosts) {
	const needed = hosts + 2;
	let power = 2;
	while (power < needed) {
		power *= 2;
	}
	const cidr = 32 - Math.log2(power);
	return { block: power, cidr: cidr };
}

function generateVlsm() {
	// Clear panel & feedback
	const solutionPanel = document.getElementById("solutionPanelVlsm");
	const btnSolution = document.getElementById("btnSolutionVlsm");
	if (solutionPanel) solutionPanel.classList.add("hidden");
	if (btnSolution) btnSolution.classList.add("hidden");
	
	const deptNames = ["Verkauf", "Marketing", "Entwicklung", "Verwaltung", "Support", "HR", "IT-Infrastruktur", "Forschung", "Logistik"];
	const shuffled = [...deptNames].sort(() => 0.5 - Math.random());
	
	const depts = [
		{ name: shuffled[0], hosts: Math.floor(Math.random() * 56) + 35 }, // 35 to 90
		{ name: shuffled[1], hosts: Math.floor(Math.random() * 14) + 15 }, // 15 to 28
		{ name: shuffled[2], hosts: Math.floor(Math.random() * 9) + 4 }     // 4 to 12
	];
	
	depts.sort((a, b) => b.hosts - a.hosts);
	
	const thirdOctet = Math.floor(Math.random() * 254) + 1;
	const startIpInt = ipToInt(`192.168.${thirdOctet}.0`);
	const baseNetStr = `192.168.${thirdOctet}.0/24`;
	
	let currentIpInt = startIpInt;
	
	currentVlsm = {
		baseNet: baseNetStr,
		depts: depts.map(d => {
			const { block, cidr } = getVlsmBlock(d.hosts);
			const netInt = currentIpInt;
			const netStr = intToIp(netInt);
			const bcastStr = intToIp(netInt + block - 1);
			const firstStr = intToIp(netInt + 1);
			const lastStr = intToIp(netInt + block - 2);
			const maskStr = intToIp(~(block - 1));
			
			currentIpInt += block;
			
			return {
				name: d.name,
				hosts: d.hosts,
				needed: d.hosts + 2,
				block: block,
				cidr: cidr,
				network: netStr,
				broadcast: bcastStr,
				firstIp: firstStr,
				lastIp: lastStr,
				mask: maskStr
			};
		})
	};
	
	const targetEl = document.getElementById("vlsmTarget");
	if (targetEl) {
		targetEl.innerText = currentVlsm.baseNet;
	}
	
	const reqsEl = document.getElementById("vlsmRequirements");
	if (reqsEl) {
		reqsEl.innerHTML = currentVlsm.depts.map(d => 
			`<div class="flex justify-between items-center py-1 border-b border-dark-border/30">
				<span class="font-bold text-white">${d.name}</span>
				<span class="text-dark-muted font-mono">${d.hosts} Hosts (Benötigt: ${d.needed} IPs)</span>
			 </div>`
		).join("");
	}
	
	const containerEl = document.getElementById("vlsmInputContainer");
	if (containerEl) {
		containerEl.innerHTML = currentVlsm.depts.map((d, i) => 
			`<div id="vlsmCard-${i}" class="p-4 rounded-xl bg-dark-card border border-dark-border space-y-3 transition-colors">
				<div class="flex justify-between items-center">
					<span class="text-xs font-bold text-white uppercase tracking-wider">Abteilung: ${d.name}</span>
					<span id="vlsmFeedback-${i}" class="text-xs font-bold"></span>
				</div>
				<div class="grid grid-cols-2 gap-3">
					<div class="flex flex-col gap-1">
						<label class="text-[9px] uppercase font-mono text-dark-muted font-black">Netzadresse</label>
						<input type="text" id="vlsmNet-${i}" placeholder="z.B. 192.168.X.0" class="w-full bg-dark-bg border border-dark-border rounded-lg px-3 py-2 text-xs text-white focus:border-dark-accent outline-none font-mono">
					</div>
					<div class="flex flex-col gap-1">
						<label class="text-[9px] uppercase font-mono text-dark-muted font-black">CIDR Suffix</label>
						<input type="text" id="vlsmCidr-${i}" placeholder="z.B. 26" class="w-full bg-dark-bg border border-dark-border rounded-lg px-3 py-2 text-xs text-white focus:border-dark-accent outline-none font-mono">
					</div>
				</div>
			 </div>`
		).join("");
	}
}

function checkVlsm() {
	let allCorrect = true;
	
	currentVlsm.depts.forEach((d, i) => {
		const netInput = document.getElementById(`vlsmNet-${i}`);
		const cidrInput = document.getElementById(`vlsmCidr-${i}`);
		const card = document.getElementById(`vlsmCard-${i}`);
		const feedback = document.getElementById(`vlsmFeedback-${i}`);
		
		const userNet = netInput ? netInput.value.trim() : "";
		const userCidr = cidrInput ? parseInt(cidrInput.value.trim(), 10) : NaN;
		
		const isNetCorrect = userNet === d.network;
		const isCidrCorrect = userCidr === d.cidr;
		
		if (isNetCorrect && isCidrCorrect) {
			if (card) card.className = "p-4 rounded-xl bg-dark-card border border-dark-success/40 space-y-3 transition-colors";
			if (netInput) netInput.className = "w-full bg-dark-bg border border-dark-success/40 rounded-lg px-3 py-2 text-xs text-dark-success focus:border-dark-success outline-none font-mono";
			if (cidrInput) cidrInput.className = "w-full bg-dark-bg border border-dark-success/40 rounded-lg px-3 py-2 text-xs text-dark-success focus:border-dark-success outline-none font-mono";
			if (feedback) {
				feedback.innerText = "✓ Richtig";
				feedback.className = "text-xs font-bold text-dark-success";
			}
		} else {
			allCorrect = false;
			if (card) card.className = "p-4 rounded-xl bg-dark-card border border-dark-danger/40 space-y-3 transition-colors";
			
			if (!isNetCorrect && netInput) {
				netInput.className = "w-full bg-dark-bg border border-dark-danger/40 rounded-lg px-3 py-2 text-xs text-dark-danger focus:border-dark-danger outline-none font-mono";
			} else if (netInput) {
				netInput.className = "w-full bg-dark-bg border border-dark-success/40 rounded-lg px-3 py-2 text-xs text-dark-success focus:border-dark-success outline-none font-mono";
			}
			
			if (!isCidrCorrect && cidrInput) {
				cidrInput.className = "w-full bg-dark-bg border border-dark-danger/40 rounded-lg px-3 py-2 text-xs text-dark-danger focus:border-dark-danger outline-none font-mono";
			} else if (cidrInput) {
				cidrInput.className = "w-full bg-dark-bg border border-dark-success/40 rounded-lg px-3 py-2 text-xs text-dark-success focus:border-dark-success outline-none font-mono";
			}
			
			if (feedback) {
				feedback.innerText = "✗ Falsch";
				feedback.className = "text-xs font-bold text-dark-danger";
			}
		}
	});
	
	const streakEl = document.getElementById("vlsmStreak");
	const btnSolution = document.getElementById("btnSolutionVlsm");
	
	if (allCorrect) {
		vlsmStreak++;
		if (streakEl) streakEl.innerText = `🔥 ${vlsmStreak}er Streak`;
	} else {
		vlsmStreak = 0;
		if (streakEl) streakEl.innerText = `🔥 0er Streak`;
		if (btnSolution) btnSolution.classList.remove("hidden");
	}
}

function showSolutionVlsm() {
	const panel = document.getElementById("solutionPanelVlsm");
	const content = document.getElementById("vlsmSolutionContent");
	if (!panel || !content) return;
	
	let html = `
		<div class="space-y-6">
			<div>
				<p class="font-bold text-white mb-2">Vorgehensweise bei VLSM (Variable Length Subnet Mask):</p>
				<ol class="list-decimal pl-5 space-y-1 text-slate-300 text-xs sm:text-sm">
					<li>Sortiere alle Abteilungen absteigend nach der Anzahl der benötigten Host-Adressen.</li>
					<li>Addiere pro Abteilung 2 IP-Adressen (1 für die Netzadresse, 1 für die Broadcast-Adresse).</li>
					<li>Bestimme die kleinste Zweierpotenz (Blockgröße), die mindestens diesen Bedarf deckt.</li>
					<li>Ermittle das CIDR-Suffix: <code class="text-white">32 - ld(Blockgröße)</code>.</li>
					<li>Weise die Netze der Reihe nach zu. Das erste Netz beginnt am Start der Netzadresse. Jedes folgende Netz beginnt direkt nach der Broadcast-Adresse des vorherigen Netzes.</li>
				</ol>
			</div>
			
			<div class="border-t border-dark-border/40 pt-4">
				<p class="font-bold text-white mb-3">Schritt-für-Schritt Berechnung:</p>
				<div class="space-y-4">
	`;
	
	currentVlsm.depts.forEach((d, idx) => {
		html += `
			<div class="p-4 rounded-lg bg-dark-bg border border-dark-border text-xs leading-relaxed font-mono">
				<div class="flex justify-between items-center mb-2 pb-1 border-b border-dark-border/30">
					<span class="text-dark-accent font-bold">#${idx + 1}: Abteilung "${d.name}"</span>
					<span class="text-white font-bold">${d.network}/${d.cidr}</span>
				</div>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
					<div>
						<span class="text-dark-muted block">Bedarf:</span>
						<span>${d.hosts} Hosts + 2 = <strong class="text-white">${d.needed} IPs</strong></span>
					</div>
					<div>
						<span class="text-dark-muted block">Blockgröße (nächste Zweierpotenz):</span>
						<span>2<sup>${32 - d.cidr}</sup> = <strong class="text-white">${d.block} IPs</strong> (/${d.cidr})</span>
					</div>
					<div>
						<span class="text-dark-muted block font-bold text-dark-success">Zugeordnete Netzadresse:</span>
						<span class="text-dark-success font-bold">${d.network}</span>
					</div>
					<div>
						<span class="text-dark-muted block">Subnetzmaske:</span>
						<span>${d.mask}</span>
					</div>
					<div>
						<span class="text-dark-muted block">Nutzbarer IP-Bereich:</span>
						<span>${d.firstIp} - ${d.lastIp}</span>
					</div>
					<div>
						<span class="text-dark-muted block font-bold text-dark-danger">Broadcast-Adresse:</span>
						<span class="text-dark-danger font-bold">${d.broadcast}</span>
					</div>
				</div>
			</div>
		`;
	});
	
	html += `
				</div>
			</div>
		</div>
	`;
	
	content.innerHTML = html;
	panel.classList.remove("hidden");
	if (window.lucide) { lucide.createIcons(); }
}

function switchTab(tab) {
	const tabIpv4 = document.getElementById("tab-ipv4");
	const tabIpv6 = document.getElementById("tab-ipv6");
	const tabVlsm = document.getElementById("tab-vlsm");
	const btnIpv4 = document.getElementById("btn-ipv4");
	const btnIpv6 = document.getElementById("btn-ipv6");
	const btnVlsm = document.getElementById("btn-vlsm");

	if (tabIpv4) tabIpv4.classList.add("hidden");
	if (tabIpv6) tabIpv6.classList.add("hidden");
	if (tabVlsm) tabVlsm.classList.add("hidden");

	const inactiveClass = "px-5 py-1.5 rounded-full text-xs font-bold text-dark-muted hover:text-white transition-all";
	const activeClass = "px-5 py-1.5 rounded-full text-xs font-bold transition-all bg-dark-accent text-white shadow-lg shadow-emerald-900/20";
	
	if (btnIpv4) btnIpv4.className = inactiveClass;
	if (btnIpv6) btnIpv6.className = inactiveClass;
	if (btnVlsm) btnVlsm.className = inactiveClass;

	if (tab === 'ipv4') {
		if (tabIpv4) tabIpv4.classList.remove("hidden");
		if (btnIpv4) btnIpv4.className = activeClass;
		generateIPv4();
	} else if (tab === 'ipv6') {
		if (tabIpv6) tabIpv6.classList.remove("hidden");
		if (btnIpv6) btnIpv6.className = activeClass;
		generateIPv6();
	} else if (tab === 'vlsm') {
		if (tabVlsm) tabVlsm.classList.remove("hidden");
		if (btnVlsm) btnVlsm.className = activeClass;
		generateVlsm();
	}
}

function checkIPv4() {
	const ansMask = document.getElementById("ansMask") ? document.getElementById("ansMask").value.trim() : "";
	const ansNet = document.getElementById("ansNet") ? document.getElementById("ansNet").value.trim() : "";
	const ansBcast = document.getElementById("ansBcast") ? document.getElementById("ansBcast").value.trim() : "";
	const ansHostsVal = document.getElementById("ansHosts") ? document.getElementById("ansHosts").value.trim().replace(/[\.\s]/g, "") : "";

	const isMaskCorrect = ansMask === currentIpv4.mask;
	const isNetCorrect = ansNet === currentIpv4.network;
	const isBcastCorrect = ansBcast === currentIpv4.broadcast;
	const isHostsCorrect = parseInt(ansHostsVal, 10) === currentIpv4.hosts;

	setFieldStatus("Mask", isMaskCorrect);
	setFieldStatus("Net", isNetCorrect);
	setFieldStatus("Bcast", isBcastCorrect);
	setFieldStatus("Hosts", isHostsCorrect);

	const ipv4StreakEl = document.getElementById("ipv4Streak");
	const btnSolutionEl = document.getElementById("btnSolution");

	if (isMaskCorrect && isNetCorrect && isBcastCorrect && isHostsCorrect) {
		ipv4Streak++;
		if (ipv4StreakEl) ipv4StreakEl.innerText = `🔥 ${ipv4Streak}er Streak`;
	} else {
		ipv4Streak = 0;
		if (ipv4StreakEl) ipv4StreakEl.innerText = `🔥 0er Streak`;
		if (btnSolutionEl) btnSolutionEl.classList.remove("hidden");
	}
}

function setFieldStatus(field, isCorrect) {
	const input = document.getElementById("ans" + field);
	const feedback = document.getElementById("feedback" + field);

	if (isCorrect) {
		if (input) input.className = "w-full bg-dark-bg border border-dark-success/40 rounded-xl px-4 py-3 text-sm text-dark-success focus:border-dark-success outline-none font-mono";
		if (feedback) {
			feedback.innerText = "✓";
			feedback.className = "absolute right-3 top-3 text-dark-success font-bold";
		}
	} else {
		if (input) input.className = "w-full bg-dark-bg border border-dark-danger/40 rounded-xl px-4 py-3 text-sm text-dark-danger focus:border-dark-danger outline-none font-mono";
		if (feedback) {
			feedback.innerText = "✗";
			feedback.className = "absolute right-3 top-3 text-dark-danger font-bold";
		}
	}
}

function checkIPv6() {
	const ansEl = document.getElementById("ansIpv6");
	const feedbackEl = document.getElementById("feedbackIpv6");
	const ipv6StreakEl = document.getElementById("ipv6Streak");
	const solutionPanelIpv6 = document.getElementById("solutionPanelIpv6");
	const ipv6SolutionText = document.getElementById("ipv6SolutionText");

	const ans = ansEl ? ansEl.value.trim().toLowerCase() : "";
	const expected = currentIpv6.compressed.toLowerCase();
	const isCorrect = ans === expected;

	if (isCorrect) {
		if (ansEl) ansEl.className = "w-full bg-dark-bg border border-dark-success/40 rounded-xl px-4 py-3 text-sm text-dark-success focus:border-dark-success outline-none font-mono";
		if (feedbackEl) {
			feedbackEl.innerText = "✓";
			feedbackEl.className = "absolute right-3 top-3 text-dark-success font-bold";
		}
		ipv6Streak++;
		if (ipv6StreakEl) ipv6StreakEl.innerText = `🔥 ${ipv6Streak}er Streak`;
	} else {
		if (ansEl) ansEl.className = "w-full bg-dark-bg border border-dark-danger/40 rounded-xl px-4 py-3 text-sm text-dark-danger focus:border-dark-danger outline-none font-mono";
		if (feedbackEl) {
			feedbackEl.innerText = "✗";
			feedbackEl.className = "absolute right-3 top-3 text-dark-danger font-bold";
		}
		ipv6Streak = 0;
		if (ipv6StreakEl) ipv6StreakEl.innerText = `🔥 0er Streak`;
		if (solutionPanelIpv6) solutionPanelIpv6.classList.remove("hidden");
		if (ipv6SolutionText) ipv6SolutionText.innerText = currentIpv6.compressed;
	}
}

function showSolution() {
	const panel = document.getElementById("solutionPanel");
	const content = document.getElementById("solutionContent");

	// Binary visualization step-by-step
	const html = `
		<div>
			<p class="font-bold text-white mb-2">1. Binäre Gegenüberstellung (IP &amp; Maske):</p>
			<div class="bg-dark-bg p-3 rounded-lg border border-dark-border text-xs leading-5">
				IP:   ${currentIpv4.binary.ip ? formatBinaryWithDot(currentIpv4.binary.ip) : ""} (${currentIpv4.ip})<br>
				Mask: ${currentIpv4.binary.mask ? formatBinaryWithDot(currentIpv4.binary.mask) : ""} (${currentIpv4.mask})
			</div>
		</div>
		<div>
			<p class="font-bold text-white mb-2 mt-4">2. Berechnung der Netzadresse (Binäres UND):</p>
			<div class="bg-dark-bg p-3 rounded-lg border border-dark-border text-xs leading-5">
				IP:   ${currentIpv4.binary.ip ? formatBinaryWithDot(currentIpv4.binary.ip) : ""}<br>
				Mask: ${currentIpv4.binary.mask ? formatBinaryWithDot(currentIpv4.binary.mask) : ""}<br>
				<span class="text-dark-success font-bold">NET:  ${currentIpv4.binary.network ? formatBinaryWithDot(currentIpv4.binary.network) : ""} (${currentIpv4.network})</span>
			</div>
		</div>
		<div class="space-y-2 mt-4 text-xs">
			<p><strong class="text-white">Broadcast-Adresse:</strong> Ergibt sich, wenn alle Host-Bits auf 1 gesetzt werden. ➔ <span class="text-white font-bold">${currentIpv4.broadcast}</span></p>
			<p><strong class="text-white">Host-Range:</strong> Erste IP nach Netz-ID (Netz-ID + 1) bis letzte IP vor Broadcast (Broadcast-ID - 1) ➔ <span class="text-white font-bold">${currentIpv4.firstIp} - ${currentIpv4.lastIp}</span></p>
			<p><strong class="text-white">Nutzbare Hostadressen:</strong> 2<sup>(32 - ${currentIpv4.cidr})</sup> - 2 = 2<sup>${32 - currentIpv4.cidr}</sup> - 2 = <span class="text-white font-bold">${currentIpv4.hosts ? currentIpv4.hosts.toLocaleString('de-DE') : ""} Adressen</span>.</p>
		</div>
	`;
	if (content) content.innerHTML = html;
	if (panel) panel.classList.remove("hidden");
}

// Load first task on start
window.onload = () => {
	generateIPv4();
};
