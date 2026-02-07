# DJ-Anleitung — Dokumentation

Dieses Repository enthält eine Einsteiger-Anleitung zum DJing als Astro + Starlight Dokumentationsseite. Die Inhalte liegen als Markdown-Dateien in `src/content/docs` und werden von Starlight als Sidebar/Navigation angezeigt.

**Kurz:** Dateien bearbeiten → `npm run dev` starten → Seite ansehen.

## Projektstruktur

Wichtige Pfade:

- [src/content/docs](src/content/docs) — Markdown-Seiten (Hauptinhalt)
- [src/assets](src/assets) — Bilder und Medien
- [public](public) — Statische Dateien
- [astro.config.mjs](astro.config.mjs) — Starlight-/Site-Konfiguration

## Lokale Entwicklung

Aus dem Projekt-Root:

```bash
npm install
npm run dev
```

- `npm run dev` startet den lokalen Dev-Server (Standard: http://localhost:4321).
- `npm run build` erstellt die Produktionsseite in `./dist`.

## Inhalte bearbeiten

- Neue Seiten anlegen: Leg eine neue `.md` Datei in `src/content/docs` an.
- Frontmatter: Jede Seite kann Frontmatter haben (z. B. `title`, `description`, `slug`, `sidebar.order`).
- Sidebar: Die Sidebar wird automatisch aus dem Ordner `docs` generiert. Die Einstellungen findest du in [astro.config.mjs](astro.config.mjs).

Wenn du ein spezielles Ordering oder eine eigene Sidebar-Einträge brauchst, kannst du das Frontmatter-Feld `sidebar` in einzelnen Dateien setzen.

## Hinweise zur Sidebar

Ich habe die Sidebar-Autogenerierung in [astro.config.mjs](astro.config.mjs) aktiviert, sodass alle Dateien in `src/content/docs` in die Navigation aufgenommen werden. Falls ein Eintrag fehlt, prüfe bitte das Frontmatter der betreffenden Datei auf ein vorhandenes `sidebar:`-Block, der das Verhalten überschreiben kann.

## Kontribution

- Änderungen per Pull Request.
- Bitte neue Inhalte in `src/content/docs` anlegen und lokal testen.

---

Wenn du möchtest, starte ich jetzt den Dev-Server und prüfe die Sidebar live.
