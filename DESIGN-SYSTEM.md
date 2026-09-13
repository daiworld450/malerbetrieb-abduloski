# Design System – Sevdan Abduloski Malerbetrieb

Diese Datei dokumentiert das Redesign-Fundament aus **Welle A** (2026-09-13),
ergänzt um die Komponenten und Muster aus **Welle B** (2026-09-14 – restliche
Unterseiten fertiggestellt: `leistungen/index.html`, `referenzen.html`, alle
7 Leistungsseiten inhaltlich neu, `ueber-uns.html`, `kontakt.html`,
`impressum.html`, `datenschutz.html`, `404.html`) und **Welle C** (2026-09-14 –
Feinkorrektur anhand des Referenz-Moodboards des Auftraggebers: TrustBar,
Owner-Block, Region, CTA-Banner, Cross-Link-Module, Bild-Platzhalter,
Marken-Tagline). Abschnitt 10 fasst Welle B zusammen, Abschnitt 11 fasst
Welle C zusammen; alle vorherigen Abschnitte gelten unverändert weiter,
**außer wo Abschnitt 10 oder 11 sie explizit ersetzt**.

Kein Build-Step, kein npm, kein Framework – reines HTML/CSS/Vanilla-JS, wie
im gesamten Repo üblich. Alles lebt in `css/style.css` und `js/main.js`.

## Grundprinzip

Ruhig, minimalistisch, bildstark, persönlich, vertrauenswürdig. Kein
Baukasten-Look, keine Stock-Icons, keine Farbverläufe, keine übertriebenen
Animationen. Die Akzentfarbe wird **immer punktuell** eingesetzt (Buttons,
Links, aktive Nav-Zustände, kleine Icons) – **nie** als große Fläche.

Alle Bild-Slots sind bewusst noch Platzhalter (`.img-placeholder`, siehe
unten) – es gibt noch keine echten Fotos. Nichts erfinden (keine
Erfahrungsjahre, kein Meistertitel, keine Bewertungen, keine Teamgröße,
keine Kundenstimmen) – Regeln und offene Punkte stehen in
`REDAKTION-TODO.md`, dort weiterpflegen statt Punkte zu löschen.

## 1. Farb-Tokens (`css/style.css`, `:root`)

| Variable | Wert | Verwendung |
|---|---|---|
| `--color-ink` | `#17191A` | Header, Footer-Fläche, dunkle Cards/Sections |
| `--color-black` | `#101112` | Footer-Untergrund (etwas dunkler als ink) |
| `--color-paper` | `#F4F0E8` | Seitenhintergrund (warmweiß) |
| `--color-white` | `#FFFFFF` | Cards, Formulare, helle Flächen |
| `--color-accent` | `#D86B32` | Akzent – Buttons, Links, aktive Zustände, Icons |
| `--color-accent-dark` | `#B85826` | Hover-/Active-Zustand des Akzents |
| `--color-subtle` | `#E8E3DA` | Dezente Flächen auf Warmweiß (`.section-alt`) |
| `--color-text` | `#23231F` | Fließtext auf hellem Grund |
| `--color-text-muted` | `#6B6357` | Gedämpfter Text auf hellem Grund |
| `--color-border` | `#DBD3C3` | Rahmen/Trennlinien auf hellem Grund |
| `--color-on-ink` | `#F4F0E8` | Text auf dunklem Grund |
| `--color-on-ink-muted` | `rgba(244,240,232,.68)` | Gedämpfter Text auf dunklem Grund |
| `--color-border-on-ink` | `rgba(244,240,232,.16)` | Trennlinien auf dunklem Grund |
| `--color-ink-soft` | `#24262A` | Etwas hellere Fläche auf Anthrazit (z.B. dunkle Platzhalter) |

**Regel:** Neue Komponenten nutzen ausschließlich diese Tokens, keine neuen
Hex-Werte direkt im Markup/CSS. Wenn ein Zwischenton fehlt, Token in
`:root` ergänzen und hier dokumentieren.

## 2. Typografie

- **Sans (UI, Nav, Fließtext, Überschriften H1–H4):** `Manrope`
  (`--font-sans`, Fallback: system sans).
- **Serif (nur für Zitate/Signatur/Footer-Tagline):** `DM Serif Display`
  (`--font-serif`, Fallback: Georgia/serif). Bewusst **nicht** für H1 –
  die große Hero-Headline ist laut Vorgabe Sans-Serif, fett.
- Google Fonts werden **in jedem `<head>`** unmittelbar vor dem
  Stylesheet-Link eingebunden (Reihenfolge wichtig: `preconnect` vor
  dem eigentlichen `<link>`):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css"> <!-- oder ../css/style.css in leistungen/ -->
```

- Größen: `h1` `clamp(2.75rem, 5.2vw, 4.5rem)`, `h2`
  `clamp(1.7rem, 2.8vw, 2.35rem)`, `h3` `1.2rem`. Fließtext `body`
  `font-size: 17px`. Nichts kleiner als 16px für Lesetext verwenden.
- Wo Serif eingesetzt wird: `.quote-block`, `.owner-block__quote`,
  `.owner-block__signature`, `.footer-tagline`, `.process-step__num`
  (Zahl im Kreis).

## 3. Abstände / Radien / Schatten

`--space-1` (0.5rem) bis `--space-7` (6.5rem) – immer diese Skala nutzen,
keine Freihand-`px`/`rem`-Werte in neuem Code. `--radius-sm` (6px, Buttons),
`--radius-md` (14px, Cards/Dropdown), `--radius-lg` (24px, große Cards/
Bilder), `--radius-pill` (999px, Badges/Tags). `--shadow-sm`/`--shadow-md`
für Karten-Hover. `--container-width: 1220px` (`.container`).

## 4. Layout / Breakpoints

Container: `.container` (max `--container-width`, Innenabstand
`--space-3`). Breakpoints (`max-width`): `1024px`, `900px`, `768px`
(Mobile-Nav-Umschaltpunkt), `480px`. Neue Komponenten sollten sich in genau
diese Raster einfügen (siehe Media-Queries am Ende von `style.css`).

## 5. Pfad-Konvention (wichtig für Welle B)

Root-Seiten (`index.html`, `ueber-uns.html`, `kontakt.html`,
`impressum.html`, `datenschutz.html`, `404.html`) verlinken **ohne**
Präfix (`href="kontakt.html"`, `href="leistungen/…"`,
`href="css/style.css"`, `href="js/main.js"`).

Seiten unter `leistungen/` verlinken **mit** Präfix `../`
(`href="../kontakt.html"`, `href="../leistungen/…"` – ja, auch der eigene
Ordner wird über `../leistungen/` referenziert, das ist Absicht und war
schon vor dem Redesign so), `href="../css/style.css"`,
`href="../js/main.js"`. Eine neue `referenzen.html` in Welle B ist eine
Root-Seite → kein Präfix.

Der aktive Nav-Zustand wird mit `class="is-active"` auf dem `<a>` gesetzt
(bzw. `is-active` zusätzlich zu `dropdown-toggle` für Leistungen-Unterseiten).
`404.html`, `impressum.html`, `datenschutz.html` haben bewusst **keinen**
aktiven Nav-Punkt.

## 6. Komponenten

### Header / Nav
Sticky, dunkel (`--color-ink`). Struktur:

```html
<header class="site-header">
  <div class="container header-inner">
    <a href="index.html" class="logo">
      <span class="logo-name">Sevdan Abduloski</span>
      <span class="logo-sub">Malerbetrieb</span>
    </a>
    <nav class="main-nav" id="main-nav">
      <ul>
        <li><a href="index.html" class="is-active">Startseite</a></li>
        <li class="has-dropdown">
          <button type="button" class="dropdown-toggle" aria-expanded="false" aria-controls="leistungen-dropdown">Leistungen …</button>
          <ul class="dropdown" id="leistungen-dropdown">…</ul>
        </li>
        <li><a href="ueber-uns.html">Über uns</a></li>
        <li><a href="kontakt.html">Kontakt</a></li>
        <li class="nav-cta-mobile"><a href="kontakt.html" class="btn btn-accent">… Projekt anfragen</a></li>
      </ul>
    </nav>
    <a href="kontakt.html" class="btn btn-accent header-cta">Projekt anfragen</a>
    <button type="button" class="hamburger" id="hamburger" aria-label="Menü öffnen" aria-expanded="false" aria-controls="main-nav"><span></span><span></span><span></span></button>
  </div>
</header>
```

- `.header-cta` ist nur ≥769px sichtbar (Desktop-Button rechts).
- `.nav-cta-mobile` ist nur im aufgeklappten Mobile-Menü sichtbar (<768px).
- `.dropdown-toggle` bekommt zusätzlich `is-active`, wenn man sich auf einer
  Leistungsseite befindet.
- `js/main.js` steuert: Hamburger-Toggle, Dropdown-Klick (Desktop zusätzlich
  per CSS `:hover`), Schließen bei Klick außerhalb/Escape, sowie eine
  `is-scrolled`-Klasse auf `.site-header` ab `scrollY > 4` (dezenter
  Schatten beim Scrollen).

### MobileActionBar
Fixe Bottom-Bar, nur <768px sichtbar (`display:none` → `flex` per
Media-Query in `style.css`, **kein** Inline-Style verwenden). Immer mit
denselben drei Einträgen, am Seitenende direkt nach `</footer>` einbauen:

```html
<div class="mobile-action-bar" role="navigation" aria-label="Schnellkontakt">
  <a href="tel:+4915731464675" class="mobile-action-bar__item">…Anrufen</a>
  <a href="https://wa.me/4915731464675" class="mobile-action-bar__item" target="_blank" rel="noopener noreferrer">…WhatsApp</a>
  <a href="kontakt.html" class="mobile-action-bar__item mobile-action-bar__item--accent">…Projekt anfragen</a>
</div>
```

Ersetzt das alte `.sticky-call` (entfernt). `body` bekommt <768px automatisch
`padding-bottom: var(--mobile-bar-height)` – nichts zusätzlich nötig.

### Footer
Dunkel (`--color-black`), vierspaltig (`.footer-inner`, erste Spalte breiter).
`.footer-logo` zweizeilig wie der Header-Logo-Lockup. `.footer-bottom`
enthält Copyright **und** `.footer-tagline` ("Qualität, die man sieht. Ein
gutes Gefühl.", Serif kursiv) nebeneinander (Flex, bricht auf Mobile
untereinander um). Keine Social-Icons – es gibt keine verifizierten Profile,
nicht erfinden.

### CTAButton
`.btn` Basis + Modifier: `.btn-accent` (solid orange), `.btn-outline`
(outline, dunkler Rahmen/Text – für helle Flächen), `.btn-outline-light`
(outline, weiß – für dunkle Flächen wie `.cta-section`), `.btn-lg` (größer,
für Hero/Abschluss-CTA).

### HeroSection
Zwei Varianten:
1. **Bild rechts** (aktuell im Einsatz): `.hero` + `.hero-grid` (Grid
   `1.05fr 0.95fr`) mit `.hero-copy` / `.hero-media`. Für Unterseiten die
   schmalere Variante `.page-hero` + `.page-hero-grid` (`1.2fr 0.8fr`,
   optional `.page-hero--narrow` für einspaltige, schmale Hero wie
   Impressum/Datenschutz/Kontakt).
2. **Bild als Hintergrund** (für Welle B vorbereitet, aktuell nirgends
   verwendet): Modifier `.page-hero--image-bg` auf `.page-hero` setzen und
   das Hintergrundbild per Inline-Style oder eigener Utility-Klasse
   ergänzen, z.B. `style="background-image:url('…')"`. Die Klasse liefert
   bereits ein dunkles Overlay (`::before`, Verlauf) und hellen Text
   (`h1`, `.kicker`, `.hero-lead` werden automatisch weiß/hell). Gedacht für
   die Leistungsseiten-Hero-Bilder, sobald echte Fotos vorliegen.

Verwandte Variante fürs Abschluss-CTA (Welle C, Abschnitt 11.4):
`.cta-banner--image-bg` auf `.cta-section` – gleiches Prinzip (Inline-Style
+ Verlauf-Overlay), aber mit einem **sichtbaren** Foto-Platzhalter
(`.cta-banner__bg`), solange kein Foto vorliegt.

### TrustBar
**Ersetzt seit Welle C (siehe Abschnitt 11.1) durch ein 3-Spalten-Grid**
(`.trust-grid`/`.trust-item`) statt der ursprünglichen Fließtext-Zeile unten.
Die Markup-Struktur unten (`.trust-bar__list`/`.trust-bar__item`) ist veraltet
und wird nicht mehr eingesetzt – Abschnitt 11.1 zeigt das aktuelle Markup.

```html
<!-- veraltet seit Welle C, nur zur Historie -->
<section class="trust-bar">
  <div class="container trust-bar__list">
    <div class="trust-bar__item"><svg …/><span>Text</span></div>
    …
  </div>
</section>
```

### ServiceCard
```html
<a class="service-card" href="ziel.html">
  <div class="service-card__media">
    <!-- Foto folgt - spaeter ersetzen durch: <img …> -->
    <div class="img-placeholder" role="img" aria-label="…"><span class="img-placeholder__text">Foto folgt</span></div>
  </div>
  <div class="service-card__body">
    <h3>Titel</h3>
    <p>Ein Satz Beschreibung.</p>
    <span class="link-arrow">Mehr erfahren →</span>
  </div>
</a>
```
Container: `.service-grid` (3 Spalten Desktop, 1 Spalte <900px).

### ProjectCard (Basis fertig, noch ungenutzt – für `referenzen.html`)
Gleiche Struktur wie ServiceCard, andere Klassennamen, plus `.kicker` für
z.B. den Ort:

```html
<a class="project-card" href="…">
  <div class="project-card__media"><div class="img-placeholder" …>…</div></div>
  <div class="project-card__body">
    <p class="kicker">Ort · Leistung</p>
    <h3>Projektname</h3>
    <p>Kurzbeschreibung.</p>
  </div>
</a>
```
Container: `.project-grid` (3 Spalten Desktop, 1 Spalte <900px). Für
`referenzen.html` in Welle B gedacht.

### BeforeAfterSlider
Vanilla JS/CSS, Maus/Touch/Tastatur. **Mehrere Instanzen pro Seite möglich**
(z.B. mehrere Projekte auf `referenzen.html`) – `js/main.js` initialisiert
automatisch jedes `[data-before-after]`-Element beim Laden, kein manueller
Aufruf nötig.

Markup-Vertrag (exakt einhalten, sonst greift das JS nicht):

```html
<div class="before-after" data-before-after>
  <div class="before-after__side before-after__side--before">
    <span class="before-after__tag">Vorher</span>
    <!-- <img …> oder .img-placeholder, füllt den ganzen Rahmen -->
  </div>
  <div class="before-after__side before-after__side--after">
    <span class="before-after__tag">Nachher</span>
    <!-- <img …> oder .img-placeholder -->
  </div>
  <div class="before-after__handle" tabindex="0" role="slider"
       aria-label="Vorher/Nachher-Vergleich verschieben"
       aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">
    <div class="before-after__grip"><svg …/></div>
  </div>
</div>
```

- Position wird als CSS-Custom-Property `--ba-position` (0–100 %) auf dem
  Wurzelelement (`.before-after`) gehalten; steuert `clip-path` des
  "Nachher"-Bilds und die Handle-Position.
- Bedienung: Maus-Drag, Touch-Drag, Klick auf beliebige Stelle im Rahmen,
  **Pfeiltasten links/rechts** (5-%-Schritte) sowie `Home`/`End` bei
  fokussiertem Handle.
- Bilder/`.img-placeholder` innerhalb von `.before-after__side` bekommen
  automatisch `border-radius: 0` und `height: 100%` – keine zusätzlichen
  Klassen nötig.

### ProcessSteps
```html
<div class="process-steps">
  <div class="process-step">
    <span class="process-step__num">1</span>
    <p class="process-step__title">Titel</p>
    <p class="process-step__text">Beschreibung.</p>
  </div>
  … (4 Stück)
</div>
```
4 Spalten Desktop → 2 Spalten <1024px → 1 Spalte <480px.

### Owner-Block ("Ihr Malermeister")
**Seit Welle C (Abschnitt 11.2) ein vollflächiges dunkles Band** statt einer
eingerückten Card – siehe Abschnitt 11.2 für das aktuelle Markup und die
Klassen `.owner-section`/`.owner-block__role`. Grundprinzip unverändert: Grid
Bild+Text, `.owner-block__signature` (Serif, kursiv, groß). Nutzt denselben
Platzhaltertext wie `ueber-uns.html` (`.placeholder-note`) – beide Stellen
synchron halten, siehe `REDAKTION-TODO.md` Punkt 5.

### Region-Komponenten
`.region-card` bleibt bestehen (weiterhin genutzt in `.factor-grid` auf
Leistungsseiten), `.region-grid` (4er-Karten-Grid) bleibt als Klasse
verfügbar. **Auf der Startseite ersetzt seit Welle C** (Abschnitt 11.3) die
einfachere `.region-layout`/`.region-list`-Kombination direkt neben
`.region-map` das vorherige Karten-Grid + separate Grafik darunter.
`.region-map` bleibt ein rein dekoratives, selbst gezeichnetes Inline-SVG,
`aria-hidden="true"`, **kein** Kartendienst, keine echten Geodaten – bewusst
schematisch (seit Welle C in vertikaler statt horizontaler Anordnung, damit
es neben der Liste passt).

### FAQAccordion (Basis fertig, noch ungenutzt)
Semantisches `<details>/<summary>`, kein JS nötig:

```html
<div class="faq-accordion">
  <details class="faq-item">
    <summary>Frage?</summary>
    <p class="faq-item__body">Antwort.</p>
  </details>
  …
</div>
```
Gedacht für die Leistungsseiten in Welle B (z.B. "Was kostet …",
"Wie lange dauert …") – nur mit echten, nicht erfundenen Antworten befüllen.

### Bestehende, übernommene Komponenten (unverändert im Klassennamen)
- `.spoke-grid` / `.spoke-card` – "Weiterführende Leistungen" auf den
  Leistungsseiten.
- `.check-list` – einfache Haken-Liste im Fließtext (z.B. "Ablauf in
  Kürze" auf der WDVS-Seite). **Hinweis:** `.trust-list` wurde entfernt
  (war nur auf der alten Startseite in Gebrauch, dort jetzt durch
  `.trust-bar` ersetzt) – für neue Haken-Listen im Content weiter
  `.check-list` verwenden.
- `.quote-block` – Zitat-Block auf `ueber-uns.html`.
- `.contact-facts` / `.contact-facts--lg` – Kontaktdaten-Listen.
- `.contact-form` – Kontaktformular (FormSubmit, siehe `REDAKTION-TODO.md`
  Punkt 6).
- `.breadcrumb` – Breadcrumb-Navigation auf den Leistungsseiten
  (inkl. `BreadcrumbList`-JSON-LD direkt danach).
- `.legal-text` – Fließtext-Layout für Impressum/Datenschutz.
- `.img-placeholder` (+ `.img-placeholder__text`, Modifier
  `.img-placeholder--dark` für Platzhalter auf dunklem Grund) – **immer**
  mit HTML-Kommentar direkt darüber, der das künftige `<img>`-Tag mit
  fertigem Alt-Text zeigt (bestehende Konvention aus `REDAKTION-TODO.md`
  Punkt 1, unverändert fortführen). **Seit Welle C** (Abschnitt 11.6)
  zentral in `css/style.css` überarbeitet: sanfter Verlauf statt
  Diagonal-Schraffur, plus ein dezentes Bild-Icon oberhalb der Text-Pille –
  gilt automatisch für jeden `.img-placeholder` im gesamten Repo, kein
  HTML-Einzelaustausch nötig.

### Entfernte Klassen (nicht wiederverwenden)
`.pillar-grid`, `.pillar-card` (ersetzt durch `.service-grid`/
`.service-card`), `.trust-list` (ersetzt durch `.trust-bar`), `.area-list`/
`.area-note` (ersetzt durch `.region-grid`/`.region-card`), `.btn-call`,
`.header-call`, `.nav-call-mobile`, `.sticky-call` (ersetzt durch
`.mobile-action-bar` + `.header-cta`/`.nav-cta-mobile`).

## 7. JavaScript-Konventionen (`js/main.js`)

Ein einziges IIFE, kein Modul-System. Drei Aufgabenblöcke, klar
kommentiert: (1) Mobiles Menü + Dropdown, (2) Sticky-Header-Schatten,
(3) `initBeforeAfterSlider()` – wird automatisch auf jedes
`[data-before-after]`-Element angewendet. Neue interaktive Komponenten in
Welle B nach demselben Muster ergänzen: eine benannte Init-Funktion +
`document.querySelectorAll('[data-…]').forEach(initFn)` am Dateiende.

## 8. Was Welle A bewusst nicht anfasst

Inhalte der 7 Leistungsseiten, `ueber-uns.html`, `kontakt.html`,
`impressum.html`, `datenschutz.html`, `404.html` sind **inhaltlich
unverändert** – nur Header/Footer/MobileActionBar/Font-Einbindung wurden
aktualisiert, damit nichts optisch bricht. Das bedeutet: diese Seiten sehen
im Content-Bereich noch nach dem alten Stil aus (alte Button-Farben wirken
jetzt anders, weil Tokens sich geändert haben, aber Struktur/Text ist
identisch). **Das ist erwartet** und Aufgabe von Welle B, inkl.:

- `referenzen.html` neu anlegen (aktuell 404 – von `index.html` und vom
  Footer/Nav aus aber schon so vorbereitet, dass nichts weiter geändert
  werden muss, sobald die Datei existiert).
- Leistungsseiten-Hero auf `.page-hero--image-bg` umstellen, sobald Fotos
  da sind (siehe HeroSection oben).
- `.project-grid`/`.project-card` auf `referenzen.html` einsetzen.
- `.faq-accordion` auf den Leistungsseiten mit echten Fragen/Antworten
  befüllen, wo sinnvoll.
- `REDAKTION-TODO.md` weiterpflegen, nichts daraus streichen, nur weil sich
  die Optik geändert hat.

## 9. Kurz-Checkliste für neue Seiten in Welle B

1. Head: Meta-Tags nach bestehendem Muster + Font-Links (Abschnitt 2) +
   `<link rel="stylesheet" href="…css/style.css">` + JSON-LD (NAP unverändert
   übernehmen, `@id` und `BreadcrumbList` pro Seite anpassen).
2. Header/Footer/MobileActionBar **1:1** aus einer bestehenden Seite
   desselben Verzeichnisses kopieren (Pfad-Präfix beachten, Abschnitt 5),
   `is-active` korrekt setzen.
3. Ausschließlich dokumentierte Komponenten-Klassen verwenden; fehlt eine
   Komponente, hier in `DESIGN-SYSTEM.md` ergänzen statt Einzel-CSS inline
   zu schreiben.
4. Keine neuen Farben/Fonts/Bibliotheken ohne Ergänzung dieser Datei.
5. Bild-Slots als `.img-placeholder` mit Alt-Text-Kommentar anlegen, bis
   echte Fotos vorliegen.

## 10. Welle B – Ergänzungen (2026-09-14)

### 10.1 Nav-Struktur geändert: "Leistungen" ist jetzt ein echter Link

Der Hauptnavigationspunkt "Leistungen" zeigt jetzt auf die neue
`leistungen/index.html` (Übersichtsseite), das Auf-/Zuklappen des
Untermenüs übernimmt ein separater Chevron-Button daneben. Ersetzt die in
Abschnitt 6 (Header/Nav) gezeigte alte `<button class="dropdown-toggle">`.
Neue Struktur (root-Seiten-Variante, in `leistungen/` mit `../`-Präfix):

```html
<li class="has-dropdown">
  <a href="leistungen/index.html" class="dropdown-toggle">Leistungen</a>
  <button type="button" class="dropdown-caret" aria-expanded="false" aria-controls="leistungen-dropdown" aria-label="Leistungen-Unterseiten anzeigen">
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </button>
  <ul class="dropdown" id="leistungen-dropdown">
      <li><a href="leistungen/index.html">Alle Leistungen im Überblick</a></li>
      <li><a href="leistungen/fassadenanstrich-fassadensanierung-muelheim.html">Fassadenanstrich & Fassadensanierung Mülheim</a></li>
      … restliche 6 Leistungslinks unverändert …
  </ul>
</li>
```

- `.dropdown-toggle` ist die `<a>` (Klick navigiert direkt zur
  Übersichtsseite, kein `preventDefault` mehr).
- `.dropdown-caret` ist der separate Button, der das Untermenü togglet
  (`js/main.js` hört jetzt auf `.dropdown-caret`, nicht mehr auf
  `.dropdown-toggle`). Desktop-Hover über `.has-dropdown` öffnet das Menü
  weiterhin zusätzlich per CSS, unverändert.
- `is-active` wird weiterhin auf `.dropdown-toggle` gesetzt, wenn man sich
  irgendwo unterhalb von `/leistungen/` befindet (inkl. der neuen
  Übersichtsseite selbst).
- Footer-Spalte "Leistungen" bekommt als erstes Element zusätzlich
  `<li><a href="leistungen/index.html">Alle Leistungen im Überblick</a></li>`,
  Footer-Spalte "Unternehmen" bekommt zusätzlich einen `Referenzen`-Link
  vor "Über uns" – auf **allen** Seiten konsistent nachgezogen.

### 10.2 Breadcrumbs jetzt auf allen Unterseiten

Nicht mehr nur auf den Leistungsseiten: `ueber-uns.html`, `kontakt.html`,
`referenzen.html`, `impressum.html`, `datenschutz.html` haben jetzt ebenfalls
eine `.breadcrumb`-Zeile ("Startseite > Seitenname") direkt nach
`<main id="main">` plus passendes `BreadcrumbList`-JSON-LD danach. Lokale
Leistungs-Spoke-Seiten (Essen/Oberhausen) nutzen einen 4-stufigen Breadcrumb
(Startseite > Leistungen > zugehörige Pillar-Seite > aktuelle Seite).
`404.html` bewusst ohne Breadcrumb (keine reguläre, indexierte Inhaltsseite).

### 10.3 Neue Komponenten (`css/style.css`, Abschnitt "Welle B: neue Komponenten")

**PlaceholderNote** – ersetzt jede Form von eckigen-Klammer-Platzhaltertext
im sichtbaren Fließtext. Kein Blockquote-Look, kein "fake" Zitat-Rahmen.

```html
<p class="placeholder-note">Ein persönliches Wort vom Inhaber folgt in Kürze.</p>
<!-- Auf dunklem Grund (z.B. im Owner-Block): -->
<p class="placeholder-note placeholder-note--on-ink">…</p>
```

**ValueCard** (`.value-grid`/`.value-card`) – Werte-Grid mit Icon, z.B.
`ueber-uns.html`. 3 Spalten Desktop → 2 → 1.

```html
<div class="value-grid">
  <div class="value-card">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">…</svg>
    <h3>Titel</h3>
    <p>Beschreibung.</p>
  </div>
  …
</div>
```

**Foto-Platzhalter-Galerie** (`.gallery-grid`) – reine `.img-placeholder`-Grid
ohne Kartenrahmen, z.B. "Bilder bei der Arbeit" auf `ueber-uns.html`. 4
Spalten Desktop → 2 → 2 (480px).

**Cross-Link-Modul** (`.cross-link`) – Teaser-Box mit Text + CTA-Button zu
einer weiterführenden Leistungsseite. **Seit Welle C** (Abschnitt 11.5)
zusätzlich mit optionalem `.cross-link__visual` (Device-Preview-Mockup)
zwischen Text und Button.

```html
<div class="cross-link">
  <div class="cross-link__body">
    <p class="kicker">Passend dazu</p>
    <h3>Titel</h3>
    <p>Ein bis zwei Sätze Teaser-Text.</p>
  </div>
  <div class="cross-link__visual"><!-- optional, siehe DevicePreview 11.5 --></div>
  <a href="ziel.html" class="btn btn-outline">CTA-Text</a>
</div>
```

**Toggle-Gruppe** (`.toggle-group`/`.toggle-btn`) – wiederverwendet für zwei
Zwecke: Kategorie-Auswahl im Kontaktformular (`kontakt.html`) und Filter-Tabs
auf `referenzen.html`. Aktiver Zustand: `.toggle-btn.is-active`. JS-Verträge
siehe 10.4.

**ContactCard** (`.contact-card-grid`/`.contact-card`) – drei große
Kontaktkarten (Telefon/E-Mail/WhatsApp) oben auf `kontakt.html`. 3 Spalten
Desktop → 2 (1024px, faktisch 1 da 3 Karten) → 1 (900px).

**Factor-Grid** (`.factor-grid`) – 4-spaltiges Karten-Grid für z.B. "Was
beeinflusst die Kosten?" oder "Kompetenzbereiche"; die Karten selbst nutzen
die bereits vorhandene `.region-card`-Klasse (kein neuer Kartenstil nötig).

```html
<div class="factor-grid">
  <div class="region-card"><h3>Titel</h3><p>Text.</p></div>
  …
</div>
```

**Swatch-Grid** (`.swatch-grid`/`.swatch`, `.swatch__chip`, `.swatch__label`)
– rein dekorative Farbmuster-Kacheln (z.B. "Farben. Materialien.
Möglichkeiten." auf der Innenraum-Seite). Nutzt sechs neue, rein dekorative
Zwischentöne `--swatch-1` … `--swatch-6` in `:root` (siehe 10.5) – **keine**
echten Produkt-/Herstellerfarben, nur generische Farbfamilien-Namen als
Label.

```html
<div class="swatch-grid">
  <div class="swatch">
    <div class="swatch__chip" style="background: var(--swatch-1);"></div>
    <p class="swatch__label">Sandstein</p>
  </div>
  …
</div>
```

**WDVS-Diagramm** (`.wdvs-diagram`) – Container-Klasse für ein eigenes,
beschriftetes Inline-SVG (Schichtaufbau), siehe
`leistungen/waermedaemmung-wdvs-muelheim.html` für das volle Beispiel
(nummerierte Schichten + Legende, `role="img"` mit `<title>`/`<desc>` für
Screenreader). Kein Foto nötig, rein grafisch.

### 10.4 Neue JS-Bausteine (`js/main.js`)

Zwei weitere benannte Init-Funktionen nach demselben Muster wie
`initBeforeAfterSlider`:

- `initCategoryToggle(root)` – auf `[data-category-toggle]`. Markup:
  `<div class="toggle-group" data-category-toggle data-target="#feld-id">`
  mit `.toggle-btn`-Kindern, die je ein `data-value` tragen. Klick markiert
  genau einen Button als `.is-active` und schreibt `data-value` in das per
  `data-target` referenzierte (meist versteckte) Formularfeld. Eingesetzt im
  Kontaktformular für die Projektkategorie (Innenraum/Fassade/WDVS).
- `initFilterTabs(root)` – auf `[data-filter-tabs]`. Markup:
  `<div class="toggle-group" data-filter-tabs data-target="[data-project-grid]">`
  mit `.toggle-btn`-Kindern, die je ein `data-filter` tragen (`"alle"` zeigt
  alle Karten). Die Zielkarten im referenzierten Grid tragen `data-category`;
  Klick blendet nicht passende Karten per `hidden`-Attribut aus. Eingesetzt
  auf `referenzen.html`.

### 10.5 Neue Farb-Tokens (nur für Swatches, rein dekorativ)

| Variable | Wert | Verwendung |
|---|---|---|
| `--swatch-1` | `#EDE7DB` | Farbmuster "Sandstein" |
| `--swatch-2` | `#C9CBB7` | Farbmuster "Salbeigrün" |
| `--swatch-3` | `#AEBAC0` | Farbmuster "Taubenblau" |
| `--swatch-4` | `#D9C3AE` | Farbmuster "Terrakotta" (auch im WDVS-Diagramm: Oberputz) |
| `--swatch-5` | `#8E8577` | WDVS-Diagramm: Kleber |
| `--swatch-6` | `#3F4A46` | Farbmuster "Anthrazitgrün" / WDVS-Diagramm: Armierungsgewebe |

Diese Tokens sind bewusst von den Kernfarben (Abschnitt 1) getrennt – sie
sind bewusst NICHT UI-Farben (keine Buttons/Links/Status), sondern rein
dekorative Muster-/Diagrammfarben. Neue Verwendungszwecke hier ergänzen statt
neue Hex-Werte direkt im Markup zu verwenden.

### 10.6 Status: Welle A "bewusst nicht angefasst"-Liste (Abschnitt 8) ist abgearbeitet

Alle in Abschnitt 8 aufgeführten Punkte sind mit Welle B umgesetzt:
`referenzen.html` existiert, `.page-hero--image-bg` ist auf den beiden
Fassaden-/WDVS-Leistungsseiten im Einsatz, `.project-grid`/`.project-card`
läuft auf `referenzen.html` und im Innenraum-Leistungspillar,
`.faq-accordion` ist mit echten Fragen/Antworten auf allen 7 Leistungsseiten
befüllt (inkl. `FAQPage`-JSON-LD). Offene redaktionelle Punkte (Fotos,
Zitat, USt-IdNr, Referenzprojekte) stehen weiterhin einzeln in
`REDAKTION-TODO.md`.

## 11. Welle C – Feinkorrektur anhand des Referenz-Moodboards (2026-09-14)

Auslöser: Der Auftraggeber sah die fertige Welle A+B und sagte, die Seite
folge dem Design seines Referenzbilds nicht genug. Welle C behebt die
konkret benannten Lücken, **ohne** Farben/Fonts/Grundlayout neu zu erfinden.
Bestätigter neuer Fakt seit Welle C: Sevdan Abduloski ist **Malermeister**
(Inhaber-Bestätigung 2026-09-14) – "Malermeister"/"Meisterqualität" darf
verwendet werden, siehe `REDAKTION-TODO.md` Punkt 3. Gründungsjahr/Teamgröße
bleiben weiterhin offen.

### 11.1 TrustBar → TrustGrid (3 Spalten statt Fließtext-Zeile)

Ersetzt `.trust-bar__list`/`.trust-bar__item` (veraltet, nicht mehr
einsetzen). Neue Klassen: `.trust-grid` (Grid-Container, 3 Spalten Desktop
→ 1 Spalte <768px) mit `.trust-item` (Icon-Kreis + fetter Titel + gedämpfter
Subtext, alles zentriert):

```html
<section class="trust-bar">
  <div class="container trust-grid">
    <div class="trust-item">
      <span class="trust-item__icon" aria-hidden="true"><svg …/></span>
      <p class="trust-item__title">Titel</p>
      <p class="trust-item__subtext">Zweite, gedämpfte Zeile</p>
    </div>
    … (3 Stück)
  </div>
</section>
```
Bewusst **kein** Rahmen um die einzelnen Spalten – die Trennung entsteht rein
über das Grid. Auf `index.html` aktuell: Regionale Expertise / Meisterqualität
/ Persönliche Beratung.

### 11.2 Owner-Block → vollflächiges dunkles Band + Signatur-Layout

Der Abschnitt heißt jetzt "Ihr Malermeister" (H2), Kicker bleibt "Der
Betrieb". Die äußere `<section>` trägt neu die Klasse `.owner-section`
(Hintergrund `--color-ink`, normales `.section`-Padding, volle Breite –
**keine** eingerückte Card mehr). `.owner-block` selbst ist nur noch das
2-spaltige Grid (Text links, Portrait rechts, Portrait-Spalte etwas größer
als die Textspalte: `1fr 1.15fr`). Neue Klasse `.owner-block__role` (kleines
Uppercase-Label in Akzentfarbe). `.owner-block__signature` ist jetzt deutlich
größer (`clamp(2.1rem, 3.4vw, 2.75rem)`) und steht direkt unter der
Überschrift, nicht mehr am Ende:

```html
<section class="section owner-section">
  <div class="container">
    <div class="owner-block">
      <div class="owner-block__body">
        <p class="kicker">Der Betrieb</p>
        <h2>Ihr Malermeister</h2>
        <p class="owner-block__signature">Sevdan Abduloski</p>
        <p class="owner-block__role">Inhaber &amp; Malermeister</p>
        <p class="owner-block__note">Ein bis zwei Sätze ehrlicher Text, darf
        "Malermeister" erwähnen.</p>
        <p class="placeholder-note placeholder-note--on-ink">Ein persönliches Wort vom Inhaber folgt in Kürze.</p>
      </div>
      <div class="owner-block__media">
        <div class="img-placeholder img-placeholder--dark" …>…</div>
      </div>
    </div>
  </div>
</section>
```
Auf Mobile (<900px) weiterhin `.owner-block__media { order: -1; }` – Portrait
steht beim Stapeln oben.

### 11.3 Region: Liste + Grafik direkt nebeneinander

Neue Klassen `.region-layout` (2-spaltiges Grid, `0.85fr 1.15fr`, <900px auf
1 Spalte) und `.region-list` (einfache `<ul>` mit orangem Punkt-Marker via
`::before`, je Eintrag `<strong>Ort</strong><span>Kurzbeschreibung</span>`).
`.region-map` sitzt als zweite Grid-Spalte **direkt daneben** (nicht mehr
darunter) und wurde dafür von einer horizontalen (`viewBox="0 0 800 130"`)
auf eine vertikale Anordnung (`viewBox="0 0 320 440"`) umgezeichnet, damit
sie in der schmaleren Spalte lesbar bleibt. `.region-card`/`.region-grid`
bleiben als Klassen bestehen (weiter genutzt in `.factor-grid` auf
Leistungsseiten bzw. für mögliche künftige Kartenlayouts), werden auf der
Startseite aber nicht mehr für die Regionsübersicht eingesetzt.

### 11.4 CTA-Banner mit Foto-Hintergrund

Neue Klasse `.cta-banner--image-bg` auf `.cta-section` (analog zu
`.page-hero--image-bg`: dunkles Verlaufs-Overlay per `::after`, damit Text
lesbar bleibt). Solange kein echtes Foto vorliegt, füllt eine
`.cta-banner__bg`-Div (= `.img-placeholder.img-placeholder--dark` +
absolute Positionierung über den ganzen Banner) die Fläche – **bewusst
sichtbar** ("Foto folgt"-Hinweis), anders als die stille Variante bei
`.page-hero--image-bg` ohne Bild. Sobald ein Foto vorliegt: Inline-Style
`style="background-image:url('…')"` auf das `<section>`-Tag setzen und die
`.cta-banner__bg`-Div entfernen.

```html
<section class="section cta-section cta-banner--image-bg">
  <div class="img-placeholder img-placeholder--dark cta-banner__bg" role="img" aria-label="Foto folgt">
    <span class="img-placeholder__text">Foto folgt</span>
  </div>
  <div class="container cta-box">…</div>
</section>
```

### 11.5 DevicePreview (Phone-Mockup in Cross-Link-Modulen)

Rein dekoratives, selbstgebautes CSS/SVG-freies Smartphone-Gehäuse mit
vereinfachter Mini-Vorschau (Mini-Header, Mini-Headline, zwei Content-Zeilen,
oranger Mini-Button). Kein echtes Foto/Screenshot nötig, `aria-hidden="true"`.
Klassen: `.device-preview`, `.device-preview__notch`,
`.device-preview__screen`, `.device-preview__header`,
`.device-preview__headline`, `.device-preview__line` (+ Modifier
`.device-preview__line--short`), `.device-preview__button`.

```html
<div class="device-preview" aria-hidden="true">
  <div class="device-preview__notch"></div>
  <div class="device-preview__screen">
    <div class="device-preview__header"></div>
    <div class="device-preview__headline"></div>
    <div class="device-preview__line"></div>
    <div class="device-preview__line device-preview__line--short"></div>
    <div class="device-preview__button"></div>
  </div>
</div>
```
Eingesetzt im `.cross-link__visual`-Slot (siehe Abschnitt 6) auf
`leistungen/fassadenanstrich-fassadensanierung-muelheim.html` (Teaser →
WDVS) und `leistungen/innenanstrich-tapezieren-muelheim.html` (Teaser →
Innenanstrich Essen).

### 11.6 Bild-Platzhalter: sanfter statt "Baustellenband"

`.img-placeholder`-Hintergrund von einer kontrastreichen Diagonal-Schraffur
auf einen sehr sanften Verlauf (`--color-paper`/`--color-subtle`, bzw.
`--color-ink-soft`/`#1b1d1f` für `.img-placeholder--dark`) umgestellt, plus
ein dezentes Bild-Icon (`::before`, SVG-Daten-URI, 50%/40% Deckkraft)
zentriert über der bestehenden Text-Pille. Zentral in `css/style.css`
gepflegt – wirkt automatisch auf jeden `.img-placeholder` im gesamten Repo,
kein Einzelaustausch in den HTML-Dateien nötig. Ausnahme: In sehr flachen
Medien-Slots (`.before-after__side .img-placeholder`) bleibt nur die
Text-Pille sichtbar, das Icon wird dort per Regel ausgeblendet.

### 11.7 Marken-Tagline

Neue Klasse `.brand-tagline` (Serif, kursiv, klein, gedämpfte Farbe,
zentriert) – reine Slogan-Sprache, keine Tatsachenbehauptung. Eingesetzt
unter dem Hero-Bild auf `index.html` ("Qualität, die man sieht. Ein gutes
Gefühl.") – bewusst derselbe Wortlaut wie die bestehende
`.footer-tagline`, um Startseite und Footer konsistent zu halten statt zwei
verschiedene Slogans zu führen.

### 11.8 Geprüft und bereits korrekt (keine Änderung nötig)

- **ServiceCard-Proportionen**: Bildbereich (`.service-card__media`,
  `aspect-ratio: 4/3`) ist bereits der dominante Teil der Karte (deutlich
  über 60% der Kartenhöhe), Karte hebt sich bereits mit `--shadow-sm`/
  `--shadow-md` und weißem Hintergrund vom Seitenhintergrund ab. Gilt
  identisch auf `index.html` und `leistungen/index.html`.
- **BeforeAfterSlider-Handle**: `.before-after__grip` ist bereits ein
  44px-Kreis mit sichtbarem Links-Rechts-Pfeil-Icon (kein reiner Strich).
- **Footer-Tagline**: existierte bereits wortgleich zur neuen
  `.brand-tagline` (siehe 11.7) – nicht dupliziert, nur abgeglichen.
