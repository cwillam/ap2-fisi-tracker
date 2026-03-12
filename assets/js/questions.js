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

  // Topic 1.2: Administration & Systemmanagement (10 Karten)
  '1.2': [
    { id: '1.2_1', q: 'Nenne die logischen Komponenten einer Active Directory Struktur von klein nach groß.', a: '1. Objekt, 2. Organizational Unit (OU), 3. Domain, 4. Tree (Baum), 5. Forest (Gesamtstruktur).' },
    { id: '1.2_2', q: 'Erkläre das AGDLP-Prinzip bei der Rechtevergabe.', a: 'Accounts werden in Globale Gruppen aufgenommen, diese in Domänenlokale Gruppen verschachtelt, und letztere erhalten die Permissions (Berechtigungen).' },
    { id: '1.2_3', q: 'Was passiert, wenn sich NTFS-Berechtigungen und Freigabeberechtigungen widersprechen?', a: 'Die restriktivste (engste) Berechtigung gewinnt. Beispiel: NTFS "Ändern", Freigabe "Lesen" ergibt im Ergebnis nur "Lesen".' },
    { id: '1.2_4', q: 'Wofür steht MFA und nenne zwei Beispiele für Faktoren.', a: 'Multi-Faktor-Authentifizierung. Faktoren: Wissen (Passwort), Besitz (Token/Smartphone), Inhärenz (Biometrie).' },
    { id: '1.2_5', q: 'Was ist der Hauptvorteil von Single Sign-On (SSO)?', a: 'Ein Benutzer muss sich nur einmal authentifizieren, um auf mehrere Dienste zuzugreifen. Erhöht Benutzerkomfort und Sicherheit (weniger Passwort-Wildwuchs).' },
    { id: '1.2_6', q: 'Welche Aufgabe übernimmt ein WSUS-Server im Netzwerk?', a: 'Zentrale Verwaltung und Verteilung von Microsoft-Updates. Spart Bandbreite (nur ein Download für alle) und ermöglicht Staging (Testen vor Rollout).' },
    { id: '1.2_7', q: 'Nenne die 5 Phasen des ITIL Service Lifecycles.', a: '1. Service Strategy, 2. Service Design, 3. Service Transition, 4. Service Operation, 5. Continual Service Improvement.' },
    { id: '1.2_8', q: 'Was ist der Unterschied zwischen einem Incident und einem Problem laut ITIL?', a: 'Incident: Eine ungeplante Störung (Feuer löschen). Problem: Die unbekannte Ursache eines oder mehrerer Incidents (Brandursache finden).' },
    { id: '1.2_9', q: 'Was regelt ein Service Level Agreement (SLA)?', a: 'Die vertraglich zugesicherten Leistungswerte, wie Verfügbarkeit (z.B. 99,9%), maximale Reaktionszeit und Wiederherstellungsdauer.' },
    { id: '1.2_10', q: 'Was ist der Unterschied zwischen einer OEM- und einer Volumenlizenz?', a: 'OEM: An Hardware gebunden, meist kein Support durch Microsoft. Volumenlizenz: Für Unternehmen ab einer bestimmten PC-Anzahl, flexibler Rollout (KMS/MAK).' }
  ]
};
