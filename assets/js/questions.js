/**
 * LERNKARTEN-DATENBANK FISI (ANKI-STYLE)
 * 
 * Struktur: topicId -> Array von Cards
 * Jedes Card-Objekt: { id, q, a }
 */

window.ANKI_QUESTIONS = {
  // Topic 1.1: Systemanalyse & Infrastrukturplanung (Ziel: 100 Karten)
  '1.1': [
    // --- 1.1.1 Anforderungsmanagement (10 Karten) ---
    { id: '1.1.1_1', q: 'Wer erstellt das Lastenheft und was ist dessen Hauptinhalt?', a: 'Der Auftraggeber (Kunde). Es beschreibt die Gesamtheit der Forderungen aus Sicht des Auftraggebers (Was soll gemacht werden?).' },
    { id: '1.1.1_2', q: 'Wer erstellt das Pflichtenheft?', a: 'Der Auftragnehmer (Entwickler/Systemhaus) auf Basis des Lastenhefts.' },
    { id: '1.1.1_3', q: 'Warum ist das Pflichtenheft für beide Vertragspartner rechtlich wichtig?', a: 'Es ist die vertragliche Grundlage der Umsetzung. Es beschreibt, "Wie" und "Womit" die Forderungen erfüllt werden und dient als Basis für die Abnahme.' },
    { id: '1.1.1_4', q: 'Was sind funktionale Anforderungen?', a: 'Sie beschreiben konkrete Funktionen des Systems (z.B. "Das System muss Berichte als PDF exportieren können").' },
    { id: '1.1.1_5', q: 'Was sind nicht-funktionale Anforderungen (NFA)?', a: 'Sie beschreiben Qualitätsmerkmale und Rahmenbedingungen (z.B. Datensicherheit, Antwortzeiten, Usability, Wartbarkeit).' },
    { id: '1.1.1_6', q: 'Wofür steht das SMART-Prinzip bei der Definition von Anforderungen?', a: 'Spezifisch, Messbar, Attraktiv (Akzeptiert), Realistisch, Terminiert.' },
    { id: '1.1.1_7', q: 'Was ist die MoSCoW-Methode?', a: 'Ein Priorisierungsverfahren: Must-have (Muss), Should-have (Sollte), Could-have (Könnte), Won\'t-have (aktuell nicht).' },
    { id: '1.1.1_8', q: 'Was versteht man unter einem "Change Request"?', a: 'Ein formaler Antrag auf Änderung einer bereits vereinbarten Anforderung während der Projektlaufzeit.' },
    { id: '1.1.1_9', q: 'Zweck der Stakeholder-Analyse im Anforderungsmanagement?', a: 'Identifikation aller Personen/Gruppen, die Einfluss auf das Projekt haben oder davon betroffen sind, um deren Anforderungen frühzeitig zu kennen.' },
    { id: '1.1.1_10', q: 'Was ist eine Ist-Analyse im Kontext der Systemanalyse?', a: 'Die Untersuchung und Dokumentation des aktuellen Zustands der Prozesse und Infrastruktur, um Schwachstellen und Verbesserungspotenziale zu finden.' },

    // --- 1.1.2 Wirtschaftlichkeit (10 Karten) ---
    { id: '1.1.2_1', q: 'Was bedeutet die Abkürzung TCO und was umfasst sie?', a: 'Total Cost of Ownership (Gesamtkosten des Betriebs). Sie umfasst alle anfallenden Kosten eines Gutes, von der Anschaffung über die Nutzung (Wartung, Strom, Personal) bis zur Entsorgung.' },
    { id: '1.1.2_2', q: 'Wie definiert sich der ROI (Return on Investment)?', a: 'Das Verhältnis zwischen investiertem Kapital und dem daraus resultierenden Gewinn/Ersparnis. Er zeigt die Rentabilität einer Investition an.' },
    { id: '1.1.2_3', q: 'Wie berechnet man die einfache Amortisationsdauer?', a: 'Anschaffungskosten / Jährlicher Rückfluss (jährliche Einsparung oder Gewinn). Das Ergebnis ist die Zeit in Jahren, bis die Kosten gedeckt sind.' },
    { id: '1.1.2_4', q: 'Was ist das Hauptziel einer Nutzwertanalyse (NWA)?', a: 'Die systematische Entscheidungshilfe bei komplexen Alternativen durch die Bewertung nicht-monetärer (qualitativer) Kriterien.' },
    { id: '1.1.2_5', q: 'Nenne drei typische Kriterien für eine Nutzwertanalyse beim Serverkauf.', a: 'Skalierbarkeit, Support-Verfügbarkeit, Kompatibilität zur Bestandssoftware, Ausfallsicherheit, Benutzerfreundlichkeit der Management-Konsole.' },
    { id: '1.1.2_6', q: 'Was ist der Unterschied zwischen CAPEX und OPEX?', a: 'CAPEX (Capital Expenditure): Einmalige Investitionsausgaben (z.B. Hardwarekauf). OPEX (Operating Expenditure): Laufende Betriebsausgaben (z.B. Cloud-Gebühren, Wartungsverträge).' },
    { id: '1.1.2_7', q: 'Was versteht man unter einer Kosten-Leistungs-Rechnung (KLR)?', a: 'Ein internes Verfahren zur Überwachung der Wirtschaftlichkeit durch die Gegenüberstellung von Kosten und erbrachten Leistungen.' },
    { id: '1.1.2_8', q: 'Warum werden Kriterien in einer Nutzwertanalyse gewichtet?', a: 'Um die unterschiedliche Bedeutung der Kriterien für das spezifische Projektziel abzubilden (z.B. Sicherheit wichtiger als Preis).' },
    { id: '1.1.2_9', q: 'Was ist die "Gewinnschwelle" (Break-Even-Point)?', a: 'Der Punkt, an dem die Erlöse (oder Einsparungen) genau so hoch sind wie die Gesamtkosten. Ab hier erzielt die Investition einen positiven Deckungsbeitrag.' },
    { id: '1.1.2_10', q: 'Was beschreibt die "Wirtschaftlichkeit" als Kennzahl?', a: 'Das Verhältnis von Ertrag zu Aufwand (oder Leistung zu Kosten). Ein Wert > 1 bedeutet, dass das Projekt wirtschaftlich arbeitet.' },

    // --- 1.1.3 Server-Hardware (10 Karten) ---
    { id: '1.1.3_1', q: 'Was ist der Unterschied zwischen Single-Core, Multi-Core und Multi-Processor Systemen?', a: 'Single-Core: Ein Rechenkern pro Chip. Multi-Core: Mehrere Rechenkerne auf einem physischen Chip. Multi-Processor: Mehrere physische CPU-Sockel auf einem Mainboard.' },
    { id: '1.1.3_2', q: 'Welche Hardware-Features müssen CPUs für moderne Virtualisierung unterstützen?', a: 'Intel VT-x oder AMD-V. Diese Befehlssatzerweiterungen erlauben dem Hypervisor den direkten Zugriff auf die CPU-Ressourcen ohne Software-Emulation.' },
    { id: '1.1.3_3', q: 'Was ist der Vorteil von NVMe gegenüber SAS/SATA SSDs?', a: 'NVMe (Non-Volatile Memory express) nutzt das PCIe-Interface mit dem NVMe-Protokoll, was deutlich höhere Datenraten und extrem geringere Latenzen durch parallele Warteschlangen ermöglicht.' },
    { id: '1.1.3_4', q: 'Erkläre den Begriff "Hyper-Threading" (Simultaneous Multithreading).', a: 'Ein physischer CPU-Kern kann zwei Threads gleichzeitig bearbeiten, indem er ungenutzte Ausführungseinheiten besser auslastet. Das Betriebssystem sieht dadurch doppelt so viele "logische Prozessoren".' },
    { id: '1.1.3_5', q: 'Was versteht man unter ECC-RAM und warum ist es in Servern Standard?', a: 'Error Correction Code RAM. Es kann 1-Bit-Fehler im Speicher während des Betriebs erkennen und korrigieren, was Systemabstürze durch Speicherfehler verhindert.' },
    { id: '1.1.3_6', q: 'Was ist der Unterschied zwischen L1, L2 und L3 Cache bei einer CPU?', a: 'L1 ist der kleinste und schnellste (pro Kern), L2 ist etwas größer und langsamer (meist pro Kern), L3 ist der größte und wird oft von allen Kernen gemeinsam genutzt (Shared Cache).' },
    { id: '1.1.3_7', q: 'Was beschreibt der Begriff "Hot-Swapping"?', a: 'Das Austauschen von Hardware-Komponenten (z.B. Festplatten, Netzteile) im laufenden Betrieb des Servers ohne Downtime.' },
    { id: '1.1.3_8', q: 'Warum ist die TDP (Thermal Design Power) bei der Server-Planung wichtig?', a: 'Sie gibt die maximale Verlustleistung in Watt an, die das Kühlsystem des Servers (und des Rechenzentrums) abführen muss.' },
    { id: '1.1.3_9', q: 'Was ist ein Blade-Server im Vergleich zu einem Rack-Server?', a: 'Rack-Server sind eigenständige Einheiten in einem 19-Zoll-Gehäuse. Blade-Server stecken als schmale Einschübe in einem Chassis, das Strom, Kühlung und Netzwerk zentral bereitstellt.' },
    { id: '1.1.3_10', q: 'Was macht ein IPMI (z.B. HP iLO oder Dell iDRAC) Chip?', a: 'Er ermöglicht die Out-of-Band Verwaltung (Fernwartung) des Servers, auch wenn das Betriebssystem abgestürzt oder der Server ausgeschaltet ist.' },

    // --- 1.1.4 Virtualisierung (10 Karten) ---
    { id: '1.1.4_1', q: 'Was ist der Hauptvorteil eines Hypervisor Typ 1 (Bare-Metal) gegenüber Typ 2?', a: 'Höhere Performance und Effizienz, da er direkt auf der Hardware läuft und kein Host-Betriebssystem benötigt, das Ressourcen verbraucht.' },
    { id: '1.1.4_2', q: 'Erkläre den Begriff "Overcommitment" bei der Virtualisierung.', a: 'Den virtuellen Maschinen wird in Summe mehr Ressource (meist CPU oder RAM) zugewiesen, als physisch vorhanden ist, basierend auf der Annahme, dass nicht alle VMs gleichzeitig Volllast benötigen.' },
    { id: '1.1.4_3', q: 'Was ist der Unterschied zwischen einer Full Virtualization und Paravirtualization?', a: 'Full: Das Gast-OS weiß nichts von der Virtualisierung (unverändert). Para: Das Gast-OS wird angepasst (spezielle Treiber/Kernel), um effizienter mit dem Hypervisor zu kommunizieren.' },
    { id: '1.1.4_4', q: 'Was versteht man unter einer "VM-Snapshot" Funktion?', a: 'Das Einfrieren des aktuellen Zustands einer VM (Disk, RAM, Konfiguration). Ermöglicht das schnelle Zurückrollen bei Fehlern (z.B. vor riskanten Updates).' },
    { id: '1.1.4_5', q: 'Nenne den Kernunterschied zwischen einer VM und einem Docker-Container.', a: 'VM: Emuliert komplette Hardware + eigenes OS. Container: Nutzt den Kernel des Host-OS und isoliert nur die Anwendungsprozesse (viel leichter und schneller).' },
    { id: '1.1.4_6', q: 'Was ist eine Live-Migration (z.B. vMotion)?', a: 'Das Verschieben einer laufenden VM von einem physischen Host auf einen anderen ohne spürbare Unterbrechung für den Nutzer.' },
    { id: '1.1.4_7', q: 'Welchen Zweck hat ein "High Availability (HA) Cluster" in der Virtualisierung?', a: 'Fällt ein physischer Host aus, werden die betroffenen VMs auf den verbleibenden Hosts im Cluster automatisch neu gestartet.' },
    { id: '1.1.4_8', q: 'Warum ist geteilter Speicher (Shared Storage) für Virtualisierungs-Cluster wichtig?', a: 'Damit alle Hosts im Cluster gleichzeitig Zugriff auf die VM-Dateien haben, was Funktionen wie Live-Migration und HA erst ermöglicht.' },
    { id: '1.1.4_9', q: 'Was beschreibt der Begriff "VM Sprawl"?', a: 'Das unkontrollierte Wuchern von virtuellen Maschinen im Netzwerk, was zu Ressourcenverschwendung und Sicherheitslücken führt.' },
    { id: '1.1.4_10', q: 'Was ist ein "Template" in der Virtualisierung?', a: 'Ein vorkonfiguriertes Master-Image einer VM, von dem neue Instanzen schnell geklont werden können (Standardisierung).' },

    // --- 1.1.5 Cloud-Modelle (10 Karten) ---
    { id: '1.1.5_1', q: 'Wofür steht IaaS und was verwaltet der Kunde hier selbst?', a: 'Infrastructure as a Service. Der Kunde verwaltet das Betriebssystem, die Middleware, die Laufzeitumgebung, die Daten und die Anwendungen selbst.' },
    { id: '1.1.5_2', q: 'Was ist der Hauptfokus von PaaS (Platform as a Service)?', a: 'Entwickler erhalten eine fertige Plattform (Laufzeitumgebung + DB), um Anwendungen zu erstellen und zu betreiben, ohne sich um die darunterliegende Infrastruktur/OS kümmern zu müssen.' },
    { id: '1.1.5_3', q: 'Erkläre SaaS (Software as a Service) anhand eines Beispiels.', a: 'Die Software wird als fertiges Produkt über das Internet bereitgestellt (z.B. Microsoft 365). Der Kunde nutzt nur die Anwendung, die gesamte Verwaltung liegt beim Provider.' },
    { id: '1.1.5_4', q: 'Was charakterisiert eine "Public Cloud"?', a: 'Die Cloud-Infrastruktur wird über das öffentliche Internet für jedermann zugänglich gemacht und von einem externen Provider betrieben (z.B. AWS, Azure).' },
    { id: '1.1.5_5', q: 'Wann entscheidet sich ein Unternehmen für eine "Private Cloud"?', a: 'Bei hohen Anforderungen an Datenschutz, Sicherheit und Compliance, da die Cloud-Ressourcen exklusiv nur für dieses eine Unternehmen bereitgestellt werden (on-premise oder hosted).' },
    { id: '1.1.5_6', q: 'Was ist eine "Hybrid Cloud"?', a: 'Eine Kombination aus Public und Private Cloud. Sensible Daten bleiben in der Private Cloud, während unkritische Workloads oder Lastspitzen in die Public Cloud ausgelagert werden.' },
    { id: '1.1.5_7', q: 'Erkläre den Unterschied zwischen horizontaler und vertikaler Skalierung.', a: 'Vertikal (Scaling up): Mehr Ressourcen (CPU/RAM) zu einem bestehenden Server hinzufügen. Horizontal (Scaling out): Mehr Instanzen (Server) hinzufügen, um die Last zu verteilen.' },
    { id: '1.1.5_8', q: 'Was bedeutet "Elasticity" im Cloud-Kontext?', a: 'Die Fähigkeit des Systems, Ressourcen automatisch und in Echtzeit an die aktuelle Last anzupassen (vergrößern oder verkleinern).' },
    { id: '1.1.5_9', q: 'Was beschreibt der Begriff "Multi-Cloud"?', a: 'Die gleichzeitige Nutzung von Cloud-Diensten mehrerer verschiedener Provider, um Abhängigkeiten (Vendor Lock-in) zu vermeiden.' },
    { id: '1.1.5_10', q: 'Was ist das "Shared Responsibility Model"?', a: 'Ein Sicherheitsmodell, das festlegt, für welche Bereiche der Provider (z.B. physische Sicherheit) und für welche der Kunde (z.B. Datenverschlüsselung) verantwortlich ist.' },

    // --- 1.1.6 Storage-Design (10 Karten) ---
    { id: '1.1.6_1', q: 'Was versteht man unter DAS (Direct Attached Storage)?', a: 'Speichermedien, die direkt an einen einzelnen Host angeschlossen sind (z.B. interne Festplatten oder USB-Platten), ohne Umweg über ein Netzwerk.' },
    { id: '1.1.6_2', q: 'Erkläre das Funktionsprinzip eines NAS (Network Attached Storage).', a: 'Ein eigenständiger Dateiserver im LAN, der Speicherplatz auf Dateiebene (File-Level) über Protokolle wie SMB/CIFS oder NFS bereitstellt.' },
    { id: '1.1.6_3', q: 'Was ist das Hauptmerkmal eines SAN (Storage Area Network)?', a: 'Ein dediziertes Hochgeschwindigkeitsnetzwerk, das Server mit Speicher-Arrays verbindet und Zugriff auf Blockebene (Block-Level) ermöglicht. Der Server sieht den Speicher wie eine lokale Festplatte.' },
    { id: '1.1.6_4', q: 'Welche Rolle spielt der WWN (World Wide Name) in einem Fibre Channel SAN?', a: 'Es ist eine weltweit eindeutige 64-Bit Kennung für Fibre Channel Geräte, vergleichbar mit der MAC-Adresse im Ethernet.' },
    { id: '1.1.6_5', q: 'Wie funktioniert das iSCSI-Protokoll?', a: 'Es überträgt SCSI-Befehle über das TCP/IP-Protokoll (Ethernet). Dadurch können SAN-Strukturen auf bestehender Standard-Netzwerkhardware kostengünstig aufgebaut werden.' },
    { id: '1.1.6_6', q: 'Was beschreibt der Begriff "LUN Masking"?', a: 'Ein Sicherheitsmechanismus im SAN, der festlegt, welcher Host auf welche logische Einheit (LUN) des Speichersystems zugreifen darf.' },
    { id: '1.1.6_7', q: 'Was ist der Unterschied zwischen Block-Storage und Object-Storage?', a: 'Block: Daten werden in festen Blöcken gespeichert (gut für DBs/OS). Object: Daten werden als Einheiten mit Metadaten und eindeutiger ID gespeichert (gut für unstrukturierte Daten/Cloud).' },
    { id: '1.1.6_8', q: 'Welche Vorteile bietet Fibre Channel (FC) gegenüber iSCSI?', a: 'Geringere Latenz, höhere garantierte Bandbreite und weniger CPU-Last auf dem Host, da das Protokoll in Hardware (HBA) verarbeitet wird.' },
    { id: '1.1.6_9', q: 'Was versteht man unter "Thin Provisioning" beim Storage?', a: 'Einem Host wird mehr virtueller Speicherplatz zugewiesen, als physisch im Hintergrund reserviert ist. Der echte Speicher wird erst bei tatsächlicher Nutzung belegt.' },
    { id: '1.1.6_10', q: 'Was ist ein Fabric-Switch im Kontext eines SAN?', a: 'Ein spezieller Netzwerk-Switch (meist Fibre Channel), der die Verbindung zwischen Servern (Initiatoren) und Speichersystemen (Targets) herstellt.' },

    // --- 1.1.7 RAID-Level (10 Karten) ---
    { id: '1.1.7_1', q: 'Was ist das Hauptmerkmal von RAID 0 und wie steht es um die Datensicherheit?', a: 'Striping: Daten werden in Blöcken über alle Platten verteilt (Performance-Gewinn). Datensicherheit: Keine Redundanz. Fällt eine Platte aus, sind alle Daten verloren.' },
    { id: '1.1.7_2', q: 'Wie funktioniert RAID 1 und wie hoch ist die nutzbare Kapazität?', a: 'Mirroring (Spiegelung): Die Daten werden identisch auf zwei Platten geschrieben. Nutzbare Kapazität: 50% der Gesamtkapazität (Kapazität einer einzelnen Platte).' },
    { id: '1.1.7_3', q: 'Erkläre das Prinzip von RAID 5. Wie viele Platten dürfen ausfallen?', a: 'Striping mit verteilter Parität. Daten und Paritätsinfos werden über mindestens 3 Platten verteilt. Es darf genau eine Platte ausfallen.' },
    { id: '1.1.7_4', q: 'Berechne die nutzbare Kapazität eines RAID 5 mit 4 Festplatten à 2 TB.', a: '(n-1) * Kapazität = (4-1) * 2 TB = 6 TB nutzbarer Speicher.' },
    { id: '1.1.7_5', q: 'Was ist der Vorteil von RAID 6 gegenüber RAID 5?', a: 'RAID 6 nutzt zwei unabhängige Paritätsblöcke pro Stripe. Es dürfen bis zu zwei Festplatten gleichzeitig ausfallen, ohne dass Daten verloren gehen.' },
    { id: '1.1.7_6', q: 'Was versteht man unter RAID 10 (oder RAID 1+0)?', a: 'Ein Nested RAID (kombiniertes RAID). Ein Mirror von Stripsets. Es kombiniert die Geschwindigkeit von RAID 0 mit der Sicherheit von RAID 1.' },
    { id: '1.1.7_7', q: 'Berechne die nutzbare Kapazität eines RAID 10 Verbunds aus 6 Festplatten à 4 TB.', a: '50% der Gesamtkapazität = (6 * 4 TB) / 2 = 12 TB nutzbarer Speicher.' },
    { id: '1.1.7_8', q: 'Was ist eine "Hot Spare" Festplatte im RAID-Kontext?', a: 'Eine im Server eingebaute Ersatzplatte, die im Standby-Modus wartet. Fällt eine Platte im RAID aus, wird die Hot Spare automatisch aktiviert und der Rebuild startet sofort.' },
    { id: '1.1.7_9', q: 'Warum ist die Performance beim Schreiben bei RAID 5/6 schlechter als bei RAID 0?', a: 'Wegen des "Write Penalty": Für jeden Schreibvorgang müssen zusätzlich die Paritätsinformationen berechnet und auf die Platten geschrieben werden.' },
    { id: '1.1.7_10', q: 'Was ist der Unterschied zwischen Software-RAID und Hardware-RAID?', a: 'Software-RAID: Die CPU des Betriebssystems übernimmt die Berechnung (lastet Server aus). Hardware-RAID: Ein dedizierter RAID-Controller mit eigenem Prozessor und Cache übernimmt die Arbeit (schneller, entlastet CPU).' },

    // --- 1.1.8 Hochverfügbarkeit (10 Karten) ---
    { id: '1.1.8_1', q: 'Was versteht man unter einem "Single Point of Failure" (SPOF)?', a: 'Eine Komponente eines Systems, deren Ausfall den Stillstand des gesamten Systems zur Folge hat (z.B. ein einzelner Internetrouter ohne Backup).' },
    { id: '1.1.8_2', q: 'Erkläre den Unterschied zwischen einem Active/Passive und einem Active/Active Cluster.', a: 'Active/Passive: Ein Knoten arbeitet, der andere wartet im Standby. Active/Active: Beide Knoten arbeiten gleichzeitig und teilen sich die Last (Load Balancing).' },
    { id: '1.1.8_3', q: 'Was ist die Aufgabe eines "Load Balancers"?', a: 'Die Verteilung von eingehenden Netzwerkanfragen auf mehrere physische oder virtuelle Server, um Überlastung zu vermeiden und die Verfügbarkeit zu erhöhen.' },
    { id: '1.1.8_4', q: 'Wie wird Redundanz bei der Stromversorgung eines Servers realisiert?', a: 'Durch den Einbau von zwei oder mehr Netzteilen (Hot-Plug), die an unterschiedliche Stromkreise (Phasen) oder verschiedene USVs angeschlossen sind.' },
    { id: '1.1.8_5', q: 'Was beschreibt der Begriff "Quorum" in einem Failover-Cluster?', a: 'Ein Abstimmungsmechanismus (Mehrheit der Stimmen), der entscheidet, welcher Knoten im Cluster aktiv sein darf, um "Split-Brain" Szenarien zu verhindern.' },
    { id: '1.1.8_6', q: 'Was ist ein "Split-Brain" Szenario?', a: 'Ein Fehlerzustand, bei dem die Cluster-Knoten die Verbindung untereinander verlieren und beide glauben, sie müssten die Dienste übernehmen (führt zu Datenkorruption).' },
    { id: '1.1.8_7', q: 'Was bedeutet "NIC Teaming" (Link Aggregation)?', a: 'Das logische Zusammenfassen mehrerer physischer Netzwerkkarten zu einer virtuellen Einheit zur Erhöhung der Bandbreite und für Ausfallsicherheit.' },
    { id: '1.1.8_8', q: 'Wofür steht die Verfügbarkeit von "fünf Neunen" (99,999%)?', a: 'Ein extrem hoher Verfügbarkeitsstandard, der eine maximale Ausfallzeit von nur ca. 5 Minuten PRO JAHR erlaubt.' },
    { id: '1.1.8_9', q: 'Was ist der Unterschied zwischen Fehlertoleranz und Hochverfügbarkeit?', a: 'Hochverfügbarkeit: System ist schnell wieder da (minimale Downtime). Fehlertoleranz: System läuft ohne jegliche Unterbrechung weiter (teurer, erfordert Spezialhardware).' },
    { id: '1.1.8_10', q: 'Welchen Zweck hat ein "Heartbeat" Signal im Cluster?', a: 'Eine permanente Kontrollverbindung zwischen den Cluster-Knoten, um die Erreichbarkeit und den Status des Partners zu überwachen.' },

    // --- 1.1.9 Stromversorgung (10 Karten) ---
    { id: '1.1.9_1', q: 'Was bedeutet die USV-Klassifizierung VFD (Klasse 3)?', a: 'Voltage and Frequency Dependent. Die einfachste Form (Offline-USV). Schützt nur vor totalem Stromausfall durch Umschalten auf Batterie. Bietet keinen Schutz vor Spannungs- oder Frequenzschwankungen.' },
    { id: '1.1.9_2', q: 'Was bedeutet die USV-Klassifizierung VI (Klasse 2)?', a: 'Voltage Independent (Line-Interactive). Gleicht Spannungsschwankungen über einen Autotransformator aus, ist aber frequenzabhängig. Besserer Schutz als VFD.' },
    { id: '1.1.9_3', q: 'Was bedeutet die USV-Klassifizierung VFI (Klasse 1)?', a: 'Voltage and Frequency Independent (Online-USV). Der Strom wird permanent über Gleich- und Wechselrichter neu generiert (Doppelwandler). Höchster Schutz vor allen Netzstörungen ohne Umschaltzeit.' },
    { id: '1.1.9_4', q: 'Was versteht man unter der "Überbrückungszeit" (Autonomiezeit) einer USV?', a: 'Die Zeitspanne, in der die USV die angeschlossenen Lasten bei einem Stromausfall allein aus den Batterien versorgen kann (wichtig für kontrollierten Shutdown).' },
    { id: '1.1.9_5', q: 'Was ist die Aufgabe einer PDU (Power Distribution Unit) im Rack?', a: 'Eine intelligente Steckdosenleiste für das Server-Rack. Sie ermöglicht oft das Messen des Stromverbrauchs pro Port und das ferngesteuerte Ein-/Ausschalten von Geräten.' },
    { id: '1.1.9_6', q: 'Zweck eines ATS (Automatic Transfer Switch)?', a: 'Ein Umschalter für Geräte mit nur einem Netzteil. Er wird an zwei verschiedene Stromquellen angeschlossen und schaltet bei Ausfall einer Quelle blitzschnell auf die zweite um.' },
    { id: '1.1.9_7', q: 'Warum nutzt man im Rechenzentrum oft Drehstrom (400V / 3 Phasen)?', a: 'Zur Übertragung höherer Leistungen bei geringeren Leitungsquerschnitten und zur gleichmäßigeren Lastverteilung auf das Stromnetz.' },
    { id: '1.1.9_8', q: 'Was beschreibt der "Wirkungsgrad" einer USV?', a: 'Das Verhältnis von abgegebener Leistung zu aufgenommener Leistung. Moderne VFI-Anlagen erreichen oft über 95%; der Rest geht als Wärme verloren.' },
    { id: '1.1.9_9', q: 'Was ist der Unterschied zwischen Scheinleistung (VA) und Wirkleistung (W)?', a: 'Wirkleistung (Watt) ist die tatsächlich verbrauchte Energie. Scheinleistung (Volt-Ampere) ist die geometrische Summe aus Wirk- und Blindleistung. USVs müssen für beide Werte dimensioniert sein.' },
    { id: '1.1.9_10', q: 'Welchen Zweck hat ein "Wartungsbypass" bei einer USV?', a: 'Er erlaubt es, die USV für Wartungsarbeiten komplett stromlos zu schalten, während die angeschlossenen Server direkt (ununterbrochen) mit Netzstrom weiterversorgt werden.' },

    // --- 1.1.10 Rechenzentrum-Infrastruktur (10 Karten) ---
    { id: '1.1.10_1', q: 'Erkläre das Prinzip der Kaltgang-Warmgang-Einfassung.', a: 'Server-Racks werden so angeordnet, dass sich Kaltluftseiten und Warmluftseiten gegenüberstehen. Durch Einhausung (Deckel/Türen) wird die Vermischung der Luft verhindert, was die Kühleffizienz massiv steigert.' },
    { id: '1.1.10_2', q: 'Was ist der Vorteil einer Gaslöschanlage (z.B. Novec 1230 oder Inergen) gegenüber Wasser?', a: 'Gas löscht rückstandsfrei und ist nicht elektrisch leitend. IT-Hardware wird beim Löschvorgang nicht durch Feuchtigkeit oder Kurzschlüsse beschädigt.' },
    { id: '1.1.10_3', q: 'Was beschreibt der Begriff "Leckage-Erkennung" im Doppelboden?', a: 'Sensoren unter den Server-Racks, die austretendes Wasser (z.B. von Klimaanlagen) sofort melden, um Kurzschlüsse zu verhindern.' },
    { id: '1.1.10_4', q: 'Welchen Zweck hat ein Doppelboden im Rechenzentrum?', a: '1. Führung der Kaltluft zu den Racks, 2. Flexibler Raum für die strukturierte Verkabelung (Strom/Daten), 3. Trennung von Kühlung und Hardware.' },
    { id: '1.1.10_5', q: 'Was ist ein "Man-Trap" (Vereinzelungsschleuse)?', a: 'Ein physisches Zugangssystem mit zwei Türen, von denen immer nur eine offen sein kann. Es stellt sicher, dass nur eine autorisierte Person gleichzeitig das RZ betritt (Schutz vor Tailgating).' },
    { id: '1.1.10_6', q: 'Warum ist Monitoring der Luftfeuchtigkeit im RZ wichtig?', a: 'Zu niedrig: Gefahr von elektrostatischer Entladung (ESD). Zu hoch: Gefahr von Kondenswasserbildung und Korrosion an Bauteilen.' },
    { id: '1.1.10_7', q: 'Was versteht man unter "Out-of-Band Management"?', a: 'Ein dediziertes, vom Produktionsnetz getrenntes Netzwerk für die Verwaltung der Hardware (z.B. Management-Ports von Switches, PDUs und Servern).' },
    { id: '1.1.10_8', q: 'Welche Aufgabe hat eine Brandfrühestesterkennung (RAS)?', a: 'Rauchansaugsysteme entnehmen permanent Luftproben und erkennen Brandgase schon in der Entstehungsphase, lange bevor eine sichtbare Rauchentwicklung auftritt.' },
    { id: '1.1.10_9', q: 'Was beschreibt die physikalische Sicherheit nach TIA-942 oder EN 50600?', a: 'Normen für die Planung und den Betrieb von Rechenzentren, die Anforderungen an Bauweise, Brandschutz, Stromversorgung und Verfügbarkeit (Tiers) festlegen.' },
    { id: '1.1.10_10', q: 'Zweck eines Lastprobelaufs (Generator-Test)?', a: 'Regelmäßiges Testen der Notstromdiesel unter echter Last, um sicherzustellen, dass sie im Ernstfall innerhalb weniger Sekunden die gesamte Last des RZ übernehmen können.' },
  ],

  // Topic 1.2: Administration & Systemmanagement (Ziel: 90 Karten)
  '1.2': [
    // --- 1.2.1 Verzeichnisdienste: Active Directory (10 Karten) ---
    { id: '1.2.1_1', q: 'Was ist der Unterschied zwischen einem AD-Forest (Gesamtstruktur) und einer AD-Domain?', a: 'Die Domain ist die logische Partitionierung (Sicherheitsgrenze). Der Forest ist die oberste Instanz, die mehrere Domains enthalten kann und ein gemeinsames Schema sowie einen gemeinsamen Global Catalog teilt.' },
    { id: '1.2.1_2', q: 'Welche Aufgabe hat der "Global Catalog" (GC) im Active Directory?', a: 'Er enthält eine Teilmenge der Attribute aller Objekte im Forest. Er ermöglicht die Suche nach Objekten über Domänengrenzen hinweg und ist für die Anmeldung (Universal Groups) essenziell.' },
    { id: '1.2.1_3', q: 'Was sind FSMO-Rollen und wie viele gibt es pro Forest/Domain?', a: 'Flexible Single Master Operations. Es gibt 5 Rollen: 2 pro Forest (Schema Master, Domain Naming Master) und 3 pro Domain (PDC Emulator, RID Master, Infrastructure Master).' },
    { id: '1.2.1_4', q: 'Warum ist DNS für das Funktionieren von Active Directory zwingend erforderlich?', a: 'Clients finden Dienste (wie Domain Controller) über SRV-Records im DNS. Ohne korrektes DNS schlägt die Anmeldung und Replikation fehl.' },
    { id: '1.2.1_5', q: 'In welcher Reihenfolge werden Gruppenrichtlinien (GPOs) verarbeitet (LSDOU-Regel)?', a: '1. Lokal, 2. Site (Standort), 3. Domain, 4. OU (Organisationseinheit). Die zuletzt angewendete Richtlinie gewinnt bei Konflikten.' },
    { id: '1.2.1_6', q: 'Was ist der Hauptzweck einer Organizational Unit (OU)?', a: 'Logische Gruppierung von Objekten zur Delegation von Verwaltungsrechten und zur gezielten Zuweisung von Gruppenrichtlinien.' },
    { id: '1.2.1_7', q: 'Was passiert bei der "Vererbung" von GPOs und wie kann man sie unterbrechen?', a: 'GPOs auf höheren Ebenen gelten auch für Unter-OUs. Mit "Vererbung deaktivieren" (Block Inheritance) kann dies gestoppt werden; "Erzwingen" (Enforce) hebelt diese Deaktivierung wieder aus.' },
    { id: '1.2.1_8', q: 'Was beschreibt das AD-Schema?', a: 'Das Regelwerk, das definiert, welche Objektklassen (z.B. User, Computer) existieren dürfen und welche Attribute (z.B. Telefonnummer, E-Mail) diese Klassen haben.' },
    { id: '1.2.1_9', q: 'Was ist der Unterschied zwischen einem physischen Standort (Site) und einer logischen Domain?', a: 'Domains bilden die logische Struktur (Wer darf was?). Sites bilden die physische IP-Topologie ab (Wo steht der Server?) und steuern den Replikationsverkehr.' },
    { id: '1.2.1_10', q: 'Welches Protokoll wird primär für die Abfrage von AD-Objekten genutzt?', a: 'LDAP (Lightweight Directory Access Protocol) über Port 389 (unverschlüsselt) oder 636 (LDAPS/verschlüsselt).' },

    // --- 1.2.2 Berechtigungskonzepte: AGDLP-Prinzip (10 Karten) ---
    { id: '1.2.2_1', q: 'Wofür steht das Akronym AGDLP?', a: 'Accounts -> Global Groups -> Domain Local Groups -> Permissions.' },
    { id: '1.2.2_2', q: 'Warum werden Benutzerkonten (Accounts) nicht direkt auf Ressourcen berechtigt?', a: 'Es wäre extrem unübersichtlich und schwer zu pflegen. Bei Mitarbeiterwechseln müssten hunderte ACLs manuell angepasst werden.' },
    { id: '1.2.2_3', q: 'Was ist die Aufgabe der "Globalen Gruppe" im AGDLP-Prinzip?', a: 'Sie fasst Accounts mit gleicher Rolle oder Funktion zusammen (z.B. "G_Buchhaltung").' },
    { id: '1.2.2_4', q: 'Welche Rolle spielt die "Domänenlokale Gruppe" im AGDLP-Prinzip?', a: 'Sie definiert den Zugriff auf eine konkrete Ressource (z.B. "DL_Fileserver_Projekte_RW") und erhält die eigentlichen NTFS-Rechte (Permissions).' },
    { id: '1.2.2_5', q: 'Was ist der entscheidende Vorteil der Verschachtelung (Nesting) von Gruppen?', a: 'Die Trennung von Administration der Nutzer (Global) und Administration der Ressourcen (Domänenlokal). Nutzer können einfach Gruppen hinzugefügt werden, ohne die ACL der Datei anzufassen.' },
    { id: '1.2.2_6', q: 'In welcher AD-Gruppe sollten Mitglieder aus verschiedenen Domänen desselben Forests zusammengefasst werden?', a: 'In einer Universellen Gruppe (Universal Group).' },
    { id: '1.2.2_7', q: 'Warum ist es Best Practice, Domänenlokale Gruppen nach der Ressource zu benennen?', a: 'Damit der Administrator sofort erkennt, welchen Zweck die Gruppe erfüllt (z.B. "DL_Drucker_EG_Print").' },
    { id: '1.2.2_8', q: 'Darf eine Globale Gruppe eine andere Globale Gruppe enthalten?', a: 'Ja, das ist möglich und oft sinnvoll, um Hierarchien abzubilden.' },
    { id: '1.2.2_9', q: 'Was passiert mit den Berechtigungen eines Nutzers, wenn er aus einer Globalen Gruppe entfernt wird?', a: 'Er verliert sofort den Zugriff auf alle Ressourcen, die über diese Gruppe im AGDLP-Pfad berechtigt waren.' },
    { id: '1.2.2_10', q: 'Was beschreibt der Begriff "RBAC" im Zusammenhang mit Berechtigungen?', a: 'Role-Based Access Control. Zugriff wird basierend auf der geschäftlichen Rolle (Funktion) gewährt, nicht basierend auf der individuellen Person.' },

    // --- 1.2.3 NTFS- vs. Freigabeberechtigungen (10 Karten) ---
    { id: '1.2.3_1', q: 'Welche Berechtigungsebene greift beim lokalen Zugriff auf einen Windows-Server?', a: 'Ausschließlich die NTFS-Berechtigungen. Freigabeberechtigungen spielen beim lokalen Login keine Rolle.' },
    { id: '1.2.3_2', q: 'Wie werden die "Effektiven Rechte" berechnet, wenn ein Nutzer über das Netzwerk auf eine Freigabe zugreift?', a: 'Es wird jeweils das effektivste Recht der Freigabe und der NTFS-Ebene ermittelt. Das Endergebnis ist das restriktivere (engere) Recht aus beiden Ebenen.' },
    { id: '1.2.3_3', q: 'Was passiert, wenn ein Nutzer über verschiedene Gruppen "Lesen" und "Schreiben" erhält, aber ein explizites "Verweigern" auf "Schreiben" vorliegt?', a: 'Das explizite "Verweigern" (Deny) gewinnt immer. Der Nutzer darf nur lesen.' },
    { id: '1.2.3_4', q: 'Was ist der Unterschied zwischen den NTFS-Rechten "Ändern" und "Vollzugriff"?', a: 'Vollzugriff erlaubt zusätzlich das Ändern von Berechtigungen und das Übernehmen des Besitzes (Ownership). "Ändern" erlaubt nur das Bearbeiten und Löschen von Daten.' },
    { id: '1.2.3_5', q: 'Bleiben NTFS-Berechtigungen erhalten, wenn eine Datei innerhalb desselben Volumes VERSCHOBEN wird?', a: 'Ja, die Datei behält ihre ursprünglichen expliziten Berechtigungen.' },
    { id: '1.2.3_6', q: 'Was passiert mit den NTFS-Berechtigungen, wenn eine Datei auf ein anderes Volume KOPIERT wird?', a: 'Die Datei verliert ihre alten Rechte und erbt die Berechtigungen des neuen Zielordners.' },
    { id: '1.2.3_7', q: 'Welchen Zweck hat die "Vererbung" bei NTFS-Rechten?', a: 'Berechtigungen werden automatisch von Ordnern auf Unterordner und Dateien übertragen, was die Administration großer Datenmengen vereinfacht.' },
    { id: '1.2.3_8', q: 'Was ist die "Besitzübernahme" (Take Ownership)?', a: 'Ein Administrator kann den Besitz einer Datei übernehmen, auch wenn ihm der Zugriff zuvor verweigert wurde, um z.B. Berechtigungen zu korrigieren.' },
    { id: '1.2.3_9', q: 'Erkläre "Access-Based Enumeration" (ABE).', a: 'Ein Feature für Dateifreigaben, das dafür sorgt, dass Nutzer nur die Ordner und Dateien sehen, für die sie auch mindestens Leserechte haben. Alles andere wird ausgeblendet.' },
    { id: '1.2.3_10', q: 'Was ist der "CREATOR OWNER" bei NTFS?', a: 'Ein Platzhalter-Konto. Der Nutzer, der eine Datei erstellt, wird automatisch Besitzer und erhält die hier definierten Rechte (meist Vollzugriff auf seine eigenen Dateien).' },

    // --- 1.2.4 Identitätsschutz (10 Karten) ---
    { id: '1.2.4_1', q: 'Nenne die drei Faktoren der Multi-Faktor-Authentifizierung (MFA).', a: '1. Wissen (Passwort, PIN), 2. Besitz (Token, Smartphone, Chipkarte), 3. Inhärenz (Biometrie wie Fingerabdruck, Face-ID).' },
    { id: '1.2.4_2', q: 'Wie funktioniert das Kerberos-Protokoll grob (Tickets)?', a: 'Ein Nutzer meldet sich am Authentication Service (AS) an und erhält ein Ticket Granting Ticket (TGT). Mit diesem TGT fordert er beim Ticket Granting Service (TGS) Service-Tickets für einzelne Dienste an.' },
    { id: '1.2.4_3', q: 'Was ist der Vorteil von SSO (Single Sign-On)?', a: 'Der Nutzer authentifiziert sich nur einmal zentral und kann danach ohne erneute Passworteingabe auf alle angebundenen Dienste zugreifen.' },
    { id: '1.2.4_4', q: 'Was ist der Unterschied zwischen RADIUS und TACACS+?', a: 'Beides sind AAA-Protokolle. RADIUS nutzt UDP und verschlüsselt nur das Passwort. TACACS+ nutzt TCP und verschlüsselt das gesamte Paket (sicherer, oft bei Cisco-Geräten).' },
    { id: '1.2.4_5', q: 'Wofür steht TOTP bei der Zwei-Faktor-Authentifizierung?', a: 'Time-based One-Time Password. Ein Algorithmus, der alle 30-60 Sekunden ein neues, zeitlich begrenztes Passwort generiert (z.B. Google Authenticator).' },
    { id: '1.2.4_6', q: 'Warum ist "Salting" beim Speichern von Passworthashes wichtig?', a: 'Ein zufälliger Wert (Salt) wird vor dem Hashen an das Passwort gehängt. Dies verhindert Rainbow-Table-Angriffe, da gleiche Passwörter unterschiedliche Hashes ergeben.' },
    { id: '1.2.4_7', q: 'Was beschreibt eine "Brute-Force-Attacke"?', a: 'Das automatisierte, systematische Ausprobieren aller möglichen Zeichenkombinationen, um ein Passwort zu knacken.' },
    { id: '1.2.4_8', q: 'Was ist eine "Dictionary Attack" (Wörterbuchangriff)?', a: 'Ein Angriff, bei dem Listen mit häufig verwendeten Passwörtern oder Begriffen aus Wörterbüchern durchprobiert werden.' },
    { id: '1.2.4_9', q: 'Was ist der Unterschied zwischen Identifikation und Authentifizierung?', a: 'Identifikation: Behauptung einer Identität (z.B. Benutzername eingeben). Authentifizierung: Beweis dieser Identität (z.B. Passwort eingeben).' },
    { id: '1.2.4_10', q: 'Was regelt das LDAP-Protokoll?', a: 'Es dient dem Abfragen und Modifizieren von Verzeichnisdiensten (wie Active Directory). LDAPS ist die verschlüsselte Variante über TLS.' },

    // --- 1.2.5 Update-Management (10 Karten) ---
    { id: '1.2.5_1', q: 'Welche Aufgabe übernimmt ein WSUS-Server im Unternehmen?', a: 'Windows Server Update Services. Er lädt Updates zentral von Microsoft herunter und verteilt sie gezielt an Clients im LAN, was Internet-Bandbreite spart und Kontrolle über den Patch-Zeitpunkt ermöglicht.' },
    { id: '1.2.5_2', q: 'Erkläre das Prinzip des "Staging" beim Update-Rollout.', a: 'Updates werden nicht sofort an alle verteilt, sondern erst in Testgruppen (Ringen) geprüft. Erst nach erfolgreichem Test erfolgt die Freigabe für die gesamte Produktion.' },
    { id: '1.2.5_3', q: 'Was ist der Unterschied zwischen einem Paketmanager (wie APT) und einem Repository?', a: 'Das Repository ist die Quelle (Lagerhaus) für Softwarepakete. Der Paketmanager (APT, DNF) ist das Werkzeug, das Pakete aus dem Repository sucht, herunterlädt und Abhängigkeiten auflöst.' },
    { id: '1.2.5_4', q: 'Wofür steht SCCM (jetzt MECM)?', a: 'Microsoft Endpoint Configuration Manager. Ein mächtiges Werkzeug zur Verwaltung von Hardware, Software-Verteilung, Patch-Management und OS-Deployment.' },
    { id: '1.2.5_5', q: 'Was bedeutet "Zero-Day-Exploit" im Kontext des Patch-Managements?', a: 'Eine Sicherheitslücke, die dem Hersteller noch nicht bekannt ist und für die es noch keinen Patch gibt. Angreifer nutzen den "Tag Null" vor dem ersten Schutz aus.' },
    { id: '1.2.5_6', q: 'Warum ist eine Inventarisierung der Hardware Voraussetzung für gutes Update-Management?', a: 'Nur wer weiß, welche Hardware und OS-Versionen im Netz sind, kann gezielt Patches ausrollen und Inkompatibilitäten vorab prüfen.' },
    { id: '1.2.5_7', q: 'Was ist ein "Feature Update" im Vergleich zu einem "Quality Update" bei Windows?', a: 'Feature Updates bringen neue Funktionen (1x pro Jahr). Quality Updates sind monatliche Sicherheits- und Bugfixes (Patchday).' },
    { id: '1.2.5_8', q: 'Welchen Zweck hat ein Rollback-Plan beim Patching?', a: 'Ein vordefiniertes Verfahren, um ein fehlerhaftes Update schnellstmöglich wieder rückgängig zu machen und den alten stabilen Zustand wiederherzustellen.' },
    { id: '1.2.5_9', q: 'Was beschreibt der Begriff "Patchday"?', a: 'Der feste Termin (meist der zweite Dienstag im Monat bei Microsoft), an dem Hersteller gesammelt Sicherheitsupdates veröffentlichen.' },
    { id: '1.2.5_10', q: 'Was versteht man unter "Vulnerability Scanning"?', a: 'Das automatisierte Scannen von Systemen im Netzwerk auf bekannte, noch nicht gepatchte Sicherheitslücken.' },

    // --- 1.2.6 Service-Management: ITIL (10 Karten) ---
    { id: '1.2.6_1', q: 'Was ist das Hauptziel von ITIL?', a: 'Die Ausrichtung der IT-Services an den geschäftlichen Anforderungen (Service Management). IT wird nicht als Technik, sondern als Dienstleister für das Business gesehen.' },
    { id: '1.2.6_2', q: 'Was ist eine "Störung" (Incident) laut ITIL?', a: 'Jede ungeplante Unterbrechung oder Qualitätsminderung eines IT-Services (z.B. Drucker geht nicht).' },
    { id: '1.2.6_3', q: 'Was ist die Aufgabe des Incident Managements?', a: 'Die schnellstmögliche Wiederherstellung des normalen Servicebetriebs (Feuerwehr-Funktion).' },
    { id: '1.2.6_4', q: 'Definiere den Begriff "Problem" im ITIL-Kontext.', a: 'Die (unbekannte) Ursache eines oder mehrerer Incidents.' },
    { id: '1.2.6_5', q: 'Was ist das Ziel des Problem Managements?', a: 'Die Ursachen von Störungen dauerhaft zu finden und zu beseitigen, um zukünftige Incidents zu verhindern.' },
    { id: '1.2.6_6', q: 'Was beschreibt ein "Change" laut ITIL?', a: 'Das Hinzufügen, Modifizieren oder Entfernen eines Elements, das Einfluss auf die IT-Services haben könnte (z.B. Austausch eines Core-Switches).' },
    { id: '1.2.6_7', q: 'Was ist die Aufgabe des CAB (Change Advisory Board)?', a: 'Ein Gremium, das geplante Änderungen bewertet, priorisiert und freigibt (oder ablehnt), um Risiken für den Betrieb zu minimieren.' },
    { id: '1.2.6_8', q: 'Was versteht man unter "Service Request Fulfillment"?', a: 'Die Bearbeitung von Standard-Anfragen der Nutzer (keine Störungen!), wie z.B. Passwort zurücksetzen oder neue Hardware bestellen.' },
    { id: '1.2.6_9', q: 'Was ist der Single Point of Contact (SPOC)?', a: 'Die zentrale Anlaufstelle für Nutzer bei allen IT-Fragen (meist der Service Desk).' },
    { id: '1.2.6_10', q: 'Was beschreibt die CMDB (Configuration Management Database)?', a: 'Eine zentrale Datenbank, die alle IT-Komponenten (CIs - Configuration Items) und deren Beziehungen untereinander speichert.' },

    // --- 1.2.7 SLA: Service Level Agreement (10 Karten) ---
    { id: '1.2.7_1', q: 'Was ist der Hauptzweck eines SLA?', a: 'Die schriftliche Fixierung von Dienstleistungsqualitäten (Levels) zwischen Dienstleister und Kunden, um Erwartungen und Verantwortlichkeiten klar zu definieren.' },
    { id: '1.2.7_2', q: 'Wie wird die "Verfügbarkeit" in Prozent meist berechnet (Formel)?', a: '(Ist-Servicezeit / Soll-Servicezeit) * 100. Beispiel: (8750h / 8760h) * 100 = 99,88%.' },
    { id: '1.2.7_3', q: 'Was ist the Unterschied zwischen "Reaktionszeit" und "Wiederherstellungszeit"?', a: 'Reaktionszeit: Zeit bis zur ersten Rückmeldung/Beginn der Arbeit. Wiederherstellungszeit: Zeit bis der Service wieder voll funktionsfähig zur Verfügung steht.' },
    { id: '1.2.7_4', q: 'Welchen Einfluss haben "geplante Wartungsfenster" auf die SLA-Berechnung?', a: 'Geplante Wartungen werden meist von der Soll-Servicezeit abgezogen und gelten somit nicht als Ausfallzeit (Downtime).' },
    { id: '1.2.7_5', q: 'Was beschreibt the Begriff "Servicezeit" (Business Hours) in einem SLA?', a: 'Der Zeitraum, in dem der Dienstleister den Service garantiert (z.B. Mo-Fr, 08:00 - 17:00 Uhr). Ausfälle außerhalb dieser Zeit zählen nicht gegen das SLA.' },
    { id: '1.2.7_6', q: 'Was sind "Pönalen" (Service Credits) im SLA-Kontext?', a: 'Vertragsstrafen oder Gutschriften, die der Dienstleister an den Kunden leisten muss, wenn die vereinbarten Service-Levels nicht eingehalten werden.' },
    { id: '1.2.7_7', q: 'Was versteht man unter einem "OLA" (Operational Level Agreement)?', a: 'Eine interne Vereinbarung zwischen verschiedenen Abteilungen desselben Unternehmens, um die Einhaltung eines externen SLAs zu unterstützen.' },
    { id: '1.2.7_8', q: 'Bedeutung von "MTTR" (Mean Time to Repair)?', a: 'Die durchschnittliche Zeit, die benötigt wird, um ein System nach einem Ausfall wieder in Betrieb zu nehmen. Ein wichtiger KPI für die Service-Qualität.' },
    { id: '1.2.7_9', q: 'Was bedeutet die Verfügbarkeit "99,9%" umgerechnet in maximale Ausfallzeit pro Jahr?', a: 'Ca. 8,76 Stunden Ausfallzeit pro Jahr sind bei 99,9% erlaubt.' },
    { id: '1.2.7_10', q: 'Was ist the Unterschied zwischen einem kundenbezogenen und einem servicebezogenen SLA?', a: 'Kundenbezogen: Ein SLA für alle Services eines Kunden. Servicebezogen: Ein SLA für einen bestimmten Service (z.B. E-Mail), der für alle Kunden gleich gilt.' },

    // --- 1.2.8 Lizenzrecht (10 Karten) ---
    { id: '1.2.8_1', q: 'Was ist the Kernmerkmal einer OEM-Lizenz?', a: 'Original Equipment Manufacturer. Die Software ist an eine bestimmte Hardware gebunden und wird oft ohne direkten Herstellersupport günstiger verkauft.' },
    { id: '1.2.8_2', q: 'Was sind "CALs" (Client Access Licenses)?', a: 'Zugriffslizenzen. Zusätzlich zur Server-Lizenz benötigt jeder Nutzer oder jedes Gerät, das auf den Server zugreift, eine eigene Lizenz (User-CAL oder Device-CAL).' },
    { id: '1.2.8_3', q: 'Erkläre den Unterschied zwischen einer User-CAL und einer Device-CAL.', a: 'User-CAL: Ein Nutzer darf von beliebig vielen Geräten zugreifen (gut für Außendienst). Device-CAL: Ein Gerät darf von beliebig vielen Nutzern verwendet werden (gut für Schichtarbeit/Terminals).' },
    { id: '1.2.8_4', q: 'Was ist the Vorteil einer Volumenlizenz (z.B. Microsoft Open Value)?', a: 'Einfache Verwaltung über ein Portal, Reimaging-Rechte, Zweitnutzungsrechte (Laptop) und oft die Möglichkeit zur Ratenzahlung oder Software Assurance.' },
    { id: '1.2.8_5', q: 'Was bedeutet "MAK" bei der Aktivierung von Volumenlizenzen?', a: 'Multiple Activation Key. Ein Key mit einer festen Anzahl an Aktivierungen über das Internet (ähnlich wie Retail-Keys).' },
    { id: '1.2.8_6', q: 'Was ist ein "KMS" (Key Management Service)?', a: 'Ein lokaler Aktivierungsdienst im Unternehmen. Clients aktivieren sich gegen den internen KMS-Server, statt einzeln über das Internet zu gehen (gut für isolierte Netze).' },
    { id: '1.2.8_7', q: 'Welche Freiheit gewährt the GPL (GNU General Public License)?', a: 'Sie erlaubt das Nutzen, Studieren, Ändern und Weitergeben der Software, verpflichtet aber dazu, Änderungen unter derselben Lizenz zu veröffentlichen (Copyleft-Prinzip).' },
    { id: '1.2.8_8', q: 'Was ist "Proprietäre Software"?', a: 'Software, bei der the Quellcode geheim bleibt und the Nutzung durch den Hersteller stark eingeschränkt ist (Gegenteil von Open Source).' },
    { id: '1.2.8_9', q: 'Darf man in Deutschland "gebrauchte" Softwarelizenzen weiterverkaufen?', a: 'Ja, laut EuGH-Urteil ist dies legal, sofern the ursprüngliche Kopie unbrauchbar gemacht wurde (Erschöpfungsgrundsatz).' },
    { id: '1.2.8_10', q: 'Was beschreibt eine "Site License" (Standortlizenz)?', a: 'Eine Lizenz, the es erlaubt, eine Software an einem bestimmten physischen Standort auf beliebig vielen Rechnern zu installieren.' },

    // --- 1.2.9 MDM & BYOD (10 Karten) ---
    { id: '1.2.9_1', q: 'Was ist das Hauptziel von Mobile Device Management (MDM)?', a: 'Die zentrale Verwaltung, Konfiguration und Absicherung von mobilen Endgeräten (Smartphones, Tablets, Laptops) im Unternehmen.' },
    { id: '1.2.9_2', q: 'Was versteht man unter dem "Container-Prinzip" bei MDM?', a: 'Die strikte logische Trennung von privaten und geschäftlichen Daten auf einem Gerät. Geschäftliche Apps laufen in einem geschützten Bereich (Container), auf den private Apps keinen Zugriff haben.' },
    { id: '1.2.9_3', q: 'Erkläre den Begriff "BYOD" (Bring Your Own Device).', a: 'Mitarbeiter nutzen ihre privaten Endgeräte für geschäftliche Zwecke. Dies erfordert klare Richtlinien zu Sicherheit und Datenschutz.' },
    { id: '1.2.9_4', q: 'Was bedeutet "Remote Wipe" im MDM-Kontext?', a: 'Das ferngesteuerte Löschen aller (oder nur der geschäftlichen) Daten auf einem Gerät, z.B. bei Verlust oder Diebstahl.' },
    { id: '1.2.9_5', q: 'Was ist "Geofencing" bei mobilen Geräten?', a: 'Das Auslösen von Aktionen oder Einschränkungen (z.B. Deaktivieren der Kamera), sobald sich ein Gerät in einem definierten geografischen Bereich (z.B. Firmengelände) befindet oder diesen verlässt.' },
    { id: '1.2.9_6', q: 'Nenne zwei Sicherheitsrisiken bei BYOD.', a: '1. Vermischung von privater und geschäftlicher Datennutzung (Datenschutz), 2. Infektionsgefahr durch unsichere private Apps/Downloads, 3. Schwierige Durchsetzung von Compliance-Regeln.' },
    { id: '1.2.9_7', q: 'Was ist "MAM" (Mobile Application Management) im Unterschied zu MDM?', a: 'MDM verwaltet das komplette Gerät. MAM konzentriert sich nur auf die Verwaltung und Absicherung der darauf installierten geschäftlichen Applikationen.' },
    { id: '1.2.9_8', q: 'Welche Rolle spielen Zertifikate bei MDM?', a: 'Sie dienen zur sicheren Authentifizierung des Geräts gegenüber dem Unternehmensnetzwerk (z.B. für WLAN oder VPN) ohne manuelle Passworteingabe.' },
    { id: '1.2.9_9', q: 'Was beschreibt eine "Compliance-Richtlinie" im MDM?', a: 'Regeln, die ein Gerät erfüllen muss, um Zugriff auf Firmendaten zu erhalten (z.B. Mindestversion des OS, kein Jailbreak/Root, aktive Verschlüsselung).' },
    { id: '1.2.9_10', q: 'Was ist der Unterschied zwischen BYOD und COPE?', a: 'BYOD: Privatgerät für Arbeit. COPE (Corporate Owned, Personally Enabled): Firmengerät, das auch privat genutzt werden darf (höhere Kontrolle für die IT).' },
    ],

    // Topic 1.3: Datensicherung & Disaster Recovery (Ziel: 60 Karten)
    '1.3': [
    // --- 1.3.1 Backup-Strategien (10 Karten) ---
    { id: '1.3.1_1', q: 'Erkläre die 3-2-1 Backup-Regel.', a: 'Mindestens 3 Kopien der Daten, auf 2 unterschiedlichen Medientypen, davon mindestens 1 Kopie außer Haus (offsite).' },
    { id: '1.3.1_2', q: 'Wie funktioniert das "Großvater-Vater-Sohn" Prinzip (Generationenprinzip)?', a: 'Ein rotierendes System: Sohn (Täglich), Vater (Wöchentlich), Großvater (Monatlich). Ermöglicht die Wiederherstellung verschiedener Zeitstände bei geringem Medienverbrauch.' },
    { id: '1.3.1_3', q: 'Was ist the Unterschied zwischen einem Backup und einer Archivierung?', a: 'Backup: Kurz-/mittelfristige Kopie zur Wiederherstellung bei Datenverlust. Archivierung: Langfristige, meist unveränderbare Aufbewahrung (revisionssicher) aus rechtlichen Gründen.' },
    { id: '1.3.1_4', q: 'Warum ist ein "Air Gap" beim Backup heute so wichtig?', a: 'Eine physische oder logische Trennung des Backups vom restlichen Netzwerk schützt the Sicherungen vor Ransomware, the sich sonst auch im Backup-Speicher ausbreiten würde.' },
    { id: '1.3.1_5', q: 'Was beschreibt the Begriff "Immutability" (Unveränderbarkeit) bei Backups?', a: 'Ein Schutzmechanismus (oft WORM), der verhindert, dass geschriebene Backups für einen definierten Zeitraum gelöscht oder verändert werden können (Schutz vor Insider-Bedrohungen und Ransomware).' },
    { id: '1.3.1_6', q: 'Welche Aufgabe hat the "Backup-Server" in einer Backup-Infrastruktur?', a: 'Er steuert the Sicherungsaufträge, verwaltet the Metadaten (Katalog) und koordiniert the Datenströme zwischen Quelle und Ziel.' },
    { id: '1.3.1_7', q: 'Was ist ein "Pull-Backup" im Gegensatz zum "Push-Backup"?', a: 'Pull: Der Backup-Server holt sich the Daten aktiv vom Client (sicherer). Push: Der Client schickt the Daten aktiv an den Backup-Server.' },
    { id: '1.3.1_8', q: 'Warum sollte ein Backup-Konzept regelmäßig getestet werden (Restore-Test)?', a: 'Ein Backup ist wertlos, wenn the Wiederherstellung im Ernstfall nicht funktioniert. Tests finden defekte Medien oder fehlerhafte Konfigurationen rechtzeitig.' },
    { id: '1.3.1_9', q: 'Was ist the Zweck eines "Offsite-Backups"?', a: 'Schutz vor physischen Katastrophen am Hauptstandort (Brand, Diebstahl, Überschwemmung) durch räumliche Trennung der Daten.' },
    { id: '1.3.1_10', q: 'Was beschreibt the "Aufbewahrungsfrist" (Retention Policy)?', a: 'Festlegung, wie lange Sicherungskopien vorgehalten werden müssen, bevor sie überschrieben oder gelöscht werden dürfen.' },

    // --- 1.3.2 Sicherungstypen (10 Karten) ---
    { id: '1.3.2_1', q: 'Was ist eine Voll-Sicherung (Full Backup)?', a: 'Alle ausgewählten Daten werden komplett gesichert. Vorteil: Schnellster Restore. Nachteil: Hoher Speicherplatzbedarf und lange Sicherungsdauer.' },
    { id: '1.3.2_2', q: 'Wie funktioniert eine Inkrementelle Sicherung?', a: 'Es werden nur the Daten gesichert, the sich seit der LETZTEN Sicherung (egal welchen Typs) geändert haben. Vorteil: Kleinste Datenmenge. Nachteil: Langsamster Restore (alle Inkremente nötig).' },
    { id: '1.3.2_3', q: 'Wie funktioniert eine Differenzielle Sicherung?', a: 'Es werden alle Daten gesichert, the sich seit der letzten VOLL-Sicherung geändert haben. Sicherungsmenge wächst bis zum nächsten Full-Backup an.' },
    { id: '1.3.2_4', q: 'Welche Medien werden für einen Restore bei einer differenziellen Sicherung benötigt?', a: 'Nur the letzte Voll-Sicherung und the aktuellste differenzielle Sicherung.' },
    { id: '1.3.2_5', q: 'Was ist ein "Synthetic Full Backup"?', a: 'Der Backup-Server erstellt aus einem alten Full-Backup und den vorhandenen Inkrementen ein neues Voll-Backup, ohne the Daten erneut vom Client lesen zu müssen (entlastet Netzwerk).' },
    { id: '1.3.2_6', q: 'Erkläre the Begriff "Image-Level Backup" im Vergleich zum "File-Level Backup".', a: 'File-Level sichert einzelne Dateien/Ordner. Image-Level sichert the gesamte Partition/Festplatte als Block-Abbild (ermöglicht Bare-Metal-Recovery).' },
    { id: '1.3.2_7', q: 'Was ist ein Snapshot und ersetzt er ein Backup?', a: 'Ein Snapshot ist ein "Schnappschuss" des Dateisystems/VM-Zustands zu einem Zeitpunkt (Metadaten-Pointer). Er ist KEIN Backup, da er auf demselben Speicher liegt und bei Hardwareausfall verloren geht.' },
    { id: '1.3.2_8', q: 'Was bewirkt the VSS-Dienst (Volume Shadow Copy Service) unter Windows beim Backup?', a: 'Er ermöglicht the Sicherung von Dateien, the gerade im Zugriff sind oder von Anwendungen gesperrt werden (konsistente Sicherung im laufenden Betrieb).' },
    { id: '1.3.2_9', q: 'Was ist "Deduplizierung" beim Backup?', a: 'Das Vermeiden von redundanten Datenblöcken. Identische Blöcke werden nur einmal physisch gespeichert, was massiv Speicherplatz spart.' },
    { id: '1.3.2_10', q: 'Welche Sicherungsmethode hat the geringste Belastung für das Produktionsnetzwerk?', a: 'Die inkrementelle Sicherung, da sie the geringste Datenmenge überträgt.' },

    // --- 1.3.3 Wiederherstellungsziele: RPO & RTO (10 Karten) ---
    { id: '1.3.3_1', q: 'Was bedeutet die Abkürzung RPO (Recovery Point Objective)?', a: 'Maximal tolerierbarer Datenverlust. Der Zeitraum zwischen dem letzten Backup und dem Systemausfall (Wie viele Daten dürfen im Ernstfall verloren gehen?).' },
    { id: '1.3.3_2', q: 'Was bedeutet die Abkürzung RTO (Recovery Time Objective)?', a: 'Maximal tolerierbare Ausfallzeit. Die Zeit, the von der Störung bis zur vollständigen Wiederherstellung des Services vergehen darf (Wie lange darf the IT stillstehen?).' },
    { id: '1.3.3_3', q: 'Welchen Einfluss hat ein RPO von "Null" auf the Backup-Infrastruktur?', a: 'Es erfordert eine permanente, synchrone Spiegelung der Daten in Echtzeit (Continuous Data Protection), da keinerlei Datenverlust erlaubt ist.' },
    { id: '1.3.3_4', q: 'Warum ist ein sehr niedriges RTO meist sehr teuer?', a: 'Es erfordert hohe Investitionen in schnelle Hardware, automatisierte Failover-Cluster und redundante Systeme, um the Wiederherstellungszeit zu minimieren.' },
    { id: '1.3.3_5', q: 'Wie hängen RPO und the Sicherungsintervall zusammen?', a: 'Das Sicherungsintervall darf maximal so groß wie das RPO sein. Wenn RPO = 4 Stunden, muss mindestens alle 4 Stunden gesichert werden.' },
    { id: '1.3.3_6', q: 'Was beschreibt the Begriff "MTPD" (Maximum Tolerable Period of Disruption)?', a: 'Der absolut maximale Zeitraum, den ein Geschäftsprozess unterbrochen sein darf, bevor the Existenz des Unternehmens gefährdet ist (liegt meist über dem RTO).' },
    { id: '1.3.3_7', q: 'Wer legt the Werte für RPO und RTO fest?', a: 'Die Geschäftsführung (Business-Seite) basierend auf einer Business Impact Analyse (BIA), nicht the IT allein.' },
    { id: '1.3.3_8', q: 'Was versteht man unter "WRT" (Work Recovery Time)?', a: 'Die Zeit, the nach der technischen Wiederherstellung benötigt wird, um Daten zu prüfen, Konsistenzchecks zu machen und the Nutzer wieder arbeiten zu lassen.' },
    { id: '1.3.3_9', q: 'Zweck einer Business Impact Analyse (BIA)?', a: 'Identifikation kritischer Geschäftsprozesse und Bewertung der Auswirkungen eines Ausfalls, um daraus RTO und RPO abzuleiten.' },
    { id: '1.3.3_10', q: 'Was ist the Unterschied zwischen Disaster Recovery und Business Continuity?', a: 'Disaster Recovery: Fokus auf the technische Wiederherstellung der IT. Business Continuity: Fokus auf the Aufrechterhaltung der gesamten Geschäftsprozesse (auch ohne IT).' },

    // --- 1.3.4 Speichermedien (10 Karten) ---
    { id: '1.3.4_1', q: 'Was ist the Kernvorteil von LTO-Magnetbändern (Tapes) für the Langzeitarchivierung?', a: 'Sehr geringe Kosten pro Terabyte, extrem lange Lebensdauer (bis zu 30 Jahre) und the Möglichkeit der physischen Trennung vom Netz (Offline-Speicher).' },
    { id: '1.3.4_2', q: 'Was bedeutet das WORM-Prinzip bei Speichermedien?', a: 'Write Once, Read Many. Daten können einmal geschrieben, aber niemals geändert oder gelöscht werden (wichtig für Revisionssicherheit).' },
    { id: '1.3.4_3', q: 'Erkläre the Backup-Ansatz "Disk-to-Disk-to-Tape" (D2D2T).', a: 'Daten werden zuerst schnell auf Festplatten gesichert (schneller Restore) und später zur langfristigen Aufbewahrung auf Tapes ausgelagert (kostengünstig/sicher).' },
    { id: '1.3.4_4', q: 'Was ist eine "Tape Library"?', a: 'Ein automatisiertes Speichersystem, das mehrere Bandlaufwerke und viele Tape-Slots enthält. Ein Roboterarm wechselt the Bänder automatisch nach Bedarf.' },
    { id: '1.3.4_5', q: 'Nenne einen Nachteil von Cloud-Backup gegenüber lokalem Backup.', a: 'Die Abhängigkeit von der Internet-Bandbreite (besonders beim ersten Vollbackup oder einem großen Restore) und the laufenden Kosten für den Speicherplatz.' },
    { id: '1.3.4_6', q: 'Welche Aufgabe hat the "Cleaning Tape" bei LTO-Laufwerken?', a: 'Die automatische Reinigung der Schreib-/Leseköpfe des Laufwerks zur Vermeidung von Fehlern durch Abrieb oder Staub.' },
    { id: '1.3.4_7', q: 'Was beschreibt the Begriff "VTL" (Virtual Tape Library)?', a: 'Ein Festplattensystem, das sich gegenüber der Backup-Software wie ein Bandlaufwerk verhält. Kombiniert the Geschwindigkeit von Disks mit der Logik von Tapes.' },
    { id: '1.3.4_8', q: 'Warum ist Verschlüsselung bei Backup-Medien (besonders Tapes) essenziell?', a: 'Da Tapes oft transportiert oder extern gelagert werden, schützt Verschlüsselung the Daten bei Verlust oder Diebstahl des physischen Mediums.' },
    { id: '1.3.4_9', q: 'Bedeutung von "LTFS" (Linear Tape File System)?', a: 'Ermöglicht es, auf Tapes wie auf eine Festplatte oder einen USB-Stick über den Dateiexplorer zuzugreifen (Drag & Drop).' },
    { id: '1.3.4_10', q: 'Was ist the Unterschied zwischen einer SSD und einer HDD als Backup-Ziel?', a: 'SSD: Extrem schnell, teurer (gut für RTO-kritische Daten). HDD: Günstiger bei großen Kapazitäten, langsamer (Standard für the meisten Backups).' },

    // --- 1.3.5 Revisionssicherheit (10 Karten) ---
    { id: '1.3.5_1', q: 'Was bedeutet "Revisionssicherheit" bei der Archivierung?', a: 'Dass Informationen sicher, unveränderbar, jederzeit verfügbar und nachvollziehbar (wer hat was wann gemacht) aufbewahrt werden.' },
    { id: '1.3.5_2', q: 'Wofür steht the Abkürzung GoBD?', a: 'Grundsätze zur ordnungsgemäßen Führung und Aufbewahrung von Büchern, Aufzeichnungen und Unterlagen in elektronischer Form sowie zum Datenzugriff.' },
    { id: '1.3.5_3', q: 'Was ist the Kernunterschied zwischen Backup und Archivierung im rechtlichen Sinne?', a: 'Backup dient der technischen Wiederherstellung nach Datenverlust. Archivierung dient der Erfüllung gesetzlicher Aufbewahrungspflichten und der Beweiskraft.' },
    { id: '1.3.5_4', q: 'Welche Rolle spielt the "Verfahrensdokumentation" bei der GoBD?', a: 'Sie beschreibt lückenlos den gesamten Prozess der Entstehung, Verarbeitung, Speicherung und Sicherung von steuerrelevanten Daten im Unternehmen.' },
    { id: '1.3.5_5', q: 'Wie lange müssen steuerrelevante Belege (z.B. Rechnungen) laut Gesetz archiviert werden?', a: 'In der Regel 10 Jahre (beginnend mit dem Ende des Kalenderjahres, in dem the Beleg erstellt wurde).' },
    { id: '1.3.5_6', q: 'Was ist ein WORM-Medium?', a: 'Write Once, Read Many. Ein Speichermedium, auf das Daten nur einmal geschrieben werden können und danach nur noch gelesen, aber nicht mehr gelöscht oder geändert werden können.' },
    { id: '1.3.5_7', q: 'Darf eine Archivierung in der Cloud erfolgen?', a: 'Ja, sofern the Provider entsprechende Zertifizierungen (z.B. IDW PS 880) vorweisen kann und the Daten gegen unbefugten Zugriff und Veränderung geschützt sind.' },
    { id: '1.3.5_8', q: 'Was bedeutet "Vollständigkeit" im Kontext der Archivierung?', a: 'Alle archivierungspflichtigen Dokumente müssen lückenlos und ohne Verluste im Archivsystem erfasst sein.' },
    { id: '1.3.5_9', q: 'Was ist ein DMS (Dokumentenmanagementsystem)?', a: 'Eine Software zur Verwaltung, Archivierung und Suche von elektronischen Dokumenten, the oft the Grundlage für revisionssichere Archivierung bildet.' },
    { id: '1.3.5_10', q: 'Warum ist ein Zeitstempel (Timestamp) bei der Archivierung wichtig?', a: 'Er dient als manipulationssicherer Beweis dafür, dass ein Dokument zu einem bestimmten Zeitpunkt im Archiv existiert hat.' },

    // --- 1.3.6 Desaster-Szenarien & Recovery (10 Karten) ---
    { id: '1.3.6_1', q: 'Was versteht man unter einem "Brandabschnitt" im Rechenzentrum?', a: 'Ein durch feuerfeste Wände und Türen abgetrennter Bereich, der verhindert, dass sich ein Feuer auf das gesamte RZ ausbreitet. Wichtig für den Betrieb von redundanter Hardware.' },
    { id: '1.3.6_2', q: 'Welchen Zweck haben regelmäßige Disaster-Recovery-Tests (K-Fall-Übungen)?', a: 'Sicherstellen, dass the Notfallpläne aktuell sind, the Technik funktioniert und the Mitarbeiter wissen, was im Ernstfall zu tun ist (Validierung von RTO/RPO).' },
    { id: '1.3.6_3', q: 'Was ist eine "Cold Site" als Ausweichstandort?', a: 'Ein angemieteter Raum mit Basis-Infrastruktur (Strom, Klima), aber ohne Hardware. Lange Wiederanlaufzeit, da Hardware erst beschafft und konfiguriert werden muss.' },
    { id: '1.3.6_4', q: 'Was zeichnet eine "Hot Site" als Ausweichstandort aus?', a: 'Ein voll ausgestattetes Rechenzentrum mit aktueller Hardware und gespiegelten Daten. Ermöglicht eine extrem schnelle Wiederaufnahme des Betriebs (sehr kurzes RTO).' },
    { id: '1.3.6_5', q: 'Erkläre the Begriff "Cloud Disaster Recovery" (DRaaS).', a: 'Disaster Recovery as a Service. Die Wiederherstellung von IT-Services in einer Cloud-Umgebung, falls das eigene Rechenzentrum ausfällt.' },
    { id: '1.3.6_6', q: 'Warum ist räumliche Distanz zwischen Backup-Standort und Hauptstandort wichtig?', a: 'Um the Daten vor regionalen Katastrophen zu schützen, the beide Standorte gleichzeitig treffen könnten (z.B. Hochwasser, Erdbeben, großflächiger Stromausfall).' },
    { id: '1.3.6_7', q: 'Was gehört zwingend in einen Disaster Recovery Plan (Notfallhandbuch)?', a: 'Kontaktlisten, Prioritätenliste der Wiederherstellung, Systemdokumentationen, detaillierte Schritt-für-Schritt-Anleitungen für den Restore und Konfigurationen.' },
    { id: '1.3.6_8', q: 'Welche Aufgabe hat the "Business Impact Analysis" (BIA) im Notfallkonzept?', a: 'Sie bewertet the Auswirkungen von Ausfällen auf einzelne Geschäftsprozesse, um the Wiederherstellung sinnvoll zu priorisieren.' },
    { id: '1.3.6_9', q: 'Warum sind Ersatz-Switches und Ersatz-Router Teil eines guten Disaster Recovery Konzepts?', a: 'Damit am Ausweichstandort sofort the notwendige Netzwerk-Infrastruktur aufgebaut werden kann, um the Server wieder erreichbar zu machen.' },
    { id: '1.3.6_10', q: 'Was beschreibt the "Wiederanlaufplan"?', a: 'Der Teil des Notfallkonzepts, der genau festlegt, in welcher Reihenfolge und mit welchen Schritten the IT-Systeme nach einem Totalausfall wieder hochgefahren werden.' },
    ],

    // Topic 1.4: Automatisierung & Logik (Ziel: 70 Karten)
    '1.4': [
    // --- 1.4.1 Scripting: PowerShell, Bash, Python (10 Karten) ---
    { id: '1.4.1_1', q: 'Was ist the Hauptvorteil der PowerShell gegenüber der klassischen CMD?', a: 'PowerShell arbeitet objektorientiert statt textbasiert. Ergebnisse von Befehlen (Cmdlets) können direkt als Objekte an andere Befehle weitergereicht werden (Pipelining).' },
    { id: '1.4.1_2', q: 'Welche Dateiendung haben PowerShell-Skripte standardmäßig?', a: '.ps1' },
    { id: '1.4.1_3', q: 'Was bewirkt the Shebang-Zeile (z.B. #!/bin/bash) am Anfang eines Skripts?', a: 'Sie gibt dem Betriebssystem an, welcher Interpreter (z.B. Bash, Python) genutzt werden soll, um das Skript auszuführen.' },
    { id: '1.4.1_4', q: 'Erkläre the Unterschied zwischen einer Variable und einer Konstante.', a: 'Variable: Ihr Wert kann sich während der Laufzeit des Skripts ändern. Konstante: Ihr Wert wird einmal zugewiesen und kann danach nicht mehr verändert werden.' },
    { id: '1.4.1_5', q: 'Zweck von Kontrollstrukturen (If-Else, Switch) in Skripten?', a: 'Sie ermöglichen eine bedingte Ausführung von Codeblöcken basierend auf Logik-Entscheidungen.' },
    { id: '1.4.1_6', q: 'Wofür nutzt ein Administrator "Cronjobs" (Linux) oder the "Aufgabenplanung" (Windows)?', a: 'Zur zeitgesteuerten, automatisierten Ausführung von Skripten oder Programmen (z.B. nächtliches Backup-Skript).' },
    { id: '1.4.1_7', q: 'Was ist eine "Funktion" im Scripting-Kontext?', a: 'Ein benannter Codeblock, der eine bestimmte Aufgabe erfüllt, Parameter annehmen kann und mehrfach im Skript aufgerufen werden kann (Vermeidung von Redundanz).' },
    { id: '1.4.1_8', q: 'Was beschreibt the Begriff "Fehlerbehandlung" (Error Handling) mittels Try-Catch?', a: 'Ein Mechanismus, um Laufzeitfehler während des Skript-Ablaufs abzufangen und darauf zu reagieren, statt das Skript unkontrolliert abstürzen zu lassen.' },
    { id: '1.4.1_9', q: 'Welchen Vorteil bietet Python für FISIs bei der Automatisierung?', a: 'Einfache Syntax, große Auswahl an Bibliotheken (z.B. für Netzwerk-Schnittstellen, APIs, Datenanalyse) und plattformübergreifende Einsetzbarkeit.' },
    { id: '1.4.1_10', q: 'Was ist "Variable Expansion" in Shell-Skripten?', a: 'Das Ersetzen des Variablennamens durch seinen eigentlichen Wert innerhalb eines Strings (z.B. "Hallo $USER").' },

    // --- 1.4.2 Reguläre Ausdrücke: Regex (10 Karten) ---
    { id: '1.4.2_1', q: 'Was ist the Hauptzweck von Regulären Ausdrücken (Regex)?', a: 'Das Suchen, Filtern und Validieren von Texten basierend auf komplexen Mustern.' },
    { id: '1.4.2_2', q: 'Was bewirkt der Punkt (.) in einem Regex-Muster?', a: 'Er dient als Platzhalter für genau ein beliebiges Zeichen (außer Zeilenumbrüchen).' },
    { id: '1.4.2_3', q: 'Bedeutung des Zeichens ^ (Zirkumflex) in Regex?', a: 'Steht für den Zeilenanfang (Match muss am Anfang der Zeile beginnen).' },
    { id: '1.4.2_4', q: 'Bedeutung des Zeichens $ (Dollar) in Regex?', a: 'Steht für das Zeilenende (Match muss am Ende der Zeile aufhören).' },
    { id: '1.4.2_5', q: 'Was bewirkt the Sternchen (*) in Regex?', a: 'Das vorangegangene Zeichen (oder Gruppe) darf 0-mal oder beliebig oft vorkommen.' },
    { id: '1.4.2_6', q: 'Was bewirkt das Pluszeichen (+) in Regex?', a: 'Das vorangegangene Zeichen muss mindestens 1-mal oder beliebig oft vorkommen.' },
    { id: '1.4.2_7', q: 'Wofür nutzt man eckige Klammern [ ] in Regex?', a: 'Definition einer Zeichenklasse. Es wird nach genau einem Zeichen aus der Menge gesucht (z.B. [abc] findet a, b oder c).' },
    { id: '1.4.2_8', q: 'Was bedeutet the Escape-Zeichen \ (Backslash) in Regex?', a: 'Es hebt the Sonderfunktion eines Metazeichens auf (z.B. \. sucht nach einem echten Punkt statt nach einem Platzhalter).' },
    { id: '1.4.2_9', q: 'Wie prüft man mit Regex, ob eine Eingabe nur aus Ziffern besteht?', a: 'Mit dem Muster ^[0-9]+$ oder ^\d+$' },
    { id: '1.4.2_10', q: 'Nenne ein praktisches Beispiel für Regex in der FISI-Administration.', a: 'Filtern von IP-Adressen aus großen Logfiles, Validierung von E-Mail-Adressen in Webformularen oder Suchen nach bestimmten Fehlermustern in Textdateien.' },

    // --- 1.4.3 Versionsverwaltung: Git (10 Karten) ---
    { id: '1.4.3_1', q: 'Was ist the Unterschied zwischen "git commit" und "git push"?', a: 'Commit speichert the Änderungen lokal in der Versionshistorie deines Rechners. Push überträgt diese lokalen Commits an einen entfernten Server (Remote Repository).' },
    { id: '1.4.3_2', q: 'Was bewirkt the Befehl "git clone"?', a: 'Er erstellt eine vollständige lokale Kopie eines entfernten Repositorys inklusive der gesamten Historie aller Versionen.' },
    { id: '1.4.3_3', q: 'Wofür nutzt man "Branches" in Git?', a: 'Um parallel an verschiedenen Features oder Bugfixes zu arbeiten, ohne the stabilen Hauptzweig (Main/Master) zu gefährden.' },
    { id: '1.4.3_4', q: 'Was ist ein "Merge Conflict"?', a: 'Ein Zustand, bei dem Git zwei Änderungen an derselben Stelle einer Datei nicht automatisch zusammenführen kann. Der Nutzer muss den Konflikt manuell lösen.' },
    { id: '1.4.3_5', q: 'Zweck der Datei ".gitignore"?', a: 'Festlegen, welche Dateien (z.B. Logfiles, Passwörter, temporäre Dateien) niemals von Git versioniert werden sollen.' },
    { id: '1.4.3_6', q: 'Was macht the Befehl "git pull"?', a: 'Er lädt the neuesten Änderungen vom Remote-Server herunter und führt sie sofort mit deinem aktuellen lokalen Branch zusammen (Fetch + Merge).' },
    { id: '1.4.3_7', q: 'Was beschreibt the "Staging Area" (Index)?', a: 'Ein Zwischenbereich, in dem Änderungen gesammelt werden (git add), bevor sie mit einem Commit final gespeichert werden.' },
    { id: '1.4.3_8', q: 'Was ist the Vorteil eines dezentralen Versionsverwaltungssystems (DVCS) wie Git?', a: 'Jeder Entwickler hat the komplette Historie lokal vorliegen. Man kann offline arbeiten und ist nicht von einem zentralen Server abhängig.' },
    { id: '1.4.3_9', q: 'Bedeutung von "Fork" im Kontext von Plattformen wie GitHub?', a: 'Eine persönliche Kopie des Repositorys eines anderen Nutzers, um daran unabhängig zu arbeiten (oft Basis für Pull Requests).' },
    { id: '1.4.3_10', q: 'Was ist ein "Pull Request" (oder Merge Request)?', a: 'Eine Anfrage, Änderungen aus einem Branch in einen anderen Branch (meist des Original-Projekts) zu übernehmen, oft verbunden mit einem Code Review.' },

    // --- 1.4.4 Algorithmen-Basics (10 Karten) ---
    { id: '1.4.4_1', q: 'Definiere den Begriff "Algorithmus".', a: 'Eine präzise, schrittweise Handlungsvorschrift zur Lösung eines Problems oder einer Klasse von Problemen in endlicher Zeit.' },
    { id: '1.4.4_2', q: 'Was ist the Zweck eines Struktogramms (Nassi-Shneiderman-Diagramm)?', a: 'Die grafische Darstellung der Logik eines Algorithmus ohne GOTO-Befehle, was eine strukturierte Programmierung erzwingt.' },
    { id: '1.4.4_3', q: 'Welches Symbol stellt eine "Entscheidung" (If-Else) im Aktivitätsdiagramm dar?', a: 'Eine Raute mit einem Eingang und zwei (oder mehr) Ausgängen, the mit Bedingungen (Guards) in eckigen Klammern beschriftet sind.' },
    { id: '1.4.4_4', q: 'Was beschreibt ein "Schreibtischtest" (Dry Run)?', a: 'Das manuelle, schrittweise Durchspielen eines Algorithmus auf Papier (meist mit einer Trace-Tabelle), um Logikfehler zu finden.' },
    { id: '1.4.4_5', q: 'Erkläre the Unterschied zwischen einer kopfgesteuerten und einer fußgesteuerten Schleife.', a: 'Kopfgesteuert: Prüfung der Bedingung VOR dem Durchlauf (kann 0-mal laufen). Fußgesteuert: Prüfung NACH dem Durchlauf (läuft mindestens 1-mal).' },
    { id: '1.4.4_6', q: 'Was ist "Pseudocode"?', a: 'Eine Mischung aus natürlicher Sprache und Programmiersyntax, the Logik verständlich darstellt, ohne an eine konkrete Sprache gebunden zu sein.' },
    { id: '1.4.4_7', q: 'Wofür nutzt man "Swimlanes" im Aktivitätsdiagramm?', a: 'Um Verantwortlichkeiten darzustellen. Sie zeigen, welches System oder welcher Akteur (z.B. User, DB, Webserver) eine Aktion ausführt.' },
    { id: '1.4.4_8', q: 'Was bedeutet "Endlichkeit" (Terminiertheit) bei einem Algorithmus?', a: 'Dass der Algorithmus nach einer begrenzten Anzahl von Schritten zu einem Ende kommen muss.' },
    { id: '1.4.4_9', q: 'Unterschied zwischen Fork (Gabelung) und Join (Vereinigung) im Aktivitätsdiagramm?', a: 'Fork: Teilt den Ablauf in parallele Pfade. Join: Führt parallele Pfade wieder zu einem einzigen Kontrollfluss zusammen.' },
    { id: '1.4.4_10', q: 'Was ist the Aufgabe einer "Trace-Tabelle"?', a: 'Die Dokumentation der Variablenwerte nach jedem einzelnen Schritt eines Algorithmus während eines Schreibtischtests.' },

    // --- 1.4.5 Datenbank-Design (10 Karten) ---
    { id: '1.4.5_1', q: 'Was stellt ein ER-Modell (ERM) dar?', a: 'Einen konzeptionellen Entwurf der Datenstruktur mit Entitäten, Attributen und deren Beziehungen.' },
    { id: '1.4.5_2', q: 'Was beschreibt eine 1:n Beziehung?', a: 'Ein Datensatz aus Tabelle A ist mit beliebig vielen aus Tabelle B verknüpft, aber ein Datensatz aus B nur mit genau einem aus A.' },
    { id: '1.4.5_3', q: 'Was ist eine m:n Beziehung und wie wird sie im relationalen Modell umgesetzt?', a: 'Viele Datensätze aus A können mit vielen aus B verknüpft sein. Umsetzung über eine Zwischentabelle, the the Primärschlüssel beider Tabellen als Fremdschlüssel enthält.' },
    { id: '1.4.5_4', q: 'Definition eines Primärschlüssels (PK)?', a: 'Ein Attribut oder eine Attributkombination, the jeden Datensatz einer Tabelle eindeutig identifiziert.' },
    { id: '1.4.5_5', q: 'Was ist ein Fremdschlüssel (FK)?', a: 'Ein Attribut einer Tabelle, das auf den Primärschlüssel einer anderen Tabelle verweist, um eine Beziehung herzustellen.' },
    { id: '1.4.5_6', q: 'Was ist das Ziel der Normalisierung?', a: 'Vermeidung von Redunanzen und Datenanomalien (Einfüge-, Lösch-, Änderungsanomalien).' },
    { id: '1.4.5_7', q: 'Wann ist eine Tabelle in der 1. Normalform (1. NF)?', a: 'Wenn alle Attribute atomar sind (nicht weiter zerlegbar) und keine Wiederholungsgruppen existieren.' },
    { id: '1.4.5_8', q: 'Wann ist eine Tabelle in der 2. Normalform (2. NF)?', a: 'Wenn sie in der 1. NF ist und jedes Nicht-Schlüsselattribut voll funktional vom Primärschlüssel abhängt (keine Teil-Abhängigkeiten).' },
    { id: '1.4.5_9', q: 'Wann ist eine Tabelle in der 3. Normalform (3. NF)?', a: 'Wenn sie in der 2. NF ist und kein Nicht-Schlüsselattribut transitiv vom Primärschlüssel abhängt (keine Abhängigkeiten unter Nicht-Schlüsselattributen).' },
    { id: '1.4.5_10', q: 'Was bedeutet "Referenzielle Integrität"?', a: 'Jeder Fremdschlüsselwert muss entweder existieren (als PK in der Zieltabelle) oder NULL sein. Sichert the logische Konsistenz zwischen Tabellen.' },

    // --- 1.4.6 SQL: DQL & DML (10 Karten) ---
    { id: '1.4.6_1', q: 'Was bewirkt ein INNER JOIN?', a: 'Er gibt nur the Datensätze zurück, the in beiden verknüpften Tabellen eine Übereinstimmung haben.' },
    { id: '1.4.6_2', q: 'Was ist the Unterschied zwischen einem LEFT JOIN und einem RIGHT JOIN?', a: 'LEFT JOIN gibt alle Zeilen der linken Tabelle zurück, RIGHT JOIN alle der rechten. Fehlende Gegenstücke werden mit NULL aufgefüllt.' },
    { id: '1.4.6_3', q: 'Wofür nutzt man Aggregatfunktionen wie SUM, AVG oder COUNT?', a: 'Um Berechnungen über eine Menge von Datensätzen durchzuführen und ein einzelnes Ergebnis zurückzugeben (oft in Verbindung mit GROUP BY).' },
    { id: '1.4.6_4', q: 'Unterschied zwischen WHERE und HAVING?', a: 'WHERE filtert einzelne Zeilen VOR der Gruppierung. HAVING filtert the Gruppen NACH der Aggregation.' },
    { id: '1.4.6_5', q: 'Was bewirkt the SQL-Befehl UPDATE?', a: 'Er ändert bestehende Datensätze in einer Tabelle. Wichtig: Immer eine WHERE-Klausel nutzen, um nicht alle Zeilen zu ändern!' },
    { id: '1.4.6_6', q: 'Was macht the Befehl DELETE im Gegensatz zu TRUNCATE?', a: 'DELETE löscht einzelne Zeilen (langsam, logbar, Trigger feuern). TRUNCATE leert the gesamte Tabelle (schnell, kein Einzel-Logging).' },
    { id: '1.4.6_7', q: 'Was ist eine Subquery (Unterabfrage)?', a: 'Eine SELECT-Abfrage, the innerhalb einer anderen SQL-Abfrage eingebettet ist.' },
    { id: '1.4.6_8', q: 'Zweck eines Unique Constraints?', a: 'Sicherstellen, dass alle Werte in einer Spalte verschieden sind (Eindeutigkeit), im Gegensatz zum PK darf ein Unique Constraint oft NULL enthalten.' },
    { id: '1.4.6_9', q: 'Was bewirkt "ORDER BY" am Ende einer Abfrage?', a: 'Es sortiert the Ergebnismenge aufsteigend (ASC) oder absteigend (DESC) nach einer oder mehreren Spalten.' },
    { id: '1.4.6_10', q: 'Was ist ein "Index" in einer Datenbank?', a: 'Eine zusätzliche Datenstruktur, the Suchabfragen massiv beschleunigt, aber Schreibvorgänge etwas verlangsamt.' },

    // --- 1.4.7 ACID-Prinzip (10 Karten) ---
    { id: '1.4.7_1', q: 'Wofür steht das A in ACID?', a: 'Atomicity (Atomarität): Eine Transaktion wird entweder ganz oder gar nicht ausgeführt (Alles-oder-Nichts-Prinzip).' },
    { id: '1.4.7_2', q: 'Wofür steht das C in ACID?', a: 'Consistency (Konsistenz): Die Datenbank muss vor und nach einer Transaktion in einem validen Zustand sein (Constraints werden eingehalten).' },
    { id: '1.4.7_3', q: 'Wofür steht das I in ACID?', a: 'Isolation: Gleichzeitig ablaufende Transaktionen dürfen sich nicht gegenseitig beeinflussen.' },
    { id: '1.4.7_4', q: 'Wofür steht das D in ACID?', a: 'Durability (Dauerhaftigkeit): Die Daten einer erfolgreich abgeschlossenen Transaktion bleiben auch bei Systemfehlern dauerhaft erhalten.' },
    { id: '1.4.7_5', q: 'Was ist eine "Transaktion" in einer Datenbank?', a: 'Eine logische Einheit von einer oder mehreren Datenbankoperationen, the als Ganzes erfolgreich sein müssen.' },
    { id: '1.4.7_6', q: 'Was bewirkt der Befehl COMMIT?', a: 'Er schließt eine Transaktion erfolgreich ab und schreibt the Änderungen dauerhaft in the Datenbank.' },
    { id: '1.4.7_7', q: 'Was bewirkt der Befehl ROLLBACK?', a: 'Er bricht eine laufende Transaktion ab und macht alle ungespeicherten Änderungen rückgängig.' },
    { id: '1.4.7_8', q: 'Was beschreibt das Problem des "Dirty Read"?', a: 'Eine Transaktion liest Daten, the von einer anderen noch nicht abgeschlossenen Transaktion geändert wurden (verletzt Isolation).' },
    { id: '1.4.7_9', q: 'Was ist ein "Deadlock" im Kontext von Transaktionen?', a: 'Zwei Transaktionen blockieren sich gegenseitig, da jede auf eine Ressource wartet, the the andere gerade hält.' },
    { id: '1.4.7_10', q: 'Warum ist ACID für Finanz- und ERP-Systeme unverzichtbar?', a: 'Um Datenkorruption und Inkonsistenzen (z.B. Geld abgebucht, aber nicht gutgeschrieben) bei parallelen Zugriffen oder Fehlern zu verhindern.' },
    ],

    // --- MODUL 4: WIRTSCHAFTS- & SOZIALKUNDE (WISO) (190 Karten) ---

    // Topic 4.1: Arbeits- & Tarifrecht (50 Karten)
    '4.1': [
    // --- Unterpunkt 1: Berufsausbildungsvertrag (10 Karten) ---
    { id: '4.1_1', q: 'Wer sind die Vertragspartner eines Berufsausbildungsvertrages?', a: 'Der Ausbildende (Betrieb) und der Auszubildende (Lehrling).' },
    { id: '4.1_2', q: 'Welche Form ist für den Ausbildungsvertrag zwingend vorgeschrieben?', a: 'Die Schriftform (muss vor Beginn der Ausbildung unterzeichnet sein).' },
    { id: '4.1_3', q: 'Wie lange darf die Probezeit laut BBiG maximal dauern?', a: 'Maximal 4 Monate (Mindestdauer: 1 Monat).' },
    { id: '4.1_4', q: 'Nenne drei Pflichten des Auszubildenden.', a: 'Lernpflicht, Sorgfaltspflicht, Gehorsamspflicht, Berufsschulpflicht, Berichtsheftführung.' },
    { id: '4.1_5', q: 'Nenne drei Pflichten des Ausbildenden.', a: 'Ausbildungspflicht, Vergütungspflicht, Fürsorgepflicht, Freistellung für die Berufsschule, Zeugnispflicht.' },
    { id: '4.1_6', q: 'Wie kann ein Ausbildungsvertrag während der Probezeit gekündigt werden?', a: 'Jederzeit, ohne Einhaltung einer Frist und ohne Angabe von Gründen.' },
    { id: '4.1_7', q: 'Unter welchen Bedingungen kann nach der Probezeit gekündigt werden?', a: 'Durch den Azubi mit 4 Wochen Frist (bei Berufsaufgabe/-wechsel) oder durch beide aus wichtigem Grund (fristlos).' },
    { id: '4.1_8', q: 'Was ist das "Verzeichnis der Berufsausbildungsverhältnisse"?', a: 'Ein Register bei der zuständigen Stelle (z.B. IHK), in das jeder Ausbildungsvertrag eingetragen werden muss.' },
    { id: '4.1_9', q: 'Darf ein Azubi für Überstunden zur Kasse gebeten werden?', a: 'Nein, Überstunden sind grundsätzlich besonders zu vergüten oder durch Freizeit auszugleichen.' },
    { id: '4.1_10', q: 'Was passiert mit dem Ausbildungsverhältnis bei Bestehen der Abschlussprüfung?', a: 'Es endet mit Bekanntgabe des Ergebnisses durch den Prüfungsausschuss, auch wenn der Vertrag ein späteres Datum vorsieht.' },

    // --- Unterpunkt 2: Arbeitsrechtliche Gesetze (10 Karten) ---
    { id: '4.1_11', q: 'Was regelt das Jugendarbeitsschutzgesetz (JArbSchG) bezüglich der Arbeitszeit?', a: 'Maximal 8 Stunden täglich und 40 Stunden wöchentlich (für Personen unter 18 Jahren).' },
    { id: '4.1_12', q: 'Ab welcher Arbeitszeit ist laut ArbZG eine Pause von 30 Minuten Pflicht?', a: 'Bei einer Arbeitszeit von mehr als 6 bis zu 9 Stunden.' },
    { id: '4.1_13', q: 'Was ist die gesetzliche Mindesturlaubsdauer laut Bundesurlaubsgesetz?', a: '24 Werktage bei einer 6-Tage-Woche (entspricht 20 Arbeitstagen bei einer 5-Tage-Woche).' },
    { id: '4.1_14', q: 'Wann greift der allgemeine Kündigungsschutz nach dem KSchG?', a: 'Wenn der Betrieb mehr als 10 Mitarbeiter hat und das Arbeitsverhältnis länger als 6 Monate besteht.' },
    { id: '4.1_15', q: 'Was regelt das Entgeltfortzahlungsgesetz im Krankheitsfall?', a: 'Der Arbeitgeber zahlt den Lohn für bis zu 6 Wochen zu 100% weiter.' },
    { id: '4.1_16', q: 'Wie lange ist die gesetzliche Kündigungsfrist für Arbeitnehmer laut BGB?', a: '4 Wochen zum 15. oder zum Ende eines Kalendermonats.' },
    { id: '4.1_17', q: 'Was besagt das Mutterschutzgesetz (MuSchG) zur Beschäftigung vor/nach der Geburt?', a: 'Beschäftigungsverbot 6 Wochen vor und in der Regel 8 Wochen nach der Entbindung.' },
    { id: '4.1_18', q: 'Was ist das Ziel des Allgemeinen Gleichbehandlungsgesetzes (AGG)?', a: 'Verhinderung von Benachteiligungen aus Gründen der Rasse, Ethnie, Geschlecht, Religion, Behinderung, Alter oder sexueller Identität.' },
    { id: '4.1_19', q: 'Was ist die Mindestruhezeit zwischen zwei Arbeitstagen laut ArbZG?', a: 'In der Regel 11 Stunden ununterbrochene Ruhezeit.' },
    { id: '4.1_20', q: 'Gilt das JArbSchG auch für 17-jährige Auszubildende?', a: 'Ja, es gilt für alle Personen, die noch nicht 18 Jahre alt sind.' },

    // --- Unterpunkt 3: Tarifrecht & Arbeitskampf (10 Karten) ---
    { id: '4.1_21', q: 'Was bedeutet "Tarifautonomie"?', a: 'Das Recht von Gewerkschaften und Arbeitgeberverbänden, Arbeitsbedingungen (Lohn, Urlaub) ohne staatliche Einmischung auszuhandeln.' },
    { id: '4.1_22', q: 'Was ist ein Manteltarifvertrag?', a: 'Regelt langfristige Arbeitsbedingungen wie Arbeitszeit, Urlaubstage oder Kündigungsfristen (nicht die Lohnhöhe).' },
    { id: '4.1_23', q: 'Was ist ein Entgelttarifvertrag?', a: 'Regelt die Höhe der Vergütung und hat meist eine kurze Laufzeit (z.B. 1-2 Jahre).' },
    { id: '4.1_24', q: 'Wann ist ein Arbeitnehmer an einen Tarifvertrag gebunden?', a: 'Wenn er Mitglied der Gewerkschaft ist UND der Arbeitgeber Mitglied im Arbeitgeberverband ist (oder bei Einzelvertragsklausel).' },
    { id: '4.1_25', q: 'Was bedeutet "Friedenspflicht" während eines Tarifvertrages?', a: 'Solange der Vertrag läuft, dürfen keine Arbeitskämpfe (Streiks) zu den geregelten Inhalten geführt werden.' },
    { id: '4.1_26', q: 'Was ist ein Streik?', a: 'Die gemeinsame, geplante Arbeitseinstellung durch Arbeitnehmer zur Durchsetzung von Tarifforderungen.' },
    { id: '4.1_27', q: 'Was versteht man unter einer "Aussperrung"?', a: 'Die planmäßige Nichtzulassung von Arbeitnehmern zur Arbeit durch den Arbeitgeber unter Einstellung der Lohnzahlung (Gegenmaßnahme zum Streik).' },
    { id: '4.1_28', q: 'Was ist eine Urabstimmung?', a: 'Geheime Wahl der Gewerkschaftsmitglieder darüber, ob ein Streik durchgeführt werden soll (meist 75% Zustimmung nötig).' },
    { id: '4.1_29', q: 'Was ist ein Warnstreik?', a: 'Ein kurzer Streik während der laufenden Tarifverhandlungen, um die Streikbereitschaft zu demonstrieren (noch keine Urabstimmung nötig).' },
    { id: '4.1_30', q: 'Was bedeutet die "Nachwirkung" eines Tarifvertrages?', a: 'Nach Ablauf gilt der Vertrag weiter, bis er durch eine neue Vereinbarung ersetzt wird.' },

    // --- Unterpunkt 4: Betriebsverfassung & Mitbestimmung (10 Karten) ---
    { id: '4.1_31', q: 'Ab wie vielen wahlberechtigten Mitarbeitern kann ein Betriebsrat gewählt werden?', a: 'Ab 5 ständigen wahlberechtigten Arbeitnehmern.' },
    { id: '4.1_32', q: 'Nenne drei Aufgaben des Betriebsrats.', a: 'Überwachung der Gesetze/Tarifverträge, Entgegennahme von Anregungen, Förderung der Eingliederung (z.B. Ausländer, Behinderte).' },
    { id: '4.1_33', q: 'In welchen Angelegenheiten hat der Betriebsrat ein echtes Mitbestimmungsrecht?', a: 'Soziale Angelegenheiten (z.B. Überstundenregelung, Urlaubsplan, Rauchverbote, Kantine).' },
    { id: '4.1_34', q: 'Was ist der Unterschied zwischen Mitbestimmung und Mitwirkung?', a: 'Mitbestimmung: Arbeitgeber braucht Zustimmung. Mitwirkung: Arbeitgeber muss nur informieren oder anhören.' },
    { id: '4.1_35', q: 'Muss der Betriebsrat vor jeder Kündigung angehört werden?', a: 'Ja, eine Kündigung ohne vorherige Anhörung des Betriebsrats ist unwirksam.' },
    { id: '4.1_36', q: 'Was ist eine Betriebsvereinbarung?', a: 'Ein Vertrag zwischen Arbeitgeber und Betriebsrat über Arbeitsbedingungen im konkreten Betrieb.' },
    { id: '4.1_37', q: 'Wer wählt die Jugend- und Auszubildendenvertretung (JAV)?', a: 'Alle Arbeitnehmer unter 18 Jahren sowie Azubis unter 25 Jahren.' },
    { id: '4.1_38', q: 'Was ist das Ziel der Montan-Mitbestimmung?', a: 'Paritätische Besetzung des Aufsichtsrats (50% Anteilseigner, 50% Arbeitnehmer) in der Kohle- und Stahlindustrie.' },
    { id: '4.1_39', q: 'Darf der Betriebsrat zum Streik aufrufen?', a: 'Nein, der Betriebsrat muss parteipolitisch und gewerkschaftlich neutral agieren; Streiks sind Sache der Gewerkschaften.' },
    { id: '4.1_40', q: 'Was regelt das Drittelbeteiligungsgesetz?', a: 'Ein Drittel des Aufsichtsrats muss aus Arbeitnehmervertretern bestehen (in Kapitalgesellschaften mit 500 bis 2000 Mitarbeitern).' },

    // --- Unterpunkt 5: Sozialversicherungen (10 Karten) ---
    { id: '4.1_41', q: 'Nenne die 5 Säulen der gesetzlichen Sozialversicherung in Deutschland.', a: 'Renten-, Kranken-, Arbeitslosen-, Pflege- und Unfallversicherung.' },
    { id: '4.1_42', q: 'Wer ist der Träger der gesetzlichen Rentenversicherung?', a: 'Die Deutsche Rentenversicherung (DRV).' },
    { id: '4.1_43', q: 'Wer zahlt die Beiträge zur gesetzlichen Unfallversicherung?', a: 'Der Arbeitgeber allein (100%).' },
    { id: '4.1_44', q: 'Welche Versicherung leistet bei Berufskrankheiten oder Arbeitsunfällen?', a: 'Die gesetzliche Unfallversicherung (Berufsgenossenschaften).' },
    { id: '4.1_45', q: 'Was ist das Solidaritätsprinzip in der Sozialversicherung?', a: 'Jeder zahlt nach seiner Leistungsfähigkeit (Einkommen), erhält aber Leistungen nach seinem Bedarf.' },
    { id: '4.1_46', q: 'Was ist die Beitragsbemessungsgrenze?', a: 'Der maximale Bruttolohn, bis zu dem Sozialversicherungsbeiträge berechnet werden. Der Teil darüber ist beitragsfrei.' },
    { id: '4.1_47', q: 'Wer ist der Träger der gesetzlichen Arbeitslosenversicherung?', a: 'Die Bundesagentur für Arbeit (BA).' },
    { id: '4.1_48', q: 'Was bedeutet "Paritätische Finanzierung"?', a: 'Arbeitgeber und Arbeitnehmer teilen sich die Beiträge zur Versicherung jeweils zur Hälfte (50/50).' },
    { id: '4.1_49', q: 'Welche Versicherung zahlt das "Pflegegeld"?', a: 'Die gesetzliche Pflegeversicherung.' },
    { id: '4.1_50', q: 'Was ist das Äquivalenzprinzip (vor allem in der Rentenversicherung)?', a: 'Die Höhe der Leistungen (Rente) hängt von der Höhe und Dauer der eingezahlten Beiträge ab.' }
    ],

    // Topic 4.2: Der Betrieb & Markt (50 Karten)
    '4.2': [
    // --- Unterpunkt 1: Rechtsformen (10 Karten) ---
    { id: '4.2_1', q: 'Was ist ein Einzelunternehmen bezüglich der Haftung?', a: 'Der Inhaber haftet allein und unbeschränkt mit seinem gesamten Geschäfts- und Privatvermögen.' },
    { id: '4.2_2', q: 'Was ist das Mindeststammkapital einer GmbH?', a: '25.000 Euro (bei Gründung müssen mindestens 12.500 Euro eingezahlt sein).' },
    { id: '4.2_3', q: 'Was ist das Mindestgrundkapital einer Aktiengesellschaft (AG)?', a: '50.000 Euro.' },
    { id: '4.2_4', q: 'Nenne die drei Organe einer AG.', a: 'Vorstand (Leitung), Aufsichtsrat (Kontrolle), Hauptversammlung (Aktionäre).' },
    { id: '4.2_5', q: 'Wer haftet bei einer GmbH & Co. KG unbeschränkt?', a: 'Die GmbH als Komplementär (Vollhafter); die Haftung der GmbH selbst ist jedoch auf ihr Gesellschaftsvermögen begrenzt.' },
    { id: '4.2_6', q: 'Was ist der Unterschied zwischen Komplementär und Kommanditist?', a: 'Komplementär: Haftet unbeschränkt (auch privat). Kommanditist: Haftet nur mit seiner Einlage (Teilhafter).' },
    { id: '4.2_7', q: 'Ab wann muss ein Einzelunternehmen als e.K. im Handelsregister stehen?', a: 'Wenn ein nach Art und Umfang in kaufmännischer Weise eingerichteter Geschäftsbetrieb erforderlich ist.' },
    { id: '4.2_8', q: 'Was ist eine "UG (haftungsbeschränkt)"?', a: 'Die "Mini-GmbH"; kann mit nur 1 Euro Stammkapital gegründet werden, muss aber Rücklagen bilden, bis 25.000 Euro erreicht sind.' },
    { id: '4.2_9', q: 'Was ist das oberste Willensbildungsorgan einer GmbH?', a: 'Die Gesellschafterversammlung.' },
    { id: '4.2_10', q: 'Welche Rechtsform ist eine juristische Person des Privatrechts?', a: 'Kapitalgesellschaften wie GmbH, AG, UG.' },

    // --- Unterpunkt 2: Marktformen (10 Karten) ---
    { id: '4.2_11', q: 'Was charakterisiert ein Monopol?', a: 'Nur ein Anbieter steht vielen Nachfrägern gegenüber (oder umgekehrt).' },
    { id: '4.2_12', q: 'Was ist ein Oligopol?', a: 'Wenige Anbieter stehen vielen Nachfrägern gegenüber (z.B. Tankstellen, Mobilfunkanbieter).' },
    { id: '4.2_13', q: 'Was ist ein Polypol?', a: 'Viele Anbieter stehen vielen Nachfrägern gegenüber (vollkommene Konkurrenz).' },
    { id: '4.2_14', q: 'Was versteht man unter einem "Angebotsmonopol"?', a: 'Ein einziger Verkäufer beherrscht den Markt für ein Produkt oder eine Dienstleistung.' },
    { id: '4.2_15', q: 'Was ist ein "Nachfrageoligopol" (Oligopson)?', a: 'Viele Anbieter stehen nur wenigen großen Nachfrägern gegenüber (z.B. Molkereien vs. Supermarktketten).' },
    { id: '4.2_16', q: 'Wie entsteht ein Gleichgewichtspreis im Polypol?', a: 'Durch das Zusammentreffen von Angebot und Nachfrage; der Preis räumt den Markt.' },
    { id: '4.2_17', q: 'Was passiert mit der Nachfrage bei steigenden Preisen (Normalfall)?', a: 'Die nachgefragte Menge sinkt.' },
    { id: '4.2_18', q: 'Was ist ein "zweiseitiges Oligopol"?', a: 'Wenige Anbieter stehen wenigen Nachfrägern gegenüber.' },
    { id: '4.2_19', q: 'Was ist ein "natürliches Monopol"?', a: 'Ein Monopol, das durch extrem hohe Fixkosten (z.B. Schienennetz, Stromleitungen) entsteht, die Wettbewerb unwirtschaftlich machen.' },
    { id: '4.2_20', q: 'Welches Gesetz schützt in Deutschland den Wettbewerb vor Kartellbildung?', a: 'Das GWB (Gesetz gegen Wettbewerbsbeschränkungen).' },

    // --- Unterpunkt 3: Ziele (Ökonomisch, Ökologisch, Sozial) (10 Karten) ---
    { id: '4.2_21', q: 'Was ist ein ökonomisches Ziel eines Unternehmens?', a: 'Gewinnmaximierung, Umsatzsteigerung, Erhöhung des Marktanteils.' },
    { id: '4.2_22', q: 'Nenne ein Beispiel für ein ökologisches Ziel.', a: 'Ressourcenschonung, CO2-Reduktion, Einsatz recycelbarer Materialien.' },
    { id: '4.2_23', q: 'Nenne ein Beispiel für ein soziales Ziel.', a: 'Sicherung der Arbeitsplätze, betriebliche Altersvorsorge, gerechte Entlohnung.' },
    { id: '4.2_24', q: 'Was beschreibt eine "Zielharmonie"?', a: 'Das Erreichen eines Ziels fördert gleichzeitig das Erreichen eines anderen Ziels (z.B. Abfallvermeidung spart Entsorgungskosten).' },
    { id: '4.2_25', q: 'Was ist ein "Zielkonflikt"?', a: 'Das Erreichen eines Ziels behindert das Erreichen eines anderen (z.B. Lohnerhöhung vs. Gewinnmaximierung).' },
    { id: '4.2_26', q: 'Was ist eine "Zielindifferenz"?', a: 'Die Erfüllung eines Ziels hat keinen Einfluss auf ein anderes Ziel.' },
    { id: '4.2_27', q: 'Wofür steht die SMART-Formel bei der Zieldefinition?', a: 'Spezifisch, Messbar, Attraktiv (oder Akzeptiert), Realistisch, Terminiert.' },
    { id: '4.2_28', q: 'Was bedeutet "Corporate Social Responsibility" (CSR)?', a: 'Die gesellschaftliche Verantwortung von Unternehmen über gesetzliche Pflichten hinaus.' },
    { id: '4.2_29', q: 'Was ist das Ziel der "Gewinnmaximierung"?', a: 'Erzielung des höchstmöglichen Unterschieds zwischen Erlösen und Kosten.' },
    { id: '4.2_30', q: 'Was beschreibt das "ökonomische Prinzip" (Minimalprinzip)?', a: 'Ein vorgegebenes Ziel mit möglichst geringen Mitteln (Einsatz) erreichen.' },

    // --- Unterpunkt 4: Marketing-Mix (4Ps) (10 Karten) ---
    { id: '4.2_31', q: 'Nenne die 4 Ps des klassischen Marketing-Mix.', a: 'Product (Produktpolitik), Price (Preispolitik), Place (Distributionspolitik), Promotion (Kommunikationspolitik).' },
    { id: '4.2_32', q: 'Was umfasst die "Produktpolitik" (Product)?', a: 'Qualität, Design, Verpackung, Markenname, Kundendienst, Sortimentsgestaltung.' },
    { id: '4.2_33', q: 'Was regelt die "Preispolitik" (Price)?', a: 'Preisgestaltung, Rabatte, Skonti, Liefer- und Zahlungsbedingungen.' },
    { id: '4.2_34', q: 'Was ist das Ziel der "Distributionspolitik" (Place)?', a: 'Die Wahl der Vertriebswege (direkt oder indirekt), um das Produkt zum Kunden zu bringen.' },
    { id: '4.2_35', q: 'Was gehört zur "Kommunikationspolitik" (Promotion)?', a: 'Werbung, Public Relations (PR), Sponsoring, Verkaufsförderung.' },
    { id: '4.2_36', q: 'Unterschied zwischen direktem und indirektem Vertrieb?', a: 'Direkt: Verkauf direkt vom Hersteller an den Endkunden (z.B. eigener Webshop). Indirekt: Über Zwischenhändler (z.B. Einzelhandel).' },
    { id: '4.2_37', q: 'Was beschreibt der Produktlebenszyklus?', a: 'Die Phasen eines Produkts am Markt: Einführung, Wachstum, Reife, Sättigung, Degeneration.' },
    { id: '4.2_38', q: 'Was ist eine "Penetrationsstrategie" bei der Preisbildung?', a: 'Ein niedriger Einführungspreis, um schnell Marktanteile zu gewinnen.' },
    { id: '4.2_39', q: 'Was ist eine "Skimmingstrategie" (Abschöpfung)?', a: 'Ein hoher Einführungspreis, der später schrittweise gesenkt wird (oft bei Technik-Neuheiten).' },
    { id: '4.2_40', q: 'Was ist das AIDA-Modell in der Werbung?', a: 'Attention (Aufmerksamkeit), Interest (Interesse), Desire (Wunsch), Action (Handlung).' },

    // --- Unterpunkt 5: Wettbewerbsrecht (UWG) (10 Karten) ---
    { id: '4.2_41', q: 'Wofür steht die Abkürzung UWG?', a: 'Gesetz gegen den unlauteren Wettbewerb.' },
    { id: '4.2_42', q: 'Was ist das Hauptziel des UWG?', a: 'Schutz der Mitbewerber, der Verbraucher und der Allgemeinheit vor unfairem Wettbewerb.' },
    { id: '4.2_43', q: 'Was versteht man unter "irreführender Werbung"?', a: 'Werbung mit unwahren Angaben oder Täuschungen über Merkmale des Produkts (z.B. Preis, Herkunft).' },
    { id: '4.2_44', q: 'Ist vergleichende Werbung in Deutschland erlaubt?', a: 'Ja, sofern sie sachlich ist, nicht herabsetzend wirkt und nicht irreführend ist.' },
    { id: '4.2_45', q: 'Was ist "unzumutbare Belästigung" laut UWG?', a: 'Z.B. Telefonwerbung gegenüber Verbrauchern ohne deren vorherige ausdrückliche Einwilligung (Cold Calling).' },
    { id: '4.2_46', q: 'Was ist eine "Abmahnung" im Wettbewerbsrecht?', a: 'Die Aufforderung an einen Mitbewerber, eine unlautere Wettbewerbshandlung einzustellen (Vermeidung eines Rechtsstreits).' },
    { id: '4.2_47', q: 'Was ist eine Unterlassungserklärung?', a: 'Ein Vertrag, in dem sich der Verletzer verpflichtet, die unlautere Handlung künftig nicht zu wiederholen (meist mit Vertragsstrafe).' },
    { id: '4.2_48', q: 'Was ist "Schleichwerbung"?', a: 'Werbung, die nicht als solche erkennbar ist, sondern redaktionell getarnt wird.' },
    { id: '4.2_49', q: 'Was ist "Herabsetzung" eines Mitbewerbers?', a: 'Abfällige oder unwahre Äußerungen über die Waren, Dienstleistungen oder das Unternehmen eines Konkurrenten.' },
    { id: '4.2_50', q: 'Darf man Kunden von der Konkurrenz gezielt abwerben?', a: 'Grundsätzlich ja (Wettbewerb!), solange keine unlauteren Mittel wie Nötigung oder Täuschung eingesetzt werden.' }
    ],

    // Topic 4.3: Finanzierung & Buchführung (40 Karten)
    '4.3': [
    // --- Unterpunkt 1: Entgeltabrechnung (10 Karten) ---
    { id: '4.3_1', q: 'Nenne die Formel für die Berechnung des Netto-Entgelts.', a: 'Bruttoentgelt - Lohnsteuer - Solidaritätszuschlag (falls anfallend) - Kirchensteuer - Sozialversicherungsbeiträge (AN-Anteil).' },
    { id: '4.3_2', q: 'Welche Abzüge gehören zu den Sozialversicherungsbeiträgen des Arbeitnehmers?', a: 'Rentenversicherung, Arbeitslosenversicherung, Krankenversicherung und Pflegeversicherung.' },
    { id: '4.3_3', q: 'Was ist der Unterschied zwischen Bruttolohn und Personalkosten für den Arbeitgeber?', a: 'Personalkosten = Bruttolohn + Arbeitgeberanteil zur Sozialversicherung + sonstige Lohnnebenkosten.' },
    { id: '4.3_4', q: 'Was sind vermögenswirksame Leistungen (VWL)?', a: 'Geldleistungen des Arbeitgebers, die direkt in eine Sparform des Arbeitnehmers fließen (oft staatlich gefördert).' },
    { id: '4.3_5', q: 'In welcher Lohnsteuerklasse befindet sich ein lediger Arbeitnehmer ohne Kinder in der Regel?', a: 'Lohnsteuerklasse I.' },
    { id: '4.3_6', q: 'Wer zahlt die Lohnsteuer an das Finanzamt ab?', a: 'Der Arbeitgeber behält sie vom Bruttolohn ein und führt sie direkt an das Finanzamt ab.' },
    { id: '4.3_7', q: 'Was bedeutet die Beitragsbemessungsgrenze bei der Entgeltabrechnung?', a: 'Der Teil des Einkommens, der über dieser Grenze liegt, ist beitragsfrei für die jeweilige Sozialversicherung.' },
    { id: '4.3_8', q: 'Nenne ein Beispiel für einen steuerfreien Sachbezug.', a: 'Z.B. Jobticket, Essensgutscheine oder die private Nutzung von Arbeitsgeräten (bis zu bestimmten Freigrenzen).' },
    { id: '4.3_9', q: 'Was ist der Solidaritätszuschlag aktuell?', a: 'Eine Ergänzungsabgabe zur Einkommensteuer, die seit 2021 für die meisten Steuerzahler weggefallen ist (nur noch bei sehr hohen Einkommen).' },
    { id: '4.3_10', q: 'Was ist der Unterschied zwischen einem Lohn und einem Gehalt?', a: 'Lohn wird nach tatsächlich geleisteter Arbeitszeit berechnet (variabel); Gehalt ist ein fester monatlicher Betrag.' },

    // --- Unterpunkt 2: Finanzierung (Innen/Außen, Kredit, Leasing) (10 Karten) ---
    { id: '4.3_11', q: 'Was ist der Unterschied zwischen Innen- und Außenfinanzierung?', a: 'Innen: Kapital kommt aus dem Unternehmen selbst (z.B. Gewinne). Außen: Kapital kommt von externen Quellen (z.B. Bankkredit, neue Gesellschafter).' },
    { id: '4.3_12', q: 'Was versteht man unter Selbstfinanzierung?', a: 'Einbehaltung von Gewinnen (Thesaurierung), um Investitionen zu tätigen.' },
    { id: '4.3_13', q: 'Was ist Fremdfinanzierung?', a: 'Kapitalzufuhr durch Gläubiger, die einen Rückanspruch und Zinsanspruch haben (z.B. Darlehen).' },
    { id: '4.3_14', q: 'Was ist Eigenfinanzierung?', a: 'Kapitalzufuhr durch die Eigentümer (Einlagen) oder durch im Unternehmen erwirtschaftete Gewinne.' },
    { id: '4.3_15', q: 'Erkläre das Prinzip von Leasing.', a: 'Überlassung eines Gebrauchsgegenstandes gegen Zahlung einer Leasingrate; der Leasinggeber bleibt Eigentümer.' },
    { id: '4.3_16', q: 'Vorteil von Leasing gegenüber Kreditkauf?', a: 'Schonung der Liquidität, aktuelle Technik, steuerliche Absetzbarkeit der Raten als Aufwand.' },
    { id: '4.3_17', q: 'Was ist ein Kontokorrentkredit?', a: 'Ein kurzfristiger Kreditrahmen auf dem Geschäftskonto (Dispokredit für Unternehmen) zur Überbrückung von Liquiditätsengpässen.' },
    { id: '4.3_18', q: 'Was versteht man unter Factoring?', a: 'Der Verkauf von offenen Forderungen an einen Finanzdienstleister zur sofortigen Liquiditätsgewinnung.' },
    { id: '4.3_19', q: 'Was ist Finanzierung aus Abschreibungsgegenwerten?', a: 'In die Preise einkalkulierte Abschreibungen fließen als liquide Mittel zurück und stehen für Neuinvestitionen bereit.' },
    { id: '4.3_20', q: 'Unterschied zwischen Annuitätendarlehen und Abzahlungsdarlehen?', a: 'Annuität: Konstante Rate (Zins sinkt, Tilgung steigt). Abzahlung: Konstante Tilgung (Rate sinkt, da Zins auf Restschuld sinkt).' },

    // --- Unterpunkt 3: Kosten-Leistungsrechnung (Fix/Variabel, BEP) (10 Karten) ---
    { id: '4.3_21', q: 'Was sind Fixkosten?', a: 'Kosten, die unabhängig von der Produktionsmenge anfallen (z.B. Miete, Gehälter der Verwaltung).' },
    { id: '4.3_22', q: 'Was sind variable Kosten?', a: 'Kosten, die sich mit der Produktionsmenge ändern (z.B. Rohstoffe, Fertigungslöhne, Strom für Maschinen).' },
    { id: '4.3_23', q: 'Was ist der Break-Even-Point (Gewinnschwelle)?', a: 'Der Punkt, an dem der Erlös genau so hoch ist wie die Gesamtkosten (Gewinn = 0).' },
    { id: '4.3_24', q: 'Wie berechnet man den Deckungsbeitrag pro Stück?', a: 'Verkaufspreis pro Stück - variable Kosten pro Stück.' },
    { id: '4.3_25', q: 'Was ist das Ziel der Kostenstellenrechnung?', a: 'Verteilung der Gemeinkosten auf die Orte ihrer Entstehung im Betrieb (z.B. IT-Abteilung, Fuhrpark).' },
    { id: '4.3_26', q: 'Unterschied Einzelkosten vs. Gemeinkosten?', a: 'Einzelkosten: Direkt einem Produkt zuordenbar. Gemeinkosten: Nur indirekt über Schlüssel (z.B. Heizung) zuordenbar.' },
    { id: '4.3_27', q: 'Was versteht man unter kalkulatorischen Kosten?', a: 'Kosten, denen kein echter Aufwand in der Buchführung gegenübersteht (z.B. kalkulatorischer Unternehmerlohn).' },
    { id: '4.3_28', q: 'Was ist die Vollkostenrechnung?', a: 'Alle anfallenden Kosten (Fix- und Gemeinkosten) werden auf die Kostenträger verteilt.' },
    { id: '4.3_29', q: 'Was ist die Teilkostenrechnung (Deckungsbeitragsrechnung)?', a: 'Nur die variablen Kosten werden den Produkten direkt zugerechnet; Fixkosten werden separat betrachtet.' },
    { id: '4.3_30', q: 'Wann erzielt ein Unternehmen einen Gewinn?', a: 'Wenn die Summe der Deckungsbeiträge größer ist als die gesamten Fixkosten.' },

    // --- Unterpunkt 4: Umsatzsteuer (10 Karten) ---
    { id: '4.3_31', q: 'Was ist die Vorsteuer?', a: 'Die Umsatzsteuer, die ein Unternehmen beim Einkauf von Waren oder Dienstleistungen an andere Unternehmen zahlt.' },
    { id: '4.3_32', q: 'Was ist die Mehrwertsteuer (Umsatzsteuer-Schuld)?', a: 'Die Steuer, die das Unternehmen beim Verkauf an seine Kunden einnimmt und ans Finanzamt abführen muss.' },
    { id: '4.3_33', q: 'Was bedeutet "Vorsteuerabzugsberechtigung"?', a: 'Unternehmen dürfen die gezahlte Vorsteuer von ihrer eingenommenen Umsatzsteuer abziehen und nur die Differenz ans Finanzamt zahlen.' },
    { id: '4.3_34', q: 'Wie berechnet man die Zahllast an das Finanzamt?', a: 'Eingenommene Umsatzsteuer - gezahlte Vorsteuer = Zahllast.' },
    { id: '4.3_35', q: 'Was ist eine Vorsteuerüberhang?', a: 'Wenn die gezahlte Vorsteuer höher ist als die eingenommene Umsatzsteuer (Erstattungsanspruch gegenüber dem Finanzamt).' },
    { id: '4.3_36', q: 'Nenne die zwei Regelsätze der Umsatzsteuer in Deutschland.', a: '19 % (Regelsatz) und 7 % (ermäßigter Satz, z.B. für Lebensmittel, Bücher).' },
    { id: '4.3_37', q: 'Warum ist die Umsatzsteuer für Unternehmen ein "durchlaufender Posten"?', a: 'Weil sie wirtschaftlich nur den Endverbraucher belastet; Unternehmen holen sich die gezahlte Steuer zurück.' },
    { id: '4.3_38', q: 'Was ist die Umsatzsteuer-Identifikationsnummer (USt-IdNr.)?', a: 'Eine eindeutige Kennnummer für Unternehmen zur Abwicklung von Geschäften innerhalb der EU.' },
    { id: '4.3_39', q: 'Was ist die Kleinunternehmerregelung?', a: 'Unternehmen mit geringem Umsatz (aktuell < 22.000 €/Jahr) können sich von der Umsatzsteuerpflicht befreien lassen (keine Ausweisung, kein Abzug).' },
    { id: '4.3_40', q: 'Was muss eine ordnungsgemäße Rechnung für den Vorsteuerabzug zwingend enthalten?', a: 'U.a. Steuernummer/USt-IdNr, Rechnungsdatum, fortlaufende Nummer, Leistungszeitpunkt, Steuersatz und -betrag.' }
    ],

    // Topic 4.4: Nachhaltigkeit & Gesellschaft (40 Karten)
    '4.4': [
    // --- Unterpunkt 1: Umweltschutz (10 Karten) ---
    { id: '4.4_1', q: 'Was regelt das Elektrogesetz (ElektroG)?', a: 'Die Entsorgung, Rücknahme und Verwertung von Elektro- und Elektronikgeräten (Vermeidung von Schadstoffen in der Umwelt).' },
    { id: '4.4_2', q: 'Was ist das Ziel des Kreislaufwirtschaftsgesetzes (KrWG)?', a: 'Ressourcenschonung durch Abfallvermeidung, Wiederverwendung und Recycling.' },
    { id: '4.4_3', q: 'Was bedeutet "Green IT"?', a: 'Umweltfreundliche Gestaltung der IT über den gesamten Lebenszyklus (stromsparende Hardware, effiziente Kühlung, Recycling).' },
    { id: '4.4_4', q: 'Nenne drei Maßnahmen zur Abfallvermeidung im Büro.', a: 'Papierloses Büro (Digitalisierung), Einsatz von Mehrwegsystemen, langlebige Hardware anschaffen.' },
    { id: '4.4_5', q: 'Was ist der Unterschied zwischen Recycling und Downcycling?', a: 'Recycling: Aufbereitung zu gleichwertigen Rohstoffen. Downcycling: Aufbereitung zu Rohstoffen mit geringerer Qualität.' },
    { id: '4.4_6', q: 'Warum ist sachgerechte Entsorgung von Batterien/Akkus wichtig?', a: 'Wegen enthaltener Schwermetalle (z.B. Lithium, Blei) und der Brandgefahr bei Beschädigung.' },
    { id: '4.4_7', q: 'Was versteht man unter "nachhaltigem Ressourcenmanagement"?', a: 'Nutzung natürlicher Ressourcen so, dass sie sich regenerieren können oder effizient genutzt werden, um künftige Generationen nicht zu gefährden.' },
    { id: '4.4_8', q: 'Welchen Beitrag leistet Virtualisierung zum Umweltschutz?', a: 'Serverkonsolidierung spart physische Hardware, Platz und massiv Energie für Betrieb und Kühlung.' },
    { id: '4.4_9', q: 'Was bedeutet die Energieeffizienzklasse bei IT-Geräten?', a: 'Ein EU-weit genormtes Label zur Kennzeichnung des Energieverbrauchs (A bis G).' },
    { id: '4.4_10', q: 'Was ist "Urban Mining"?', a: 'Die Rückgewinnung von Rohstoffen (z.B. Gold, Kupfer) aus Altgeräten und Schrott statt aus dem Bergbau.' },

    // --- Unterpunkt 2: Globalisierung & Strukturwandel (10 Karten) ---
    { id: '4.4_11', q: 'Was bedeutet Globalisierung?', a: 'Die zunehmende weltweite Verflechtung in den Bereichen Wirtschaft, Politik, Kultur und Umwelt.' },
    { id: '4.4_12', q: 'Nenne einen Vorteil der Globalisierung für Unternehmen.', a: 'Größere Absatzmärkte, Zugang zu spezialisierten Fachkräften weltweit, günstigere Rohstoffe.' },
    { id: '4.4_13', q: 'Was ist ein Nachteil der Globalisierung für lokale Märkte?', a: 'Erhöhter Konkurrenzdruck durch Billiglohnländer, Gefahr von Arbeitsplatzverlagerungen (Offshoring).' },
    { id: '4.4_14', q: 'Was versteht man unter "Strukturwandel"?', a: 'Langfristige Änderung der wirtschaftlichen Struktur (z.B. Wandel von der Industriegesellschaft zur Informations-/Dienstleistungsgesellschaft).' },
    { id: '4.4_15', q: 'Was bedeutet Outsourcing?', a: 'Die Auslagerung bisher intern erbrachter Leistungen an externe spezialisierte Dienstleister.' },
    { id: '4.4_16', q: 'Was ist Offshoring?', a: 'Die Verlagerung von Geschäftsprozessen ins Ausland (meist zur Kostensenkung).' },
    { id: '4.4_17', q: 'Was ist eine Freihandelszone?', a: 'Ein Gebiet, in dem mehrere Staaten auf Zölle und Handelsbeschränkungen untereinander verzichten (z.B. EU-Binnenmarkt).' },
    { id: '4.4_18', q: 'Was beschreibt der Begriff "Digitale Transformation"?', a: 'Der durch digitale Technologien ausgelöste Veränderungsprozess in Unternehmen und der gesamten Gesellschaft.' },
    { id: '4.4_19', q: 'Was ist der "Tertiärsektor" der Wirtschaft?', a: 'Der Dienstleistungssektor (inkl. IT, Handel, Banken), der in modernen Industrienationen den größten Anteil ausmacht.' },
    { id: '4.4_20', q: 'Welchen Einfluss hat die Globalisierung auf den Datenschutz?', a: 'Erhöhte Komplexität durch Datentransfers in Länder mit unterschiedlichen Sicherheitsstandards (erfordert Abkommen wie EU-US Data Privacy Framework).' },

    // --- Unterpunkt 3: Berufliche Fortbildung (10 Karten) ---
    { id: '4.4_21', q: 'Was ist der Unterschied zwischen Fortbildung und Umschulung?', a: 'Fortbildung: Vertiefung/Erweiterung der Kenntnisse im erlernten Beruf. Umschulung: Ausbildung für einen völlig neuen Beruf.' },
    { id: '4.4_22', q: 'Warum ist "lebensbegleitendes Lernen" in der IT besonders wichtig?', a: 'Wegen der extrem kurzen Innovationszyklen und des ständigen technologischen Wandels.' },
    { id: '4.4_23', q: 'Nenne drei Formen der beruflichen Weiterbildung.', a: 'Selbststudium, Präsenzseminare, Webinare/E-Learning, Konferenzbesuche, Zertifizierungen.' },
    { id: '4.4_24', q: 'Was ist eine Aufstiegsfortbildung?', a: 'Qualifizierung für eine höhere Hierarchieebene (z.B. Fachwirt, Techniker, Meister).' },
    { id: '4.4_25', q: 'Welche Vorteile hat betriebliche Weiterbildung für den Arbeitgeber?', a: 'Höhere Produktivität, Bindung von Fachkräften, Steigerung der Innovationskraft.' },
    { id: '4.4_26', q: 'Was ist Bildungsurlaub?', a: 'Bezahlte Freistellung von der Arbeit für eine bestimmte Anzahl an Tagen pro Jahr zur beruflichen oder politischen Weiterbildung (landesabhängig).' },
    { id: '4.4_27', q: 'Was ist eine Anpassungsfortbildung?', a: 'Aktualisierung des Wissens, um mit den technischen Entwicklungen im aktuellen Job Schritt zu halten.' },
    { id: '4.4_28', q: 'Welche Rolle spielen Zertifizierungen (z.B. AWS, Cisco, ISTQB) in der IT-Karriere?', a: 'Sie dienen als standardisierter Nachweis spezieller Fachkenntnisse und erhöhen den Marktwert.' },
    { id: '4.4_29', q: 'Was ist informelles Lernen?', a: 'Lernen durch Erfahrung im Arbeitsalltag (Learning by doing), Austausch mit Kollegen oder Fachforen (ohne festen Lehrplan).' },
    { id: '4.4_30', q: 'Wer trägt in der Regel die Kosten für eine angeordnete betriebliche Fortbildung?', a: 'Der Arbeitgeber.' },

    // --- Unterpunkt 4: Diversity & Ethik (10 Karten) ---
    { id: '4.4_31', q: 'Was bedeutet "Diversity" im Unternehmen?', a: 'Die Anerkennung und Wertschätzung von Vielfalt (Geschlecht, Herkunft, Alter, Religion, Behinderung, sexuelle Orientierung).' },
    { id: '4.4_32', q: 'Nenne einen Vorteil von diversen Teams in der Softwareentwicklung.', a: 'Unterschiedliche Perspektiven führen zu kreativeren Lösungen und besserer Berücksichtigung verschiedener Nutzergruppen.' },
    { id: '4.4_33', q: 'Was ist "Algorithmische Voreingenommenheit" (Algorithmic Bias)?', a: 'Wenn Algorithmen (z.B. KI) diskriminierende Ergebnisse liefern, weil sie auf vorurteilsbehafteten Daten trainiert wurden.' },
    { id: '4.4_34', q: 'Was beschreibt die IT-Ethik?', a: 'Die moralische Verantwortung beim Umgang mit Informationstechnik (z.B. Privatsphäre, Überwachung, KI-Waffen).' },
    { id: '4.4_35', q: 'Was ist "Digitaler Humanismus"?', a: 'Die Forderung, dass die Technik dem Menschen dienen muss und nicht umgekehrt; Menschenrechte müssen digital gewahrt bleiben.' },
    { id: '4.4_36', q: 'Warum ist Barrierefreiheit auch ein ethisches Gebot?', a: 'Es geht um soziale Teilhabe und die Vermeidung von Ausgrenzung in einer digitalisierten Welt.' },
    { id: '4.4_37', q: 'Was versteht man unter "Datenethik"?', a: 'Fragen nach dem richtigen Umgang mit Datenmengen (Wem gehören Daten? Wie transparent ist die Nutzung?).' },
    { id: '4.4_38', q: 'Was bedeutet "Inklusion" am Arbeitsplatz?', a: 'Die gleichberechtigte Teilhabe aller Menschen am Berufsleben, unabhängig von körperlichen oder geistigen Einschränkungen.' },
    { id: '4.4_39', q: 'Was ist "Responsible AI"?', a: 'Die Entwicklung und Nutzung von Künstlicher Intelligenz nach ethischen Prinzipien (Transparenz, Fairness, Sicherheit).' },
    { id: '4.4_40', q: 'Welche Rolle spielen Verhaltenskodizes (Code of Conduct) in Unternehmen?', a: 'Sie legen verbindliche Regeln für ethisches und respektvolles Verhalten gegenüber Kollegen und Kunden fest.' }
    ],

    // --- MODUL 2: NETZWERKTECHNIK & INFRASTRUKTUR (Ziel: 210 Karten) ---

    // Topic 2.1: Protokolle & Schichtenmodelle (90 Karten)
    '2.1': [
    // --- 2.1.1 Schichtenmodelle: OSI vs. TCP/IP (10 Karten) ---
    { id: '2.1.1_1', q: 'Nenne the 7 Schichten des OSI-Modells in der richtigen Reihenfolge (von 1 bis 7).', a: '1. Physical, 2. Data Link, 3. Network, 4. Transport, 5. Session, 6. Presentation, 7. Application.' },
    { id: '2.1.1_2', q: 'Welche Aufgabe hat Schicht 2 (Data Link) im OSI-Modell?', a: 'Sicherung der Datenübertragung durch MAC-Adressierung, Fehlererkennung und Flusskontrolle auf der physischen Verbindung.' },
    { id: '2.1.1_3', q: 'Welche Schichten des OSI-Modells werden in der TCP/IP-Schicht "Netzzugriff" zusammengefasst?', a: 'Die Schichten 1 (Physical) und 2 (Data Link).' },
    { id: '2.1.1_4', q: 'Auf welcher OSI-Schicht arbeitet das IP-Protokoll und wie nennt man the Dateneinheit dort?', a: 'Schicht 3 (Network Layer). Die Dateneinheit heißt Paket.' },
    { id: '2.1.1_5', q: 'Nenne the 4 Schichten des TCP/IP-Referenzmodells.', a: '1. Netzzugriffsschicht (Network Access), 2. Internetschicht (Internet), 3. Transportschicht (Transport), 4. Anwendungsschicht (Application).' },
    { id: '2.1.1_6', q: 'Was versteht man unter "Kapselung" (Encapsulation) beim Schichtenmodell?', a: 'Die Daten einer höheren Schicht werden als Nutzlast (Payload) in ein Paket der tieferen Schicht verpackt und um Header/Trailer ergänzt.' },
    { id: '2.1.1_7', q: 'Welche OSI-Schicht ist für the Ende-zu-Ende-Verbindung und Fehlerkontrolle verantwortlich?', a: 'Schicht 4 (Transport Layer).' },
    { id: '2.1.1_8', q: 'Wie nennt man the Dateneinheit auf Schicht 2 (OSI)?', a: 'Frame (Rahmen).' },
    { id: '2.1.1_9', q: 'Was ist the Hauptunterschied zwischen OSI und TCP/IP Modell?', a: 'OSI ist ein theoretisches, herstellerunabhängiges Referenzmodell mit 7 Schichten. TCP/IP ist ein praxisorientiertes Modell mit 4 Schichten, auf dem das Internet basiert.' },
    { id: '2.1.1_10', q: 'Auf welcher OSI-Schicht findet the Kompression und Verschlüsselung von Daten statt?', a: 'Schicht 6 (Presentation Layer).' },

    // --- 2.1.2 Layer 2: Ethernet, MAC, ARP, VLAN (10 Karten) ---
    { id: '2.1.2_1', q: 'Wie ist eine MAC-Adresse aufgebaut?', a: '48 Bit lang, hexadezimal geschrieben. Die ersten 24 Bit sind the OUI (Herstellerkennung), the letzten 24 Bit sind eine fortlaufende Nummer (NIC).' },
    { id: '2.1.2_2', q: 'Was ist the Aufgabe des ARP-Protokolls?', a: 'Address Resolution Protocol. Es löst bekannte IP-Adressen in the zugehörigen MAC-Adressen im lokalen Netzwerk auf.' },
    { id: '2.1.2_3', q: 'Erkläre the Begriff "VLAN Tagging" nach IEEE 802.1Q.', a: 'Ein Ethernet-Frame wird um eine 4-Byte-Kennung (Tag) erweitert, the the VLAN-ID enthält. So können mehrere logische Netze über ein physisches Kabel (Trunk) übertragen werden.' },
    { id: '2.1.2_4', q: 'Was ist the Unterschied zwischen einem "Access Port" und einem "Trunk Port"?', a: 'Access Port: Gehört zu genau einem VLAN (für Endgeräte). Trunk Port: Überträgt Daten mehrerer VLANs gleichzeitig (zwischen Switches).' },
    { id: '2.1.2_5', q: 'Was beschreibt eine "Collision Domain" im Vergleich zu einer "Broadcast Domain"?', a: 'Collision Domain: Bereich, in dem Kollisionen auftreten können (nur bei Hubs/Half-Duplex). Broadcast Domain: Bereich, in dem Broadcasts (z.B. ARP) alle Teilnehmer erreichen (VLAN-Grenze).' },
    { id: '2.1.2_6', q: 'Was passiert, wenn ein Switch the Ziel-MAC eines Frames nicht in seiner MAC-Tabelle kennt?', a: 'Er führt ein "Flooding" durch: Der Frame wird an alle Ports (außer dem Eingangsport) weitergeleitet.' },
    { id: '2.1.2_7', q: 'Welchen Vorteil bietet "Full-Duplex" gegenüber "Half-Duplex"?', a: 'Gleichzeitiges Senden und Empfangen von Daten möglich. Kollisionen sind physikalisch ausgeschlossen, the Bandbreite verdoppelt sich effektiv.' },
    { id: '2.1.2_8', q: 'Was ist the "Maximum Transmission Unit" (MTU) im Standard-Ethernet?', a: '1500 Bytes (Nutzdaten eines Frames).' },
    { id: '2.1.2_9', q: 'Was beschreibt the "CSMA/CD" Verfahren?', a: 'Carrier Sense Multiple Access with Collision Detection. Ein Protokoll zur Regelung des Medienzugriffs in geteilten Medien (Ethernet-Hubs), um Kollisionen zu erkennen und zu beheben.' },
    { id: '2.1.2_10', q: 'Zweck eines "VLAN-Management" Netzwerks?', a: 'Ein separates VLAN (oft VLAN 1 standardmäßig), das nur für den administrativen Zugriff auf the Netzwerkgeräte (Switches, APs) genutzt wird.' },

    // --- 2.1.3 Spanning Tree: STP (10 Karten) ---
    { id: '2.1.3_1', q: 'Was ist the Hauptaufgabe des Spanning Tree Protocol (STP)?', a: 'Vermeidung von logischen Schleifen (Loops) in redundanten Ethernet-Netzwerken durch gezieltes Deaktivieren von Pfaden.' },
    { id: '2.1.3_2', q: 'Was passiert in einem Layer-2-Netz ohne STP bei redundanten Wegen?', a: 'Es entsteht ein Broadcast-Sturm: Broadcast-Frames kreisen endlos im Netz, vervielfältigen sich und legen the gesamte Kommunikation lahm.' },
    { id: '2.1.3_3', q: 'Welche Instanz wird im STP als erstes gewählt?', a: 'Die Root-Bridge (Zentraler Bezugspunkt für den Baum).' },
    { id: '2.1.3_4', q: 'Anhand welcher Kriterien wird the Root-Bridge gewählt?', a: 'Anhand der Bridge-ID (BID). Diese besteht aus der Priority (Standard 32768) und der MAC-Adresse. Die niedrigste BID gewinnt.' },
    { id: '2.1.3_5', q: 'Nenne the drei Port-Rollen in einem stabilen STP-Netz.', a: '1. Root Port (bester Weg zur Root-Bridge), 2. Designated Port (weiterleitender Port im Segment), 3. Blocking Port (deaktivierter Port zur Loop-Vermeidung).' },
    { id: '2.1.3_6', q: 'Wie erkennt STP the "besten" Pfad zur Root-Bridge?', a: 'Über the Pfadkosten (Path Cost). Diese richten sich nach der Bandbreite der Verbindung (höhere Bandbreite = niedrigere Kosten).' },
    { id: '2.1.3_7', q: 'Wofür steht the Abkürzung BPDU?', a: 'Bridge Protocol Data Unit. Das sind the Steuerpakete, the Switches untereinander austauschen, um the STP-Topologie zu berechnen.' },
    { id: '2.1.3_8', q: 'Was ist the Vorteil von Rapid Spanning Tree (RSTP, 802.1w)?', a: 'Viel schnellere Konvergenzzeit (Umschaltzeit bei Ausfällen) von wenigen Sekunden gegenüber bis zu 50 Sekunden beim klassischen STP.' },
    { id: '2.1.3_9', q: 'Was beschreibt "PortFast" (oder Edge Port) bei STP?', a: 'Ein Feature, das Ports für Endgeräte sofort in den Forwarding-Zustand versetzt, ohne the Listening/Learning-Phasen zu durchlaufen.' },
    { id: '2.1.3_10', q: 'Was passiert beim STP-Zustand "Blocking"?', a: 'Der Port empfängt und verarbeitet BPDUs, leitet aber keine normalen Datenframes weiter und lernt keine MAC-Adressen.' },

    // --- 2.1.4 Layer 3: IPv4 & Subnetting (10 Karten) ---
    { id: '2.1.4_1', q: 'Wie viele Bits hat eine IPv4-Adresse und wie viele Oktette sind das?', a: '32 Bit, aufgeteilt in 4 Oktette zu je 8 Bit.' },
    { id: '2.1.4_2', q: 'Was beschreibt the Subnetzmaske?', a: 'Sie trennt the IP-Adresse in einen Netzwerkanteil (Einsen) und einen Hostanteil (Nullen).' },
    { id: '2.1.4_3', q: 'Wie viele nutzbare Host-Adressen bietet ein /24 Netzwerk?', a: '2^8 - 2 = 254 Adressen (Netz- und Broadcastadresse werden abgezogen).' },
    { id: '2.1.4_4', q: 'Welche IP-Adresse hat the Subnetz 192.168.10.0/26?', a: 'Netzadresse: 192.168.10.0, Broadcast: 192.168.10.63, Erste Host: .1, Letzte Host: .62.' },
    { id: '2.1.4_5', q: 'Wofür steht the Abkürzung VLSM?', a: 'Variable Length Subnet Masking. Die Aufteilung eines IP-Bereichs in unterschiedlich große Subnetze je nach Bedarf.' },
    { id: '2.1.4_6', q: 'Nenne the drei privaten IP-Bereiche nach RFC 1918.', a: '10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16.' },
    { id: '2.1.4_7', q: 'Was ist eine "Wildcard Mask" (oft bei OSPF/ACLs genutzt)?', a: 'Das bitweise Inverse der Subnetzmaske (Einsen und Nullen vertauscht). Z.B. Maske 255.255.255.0 -> Wildcard 0.0.0.255.' },
    { id: '2.1.4_8', q: 'Was bedeutet CIDR?', a: 'Classless Inter-Domain Routing. Die Ablösung der starren Netzklassen (A, B, C) durch the Präfix-Notation (z.B. /21).' },
    { id: '2.1.4_9', q: 'Welche Adresse ist the Loopback-Adresse in IPv4?', a: '127.0.0.1 (steht für den lokalen Host selbst).' },
    { id: '2.1.4_10', q: 'Wie lautet the Subnetzmaske für ein /27 Netz in Dezimalschreibweise?', a: '255.255.255.224.' },

    // --- 2.1.5 Layer 3: IPv6 (10 Karten) ---
    { id: '2.1.5_1', q: 'Wie viele Bits hat eine IPv6-Adresse?', a: '128 Bit (8 Blöcke zu je 16 Bit, hexadezimal geschrieben).' },
    { id: '2.1.5_2', q: 'Welche zwei Regeln zur Kürzung von IPv6-Adressen gibt es?', a: '1. Führende Nullen innerhalb eines Blocks dürfen weggelassen werden. 2. Eine aufeinanderfolgende Reihe von Null-Blöcken darf EINMAL durch "::" ersetzt werden.' },
    { id: '2.1.5_3', q: 'Was beschreibt the "Interface Identifier" bei einer IPv6-Adresse?', a: 'Die hinteren 64 Bit der Adresse, the the Host innerhalb des Subnetzes eindeutig identifizieren.' },
    { id: '2.1.5_4', q: 'Woran erkennt man eine "Link-Local" Adresse bei IPv6?', a: 'Sie beginnt immer mit dem Präfix fe80::/10. Sie ist nur innerhalb eines lokalen Segments gültig und wird nicht geroutet.' },
    { id: '2.1.5_5', q: 'Gibt es bei IPv6 noch Broadcasts? Falls nein, was wird stattdessen genutzt?', a: 'Nein, IPv6 nutzt keine Broadcasts mehr. Stattdessen werden Multicasts und Anycasts verwendet.' },
    { id: '2.1.5_6', q: 'Wofür steht the Abkürzung SLAAC?', a: 'Stateless Address Autoconfiguration. Ein Verfahren, bei dem sich Hosts ohne DHCPv6 selbst eine IP-Adresse generieren (basierend auf Router Advertisements).' },
    { id: '2.1.5_7', q: 'Welche Adresse entspricht der Loopback-Adresse 127.0.0.1 in IPv6?', a: '::1' },
    { id: '2.1.5_8', q: 'Was ist eine "Unique Local Address" (ULA)?', a: 'Das IPv6-Gegenstück zu privaten IPv4-Adressen (RFC 1918). Sie beginnen mit dem Präfix fc00::/7 (meist fd00::/8).' },
    { id: '2.1.5_9', q: 'Welche Aufgabe übernimmt the ICMPv6-Protokoll?', a: 'Es ist deutlich mächtiger als ICMPv4 und übernimmt bei IPv6 auch Aufgaben wie Neighbor Discovery (Ersatz für ARP) und Fehlermeldungen.' },
    { id: '2.1.5_10', q: 'Was beschreibt "Dual-Stack"?', a: 'Der gleichzeitige Betrieb von IPv4 und IPv6 auf denselben Netzwerkgeräten und Schnittstellen während der Übergangsphase.' },

    // --- 2.1.6 Routing (10 Karten) ---
    { id: '2.1.6_1', q: 'Auf welcher OSI-Schicht arbeitet ein Router und wonach entscheidet er?', a: 'Schicht 3 (Network Layer). Er entscheidet anhand der Ziel-IP-Adresse und seiner Routing-Tabelle.' },
    { id: '2.1.6_2', q: 'Was ist the Unterschied zwischen einer statischen und einer dynamischen Route?', a: 'Statisch: Vom Admin manuell eingetragen (unflexibel, aber sicher). Dynamisch: Von Routing-Protokollen (OSPF, BGP) automatisch berechnet und bei Topologie-Änderungen angepasst.' },
    { id: '2.1.6_3', q: 'Was beschreibt the "Metrik" in einer Routing-Tabelle?', a: 'Ein Wert für the "Kosten" eines Pfades. Haben zwei Routen dasselbe Ziel, wird the Route mit der niedrigeren Metrik bevorzugt.' },
    { id: '2.1.6_4', q: 'Was ist the "Administrative Distanz" (AD)?', a: 'Ein Maß für the Vertrauenswürdigkeit einer Routing-Quelle. Je niedriger the AD, desto vertrauenswürdiger (z.B. Direkt verbunden = 0, Statisch = 1, OSPF = 110).' },
    { id: '2.1.6_5', q: 'Welche Aufgabe hat das Standard-Gateway (Default Gateway)?', a: 'Es ist the Adresse, an the alle Pakete geschickt werden, für the der Router keinen spezifischen Eintrag in seiner Routing-Tabelle hat (Route 0.0.0.0/0).' },
    { id: '2.1.6_6', q: 'Wie funktioniert ein Distance-Vector-Protokoll (z.B. RIP)?', a: 'Router tauschen ihre kompletten Routing-Tabellen mit ihren Nachbarn aus. Die Metrik basiert meist nur auf dem Hop-Count (Anzahl der Router bis zum Ziel).' },
    { id: '2.1.6_7', q: 'Was zeichnet ein Link-State-Protokoll (z.B. OSPF) aus?', a: 'Router tauschen Informationen über den Status ihrer Verbindungen (Links) aus und bauen eine vollständige Karte des Netzwerks auf (Dijkstra-Algorithmus).' },
    { id: '2.1.6_8', q: 'Was ist the Aufgabe von BGP (Border Gateway Protocol)?', a: 'Es ist das primäre Routing-Protokoll des Internets (Exterior Gateway Protocol) und verbindet verschiedene Autonome Systeme (AS).' },
    { id: '2.1.6_9', q: 'Was versteht man unter "Convergence" (Konvergenz) im Routing?', a: 'Der Zustand, in dem alle Router im Netzwerk dieselben Informationen über the Topologie haben und the Tabellen stabil sind.' },
    { id: '2.1.6_10', q: 'Was bewirkt the Befehl "tracert" (Windows) oder "traceroute" (Linux)?', a: 'Er macht den Weg eines Pakets über alle Zwischenstationen (Hops) zum Ziel sichtbar, indem er the TTL (Time to Live) schrittweise erhöht.' },

    // --- 2.1.7 Layer 4: TCP & UDP (10 Karten) ---
    { id: '2.1.7_1', q: 'Erkläre den "Three-Way-Handshake" beim Verbindungsaufbau von TCP.', a: '1. Client schickt SYN (Synchronize). 2. Server antwortet mit SYN-ACK (Synchronize-Acknowledge). 3. Client bestätigt mit ACK (Acknowledge). Erst dann ist the Verbindung aufgebaut.' },
    { id: '2.1.7_2', q: 'Nenne drei Hauptunterschiede zwischen TCP und UDP.', a: 'TCP: Verbindungsorientiert, zuverlässig (Fehlerkorrektur), langsamer (Overhead). UDP: Verbindungslos, unzuverlässig (keine Bestätigung), schneller (geringer Overhead).' },
    { id: '2.1.7_3', q: 'Was versteht man unter "Flow Control" (Flusssteuerung) bei TCP?', a: 'Ein Mechanismus (mittels Sliding Window), der verhindert, dass ein schneller Sender einen langsamen Empfänger mit Daten überflutet.' },
    { id: '2.1.7_4', q: 'Welche Aufgabe haben "Ports" auf der Transportschicht?', a: 'Sie dienen als logische Adressen, um Datenströme auf einem Host den richtigen Anwendungen zuzuordnen (0-65535).' },
    { id: '2.1.7_5', q: 'Was ist der "Well Known Ports" Bereich und nenne zwei Beispiele.', a: 'Bereich 0 bis 1023. Beispiele: Port 80 (HTTP), Port 443 (HTTPS), Port 22 (SSH), Port 25 (SMTP).' },
    { id: '2.1.7_6', q: 'Zweck der "Sequenznummer" in einem TCP-Header?', a: 'Sie ermöglicht es dem Empfänger, the Datenpakete wieder in the richtige Reihenfolge zu bringen und fehlende Pakete zu erkennen.' },
    { id: '2.1.7_7', q: 'Was beschreibt das "Sliding Window" Verfahren?', a: 'Es regelt, wie viele Daten (Bytes) der Sender ohne Bestätigung (ACK) verschicken darf. Das Fenster passt sich dynamisch der Netzlast an.' },
    { id: '2.1.7_8', q: 'Wofür wird UDP typischerweise genutzt?', a: 'Für Echtzeit-Anwendungen, bei denen Geschwindigkeit wichtiger als Vollständigkeit ist (z.B. VoIP, Video-Streaming, Online-Gaming, DNS-Abfragen).' },
    { id: '2.1.7_9', q: 'Was passiert bei TCP, wenn ein Paket nicht innerhalb einer bestimmten Zeit bestätigt wird?', a: 'Es erfolgt ein "Retransmission": Der Sender schickt das Paket erneut (Timeout).' },
    { id: '2.1.7_10', q: 'Was markiert das "FIN" Flag in einem TCP-Segment?', a: 'Das beabsichtigte Ende der Datenübertragung und den Einleitung des Verbindungsabbaus.' },

    // --- 2.1.8 Layer 7: Anwendungsprotokolle (10 Karten) ---
    { id: '2.1.8_1', q: 'Beschreibe the 4 Phasen des DHCP-Lease-Vorgangs (DORA).', a: '1. Discover (Client sucht Server). 2. Offer (Server bietet IP an). 3. Request (Client fordert IP an). 4. Acknowledge (Server bestätigt Vergabe).' },
    { id: '2.1.8_2', q: 'Was ist der Unterschied zwischen einer iterativen und einer rekursiven DNS-Abfrage?', a: 'Rekursiv: Der DNS-Server übernimmt the komplette Suche für den Client. Iterativ: Der DNS-Server gibt nur Verweise auf andere zuständige Nameserver zurück.' },
    { id: '2.1.8_3', q: 'Was regelt das SNMP-Protokoll und welche Ports nutzt es?', a: 'Simple Network Management Protocol. Dient zur Fernüberwachung und Konfiguration von Netzwerkgeräten. Port 161 (Polling), Port 162 (Traps).' },
    { id: '2.1.8_4', q: 'Unterschied zwischen HTTP und HTTPS?', a: 'HTTPS verschlüsselt the HTTP-Datenübertragung mittels TLS (Transport Layer Security) zur Sicherung von Vertraulichkeit und Integrität.' },
    { id: '2.1.8_5', q: 'Welche Aufgabe hat the "MX-Record" in einer DNS-Zone?', a: 'Mail Exchange Record. Er gibt an, welcher Mailserver für den Empfang von E-Mails dieser Domain zuständig ist.' },
    { id: '2.1.8_6', q: 'Wofür wird das FTP-Protokoll genutzt und nenne the zwei Standard-Ports.', a: 'File Transfer Protocol zum Übertragen von Dateien. Port 21 (Steuerkanal), Port 20 (Datenkanal).' },
    { id: '2.1.8_7', q: 'Was ist the Unterschied zwischen IMAP und POP3 beim E-Mail-Abruf?', a: 'POP3 lädt Mails herunter und löscht sie meist vom Server. IMAP synchronisiert Mails zwischen Server und Client (Mails bleiben auf dem Server).' },
    { id: '2.1.8_8', q: 'Was beschreibt the "TTL" (Time to Live) in einem DNS-Eintrag?', a: 'Die Zeitspanne in Sekunden, the ein DNS-Eintrag im Cache eines Resolvers gespeichert werden darf, bevor er erneut abgefragt werden muss.' },
    { id: '2.1.8_9', q: 'Aufgabe von NTP (Network Time Protocol)?', a: 'Synchronisation der Uhrzeit aller Geräte im Netzwerk mit einem präzisen Zeit-Server (wichtig für Logfiles und Authentifizierung).' },
    { id: '2.1.8_10', q: 'Was ist the Unterschied zwischen Port 443 (HTTPS) und Port 80 (HTTP)?', a: 'Port 443 ist für verschlüsselten Webverkehr (TLS), Port 80 für unverschlüsselten Klartextverkehr.' },

    // --- 2.1.9 Adressumsetzung (NAT/PAT) & QoS (10 Karten) ---
    { id: '2.1.9_1', q: 'Was ist das Hauptziel von NAT (Network Address Translation)?', a: 'Das Übersetzen von privaten IP-Adressen in eine (oder mehrere) öffentliche IP-Adressen, um mehreren Hosts den Internetzugang über eine einzige öffentliche IP zu ermöglichen.' },
    { id: '2.1.9_2', q: 'Erkläre den Unterschied zwischen statischem NAT und dynamischem NAT.', a: 'Statisch: Feste 1-zu-1 Zuordnung einer internen zu einer externen IP (gut für Server). Dynamisch: Hosts teilen sich einen Pool von öffentlichen IPs nach dem Prinzip "Wer zuerst kommt, mahlt zuerst".' },
    { id: '2.1.9_3', q: 'Was versteht man unter PAT (Port Address Translation / Masquerading)?', a: 'Die häufigste Form von NAT. Viele interne Hosts nutzen eine einzige öffentliche IP. Die Unterscheidung der Datenströme erfolgt über the Quell-Portnummern.' },
    { id: '2.1.9_4', q: 'Was bewirkt "Port-Forwarding" am Router?', a: 'Eingehende Anfragen aus dem Internet an einen bestimmten Port der öffentlichen IP werden gezielt an einen internen Host und Port weitergeleitet (z.B. für einen eigenen Webserver).' },
    { id: '2.1.9_5', q: 'Warum wird NAT oft als Sicherheitsmerkmal angesehen (obwohl es kein echtes ist)?', a: 'Weil interne IP-Adressen nach außen hin unsichtbar bleiben und direkte Verbindungsversuche aus dem Internet vom Router blockiert werden (Stateful Inspection).' },
    { id: '2.1.9_6', q: 'Was ist das Ziel von Quality of Service (QoS)?', a: 'Die Priorisierung bestimmter Datenströme (z.B. VoIP, Video) gegenüber unkritischem Verkehr (z.B. Downloads), um eine gleichbleibende Übertragungsqualität sicherzustellen.' },
    { id: '2.1.9_7', q: 'Welche Rolle spielt the "Jitter" bei der Netzwerkqualität?', a: 'Jitter beschreibt the Schwankung der Latenzzeit (Delay). Hoher Jitter führt besonders bei Echtzeit-Anwendungen wie Telefonie zu Aussetzern oder Störungen.' },
    { id: '2.1.9_8', q: 'Was beschreibt "Latenz" (Latency) im Netzwerk?', a: 'Die Verzögerungszeit, the ein Datenpaket vom Sender bis zum Empfänger benötigt.' },
    { id: '2.1.9_9', q: 'Wofür wird das "DSCP" (Differentiated Services Code Point) Feld im IP-Header genutzt?', a: 'Zur Kennzeichnung (Markierung) von Paketen mit einer bestimmten Prioritätsstufe, damit Router sie bevorzugt behandeln können.' },
    { id: '2.1.9_10', q: 'Was bedeutet "Traffic Shaping"?', a: 'Eine Methode des Bandbreitenmanagements, bei der Datenströme verzögert oder begrenzt werden, um the Einhaltung einer bestimmten Datenrate zu erzwingen.' },
    ],

  // Topic 2.2: Netzwerk-Design & Hardware (Ziel: 60 Karten)
  '2.2': [
    // --- 2.2.1 Topologien (10 Karten) ---
    { id: '2.2.1_1', q: 'Was ist das Merkmal einer Stern-Topologie?', a: 'Alle Endgeräte sind mit einem zentralen Knoten (Switch/Hub) verbunden. Fällt ein Endgerät aus, hat dies keine Auswirkungen auf the restliche Netz. Fällt der zentrale Knoten aus, steht das Netz still.' },
    { id: '2.2.1_2', q: 'Erkläre the Unterschied zwischen einer vollvermaschten und einer teilvermaschten Topologie (Mesh).', a: 'Vollvermascht: Jedes Gerät ist mit jedem anderen Gerät direkt verbunden (höchste Redundanz, teuer). Teilvermascht: Nur wichtige Knoten haben mehrere Verbindungen untereinander.' },
    { id: '2.2.1_3', q: 'Was beschreibt the "Spine-Leaf" Architektur im Rechenzentrum?', a: 'Eine zweistufige Topologie: Leaf-Switches (unten) verbinden Server, Spine-Switches (oben) verbinden alle Leaf-Switches untereinander. Sichert konstante Latenz und hohe Bandbreite (East-West Traffic).' },
    { id: '2.2.1_4', q: 'Was ist eine Baum-Topologie?', a: 'Eine hierarchische Struktur, the aus mehreren Stern-Topologien besteht, the über eine Wurzel (Root) miteinander verbunden sind (oft in Firmengebäuden über Etagen-Switches).' },
    { id: '2.2.1_5', q: 'Was ist the Unterschied zwischen einer physischen und einer logischen Topologie?', a: 'Physisch: Die tatsächliche Verkabelung der Geräte. Logisch: Der Weg, den the Datenpakete im Netzwerk nehmen (kann durch VLANs oder STP abweichen).' },
    { id: '2.2.1_6', q: 'Welche Aufgabe hat der "Terminator" in einer Bus-Topologie?', a: 'Er verhindert Signalreflexionen an den Kabelenden, the sonst the Kommunikation auf dem Bus stören würden.' },
    { id: '2.2.1_7', q: 'Nenne einen Vorteil und einen Nachteil der Ring-Topologie.', a: 'Vorteil: Einfache Verkabelung, deterministischer Zugriff. Nachteil: Fällt ein Knoten oder das Kabel aus, ist the gesamte Kommunikation im Ring unterbrochen (ohne Spezialmechanismen).' },
    { id: '2.2.1_8', q: 'Warum ist the Stern-Topologie the Standard in lokalen Netzen (LANs)?', a: 'Leicht erweiterbar, einfache Fehlersuche, hohe Ausfallsicherheit für einzelne Teilnehmer und zentrale Verwaltung über Switches.' },
    { id: '2.2.1_9', q: 'Was beschreibt the Begriff "Redundanz" in einer Netzwerktopologie?', a: 'Das Vorhandensein von zusätzlichen Wegen oder Geräten, um beim Ausfall einer Komponente the Weiterbetrieb des Netzwerks sicherzustellen.' },
    { id: '2.2.1_10', q: 'Was ist eine Punkt-zu-Punkt Verbindung (P2P)?', a: 'Die direkte Verbindung zwischen genau zwei Netzwerkgeräten ohne Zwischenstationen.' },

    // --- 2.2.2 Übertragungsmedien: Kupfer & Glasfaser (10 Karten) ---
    { id: '2.2.2_1', q: 'Was bedeutet the Bezeichnung "S/FTP" bei einem Netzwerkkabel?', a: 'Screened Foiled Twisted Pair. Das Kabel hat einen Gesamtschirm (Geflecht) und the einzelnen Adernpaare sind zusätzlich mit Folie geschirmt (sehr guter Schutz gegen EMV).' },
    { id: '2.2.2_2', q: 'Welche Bandbreite und Frequenz unterstützt ein Cat.6a Kabel?', a: 'Bis zu 10 Gbit/s bei einer Frequenz von bis zu 500 MHz.' },
    { id: '2.2.2_3', q: 'Was ist the Unterschied zwischen Single-Mode (SM) und Multi-Mode (MM) Glasfaserkabeln?', a: 'Single-Mode: Sehr dünner Kern (9µm), nur ein Lichtstrahl (Laser), für sehr lange Strecken (km). Multi-Mode: Dickerer Kern (50/62µm), mehrere Lichtstrahlen (LED/VCSEL), für kurze Strecken (Rechenzentrum).' },
    { id: '2.2.2_4', q: 'Wofür steht the Abkürzung PoE (Power over Ethernet)?', a: 'Stromversorgung von Netzwerkgeräten (z.B. IP-Telefone, Kameras, APs) direkt über das Datenkabel (Twisted Pair).' },
    { id: '2.2.2_5', q: 'Was ist ein SFP+ Modul?', a: 'Small Form-factor Pluggable. Ein kompakter, Hot-Swap-fähiger Transceiver, der in einen Switch-Port gesteckt wird, um the Verbindungstyp (z.B. Glasfaser oder Kupfer) festzulegen.' },
    { id: '2.2.2_6', q: 'Was beschreibt the "Dämpfung" bei einem Übertragungsmedium?', a: 'Der Verlust an Signalstärke über the Länge des Kabels. Sie begrenzt the maximale Reichweite (z.B. max. 100m bei Kupfer-Ethernet).' },
    { id: '2.2.2_7', q: 'Zweck eines Patchpanels im Netzwerkschrank?', a: 'Zentrale Rangierstation. Die fest verlegten Verlegekabel aus den Dosen enden hier und werden über flexible Patchkabel mit dem Switch verbunden.' },
    { id: '2.2.2_8', q: 'Was ist the Unterschied zwischen einem Patchkabel und einem Verlegekabel?', a: 'Verlegekabel: Starre Adern (Massivdraht), für feste Installation in Wänden. Patchkabel: Flexible Litzen, für the Verbindung zwischen Geräten.' },
    { id: '2.2.2_9', q: 'Was bedeutet "NEXT" (Near End Crosstalk) bei Kupferkabeln?', a: 'Nahnebensprechen. Das unerwünschte Übertreten von Signalen zwischen Adernpaaren am Stecker/Anfang des Kabels.' },
    { id: '2.2.2_10', q: 'Welchen Vorteil bietet Glasfaser gegenüber Kupferkabeln bezüglich EMV?', a: 'Glasfasern sind absolut immun gegen elektromagnetische Störungen (EMV), da sie Licht statt Strom übertragen.' },

    // --- 2.2.3 Hardware: Router, Switches, APs (10 Karten) ---
    { id: '2.2.3_1', q: 'Was ist the Hauptunterschied zwischen einem Layer-2 und einem Layer-3 Switch?', a: 'L2-Switch: Arbeitet auf Schicht 2 (MAC-Adressen) innerhalb eines Subnetzes. L3-Switch: Kann zusätzlich auf Schicht 3 (IP-Adressen) routen und somit verschiedene VLANs/Subnetze verbinden.' },
    { id: '2.2.3_2', q: 'Welche Aufgabe hat ein "WLAN-Controller" (WLC) im Unternehmen?', a: 'Zentrale Verwaltung, Konfiguration und Überwachung vieler Access Points (APs). Er steuert Funktionen wie Roaming, Kanalwahl und Sendeleistung.' },
    { id: '2.2.3_3', q: 'Was versteht man unter "Stacking" bei Switches?', a: 'Das physische und logische Verbinden mehrerer Switches zu einer Einheit, the wie ein einziger Switch verwaltet wird. Erhöht Portdichte und Redundanz.' },
    { id: '2.2.3_4', q: 'Was beschreibt the Begriff "Throughput" (Durchsatz) eines Netzwerkgeräts?', a: 'Die tatsächlich übertragene Datenmenge pro Zeiteinheit (Nutzdaten), im Gegensatz zur theoretischen Bandbreite.' },
    { id: '2.2.3_5', q: 'Welchen Zweck hat ein "Modem" bei einer Internetanbindung?', a: 'Modulator-Demodulator. Es wandelt digitale Signale des Routers in the für das Übertragungsmedium (z.B. Telefonleitung, Kabelfernsehen) passenden Signale um.' },
    { id: '2.2.3_6', q: 'Was ist ein "Managed Switch" im Vergleich zu einem "Unmanaged Switch"?', a: 'Managed: Bietet Konfigurationsmöglichkeiten (VLANs, STP, SNMP, Port-Sicherheit). Unmanaged: "Plug-and-Play", keine Konfiguration möglich, leitet Frames nur weiter.' },
    { id: '2.2.3_7', q: 'Was bewirkt the Funktion "Auto-MDI-X" an einem Switch-Port?', a: 'Der Port erkennt automatisch, ob ein Patchkabel oder ein Crossover-Kabel angeschlossen ist und passt the Sende-/Empfangsleitungen entsprechend an.' },
    { id: '2.2.3_8', q: 'Welche Aufgabe übernimmt ein Router an der Schnittstelle zwischen zwei Netzwerken?', a: 'Er leitet Pakete basierend auf der IP-Zieladresse weiter, trennt Broadcast-Domänen und führt oft Sicherheitsfunktionen (Firewall, NAT) aus.' },
    { id: '2.2.3_9', q: 'Was beschreibt the "Backplane-Kapazität" eines Switches?', a: 'Die maximale Datenmenge, the the interne Elektronik des Switches gleichzeitig zwischen allen Ports verarbeiten kann (wichtig für die Performance).' },
    { id: '2.2.3_10', q: 'Was ist ein "Fat AP" im Gegensatz zu einem "Fit AP" (Thin AP)?', a: 'Fat AP: Eigenständiges Gerät mit voller Intelligenz/Konfiguration. Fit AP: Besitzt kaum Eigenintelligenz und wird zentral von einem WLAN-Controller gesteuert.' },

    // --- 2.2.4 WLAN: Standards & Sicherheit (10 Karten) ---
    { id: '2.2.4_1', q: 'Welche Frequenzbänder nutzt der WLAN-Standard Wi-Fi 6 (802.11ax)?', a: '2,4 GHz und 5 GHz. Der neuere Standard Wi-Fi 6E nutzt zusätzlich das 6 GHz Band.' },
    { id: '2.2.4_2', q: 'Nenne the theoretische Brutto-Datenrate von Wi-Fi 6.', a: 'Bis zu 9,6 Gbit/s (bei optimalen Bedingungen und vielen Streams).' },
    { id: '2.2.4_3', q: 'Was ist the entscheidende Verbesserung von WPA3 gegenüber WPA2?', a: 'Einführung von SAE (Simultaneous Authentication of Equals) gegen Offline-Wörterbuchattacken und stärkere Verschlüsselung (GCMP-256).' },
    { id: '2.2.4_4', q: 'Erkläre the Unterschied zwischen WPA-Personal (PSK) und WPA-Enterprise.', a: 'Personal: Ein gemeinsames Passwort für alle (Pre-Shared Key). Enterprise: Jeder Nutzer authentifiziert sich individuell (z.B. über einen RADIUS-Server).' },
    { id: '2.2.4_5', q: 'Was beschreibt the "Roaming" im WLAN?', a: 'Der nahtlose Wechsel eines Clients zwischen verschiedenen Access Points innerhalb desselben Netzwerks, ohne dass the Verbindung abbricht.' },
    { id: '2.2.4_6', q: 'Welchen Vorteil bietet das 5 GHz Band gegenüber dem 2,4 GHz Band?', a: 'Höhere Datenraten möglich, mehr nicht-überlappende Kanäle und meist weniger Störungen durch andere Geräte (Mikrowellen, Bluetooth).' },
    { id: '2.2.4_7', q: 'Was versteht man unter "Beamforming" bei modernen WLAN-Routern?', a: 'Die gezielte Ausrichtung der Funksignale in the Richtung des Clients (statt kreisförmig in alle Richtungen), um Reichweite und Datenrate zu verbessern.' },
    { id: '2.2.4_8', q: 'Welche Aufgabe hat the "SSID" (Service Set Identifier)?', a: 'Der frei wählbare Name eines Funknetzwerks, über den Clients das Netzwerk finden und sich damit verbinden können.' },
    { id: '2.2.4_9', q: 'Was ist "MU-MIMO"?', a: 'Multi-User Multiple Input Multiple Output. Ermöglicht es dem Access Point, gleichzeitig Daten an mehrere Clients zu senden (statt nacheinander).' },
    { id: '2.2.4_10', q: 'Zweck eines "Gast-WLANs" (Guest Network)?', a: 'Ein separates, isoliertes WLAN für Besucher, das nur Internetzugriff erlaubt, aber keinen Zugriff auf das interne Firmennetzwerk (VLAN-Trennung).' },

    // --- 2.2.5 WAN & VPN (10 Karten) ---
    { id: '2.2.5_1', q: 'Was ist the Hauptzweck eines VPN (Virtual Private Network)?', a: 'Die Herstellung einer gesicherten, verschlüsselten Verbindung über ein unsicheres Netzwerk (z.B. das Internet), um Daten vertraulich zu übertragen.' },
    { id: '2.2.5_2', q: 'Erkläre the Unterschied zwischen einem Site-to-Site VPN und einem Remote Access VPN.', a: 'Site-to-Site: Verbindet zwei komplette Netzwerke dauerhaft miteinander (z.B. Zentrale und Filiale). Remote Access: Ein einzelner Client verbindet sich temporär mit dem Firmennetz (z.B. Homeoffice).' },
    { id: '2.2.5_3', q: 'Welche zwei Phasen werden beim Aufbau eines IPsec-Tunnels durchlaufen?', a: 'Phase 1: Authentifizierung der Partner und Aushandeln der Verschlüsselungsparameter für den Management-Kanal (IKE). Phase 2: Aushandeln der Parameter für the eigentliche Datenübertragung (IPsec-SA).' },
    { id: '2.2.5_4', q: 'Was ist the Vorteil von SSL/TLS-VPN gegenüber IPsec-VPN für Homeoffice-Nutzer?', a: 'SSL-VPN benötigt oft keine spezielle Client-Software (läuft über den Browser) und ist einfacher durch Firewalls zu führen, da es Standard-HTTPS-Ports nutzt.' },
    { id: '2.2.5_5', q: 'Was beschreibt the "Split Tunneling" bei einer VPN-Verbindung?', a: 'Nur der Verkehr zum Firmennetz wird durch den VPN-Tunnel geleitet. Normaler Internetverkehr (z.B. YouTube) geht direkt über den lokalen Internetanschluss des Nutzers.' },
    { id: '2.2.5_6', q: 'Welche Aufgabe hat das Protokoll "ESP" (Encapsulating Security Payload) in IPsec?', a: 'Es sorgt für the Verschlüsselung, Authentizität und Integrität der eigentlichen Nutzdaten im Tunnel.' },
    { id: '2.2.5_7', q: 'Was versteht man unter einer "Standleitung" (Leased Line)?', a: 'Eine permanente, exklusiv für den Kunden bereitgestellte Punkt-zu-Punkt Verbindung mit garantierter Bandbreite und hoher Verfügbarkeit.' },
    { id: '2.2.5_8', q: 'Was ist the Vorteil von SD-WAN gegenüber klassischem MPLS?', a: 'Höhere Flexibilität, geringere Kosten durch Nutzung normaler Internetanschlüsse und zentrale, softwaregesteuerte Verwaltung des gesamten WAN-Verkehrs.' },
    { id: '2.2.5_9', q: 'Zweck eines "VPN-Gateways"?', a: 'Die zentrale Komponente (oft the Firewall oder ein dedizierter Server), the the VPN-Verbindungen terminiert, entschlüsselt und ins interne Netz weiterleitet.' },
    { id: '2.2.5_10', q: 'Warum ist MFA (Multi-Faktor-Authentifizierung) für VPN-Zugänge heute Standard?', a: 'Um den Zugriff auf das Firmennetzwerk auch dann zu schützen, wenn the Benutzerpasswörter (z.B. durch Phishing) gestohlen wurden.' },

    // --- 2.2.6 Internet-Anbindungen: FTTH, MPLS, SD-WAN (10 Karten) ---
    { id: '2.2.6_1', q: 'Was bedeutet the Abkürzung FTTH?', a: 'Fiber to the Home. Das Glasfaserkabel wird bis direkt in the Wohnung oder das Bürogebäude des Kunden verlegt.' },
    { id: '2.2.6_2', q: 'Erkläre the Unterschied zwischen GPON und AON bei Glasfaser-Anbindungen.', a: 'AON (Active Optical Network): Jeder Kunde hat eine eigene, dedizierte Faser zum Point of Presence. GPON (Passive Optical Network): Mehrere Kunden teilen sich eine Faser über passive Splitter (Shared Medium).' },
    { id: '2.2.6_3', q: 'Was ist das Hauptmerkmal von MPLS (Multiprotocol Label Switching)?', a: 'Datenpakete werden nicht anhand der IP-Zieladresse geroutet, sondern erhalten kurze Labels. Dies ermöglicht extrem schnelles Switching und the einfache Erstellung privater Firmennetze über Provider-Infrastrukturen.' },
    { id: '2.2.6_4', q: 'Welchen Vorteil bietet eine symmetrische Internetanbindung (z.B. 100/100 Mbit/s) für Firmen?', a: 'Die Upload-Geschwindigkeit ist genauso hoch wie the Download-Geschwindigkeit. Wichtig für the Betrieb von eigenen Servern, VPN-Einwahl oder Cloud-Backups.' },
    { id: '2.2.6_5', q: 'Was beschreibt the Begriff "Last Mile" (Die letzte Meile)?', a: 'Der physische Leitungsabschnitt zwischen der Vermittlungsstelle des Providers und dem Hausanschluss des Kunden.' },
    { id: '2.2.6_6', q: 'Was ist the Aufgabe eines "ONT" (Optical Network Terminal) bei einem Glasfaseranschluss?', a: 'Es wandelt the optischen Signale der Glasfaser in elektrische Signale für das lokale Ethernet-Netzwerk (Router) um.' },
    { id: '2.2.6_7', q: 'Wofür wird the "G.fast" Technologie genutzt?', a: 'Um über kurze Strecken bestehender Kupferdoppeladern (Telefonkabel) sehr hohe Datenraten (bis 1 Gbit/s) zu erzielen (oft bei FTTB genutzt).' },
    { id: '2.2.6_8', q: 'Warum verdrängt SD-WAN zunehmend klassische MPLS-Netze?', a: 'Wegen der deutlich geringeren Kosten (Nutzung von Standard-Internet) und der besseren Performance für Cloud-Anwendungen (direktes Routing statt Umweg über Zentrale).' },
    { id: '2.2.6_9', q: 'Was versteht man unter "Peering" im Kontext des Internets?', a: 'Der direkte Datenaustausch zwischen zwei Internet-Service-Providern (ISP) an einem zentralen Austauschpunkt (z.B. DE-CIX).' },
    { id: '2.2.6_10', q: 'Welchen Vorteil bietet Starlink (Satelliten-Internet) für abgelegene Standorte?', a: 'Bereitstellung von Breitband-Internet über Satelliten im niedrigen Erdorbit (LEO), wodurch auch dort hohe Raten und niedrige Latenzen möglich sind, wo keine Kabel liegen.' },
    ],

    // Topic 2.3: Security & Monitoring (Ziel: 60 Karten)
    '2.3': [
    // --- 2.3.1 Netzwerksicherheit: Firewalls & Proxys (10 Karten) ---
    { id: '2.3.1_1', q: 'Was ist the Kernmerkmal einer "Stateful Inspection" Firewall?', a: 'Sie prüft nicht nur einzelne Pakete, sondern überwacht den Zustand (State) der gesamten Verbindung. Pakete werden nur durchgelassen, wenn sie zu einer bereits etablierten oder angeforderten Sitzung gehören.' },
    { id: '2.3.1_2', q: 'Erkläre den Unterschied zwischen einer NGFW (Next-Generation Firewall) und einer klassischen Firewall.', a: 'Eine klassische Firewall filtert primär auf Schicht 3 und 4 (IP/Port). Eine NGFW bietet zusätzlich Deep Packet Inspection (DPI) auf Schicht 7, integriertes IPS, Antivirus und Benutzeridentifizierung.' },
    { id: '2.3.1_3', q: 'Welche Aufgabe hat eine WAF (Web Application Firewall)?', a: 'Sie ist spezialisiert auf den Schutz von Webanwendungen vor Angriffen auf Anwendungsebene (Schicht 7), wie z.B. SQL-Injection oder Cross-Site-Scripting (XSS).' },
    { id: '2.3.1_4', q: 'Was ist der Unterschied zwischen einem Forward Proxy und einem Reverse Proxy?', a: 'Forward Proxy: Steht vor den Clients und leitet Anfragen ins Internet (oft zum Filtern/Cachen). Reverse Proxy: Steht vor den Servern und leitet Anfragen aus dem Internet an the internen Server weiter (Lastverteilung, Sicherheit).' },
    { id: '2.3.1_5', q: 'Was bewirkt the "Deep Packet Inspection" (DPI)?', a: 'Die Firewall analysiert nicht nur den Header, sondern auch den eigentlichen Inhalt (Nutzdaten) eines Pakets, um z.B. Malware oder verbotene Protokolle in erlaubten Ports zu finden.' },
    { id: '2.3.1_6', q: 'Zweck eines "Application Gateways" (Proxy-Firewall)?', a: 'Es trennt the Verbindung zwischen Sender und Empfänger komplett auf und baut zwei separate Verbindungen auf. Dadurch findet eine vollständige Inhaltsprüfung auf Anwendungsebene statt.' },
    { id: '2.3.1_7', q: 'Was beschreibt the Begriff "Egress Filtering" bei einer Firewall?', a: 'Das Filtern des ausgehenden Verkehrs vom internen Netzwerk ins Internet, um z.B. the Kommunikation von Schadsoftware mit Command-and-Control-Servern zu verhindern.' },
    { id: '2.3.1_8', q: 'Welche Rolle spielt "SSL-Inspection" (HTTPS-Scanning) bei Firewalls?', a: 'Die Firewall bricht the verschlüsselte Verbindung auf (Man-in-the-Middle), um den Inhalt zu scannen, und verschlüsselt ihn danach neu. Erfordert the Installation eines Firewall-Zertifikats auf den Clients.' },
    { id: '2.3.1_9', q: 'Was ist eine "Stufenlose" (Transparent) Firewall?', a: 'Eine Firewall, the auf Schicht 2 (Bridge-Modus) arbeitet und keine eigene IP-Adresse im Netzwerk benötigt. Sie ist für Angreifer dadurch schwerer zu entdecken.' },
    { id: '2.3.1_10', q: 'Was versteht man unter "DMZ" (Demilitarized Zone)?', a: 'Ein isoliertes Netzwerksegment zwischen dem Internet und dem internen LAN, in dem öffentlich erreichbare Server (z.B. Web, Mail) stehen.' },

    // --- 2.3.2 Angriffsformen im Netzwerk (10 Karten) ---
    { id: '2.3.2_1', q: 'Erkläre the Unterschied zwischen DoS und DDoS.', a: 'DoS (Denial of Service): Angriff von einem einzelnen System. DDoS (Distributed DoS): Gleichzeitiger, koordinierter Angriff von vielen Systemen (Botnet), um ein Ziel zu überlasten.' },
    { id: '2.3.2_2', q: 'Was ist "IP-Spoofing"?', a: 'Das Fälschen der Absender-IP-Adresse in einem Paket, um the Identität eines vertrauenswürdigen Hosts vorzutäuschen oder Antworten an ein Opfer umzuleiten (Reflektions-Angriff).' },
    { id: '2.3.2_3', q: 'Beschreibe the Ablauf eines "Man-in-the-Middle" (MITM) Angriffs.', a: 'Ein Angreifer schaltet sich unbemerkt in the Kommunikation zwischen zwei Partnern ein, liest Daten mit oder manipuliert diese, während beide glauben, direkt miteinander zu kommunizieren.' },
    { id: '2.3.2_4', q: 'Was versteht man unter "ARP-Poisoning"?', a: 'Das Senden falscher ARP-Antworten ins LAN, um the MAC-Adresse des Angreifers mit der IP des Gateways zu verknüpfen. Basis für lokale MITM-Angriffe.' },
    { id: '2.3.2_5', q: 'Was ist eine "SQL-Injection"?', a: 'Das Einschleusen bösartiger SQL-Befehle über Eingabemasken einer Webseite, um Daten aus der Datenbank auszuspähen oder zu löschen.' },
    { id: '2.3.2_6', q: 'Erkläre the Begriff "Ransomware".', a: 'Schadsoftware, the the Daten auf einem System verschlüsselt und für the Entschlüsselung (the oft nie erfolgt) ein Lösegeld fordert.' },
    { id: '2.3.2_7', q: 'Was ist "Social Engineering"?', a: 'Die psychologische Manipulation von Menschen, um sie zur Preisgabe vertraulicher Informationen (z.B. Passwörter) oder zum Ausführen von Aktionen zu bewegen.' },
    { id: '2.3.2_8', q: 'Was beschreibt the "DNS Rebinding" Angriff?', a: 'Ein bösartiges Skript im Browser des Opfers nutzt DNS-Änderungen, um the Same-Origin-Policy zu umgehen und auf Geräte im internen Netzwerk zuzugreifen.' },
    { id: '2.3.2_9', q: 'Was ist "Phishing"?', a: 'Der Versuch, über gefälschte E-Mails oder Webseiten an sensible Benutzerdaten (Logins, Kreditkarten) zu gelangen.' },
    { id: '2.3.2_10', q: 'Was versteht man unter einem "Brute-Force" Angriff?', a: 'Das automatisierte Ausprobieren aller möglichen Passwort-Kombinationen, bis das richtige gefunden wird.' },

    // --- 2.3.3 Abwehrmechanismen (10 Karten) ---
    { id: '2.3.3_1', q: 'Was ist the Unterschied zwischen IDS und IPS?', a: 'IDS (Intrusion Detection System): Erkennt Angriffe und meldet sie (passiv). IPS (Intrusion Prevention System): Erkennt Angriffe und ergreift sofort aktive Gegenmaßnahmen (aktiv), z.B. Blockieren der Absender-IP.' },
    { id: '2.3.3_2', q: 'Welche Aufgabe übernimmt ein SIEM-System (Security Information and Event Management)?', a: 'Zentrale Sammlung, Analyse und Korrelation von Logdaten aus verschiedenen Quellen (Firewalls, Server, Switches), um komplexe Angriffsmuster in Echtzeit zu erkennen.' },
    { id: '2.3.3_3', q: 'Erkläre the Begriff "Honeypot" im Sicherheitskontext.', a: 'Ein bewusst verwundbares System (Köder), das Angreifer anlocken soll, um deren Methoden zu studieren und vom echten Netzwerk abzulenken.' },
    { id: '2.3.3_4', q: 'Was ist eine "einstufige DMZ" im Vergleich zu einer "zweistufigen DMZ"?', a: 'Einstufig: Eine Firewall mit drei Interfaces (WAN, LAN, DMZ). Zweistufig: Zwei Firewalls hintereinander (meist verschiedene Hersteller), zwischen denen the DMZ liegt (höhere Sicherheit).' },
    { id: '2.3.3_5', q: 'Welchen Zweck hat das "Sandboxing"?', a: 'Das Ausführen von verdächtigen Dateien oder Programmen in einer isolierten, virtuellen Umgebung, um deren Verhalten zu beobachten, ohne das Produktivsystem zu gefährden.' },
    { id: '2.3.3_6', q: 'Was beschreibt "Port Security" an einem Switch?', a: 'Ein Sicherheitsmerkmal, das the Anzahl oder the konkreten MAC-Adressen der Geräte begrenzt, the an einem Port angeschlossen werden dürfen.' },
    { id: '2.3.3_7', q: 'Was ist the Aufgabe eines "RADIUS-Servers" bei der Netzwerksicherheit?', a: 'Zentrale Authentifizierung von Benutzern und Geräten (z.B. für WLAN nach 802.1X), um den Zugriff auf das Netzwerk zu kontrollieren.' },
    { id: '2.3.3_8', q: 'Was versteht man unter "Vulnerability Management"?', a: 'Der kontinuierliche Prozess des Identifizierens, Bewertens und Behebens von Schwachstellen in der IT-Infrastruktur.' },
    { id: '2.3.3_9', q: 'Was bewirkt "Network Access Control" (NAC)?', a: 'Ein System, das Geräte vor dem Zugriff auf das Netzwerk prüft (z.B. auf aktuellen Virenscanner, OS-Patches) und sie bei Nichterfüllung in ein Quarantäne-VLAN verschiebt.' },
    { id: '2.3.3_10', q: 'Welchen Vorteil bietet "Endpoint Detection and Response" (EDR) gegenüber klassischem Antivirus?', a: 'EDR überwacht kontinuierlich Aktivitäten auf den Endgeräten, erkennt verhaltensbasierte Anomalien (statt nur Signaturen) und ermöglicht forensische Analysen nach einem Vorfall.' },

    // --- 2.3.4 Netzwerk-Monitoring (10 Karten) ---
    { id: '2.3.4_1', q: 'Erkläre den Unterschied zwischen "Polling" und "Traps" bei SNMP.', a: 'Polling: Das Monitoring-System fragt the Geräte aktiv ab. Trap: Das Gerät sendet bei einem Ereignis (z.B. Port-Ausfall) sofort von sich aus eine Meldung an das Monitoring-System.' },
    { id: '2.3.4_2', q: 'Was ist eine "MIB" (Management Information Base) im SNMP-Kontext?', a: 'Eine hierarchische Datenbankstruktur, the definiert, welche Informationen ein Gerät über SNMP bereitstellen kann (ähnlich einem Inhaltsverzeichnis).' },
    { id: '2.3.4_3', q: 'Welche Aufgabe übernimmt ein "Syslog-Server"?', a: 'Die zentrale Entgegennahme und Speicherung von Protokollmeldungen (Logs) verschiedener Netzwerkgeräte zur späteren Analyse.' },
    { id: '2.3.4_4', q: 'Was ist "Netflow" (oder IPFIX) und was wird damit überwacht?', a: 'Ein Protokoll zum Sammeln von IP-Verkehrsstatistiken (Metadaten). Es zeigt, wer wann wie viel Daten mit wem über welches Protokoll ausgetauscht hat (Verkehrsfluss-Analyse).' },
    { id: '2.3.4_5', q: 'Nenne zwei typische Schwellenwerte (Thresholds) im Monitoring.', a: 'CPU-Auslastung > 90%, Freier Speicherplatz < 10%, Latenz > 50ms, Port-Status = Down.' },
    { id: '2.3.4_6', q: 'Was beschreibt the "Uptime" eines Systems?', a: 'Die Zeitspanne seit dem letzten Neustart des Systems. Ein Indikator für Stabilität, aber auch für fehlende Patches (wenn the Uptime zu hoch ist).' },
    { id: '2.3.4_7', q: 'Welchen Zweck hat ein "Dashboard" im Monitoring-System?', a: 'Die grafische Aufbereitung und übersichtliche Darstellung der wichtigsten Statuswerte (KPIs) des Netzwerks in Echtzeit.' },
    { id: '2.3.4_8', q: 'Was ist der Unterschied zwischen "Agent-based" und "Agentless" Monitoring?', a: 'Agent-based: Eine Software muss auf dem Zielsystem installiert werden (tieferer Einblick). Agentless: Abfrage über Standardprotokolle wie SNMP, WMI oder SSH (keine Installation nötig).' },
    { id: '2.3.4_9', q: 'Warum ist Monitoring für SLAs wichtig?', a: 'Es liefert the Beweise für the Einhaltung der vereinbarten Verfügbarkeiten und Reaktionszeiten.' },
    { id: '2.3.4_10', q: 'Was versteht man unter "Alerting"?', a: 'Die automatische Benachrichtigung der Administratoren (per E-Mail, SMS, Messenger), sobald ein Schwellenwert überschritten wird oder ein Fehler auftritt.' },

    // --- 2.3.5 Diagnose-Tools & Paketanalyse (10 Karten) ---
    { id: '2.3.5_1', q: 'Was ist the Hauptaufgabe von Wireshark?', a: 'Ein Protokoll-Analysator (Sniffer), der den Netzwerkverkehr mitschneidet, decodiert und the einzelnen Schichten der Pakete grafisch darstellt.' },
    { id: '2.3.5_2', q: 'Wofür nutzt ein Administrator das Tool "Nmap"?', a: 'Zum Scannen von Netzwerken auf aktive Hosts, offene Ports und the Identifizierung von Betriebssystemen und Diensten (Security-Audit).' },
    { id: '2.3.5_3', q: 'Welche Informationen liefert the Befehl "dig" (oder nslookup)?', a: 'Informationen über DNS-Abfragen, wie IP-Adressen zu Hostnamen, MX-Records oder the zuständigen Nameserver für eine Domain.' },
    { id: '2.3.5_4', q: 'Was wird mit dem Tool "Iperf" gemessen?', a: 'Die maximal erreichbare Bandbreite (Datendurchsatz) zwischen zwei Punkten im Netzwerk über TCP oder UDP.' },
    { id: '2.3.5_5', q: 'Was beschreibt the "Promiscuous Mode" einer Netzwerkarte?', a: 'Ein Modus, in dem the Karte alle Frames im Netzwerksegment annimmt, auch wenn diese nicht an ihre eigene MAC-Adresse adressiert sind (nötig für Wireshark).' },
    { id: '2.3.5_6', q: 'Welchen Vorteil bietet "pathping" gegenüber "ping" und "tracert"?', a: 'Es kombiniert beide Funktionen und misst über einen längeren Zeitraum the Paketverluste an jedem einzelnen Hop, was Engpässe genauer lokalisiert.' },
    { id: '2.3.5_7', q: 'Was ist der Zweck eines "Portscans"?', a: 'Das systematische Überprüfen eines Hosts auf offene TCP/UDP-Ports, um herauszufinden, welche Dienste erreichbar sind.' },
    { id: '2.3.5_8', q: 'Was bedeutet "Packet Loss" und wie wirkt er sich aus?', a: 'Verlust von Datenpaketen während der Übertragung. Führt bei TCP zu Retransmissions (langsam) und bei UDP zu Rucklern oder Tonaussetzern.' },
    { id: '2.3.5_9', q: 'Wofür wird das Tool "Netstat" genutzt?', a: 'Anzeige aktiver Netzwerkverbindungen, Routingtabellen und Schnittstellenstatistiken auf dem lokalen Host.' },
    { id: '2.3.5_10', q: 'Was versteht man unter einem "Capture Filter" in Wireshark?', a: 'Ein Filter, der bereits vor dem Mitschneiden festlegt, welche Pakete überhaupt aufgezeichnet werden sollen (spart Speicherplatz und CPU).' },

    // --- 2.3.6 Dokumentation & IPAM (10 Karten) ---
    { id: '2.3.6_1', q: 'Warum ist eine aktuelle Netzwerkdokumentation für FISIs überlebenswichtig?', a: 'Sie ist the Basis für the Fehlersuche, Planung von Erweiterungen, Einhaltung von Compliance-Vorgaben und the Disaster Recovery.' },
    { id: '2.3.6_2', q: 'Was ist der Unterschied zwischen einem physischen und einem logischen Netzplan?', a: 'Physisch: Zeigt the tatsächliche Verkabelung, Ports, Patchpanel und Gerätestandorte. Logisch: Zeigt IP-Adressen, VLANs, Subnetze und Routing-Beziehungen.' },
    { id: '2.3.6_3', q: 'Wofür steht the Abkürzung IPAM?', a: 'IP Address Management. Die zentrale Verwaltung und Planung des IP-Adressraums im Unternehmen (Ersatz für Excel-Listen).' },
    { id: '2.3.6_4', q: 'Was gehört in eine "Inventarliste" der Netzwerkkomponenten?', a: 'Gerätename, Modell, Seriennummer, Anschaffungsdatum, Standort, Firmware-Version und Support-Status.' },
    { id: '2.3.6_5', q: 'Was beschreibt the "Basiskonfiguration" (Golden Config) eines Switches?', a: 'Ein standardisiertes Set an Einstellungen (z.B. Management-IP, SNMP-Strings, SSH-Login), das auf jedem neuen Switch im Netz vorhanden sein muss.' },
    { id: '2.3.6_6', q: 'Zweck eines "Betriebshandbuchs"?', a: 'Dokumentation aller täglichen Routineaufgaben, Standardabläufe und spezifischen System-Konfigurationen für the Administratoren.' },
    { id: '2.3.6_7', q: 'Warum sollten Passwörter niemals im Klartext in der Dokumentation stehen?', a: 'Sicherheitsrisiko bei unbefugtem Zugriff. Stattdessen sollten verschlüsselte Passwort-Manager mit rollenbasierter Zugriffskontrolle genutzt werden.' },
    { id: '2.3.6_8', q: 'Was versteht man unter "VLAN-Dokumentation"?', a: 'Eine Liste aller genutzten VLAN-IDs, deren Namen (Zweck) und the zugewiesenen IP-Subnetze.' },
    { id: '2.3.6_9', q: 'Welche Rolle spielen "Etikettierungen" bei der Dokumentation?', a: 'Physische Kennzeichnung von Kabeln, Switch-Ports und Dosen, the exakt mit den Bezeichnungen im digitalen Netzplan übereinstimmen müssen.' },
    { id: '2.3.6_10', q: 'Was beschreibt the Begriff "Topology Discovery"?', a: 'Das automatisierte Erkennen und Zeichnen der Netzwerktopologie durch spezielle Software (z.B. mittels LLDP oder SNMP).' },
    ],

  // --- MODUL 3: BERATEN & QUALITÄTSSICHERUNG (Ziel: 130 Karten) ---

  // Topic 3.1: Projektmanagement & Beratung (60 Karten)
  '3.1': [
    // --- 3.1.1 Methodik: Wasserfall, V-Modell, Agil (10 Karten) ---
    { id: '3.1.1_1', q: 'Was ist das Hauptmerkmal des Wasserfallmodells?', a: 'Linearer, sequenzieller Ablauf in festen Phasen. Eine Phase muss beendet sein, bevor the nächste beginnt (Dokumentationsfokus).' },
    { id: '3.1.1_2', q: 'Wofür stehen the beiden Schenkel des V-Modells?', a: 'Links: Spezifikation (Anforderungen/Entwurf). Rechts: Verifikation (Teststufen). Mitte: Realisierung.' },
    { id: '3.1.1_3', q: 'Nenne the drei Rollen in einem Scrum-Team.', a: '1. Product Owner (PO), 2. Scrum Master (SM), 3. Developer (Entwicklungsteam).' },
    { id: '3.1.1_4', q: 'Was ist das Ziel des "Daily Scrum" Meetings?', a: 'Täglicher Austausch des Teams (max. 15 Min), um Fortschritte zu besprechen, den nächsten Tag zu planen und Hindernisse zu identifizieren.' },
    { id: '3.1.1_5', q: 'Was beschreibt the "Definition of Done" (DoD)?', a: 'Eine Checkliste von Qualitätskriterien, the ein Inkrement erfüllen muss, um als fertig und auslieferbar zu gelten.' },
    { id: '3.1.1_6', q: 'Was ist der Unterschied zwischen einem Inkrement und einem Sprint?', a: 'Sprint: Der Zeitraum der Entwicklung (z.B. 2-4 Wochen). Inkrement: Das funktionale, potenziell auslieferbare Ergebnis am Ende des Sprints.' },
    { id: '3.1.1_7', q: 'Welche Aufgabe hat der "Scrum Master"?', a: 'Er ist der "Servant Leader". Er sorgt für the Einhaltung der Scrum-Regeln, beseitigt Hindernisse und schützt das Team vor Störungen von außen.' },
    { id: '3.1.1_8', q: 'Was versteht man unter "Agiler Softwareentwicklung"?', a: 'Ein iterativer Ansatz, der Flexibilität, Kunden-Feedback und funktionierende Software gegenüber starren Plänen und Doku priorisiert.' },
    { id: '3.1.1_9', q: 'Nenne einen Vorteil des Wasserfallmodells.', a: 'Hohe Planungssicherheit, klare Meilensteine und gute Dokumentation (gut geeignet für Projekte mit stabilen Anforderungen).' },
    { id: '3.1.1_10', q: 'Was ist ein "Backlog" in Scrum?', a: 'Eine nach Priorität sortierte Liste aller gewünschten Anforderungen und Funktionen für das Produkt (Product Backlog) oder den aktuellen Sprint (Sprint Backlog).' },

    // --- 3.1.2 Netzplantechnik: FAZ, FEZ, SAZ, SEZ (10 Karten) ---
    { id: '3.1.2_1', q: 'Was bedeutet the Abkürzung FAZ im Netzplan?', a: 'Frühestmöglicher Anfangszeitpunkt eines Vorgangs.' },
    { id: '3.1.2_2', q: 'Wie berechnet man den FEZ (Frühestmöglichen Endzeitpunkt)?', a: 'FEZ = FAZ + Dauer des Vorgangs.' },
    { id: '3.1.2_3', q: 'Was beschreibt der SAZ (Spätestmöglicher Anfangszeitpunkt)?', a: 'SAZ = SEZ - Dauer. Der Zeitpunkt, zu dem ein Vorgang spätestens beginnen muss, ohne das Projektende zu verzögern.' },
    { id: '3.1.2_4', q: 'Was versteht man unter dem "Kritischen Weg" (Critical Path)?', a: 'Die Kette von Vorgängen, bei denen der Gesamtpuffer Null ist. Verzögert sich ein Vorgang hier, verzögert sich das gesamte Projekt.' },
    { id: '3.1.2_5', q: 'Wie berechnet man den Gesamtpuffer (GP)?', a: 'GP = SAZ - FAZ (oder SEZ - FEZ). Gibt an, um wie viel Zeit ein Vorgang verschoben werden kann, ohne das Projektende zu gefährden.' },
    { id: '3.1.2_6', q: 'Was ist the Unterschied zwischen dem Freien Puffer (FP) und dem Gesamtpuffer (GP)?', a: 'GP beeinflusst das Projektende. FP ist the Zeit, um the ein Vorgang verschoben werden kann, ohne den FAZ des direkten Nachfolgers zu beeinflussen.' },
    { id: '3.1.2_7', q: 'Wie findet man the Root-Bridge (Anfang) im Netzplan beim Vorwärtsrechnen?', a: 'Man startet beim ersten Vorgang mit FAZ = 0.' },
    { id: '3.1.2_8', q: 'Was muss man bei der Rückwärtsrechnung beachten, wenn ein Vorgang mehrere Nachfolger hat?', a: 'Man wählt beim Rückwärtsrechnen den kleinsten SAZ der Nachfolger als SEZ für den aktuellen Vorgang.' },
    { id: '3.1.2_9', q: 'Welche Informationen enthält ein "Knoten" in einem Standard-Netzplan?', a: 'Vorgangsname, Dauer, FAZ, FEZ, SAZ, SEZ, GP und FP.' },
    { id: '3.1.2_10', q: 'Warum ist Netzplantechnik für FISIs wichtig?', a: 'Zur Planung komplexer IT-Infrastrukturprojekte, zur Identifikation von Zeitrisiken und zur effizienten Ressourcenplanung.' },

    // --- 3.1.3 Pufferzeiten: GP & FP (10 Karten) ---
    { id: '3.1.3_1', q: 'Definition des Gesamtpuffers (GP)?', a: 'Die Zeitspanne, um the ein Vorgang gegenüber seinem frühestmöglichen Anfang verschoben werden kann, ohne das Projektende zu gefährden.' },
    { id: '3.1.3_2', q: 'Definition des Freien Puffers (FP)?', a: 'Die Zeitspanne, um the ein Vorgang verschoben werden kann, ohne den frühestmöglichen Anfang (FAZ) des direkten Nachfolgers zu beeinflussen.' },
    { id: '3.1.3_3', q: 'Wie berechnet man den Freien Puffer (FP) eines Vorgangs?', a: 'FP = FAZ(Nachfolger) - FEZ(aktueller Vorgang). Falls mehrere Nachfolger existieren, wird der kleinste FAZ genommen.' },
    { id: '3.1.3_4', q: 'Kann der Freie Puffer (FP) größer sein als der Gesamtpuffer (GP)?', a: 'Nein, der FP ist immer kleiner oder gleich dem GP.' },
    { id: '3.1.3_5', q: 'Was bedeutet es für einen Vorgang, wenn GP = 0 ist?', a: 'Der Vorgang liegt auf dem kritischen Weg. Jede Verzögerung führt sofort zu einer Verschiebung des Projektendes.' },
    { id: '3.1.3_6', q: 'Warum ist the Unterscheidung zwischen GP und FP für Projektleiter wichtig?', a: 'Sie zeigt the Flexibilität im Zeitplan. GP zeigt the Sicherheit zum Projektende, FP the Unabhängigkeit gegenüber dem nächsten Arbeitsschritt.' },
    { id: '3.1.3_7', q: 'Was passiert mit dem Gesamtpuffer (GP) nachfolgender Vorgänge, wenn ein Vorgang seinen GP komplett aufbraucht?', a: 'Der GP der nachfolgenden Vorgänge auf diesem Pfad verringert sich entsprechend (bis auf Null).' },
    { id: '3.1.3_8', q: 'Welchen GP hat der letzte Vorgang in einem abgeschlossenen Netzplan standardmäßig?', a: 'In der Regel Null, da er das Projektende definiert.' },
    { id: '3.1.3_9', q: 'Was ist the "Vorwärtsrechnung" im Netzplan?', a: 'Das Berechnen der frühestmöglichen Zeitpunkte (FAZ, FEZ) vom Projektstart bis zum Projektende.' },
    { id: '3.1.3_10', q: 'Was ist the "Rückwärtsrechnung" im Netzplan?', a: 'Das Berechnen der spätestmöglichen Zeitpunkte (SAZ, SEZ) vom Projektende zurück zum Projektstart.' },

    // --- 3.1.4 Projektstrukturplan: PSP (10 Karten) ---
    { id: '3.1.4_1', q: 'Was ist the Hauptzweck eines Projektstrukturplans (PSP)?', a: 'Die vollständige, hierarchische Darstellung aller wesentlichen Elemente (Aufgaben) eines Projekts zur Schaffung von Transparenz und Struktur.' },
    { id: '3.1.4_2', q: 'Nenne the drei gängigen Gliederungsprinzipien eines PSP.', a: '1. Funktionsorientiert (Tätigkeiten), 2. Objektorientiert (Bauteile/Komponenten), 3. Phasenorientiert (Projektablauf).' },
    { id: '3.1.4_3', q: 'Was beschreibt the Begriff "Arbeitspaket" im PSP?', a: 'Die kleinste, nicht weiter zu unterteilende Einheit im PSP, the in sich abgeschlossen ist und einem Verantwortlichen zugeordnet werden kann.' },
    { id: '3.1.4_4', q: 'Was ist the Unterschied zwischen einem PSP und einem Netzplan?', a: 'PSP zeigt "Was" alles getan werden muss (hierarchisch). Netzplan zeigt "Wann" und in welcher logischen Reihenfolge es getan wird (zeitlich).' },
    { id: '3.1.4_5', q: 'Welche Ebene im PSP steht ganz oben?', a: 'Das Gesamtprojekt (Wurzelelement).' },
    { id: '3.1.4_6', q: 'Zweck der Kodierung (Nummerierung) im PSP (z.B. 1.2.1)?', a: 'Eindeutige Identifizierung der Aufgaben und Darstellung der hierarchischen Zugehörigkeit.' },
    { id: '3.1.4_7', q: 'Warum sollte ein PSP vollständig sein (100%-Regel)?', a: 'Damit keine Aufgaben vergessen werden und the Aufwands-, Kosten- und Zeitplanung auf einer soliden Basis steht.' },
    { id: '3.1.4_8', q: 'Was versteht man unter der "Ablauforganisation" im Projektmanagement?', a: 'Die zeitliche und logische Abfolge der Arbeitsschritte (wird oft aus dem PSP abgeleitet und im Netzplan visualisiert).' },
    { id: '3.1.4_9', q: 'Welche Information gehört typischerweise in eine Arbeitspaket-Beschreibung?', a: 'Ziele, Inhalte, Verantwortliche, Ressourcen, geschätzter Aufwand, Start- und Endtermine.' },
    { id: '3.1.4_10', q: 'Unterschied Top-Down vs. Bottom-Up Erstellung des PSP?', a: 'Top-Down: Vom Ganzen ins Detail (Verschachtelung). Bottom-Up: Sammeln aller Einzelaufgaben und anschließendes Gruppieren.' },

    // --- 3.1.5 Präsentation & Medieneinsatz (10 Karten) ---
    { id: '3.1.5_1', q: 'Welche Rolle spielt the "Zielgruppenanalyse" vor einer Präsentation?', a: 'Sie bestimmt the Tiefe und Sprache des Inhalts (z.B. technisches Detail für Admins vs. Nutzenfokus für Geschäftsführer).' },
    { id: '3.1.5_2', q: 'Nenne the "7-mal-7-Regel" für Präsentationsfolien.', a: 'Maximal 7 Zeilen pro Folie und maximal 7 Wörter pro Zeile, um the Lesbarkeit und Fokussierung zu gewährleisten.' },
    { id: '3.1.5_3', q: 'Was ist der Vorteil von Visualisierungen (Bilder, Diagramme) gegenüber reinem Text?', a: 'Informationen werden schneller aufgenommen, bleiben länger im Gedächtnis und lockern the Präsentation auf (Bildüberlegenheitseffekt).' },
    { id: '3.1.5_4', q: 'Warum ist "Lampenfieber" vor der Abschlusspräsentation normal und wie geht man damit um?', a: 'Es ist eine natürliche Stressreaktion. Abhilfe: Gute Vorbereitung, Atemübungen, positive Visualisierung und ein sicherer Einstieg.' },
    { id: '3.1.5_5', q: 'Welchen Zweck hat ein "Handout" bei einer Präsentation?', a: 'Es dient den Zuhörern als Gedächtnisstütze für the Zeit nach der Präsentation und enthält oft weiterführende Details oder Quellen.' },
    { id: '3.1.5_6', q: 'Was beschreibt the "Medienmix" in einer Präsentation?', a: 'Der abwechslungsreiche Einsatz verschiedener Medien (z.B. Beamer, Flipchart, Whiteboard, Live-Demo), um the Aufmerksamkeit hochzuhalten.' },
    { id: '3.1.5_7', q: 'Wie sollte the Körpersprache während einer Präsentation idealerweise sein?', a: 'Offene Haltung, Blickkontakt zum Publikum, angemessene Gestik zur Unterstützung des Gesagten und fester Stand.' },
    { id: '3.1.5_8', q: 'Was ist der Unterschied zwischen einer informierenden und einer überzeugenden Präsentation?', a: 'Informierend: Sachliche Wissensvermittlung. Überzeugend: Beeinflussung der Meinung oder Herbeiführen einer Entscheidung (z.B. Investitionsfreigabe).' },
    { id: '3.1.5_9', q: 'Warum ist the "Sicherung der Technik" (Backup-Plan) vor der Präsentation wichtig?', a: 'Um bei Ausfall von Beamer, Laptop oder Internet handlungsfähig zu bleiben (z.B. PDF auf USB-Stick, ausgedruckte Notizen).' },
    { id: '3.1.5_10', q: 'Was versteht man unter der "AIDA-Formel" in Bezug auf Präsentationen?', a: 'Attention (Aufmerksamkeit erregen), Interest (Interesse wecken), Desire (Wunsch wecken), Action (Handlungsaufforderung).' },

    // --- 3.1.6 Kundenberatung & Bedarfsanalyse (10 Karten) ---
    { id: '3.1.6_1', q: 'Was ist das Ziel der Bedarfsanalyse im Kundengespräch?', a: 'Herauszufinden, was der Kunde wirklich benötigt (Probleme, Ziele, Wünsche), um eine passgenaue Lösung anzubieten.' },
    { id: '3.1.6_2', q: 'Unterschied zwischen offenen und geschlossenen Fragen?', a: 'Offen (W-Fragen): Animieren zum Erzählen ("Wie nutzen Sie...?"). Geschlossen: Erfordern nur Ja/Nein ("Haben Sie ein Backup?").' },
    { id: '3.1.6_3', q: 'Was gehört in ein professionelles "Angebot"?', a: 'Leistungsbeschreibung, Preise, Liefertermine, Zahlungsbedingungen und Bezugnahme auf the AGB.' },
    { id: '3.1.6_4', q: 'Wie geht man professionell mit Einwänden des Kunden um (Einwandbehandlung)?', a: 'Zuhören, Verständnis zeigen, the wahren Grund hinter dem Einwand finden und Nutzenargumente liefern (z.B. Referenz-Methode, Bumerang-Methode).' },
    { id: '3.1.6_5', q: 'Was beschreibt the Begriff "After-Sales-Service"?', a: 'Die Betreuung des Kunden nach dem Kauf (z.B. Support, Schulungen, Wartung), um the Kundenzufriedenheit und langfristige Bindung zu sichern.' },
    { id: '3.1.6_6', q: 'Warum ist the Protokollierung von Kundengesprächen wichtig?', a: 'Zur Dokumentation getroffener Vereinbarungen, zur Vorbereitung von Folgeterminen und als rechtliche Absicherung.' },
    { id: '3.1.6_7', q: 'Was versteht man unter "Up-Selling" im Beratungskontext?', a: 'Dem Kunden eine höherwertige, teurere Version eines Produkts anbieten, the seinen Bedarf noch besser deckt.' },
    { id: '3.1.6_8', q: 'Was versteht man unter "Cross-Selling" (Querverkauf)?', a: 'Dem Kunden ergänzende Produkte oder Dienstleistungen passend zum Hauptkauf anbieten (z.B. Servicevertrag zum Serverkauf).' },
    { id: '3.1.6_9', q: 'Zweck einer "Einweisung" des Kunden in ein neues System?', a: 'Sicherstellen, dass der Kunde the Lösung effektiv nutzen kann, Fehlbedienungen vermeiden und the Akzeptanz der neuen Lösung erhöhen.' },
    { id: '3.1.6_10', q: 'Was ist eine "Nutzwertargumentation"?', a: 'Dem Kunden nicht nur technische Merkmale aufzählen, sondern den konkreten Nutzen (Vorteil) für sein Unternehmen erklären (Merkmal -> Vorteil -> Nutzen).' },
  ],

  // Topic 3.2: Qualität & IT-Sicherheit (Methodik) (70 Karten)
  '3.2': [
    // --- 3.2.1 Qualitätsmanagement: PDCA & ISO 9001 (10 Karten) ---
    { id: '3.2.1_1', q: 'Erkläre den PDCA-Zyklus (Deming-Kreis).', a: 'Plan (Planen), Do (Umsetzen), Check (Überprüfen), Act (Verbessern/Standardisieren). Ein iteratives Modell zur kontinuierlichen Prozessverbesserung.' },
    { id: '3.2.1_2', q: 'Was ist das Hauptziel des Qualitätsmanagements (QM)?', a: 'Die systematische Sicherstellung und Verbesserung der Qualität von Produkten oder Dienstleistungen zur Steigerung der Kundenzufriedenheit.' },
    { id: '3.2.1_3', q: 'Wofür steht the Abkürzung KVP?', a: 'Kontinuierlicher Verbesserungsprozess. Das ständige Bestreben, Prozesse in kleinen Schritten immer weiter zu optimieren.' },
    { id: '3.2.1_4', q: 'Was beschreibt the Norm ISO 9001?', a: 'Den weltweit anerkannten Standard für Anforderungen an ein Qualitätsmanagementsystem (QMS) in Unternehmen.' },
    { id: '3.2.1_5', q: 'Was ist the Unterschied zwischen Qualitätssicherung (QS) und Qualitätsmanagement (QM)?', a: 'QM ist das übergeordnete System/Strategie. QS umfasst the konkreten operativen Maßnahmen (z.B. Tests), um the Qualitätsanforderungen zu erfüllen.' },
    { id: '3.2.1_6', q: 'Was versteht man unter einem "Audit"?', a: 'Eine systematische Untersuchung, ob Prozesse, Richtlinien oder Anforderungen erfüllt werden (intern oder extern durch Zertifizierer).' },
    { id: '3.2.1_7', q: 'Welche Rolle spielt the Dokumentation im Qualitätsmanagement?', a: 'Sie sichert the Nachvollziehbarkeit von Prozessen, dient als Wissensbasis und ist Voraussetzung für Zertifizierungen.' },
    { id: '3.2.1_8', q: 'Was beschreibt the Begriff "Null-Fehler-Strategie"?', a: 'Ein Ziel des QM, bei dem durch Fehlerprävention bereits bei der Entstehung von Leistungen jegliche Fehler vermieden werden sollen.' },
    { id: '3.2.1_9', q: 'Warum ist Kundenfeedback für den PDCA-Zyklus essenziell?', a: 'Es liefert the notwendigen Daten für the "Check"-Phase, um Abweichungen zwischen Soll-Qualität und Ist-Qualität zu erkennen.' },
    { id: '3.2.1_10', q: 'Was ist ein "Qualitätszirkel"?', a: 'Eine moderierte Gruppe von Mitarbeitern, the sich regelmäßig trifft, um Probleme im eigenen Arbeitsbereich zu analysieren und Lösungsvorschläge zu erarbeiten.' },

    // --- 3.2.2 Testverfahren: Unit bis Abnahme (10 Karten) ---
    { id: '3.2.2_1', q: 'Was ist ein Unit-Test (Modultest)?', a: 'Der Test der kleinsten funktionalen Einheit des Codes (z.B. eine einzelne Methode oder Klasse) in Isolation.' },
    { id: '3.2.2_2', q: 'Welches Ziel verfolgt der Integrationstest?', a: 'Das Testen des Zusammenspiels mehrerer Komponenten oder Subsysteme über deren Schnittstellen.' },
    { id: '3.2.2_3', q: 'Was wird beim Systemtest geprüft?', a: 'Das komplette System gegen the ursprünglichen funktionalen und nicht-funktionalen Anforderungen in einer produktionsnahen Umgebung.' },
    { id: '3.2.2_4', q: 'Was ist der Abnahmetest (User Acceptance Test - UAT)?', a: 'Der abschließende Test durch den Kunden oder Endnutzer, um zu entscheiden, ob the Software/Infrastruktur vertraglich erfüllt ist.' },
    { id: '3.2.2_5', q: 'Erkläre the Begriff "Regressionstest".', a: 'Wiederholung von bereits erfolgreichen Tests nach Änderungen am System, um sicherzustellen, dass keine neuen Fehler in bestehenden Funktionen eingebaut wurden.' },
    { id: '3.2.2_6', q: 'Was versteht man unter einem "Smoke Test" (Rauchtest)?', a: 'Ein oberflächlicher Kurztest der wichtigsten Kernfunktionen nach einem Build, um grobe Fehler sofort zu identifizieren.' },
    { id: '3.2.2_7', q: 'Was ist der Unterschied zwischen Verifikation und Validierung?', a: 'Verifikation: "Wird das Produkt richtig gebaut?" (Prozessprüfung). Validierung: "Wird das richtige Produkt gebaut?" (Erfüllung des Kundennutzens).' },
    { id: '3.2.2_8', q: 'Welche Aufgabe haben "Stubs" und "Mocks" beim Testen?', a: 'Platzhalter für noch nicht existierende oder externe Komponenten, um the zu testende Einheit isolieren zu können.' },
    { id: '3.2.2_9', q: 'Was beschreibt the "Testabdeckung" (Code Coverage)?', a: 'Ein Maß dafür, wie viel Prozent des Quellcodes durch automatisierte Tests tatsächlich ausgeführt wurde.' },
    { id: '3.2.2_10', q: 'Warum sollten Tests idealerweise von anderen Personen durchgeführt werden als the Entwicklung/Installation?', a: 'Vermeidung von "Betriebsblindheit" und objektivere Bewertung der Ergebnisse.' },

    // --- 3.2.3 Testmethoden: Black-Box & White-Box (10 Karten) ---
    { id: '3.2.3_1', q: 'Was charakterisiert den Black-Box-Test?', a: 'Das Testen ohne Kenntnis des internen Quellcodes oder Aufbaus. Der Fokus liegt allein auf dem funktionalen Verhalten (Input -> Output).' },
    { id: '3.2.3_2', q: 'Was charakterisiert den White-Box-Test?', a: 'Das Testen mit Kenntnis der internen Logik und des Quellcodes. Es wird geprüft, ob alle Pfade, Bedingungen und Schleifen korrekt durchlaufen werden.' },
    { id: '3.2.3_3', q: 'Erkläre das Ziel der "Äquivalenzklassenbildung".', a: 'Einteilung von Testdaten in Gruppen (Klassen), the vom System gleich behandelt werden. Pro Klasse wird nur ein Testfall benötigt, um den Testaufwand zu reduzieren.' },
    { id: '3.2.3_4', q: 'Warum ist the "Grenzwertanalyse" beim Testen so wichtig?', a: 'Weil Fehler besonders häufig an den Grenzen von Wertebereichen (z.B. 0, 100, Übergang zwischen Rabattstufen) auftreten.' },
    { id: '3.2.3_5', q: 'Was ist ein statischer Test?', a: 'Die Prüfung von Dokumenten oder Quellcode, OHNE das Programm auszuführen (z.B. Code-Reviews, Walkthroughs, statische Code-Analyse).' },
    { id: '3.2.3_6', q: 'Was ist ein dynamischer Test?', a: 'Die Prüfung des Systems durch tatsächliche Ausführung des Programmcodes mit Testdaten.' },
    { id: '3.2.3_7', q: 'Welchen Vorteil bietet the "Grey-Box-Test"?', a: 'Kombination aus beidem: Der Tester hat grobe Kenntnis der Architektur (z.B. Datenbank-Struktur), testet aber über the funktionale Oberfläche.' },
    { id: '3.2.3_8', q: 'Was versteht man unter "Explorativem Testen"?', a: 'Ein freies Testen ohne vordefinierte Testfälle, bei dem der Tester basierend auf Erfahrung und Intuition Schwachstellen sucht.' },
    { id: '3.2.3_9', q: 'Was gehört in ein professionelles "Fehlerprotokoll" (Bug Report)?', a: 'ID, Titel, Beschreibung, Schritte zur Reproduktion, erwartetes vs. tatsächliches Ergebnis, Priorität, Status und Screenshots/Logs.' },
    { id: '3.2.3_10', q: 'Warum ist the Dokumentation erfolgreicher Tests genauso wichtig wie the von Fehlern?', a: 'Als Beweis für the vertraglich vereinbarte Qualität und zur Nachvollziehbarkeit bei späteren Regressionstests.' },

    // --- 3.2.4 IT-Grundschutz (BSI) & Standards (10 Karten) ---
    { id: '3.2.4_1', q: 'Was ist the Hauptaufgabe des BSI (Bundesamt für Sicherheit in der Informationstechnik)?', a: 'Die Förderung der IT-Sicherheit in Deutschland durch Standards, Beratung und Zertifizierungen (z.B. für Behörden und KRITIS-Betreiber).' },
    { id: '3.2.4_2', q: 'Erkläre das Prinzip des "BSI IT-Grundschutz".', a: 'Ein ganzheitliches Modell zur Absicherung von Institutionen durch the Anwendung standardisierter Sicherheitsmaßnahmen (Bausteine).' },
    { id: '3.2.4_3', q: 'Nenne the drei grundlegenden Schutzziele der IT-Sicherheit.', a: 'Vertraulichkeit (Confidentiality), Integrität (Integrity), Verfügbarkeit (Availability).' },
    { id: '3.2.4_4', q: 'Was beschreibt the "Schutzbedarfsfeststellung" im IT-Grundschutz?', a: 'Die Bewertung der Auswirkungen eines Schadens bei Verlust der Schutzziele für jedes IT-System (Stufen: Normal, Hoch, Sehr Hoch).' },
    { id: '3.2.4_5', q: 'Was ist ein "Informationsverbund" laut BSI?', a: 'Die Gesamtheit aller infrastrukturellen, organisatorischen, personellen und technischen Komponenten, the der Erfüllung von Aufgaben in einem Bereich dienen.' },
    { id: '3.2.4_6', q: 'Was beschreibt the Norm ISO/IEC 27001?', a: 'Den internationalen Standard für ein Informationssicherheits-Managementsystem (ISMS). Sie ist prozessorientiert und risikobasiert.' },
    { id: '3.2.4_7', q: 'Was versteht man unter "KRITIS"?', a: 'Kritische Infrastrukturen (z.B. Energie, Wasser, Gesundheit, Finanzen), deren Ausfall dramatische Folgen für the Gesellschaft hätte und the deshalb besonders geschützt werden müssen.' },
    { id: '3.2.4_8', q: 'Zweck eines "Sicherheitskonzepts"?', a: 'Systematische Dokumentation der Sicherheitsziele, Bedrohungen und konkreten Gegenmaßnahmen für einen Informationsverbund.' },
    { id: '3.2.4_9', q: 'Was ist ein "Baustein" im BSI IT-Grundschutz-Kompendium?', a: 'Ein Modul, das Gefährdungen und Anforderungen für ein spezifisches Thema (z.B. Windows 10, Serverraum, Backup) beschreibt.' },
    { id: '3.2.4_10', q: 'Warum ist the Sensibilisierung der Mitarbeiter (Security Awareness) Teil des IT-Grundschutzes?', a: 'Weil der Mensch oft das schwächste Glied in der Sicherheitskette ist (Schutz vor Social Engineering, Phishing).' },

    // --- 3.2.5 Risikoanalyse: Matrix & Bewertung (10 Karten) ---
    { id: '3.2.5_1', q: 'Definition von "Risiko" im IT-Kontext?', a: 'Die Kombination aus der Eintrittswahrscheinlichkeit einer Bedrohung und dem daraus resultierenden Schadensausmaß für the Institution.' },
    { id: '3.2.5_2', q: 'Wie funktioniert eine "Risikomatrix"?', a: 'Ein Diagramm mit zwei Achsen (Eintrittswahrscheinlichkeit vs. Schadenshöhe). Risiken werden in the Felder eingetragen, um the Priorität der Gegenmaßnahmen zu bestimmen (z.B. Ampelsystem).' },
    { id: '3.2.5_3', q: 'Was beschreibt the Begriff "Restrisiko"?', a: 'Das Risiko, das nach Umsetzung aller geplanten Sicherheitsmaßnahmen noch verbleibt. Es muss von der Geschäftsführung explizit akzeptiert werden.' },
    { id: '3.2.5_4', q: 'Nenne the vier gängigen Strategien zum Risikomanagement.', a: '1. Risikovermeidung (Ursache eliminieren), 2. Risikoreduktion (Maßnahmen treffen), 3. Risikotransfer (Versicherung), 4. Risikoakzeptanz (Restrisiko tragen).' },
    { id: '3.2.5_5', q: 'Was ist eine "Gefährdung" im Unterschied zu einer "Schwachstelle"?', a: 'Gefährdung: Ein Ereignis, das einen Schaden verursachen kann (z.B. Blitzschlag). Schwachstelle: Eine Sicherheitslücke, the the Schaden erst ermöglicht (z.B. fehlender Blitzschutz).' },
    { id: '3.2.5_6', q: 'Warum ist eine regelmäßige Risikoanalyse notwendig?', a: 'Weil sich Bedrohungslagen (neue Malware) und the eigene IT-Infrastruktur (neue Systeme) ständig ändern.' },
    { id: '3.2.5_7', q: 'Was versteht man unter einer "quantitativen" Risikoanalyse?', a: 'Die Bewertung von Risiken in konkreten Zahlenwerten (z.B. Euro-Betrag des Schadens pro Jahr).' },
    { id: '3.2.5_8', q: 'Was versteht man unter einer "qualitativen" Risikoanalyse?', a: 'Die Bewertung von Risiken in beschreibenden Stufen (z.B. Gering, Mittel, Hoch) basierend auf Expertenwissen.' },
    { id: '3.2.5_9', q: 'Was ist the Zweck einer "Asset-Inventarisierung" vor der Risikoanalyse?', a: 'Herauszufinden, welche Werte (Hardware, Daten, Prozesse) überhaupt geschützt werden müssen.' },
    { id: '3.2.5_10', q: 'Wer trägt letztlich the Verantwortung für das Risikomanagement im Unternehmen?', a: 'Die Unternehmensleitung (Geschäftsführung/Vorstand).' },

    // --- 3.2.6 Kryptografie: Grundlagen & Verfahren (10 Karten) ---
    { id: '3.2.6_1', q: 'Was zeichnet the symmetrische Verschlüsselung aus?', a: 'Sender und Empfänger nutzen denselben geheimen Schlüssel zum Ver- und Entschlüsseln (z.B. AES).' },
    { id: '3.2.6_2', q: 'Was ist das Hauptproblem der symmetrischen Verschlüsselung?', a: 'Der sichere Austausch des Schlüssels zwischen den Kommunikationspartnern (Key Distribution Problem).' },
    { id: '3.2.6_3', q: 'Erkläre das Prinzip der asymmetrischen Verschlüsselung.', a: 'Jeder Partner hat ein Schlüsselpaar: Ein öffentlicher Schlüssel (zum Verschlüsseln) und ein privater Schlüssel (zum Entschlüsseln).' },
    { id: '3.2.6_4', q: 'Was ist eine "Hashfunktion"?', a: 'Eine Einwegfunktion, the aus einer beliebig langen Eingabe eine feste Zeichenfolge (Hashwert) erzeugt. Rückrechnung ist unmöglich.' },
    { id: '3.2.6_5', q: 'Wofür wird der AES-Standard typischerweise genutzt?', a: 'Zur schnellen und sicheren Verschlüsselung großer Datenmengen (z.B. Festplatten, VPN-Tunnel, Datenbanken).' },
    { id: '3.2.6_6', q: 'Warum ist RSA ein asymmetrisches Verfahren?', a: 'Weil es auf mathematischen Problemen (Primfaktorzerlegung) basiert, the das Berechnen des privaten Schlüssels aus dem öffentlichen Schlüssel praktisch unmöglich machen.' },
    { id: '3.2.6_7', q: 'Was beschreibt the Begriff "Kollision" bei Hashfunktionen?', a: 'Wenn zwei unterschiedliche Eingabedaten denselben Hashwert ergeben (ein Zeichen für eine unsichere Hashfunktion).' },
    { id: '3.2.6_8', q: 'Zweck von "Salting" bei der Speicherung von Passwörtern?', a: 'Anhängen eines zufälligen Wertes vor dem Hashen, um Rainbow-Table-Angriffe (vorausberechnete Hashes) zu verhindern.' },
    { id: '3.2.6_9', q: 'Was ist the Unterschied zwischen Verschlüsselung und Codierung?', a: 'Verschlüsselung: Geheimhaltung mittels Schlüssel. Codierung: Umwandlung von Daten in ein anderes Format (z.B. Base64) ohne Geheimhaltung.' },
    { id: '3.2.6_10', q: 'Welche Rolle spielen Schlüssellängen (z.B. 256 Bit) für the Sicherheit?', a: 'Je länger der Schlüssel, desto höher der Aufwand für einen Brute-Force-Angriff (exponentieller Anstieg der Kombinationen).' },

    // --- 3.2.7 Digitale Signatur & Zertifikate (10 Karten) ---
    { id: '3.2.7_1', q: 'Welche Schutzziele garantiert eine digitale Signatur?', a: 'Authentizität (Echtheit des Senders) und Integrität (Unverändertheit der Daten).' },
    { id: '3.2.7_2', q: 'Wie wird eine digitale Signatur technisch erstellt?', a: 'Der Sender hasht the Nachricht und verschlüsselt diesen Hashwert mit seinem PRIVATEN Schlüssel.' },
    { id: '3.2.7_3', q: 'Wie prüft der Empfänger eine digitale Signatur?', a: 'Er entschlüsselt the Signatur mit dem ÖFFENTLICHEN Schlüssel des Senders und vergleicht das Ergebnis mit dem selbst berechneten Hash der Nachricht.' },
    { id: '3.2.7_4', q: 'Was ist ein "digitales Zertifikat" (z.B. X.509)?', a: 'Ein elektronischer Datensatz, der the Identität eines Inhabers bestätigt und seinen öffentlichen Schlüssel beglaubigt.' },
    { id: '3.2.7_5', q: 'Welche Aufgabe hat eine "Certificate Authority" (CA)?', a: 'Eine vertrauenswürdige Instanz, the Zertifikate prüft, ausstellt, signiert und deren Gültigkeit verwaltet.' },
    { id: '3.2.7_6', q: 'Wofür steht the Abkürzung PKI?', a: 'Public Key Infrastructure. Ein System zum Erstellen, Verwalten, Verteilen und Widerrufen von digitalen Zertifikaten.' },
    { id: '3.2.7_7', q: 'Was ist eine "CRL" (Certificate Revocation List)?', a: 'Eine Liste gesperrter Zertifikate (Sperrliste), the vor Ablauf ihrer Gültigkeit für ungültig erklärt wurden (z.B. bei Kompromittierung des Schlüssels).' },
    { id: '3.2.7_8', q: 'Was beschreibt the "Vertrauenskette" (Chain of Trust)?', a: 'Die hierarchische Struktur von Zertifikaten, the bei einem Root-Zertifikat einer vertrauenswürdigen CA beginnt.' },
    { id: '3.2.7_9', q: 'Warum warnt der Browser vor "selbstsignierten" Zertifikaten?', a: 'Weil keine unabhängige, vertrauenswürdige CA the Identität des Servers bestätigt hat (Gefahr von MITM-Angriffen).' },
    { id: '3.2.7_10', q: 'Was regelt das OCSP-Protokoll?', a: 'Online Certificate Status Protocol. Dient zur Echtzeit-Abfrage des Status eines Zertifikats bei der CA (Alternative zur CRL).' },
    ],
    };





