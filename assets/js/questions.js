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

};
