# Design System – Sevdan Abduloski Malerbetrieb

Diese Datei dokumentiert das Redesign-Fundament aus **Welle A** (2026-09-13).
Sie soll reichen, um in **Welle B** (restliche Unterseiten: `referenzen.html`,
Überarbeitung der 7 Leistungsseiten, `ueber-uns.html`, `kontakt.html`,
`impressum.html`, `datenschutz.html`, `404.html`) konsistent weiterzubauen,
**ohne Rückfrage**.

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

### TrustBar
Dünne Leiste mit Haken-Icons (reines Inline-SVG, kein Icon-Font):

```html
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

### Owner-Block ("Der Betrieb")
Dunkle Card, Grid Bild+Text. Siehe `index.html` für das volle Beispiel.
Klassen: `.owner-block`, `.owner-block__media`, `.owner-block__body`,
`.owner-block__quote` (Serif, kursiv), `.owner-block__note`,
`.owner-block__signature` (Serif, kursiv, groß). Nutzt denselben
Platzhaltertext wie `ueber-uns.html` (`[Zitat vom Inhaber folgt]`) – beide
Stellen synchron halten, siehe `REDAKTION-TODO.md` Punkt 9.

### Region-Komponenten
`.region-grid` (Karten `.region-card`, Modifier `.region-card--note` für
gestrichelte "auf Anfrage"-Karte) + `.region-map` (rein dekoratives,
selbst gezeichnetes Inline-SVG, `aria-hidden="true"`, **kein** Kartendienst,
keine echten Geodaten – bewusst schematisch).

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
  Punkt 1, unverändert fortführen).

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
