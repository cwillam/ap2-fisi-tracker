# AP2 Tracker FISI - Dein Lernbegleiter (v3.0.0 Update)

[![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)](https://github.com/cwillam/ap2-fisi-tracker) [![License](https://img.shields.io/badge/License-AGPLv3-blue?style=for-the-badge)](LICENSE) [![Hosting](https://img.shields.io/badge/Hosted_on-IONOS-003D51?style=for-the-badge&logo=ionos)](https://ap2-fisi.cwillam.de) [![Privacy](https://img.shields.io/badge/Privacy-100%25_Local-10b981?style=for-the-badge)](https://ap2-fisi.cwillam.de) [![Version](https://img.shields.io/badge/Version-v3.0.0-10b981?style=for-the-badge)](https://ap2-fisi.cwillam.de)

> 🐛 [**Bug melden**](https://github.com/cwillam/ap2-fisi-tracker/issues/new?template=bug.yml) · 💡 [**Feature wünschen**](https://github.com/cwillam/ap2-fisi-tracker/issues/new?template=feature.yml)

> **Ein moderner, lokaler Fortschritts-Tracker speziell für Fachinformatiker Systemintegration (FISI) zur Vorbereitung auf die Abschlussprüfung Teil 2.**
> Keine Anmeldung. Kein Tracking. Deine Daten gehören dir.

---

## Live-Demo

Das Projekt ist einsatzbereit gehostet:

### 👉 [https://ap2-fisi.cwillam.de](https://ap2-fisi.cwillam.de)

---

## Über das Projekt

Der **AP2 Tracker FISI** wurde entwickelt, um Systemintegratoren eine strukturierte und praxisnahe Vorbereitung auf die komplexen Lernfelder der IHK-Abschlussprüfung Teil 2 zu bieten.

Im Fokus stehen die Kerngebiete der Systemintegration: Netzwerktechnik, Routing & Switching, Firewalls & VPN, Active Directory, Serverdienste (DNS/DHCP), Virtualisierung & Cloud, Storage- und Backup-Konzepte sowie IT-Sicherheit.

---

### Highlights v3.0.0 (Großes Redesign & Skript-Labor)

- **Neues Skript- & Automatisierungs-Labor (`skripte.html`):** Interaktiver Terminal-Simulator für **Bash & PowerShell** mit prüfungsrelevanten Aufgaben (Backup-Automatisierung, Active Directory & LDAP, System-Monitoring, Incident Response, Log-Analyse) inklusive Syntax-Highlighting und 1-Klick-Code-Kopieren.
- **Obsidian-Zinc Designsystem:** Konsequentes Ultra-Dark Interface (`#09090b`) mit FISI-Emerald-Akzenten (`#10b981`), Tailwind 3 Engine, optimierten Kontrasten und lokalen Inter-Fonts ohne fremde CDN-Abhängigkeiten.
- **In-App Karten-Feedback:** Fehler, veraltete Prüfungsnormen oder Unklarheiten direkt auf jeder Lernkarte mit 1 Klick an die Redaktion melden.
- **840 FISI-Lernkarten:** Vollständiger Content-Ausbau für GA1, GA2 und WiSo nach aktuellem IHK-Rahmenlehrplan mit Anki Spaced Repetition, Schwachstellen-Modus und Tastatur-Shortcuts (1–4, Space, Esc).
- **Subnetz-Trainer & VLSM:** Interaktiver IPv4/IPv6-Trainer mit Bit-Visualisierung, Netzklassen, Host-Berechnung, Broadcast und Prefix-Ermittlung.
- **SQL-Labor & Glossar:** Admin-orientiertes SQL-Training (DDL, DML, GRANT/REVOKE) und 100 FISI-Fachbegriffe mit Eselsbrücken und Favoriten-Merkliste.
- **100% DSGVO- & Offline-Safe:** Standalone-fähige PWA mit Service-Worker-Cache (`v3.0.0`), neuem Impressum (§ 5 DDG) und aktualisierter Datenschutzerklärung (DSGVO / § 25 TDDDG).

---

### Core Features

- **Themen-Fokus:** Basierend auf dem aktuellen amtlichen Rahmenlehrplan und Analysen vergangener IHK-Prüfungen.
- **Gewichtung:** Themen sind nach Prüfungsrelevanz markiert (Kritisch, Sehr Hoch, Hoch, Mittel).
- **Persistent Storage:** Speicherung des Lernfortschritts via `localStorage` (bleibt nach Neustart erhalten).
- **Smart Focus:** Der Tracker empfiehlt automatisch das nächste priorisierte Lernfeld.
- **Focus Timer:** Integrierter Pomodoro-Timer für konzentrierte Lernintervalle.
- **Import/Export:** JSON-basierte Backup-Funktion der eigenen Lerndaten.
- **Glossar & Eselsbrücken:** Interaktiver Spickzettel für 100 FISI-Fachbegriffe mit Merkhilfen, Kategorie- und Buchstabensuche sowie Merkliste.

---

## Tech Stack & Architektur

Dieses Projekt setzt auf maximale Ausführungsgeschwindigkeit, Barrierefreiheit und vollständige Unabhängigkeit durch "Vanilla Web Technologies".

| Bereich | Technologie |
| :--- | :--- |
| **Markup & Struktur** | Semantic HTML5, WAI-ARIA Barrierefreiheit |
| **Styling & Design** | Tailwind CSS (lokale Engine v3), CSS Custom Properties, Dark Mode (`#09090b`) |
| **Logik & Interaktion** | Vanilla JavaScript (ES6+), kein schweres Framework-Overhead |
| **Icons & Assets** | Lucide Icons (lokal eingebunden als Vektorgrafiken) |
| **Typografie** | Inter (woff2 lokal gehostet, Zero-CDN) |
| **Offline & PWA** | Service Worker mit Stale-While-Revalidate Caching (`v3.0.0`), Web App Manifest |
| **Datenschutz & Speicher** | 100 % Client-Side via `localStorage`, keine Tracking-Cookies |

---

## Lokale Entwicklung & Ausführung

Keine `node_modules`, keine Build-Schritte nötig. Das Projekt läuft direkt in jedem modernen Browser:

```bash
# Repository klonen
git clone https://github.com/cwillam/ap2-fisi-tracker.git
cd ap2-fisi-tracker

# Lokalen Webserver starten (z. B. mit Python)
python3 -m http.server 8080

# Im Browser öffnen: http://localhost:8080
```

---

## Projekt-Struktur

```text
├── index.html                  # Haupt-Dashboard & Themen-Checklisten
├── skripte.html                # Skript-Labor für Bash & PowerShell
├── subnet.html                 # Subnetz- & VLSM-Trainer
├── sql.html                    # Admin-orientiertes SQL-Labor
├── glossar.html                # 100 FISI-Fachbegriffe & Eselsbrücken
├── updates.html                # Changelog & Roadmap
├── help.html                   # Handbuch, FAQ & Shortcuts
├── bildungseinrichtungen.html  # Infos für Schulen & Bildungsträger
├── datenschutz.html            # Datenschutzerklärung (DSGVO / § 25 TDDDG)
├── impressum.html              # Anbieterkennzeichnung (§ 5 DDG)
├── manifest.json               # PWA-Konfiguration
├── sw.js                       # Service Worker (Offline-Cache v3.0.0)
├── sitemap.xml                 # XML-Sitemap
├── robots.txt                  # Suchmaschinen-Steuerung
├── llms.txt                    # KI-Crawler Dokumentation
├── api/
│   └── report.php              # DSGVO-konformes Feedback-Relay
└── assets/
    ├── css/style.css           # Styling & Keycaps
    ├── fonts/                  # Lokale WOFF2-Schriftarten (Inter)
    └── js/                     # Anwendungslogik & Kartendatenbank
```

---

## Community & Mitwirken

- **Discord-Community:** [Discord Server beitreten](https://discord.gg/5BM5YJadDs) – Lerngruppen, Fragen & Prüfungsaustausch.
- **Feedback & Fehler:** Über das Flaggensymbol auf jeder Lernkarte oder via GitHub Issues.

---

## Lizenz

Dieses Projekt steht unter der **GNU Affero General Public License v3.0 (AGPL-3.0)**. Siehe [LICENSE](LICENSE) für Details.
