---
name: Sevdan Abduloski Malerbetrieb
description: "Musterwand: eine kalkweiße Wand, auf der Farbmuster gestrichen werden. Eine Aktionsfarbe, drei Rollenfarben als große Felder."
colors:
  wand: "#EDEEE9"
  wand-tief: "#DFE1DA"
  tinte: "#11161C"
  tinte-2: "#1C242D"
  text: "#151A20"
  text-leise: "#4B545D"
  linie: "#BFC4BB"
  goldband: "#F4B400"
  goldband-hell: "#FFC82E"
  salbei: "#2F6A50"
  ziegel: "#A63B2C"
  stahl: "#2B5C86"
  auf-tinte: "#F3F4EF"
  auf-tinte-leise: "#C9D0D6"
  m-warmweiss: "#F2EEDF"
  m-sandstein: "#CDB48E"
  m-salbeigruen: "#9DB39A"
  m-taubenblau: "#8AA7BC"
  m-terrakotta: "#B8553A"
  m-anthrazitgruen: "#2F3E3A"
  m-kleber: "#8E8577"
  fehler: "#A3281D"
  fehler-text: "#8E2A1D"
  fehler-grund: "#FBE9E5"
typography:
  display:
    fontFamily: "'Big Shoulders Display', 'Big Shoulders Fallback', 'Arial Narrow', sans-serif"
    fontSize: "clamp(3.25rem, 1.8rem + 6.2vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "'Big Shoulders Display', 'Big Shoulders Fallback', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.5rem, 1.55rem + 3.6vw, 4.25rem)"
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: "-0.005em"
  title:
    fontFamily: "'Big Shoulders Display', 'Big Shoulders Fallback', 'Arial Narrow', sans-serif"
    fontSize: "clamp(1.6rem, 1.4rem + 0.8vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.04
  numeral:
    fontFamily: "'Big Shoulders Stencil Display', 'Big Shoulders Display', 'Big Shoulders Fallback', 'Arial Narrow', sans-serif"
    fontSize: "3.5rem"
    fontWeight: 800
    lineHeight: 1
  body:
    fontFamily: "'Archivo', 'Archivo Fallback', -apple-system, 'Segoe UI', Roboto, Arial, sans-serif"
    fontSize: "clamp(1.0625rem, 1.02rem + 0.2vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Big Shoulders Display', 'Big Shoulders Fallback', 'Arial Narrow', sans-serif"
    fontSize: "0.98rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.09em"
rounded:
  none: "0"
spacing:
  s-1: "4px"
  s-2: "8px"
  s-3: "12px"
  s-4: "16px"
  s-5: "24px"
  s-6: "32px"
  s-7: "48px"
  s-8: "72px"
  s-9: "96px"
  container: "1240px"
components:
  button-accent:
    backgroundColor: "{colors.goldband}"
    textColor: "{colors.tinte}"
    rounded: "{rounded.none}"
    padding: "11px 24px"
    height: "52px"
  button-accent-hover:
    backgroundColor: "{colors.tinte}"
    textColor: "{colors.goldband}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.tinte}"
    rounded: "{rounded.none}"
    padding: "11px 24px"
    height: "52px"
  button-outline-hover:
    backgroundColor: "{colors.tinte}"
    textColor: "{colors.auf-tinte}"
  tape-label:
    backgroundColor: "{colors.goldband}"
    textColor: "{colors.tinte}"
    typography: "{typography.label}"
    padding: "8px 14px 7px"
  chip:
    backgroundColor: "{colors.wand}"
    textColor: "{colors.tinte}"
    rounded: "{rounded.none}"
    height: "52px"
  chip-pressed:
    backgroundColor: "{colors.tinte}"
    textColor: "{colors.auf-tinte}"
  field-input:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.text}"
    rounded: "{rounded.none}"
    height: "52px"
    padding: "12px 14px"
  field-role-salbei:
    backgroundColor: "{colors.salbei}"
    textColor: "#FFFFFF"
  field-role-ziegel:
    backgroundColor: "{colors.ziegel}"
    textColor: "#FFFFFF"
  field-role-stahl:
    backgroundColor: "{colors.stahl}"
    textColor: "#FFFFFF"
  field-tinte:
    backgroundColor: "{colors.tinte}"
    textColor: "{colors.auf-tinte}"
  field-goldband:
    backgroundColor: "{colors.goldband}"
    textColor: "{colors.tinte}"
---

# Design System: Sevdan Abduloski Malerbetrieb

## Overview

**Creative North Star: "Die Musterwand"**

Die Seite ist eine Wand, auf der gerade Farbmuster gestrichen werden. Der Grund ist kühles Kalkweiß, die Schrift Blauschwarz-Tinte, und die Farbe, die der Betrieb verkauft, steht als große, flache Felder darauf: Salbei für den Innenraum, Ziegel für die Fassade, Stahlblau für die Dämmung. Beschriftung sitzt auf Malerkrepp in Goldband-Gelb, Fotos hängen als Abzüge mit Abdeckband an der Wand. Das Design trägt ohne Foto; Bilder sind Beiwerk.

Dichte und Ton sind handwerklich und ruhig: scharfe Ecken, 2px-Tintenlinien als Zeichnung, riesige schmale Überschriften (Big Shoulders), dazu ein neutraler Fließtext (Archivo). Tiefe entsteht durch Überlappung (Abzug über der Feldkante, versetzte Streifen), nie durch Schatten. Die Farbe bleibt Inhalt: Der Fließtext ist neutral, Farbe lebt nur in Feldern und Kanten.

Die Seite ist einthemig hell, weil sich Farbe nur auf hellem Grund beurteilen lässt. Eine Aktionsfarbe (Goldband) gilt für jeden Button und jedes Tape-Label; die Rollenfarben tragen nie einen UI-Zustand.

**Key Characteristics:**
- Kalkweiße Wand, Tinte, eine Aktionsfarbe, drei Rollenfarben als Felder.
- Scharfe Ecken, keine Schatten, Tiefe durch Überlappung und Abdeckband.
- Farbkorn auf allen Farbfeldern, Pinselkante als Maske an zwei Stellen.
- Eine Bewegungs-Signatur (Farbprobe), sonst zurückhaltende Übergänge.
- Mobile Aktionsleiste: Anrufen, WhatsApp, Anfragen sind immer in einem Griff.

## Colors

Eine kühle, helle Wand mit Tinte und einem einzigen Gelb; die Farbe der Ware tritt nur in großen Flächen auf.

### Primary
- **Goldband** (`goldband`): die eine Aktionsfarbe. Alle Buttons, Tape-Label, Unterstreichung der aktiven Navigation, Häkchen der Check-Liste, Zollstock-Leiste, Kontakt-Hauptfläche (Telefon), Abschluss-Fläche. Text darauf immer Tinte. `goldband-hell` nur als Press-Zustand der mobilen Leiste.

### Secondary (Rollenfarben, nur als Felder)
- **Salbei tief** (`salbei`): Innenraum. Weißer Text (6,1:1 laut Kommentar im Code).
- **Ziegel** (`ziegel`): Fassade. Weißer Text (6,4:1).
- **Stahlblau** (`stahl`): Wärmedämmung. Weißer Text (7,0:1).
- Die Rolle einer Seite setzt `body[data-rolle]` (`innen`, `fassade`, `wdvs`, `tinte`, `gold`, `wand`) und damit `--farbe`, `--auf-farbe`, Fokusfarbe. Gruppen der Leistungsübersicht nutzen `data-gruppe` gleich.

### Tertiary (Muster-Chips, rein dekorativ)
- Sieben Farbfamilien `m-*` (Warmweiß, Sandstein, Salbeigrün, Taubenblau, Terrakotta, Anthrazitgrün, Kleber). Es sind keine Herstellerfarben und keine Produktversprechen. Sie erscheinen in der Farbprobe, den Region-Feldern und den Swatches. Die Chips der Farbprobe führen sechs davon (ohne Kleber).

### Neutral
- **Kalkweiß-Wand** (`wand`) Seitengrund, **Wand tief** (`wand-tief`) zweite Wandfläche für Abschnittswechsel.
- **Tinte** (`tinte`) Linien, Header-Kante, Footer, Mobilleiste; `tinte-2` Press-Zustand.
- **Text** (`text`, 15,6:1 auf Wand) und **Text leise** (`text-leise`, 6,6:1) für Sekundärtext.
- **Linie** (`linie`): nur Zierlinie, nie einziger Träger einer Information.
- **Auf Tinte** (`auf-tinte`) und **Auf Tinte leise** (`auf-tinte-leise`, 10,6:1) für Schrift auf Tinte.
- **Fehlerrot** (`fehler`, `fehler-text`, `fehler-grund`): nur im Formular-Fehlerzustand, in der Nähe von Ziegel, aber bewusst eigene Werte.

### Named Rules
**The One Action Rule.** Goldband ist die einzige Aktionsfarbe. Kein zweiter Button-Ton, keine Rollenfarbe als Buttonfläche.
**The Field Not State Rule.** Salbei, Ziegel und Stahlblau sind Inhalt (die Ware ist Farbe) und erscheinen als große Felder. Sie zeigen nie Hover, Auswahl, Erfolg oder Fehler.
**The Neutral Prose Rule.** Fließtext bleibt Text-Tinte auf Wand oder Weiß auf Feld; er wird nie eingefärbt.
**The Contrast Floor Rule.** Jedes Text-Grund-Paar erreicht mindestens 4,5:1; Gold trägt nur Tinte.

## Typography

**Display Font:** Big Shoulders Display (Fallback Big Shoulders Fallback, Arial Narrow)
**Numeral Font:** Big Shoulders Stencil Display (nur Ziffern im Zollstock und die 404)
**Body Font:** Archivo (Fallback Archivo Fallback, Systemschrift)

Alle drei sind selbst gehostet (woff2 unter `fonts/`, SIL OFL 1.1, Hinweis in `fonts/OFL-HINWEIS.txt`), variable Gewichte, `font-display: swap` mit metrikangepasster Ersatzschrift gegen Layoutsprung.

**Character:** Schmale, harte Werkstattschrift in riesigen Größen gegen einen nüchternen, gut lesbaren Grotesk-Fließtext. Der Kontrast der Größen ist die Dramaturgie.

### Hierarchy
- **Display** (800, `clamp(3.25rem, 1.8rem + 6.2vw, 6rem)`, 0.92): H1; Startseiten-H1 etwas kleiner (bis 5.5rem), Seitenköpfe bis 5.25rem. Der Inhaber-Name im Typoplakat bis 6rem, Großbuchstaben.
- **Headline** (800, `clamp(2.5rem, 1.55rem + 3.6vw, 4.25rem)`, 0.96): H2 der Abschnitte; in Zwei-Spalten-Blöcken kleiner (bis 2.75rem).
- **Title** (700, `clamp(1.6rem, 1.4rem + 0.8vw, 2rem)`, 1.04): H3 in Karten, Faktor-Zeilen, FAQ-Fragen (1.4 bis 1.75rem). Auf den Farbfeldern des Fächers wachsen H3 bis 6rem (Fassade, Hauptstreifen).
- **Body** (400, `clamp(1.0625rem, 1.02rem + 0.2vw, 1.1875rem)`, 1.6): Fließtext im Maß von 62 bis 68ch.
- **Label** (700, 0.98rem, Abstand 0.09em, Großbuchstaben, Big Shoulders): Tape-Label, Logo-Zusatz, Dropdown-Gruppen, Footer-Überschriften.
- **Numeral** (Stencil 800, 3.5rem): Ziffern 1 bis 4 im Zollstock; 404-Zahl bis 16rem mit Tintenkontur.

### Named Rules
**The Size Contrast Rule.** Display und Fließtext liegen weit auseinander; keine mittleren Größen zum Auffüllen.
**The Stencil Is For Numbers Rule.** Der Stencil-Schnitt gehört ausschließlich Ziffern.
**The Prose Measure Rule.** Absätze bleiben bei höchstens 68ch.

## Layout

Ein Container mit höchstens 1240px, seitlicher Rand `clamp(1rem, 4vw, 1.5rem)`, Abschnitte mit `clamp(3.5rem, 8vw, 6.5rem)` vertikal. Abstände folgen einem 4er-Raster (`s-1` bis `s-9`, 4 bis 96px). Die Rhythmik ist bewusst asymmetrisch: Karten und Wertezeilen sind in der zweiten und dritten Spalte versetzt (`s-6`, `s-7`), das Fächer-Raster setzt Fassade als vollbreiten Hauptstreifen, Dämmung und Innenraum kleiner darunter. Zeilen mit Tintenlinien (Faktor-Zeilen, FAQ, Wertekarten) ersetzen Kästen.

Startseite oben: links Überschrift mit Lead und zwei Buttons, rechts 40 Prozent Breite Farbprobe. Seitenköpfe sind Farbfelder in der Seitenrolle mit Pinselkante am Unterrand.

Breakpoints (max-width): 1180 (Header-CTA entfällt), 1100 (Region-Felder zweispaltig), 1024 (Raster zweispaltig, Footer 2 Spalten), 960 (Drawer-Navigation, Hamburger), 900 (Hero, Fächer, Zwei-Spalten-Blöcke einspaltig), 768 (mobile Aktionsleiste, einspaltig), 480 (Buttons volle Breite, Chips kompakter), 340 (H1 fest 2.75rem). Zusätzlich greift ein Landscape-Zweig mit `safe-area-inset`. Touch-Ziele sind mindestens 44px (2.75rem), Buttons 52px, Chips und Formularfelder 48 bis 52px.

## Elevation & Depth

Keine Schatten. Tiefe entsteht durch Überlappung: der Foto-Abzug (`.muster`) ragt mit negativem Rand über die Feldkante, Abdeckband klebt schräg an den Ecken, Fächer-Streifen sind versetzt, der Dropdown liegt mit 2px Tintenrand auf der Wand. Das Farbkorn (`--korn`, feiner Rauschfilm) gibt Farbfeldern Materialwirkung; die Wand selbst trägt nur ein 4,5-Prozent-Korn.

### Named Rules
**The Overlap Not Shadow Rule.** Tiefe nur durch Überlappung, Versatz und Abdeckband. Kein `box-shadow`, kein Blur, kein Glühen.
**The Grain On Fields Rule.** Jedes Farbfeld (Rollenfeld, Tinte, Gold, Fächer, Cross-Link, Patches, Farbprobe, Footer) trägt das Korn; Wand und Weißflächen nicht.

## Shapes

Scharf: `border-radius: 0` an Buttons, Chips, Feldern, Karten, Fokus. Zeichnung ist 2px Tinte (Linien, Rahmen, Header-Kante), im Fehlerzustand 3px Rot. Gestrichelt (2px) nur im offenen Region-Feld. Das Abdeckband ist ein schräg (-2deg Label, ±38deg an Abzug-Ecken) gesetztes Rechteck. Die Pinselkante ist eine Maske aus Borstenstreifen (30px breit, 480px lang), links am Startseiten-Farbfeld, am Unterrand von `.page-hero--kante` und unter 900px oben. Einzige runde Form ist die Ziffern-Marke der WDVS-Legende (Kreis); sie ist eine Zeichnungsmarke, keine Stilregel.

## Components

### Buttons
- **Shape:** scharf (0), 2px Tintenrand, Mindesthöhe 52px (Groß 60px), Archivo 700.
- **Primary (`btn-accent`):** Goldband mit Tinte-Text. Hover kehrt um (Tinte mit Goldband-Text).
- **Outline:** transparent, Tinte-Text und -Rand, Hover füllt Tinte. **Outline-Light** auf Rollenfeldern in Auf-Farbe.
- **Hover / Press:** Hover nur unter `(hover: hover) and (pointer: fine)`. Press `scale(0.97)`, 140ms `--ease-out`.
- **Auf Goldband-Flächen (Abschluss):** Primär kehrt zu Tinte mit Goldband-Text, Sekundär mit Tinte-Rand.

### Tape-Label
Goldband-Streifen mit Großbuchstaben in Big Shoulders, -2deg gedreht. Beschriftet ein Objekt (Farbprobe, Inhaber-Rolle, Logo-Zusatz); es ist keine Abschnitts-Überschrift.

### Navigation
- **Header:** Kalkweiß mit 2px Tinte-Kante, sticky. Links Logo (Name in Display, Zusatz als Tape-Label), Menü Archivo 600; aktiver Punkt 800 mit voller Goldband-Unterlegung, Hover füllt sie von links (200ms).
- **Dropdown (Leistungen):** Wand, 2px Tinte, Hover-Zeilen in Goldband, nur mit Hover-Gate; per Taste und Touch über den Caret.
- **Drawer (unter 960px):** Tinte-Fläche von rechts, 300ms `--ease-drawer`, Menüpunkte in Display 2.5rem Großbuchstaben, aktiver Punkt Goldband. Hamburger 48px, offen goldfarben.
- **Mobile Aktionsleiste (unter 768px):** Tinte mit 4px Goldband-Kante oben, drei Ziele (Anrufen, WhatsApp, Anfragen), Anfragen als Goldband-Fläche.

### Farbprobe (Signatur)
Das Startseiten-Hero-Feld: Fläche in Muster-Farbe mit Pinselkante links, sechs Muster-Chips (Farbstreifen plus Name, `aria-pressed`). Tippen streicht per Web-Animations-API eine Rollerbahn (`clip-path`, 560ms, `--ease-out`) von links über das Feld; ein zweiter Tipp beendet die laufende Bahn und startet die nächste. Bei reduzierter Bewegung blendet die Farbe in 180ms weich ein. Ohne JS bleibt das Feld in Taubenblau stehen, Chips und Hinweis entfallen. Fokus: zweifarbiger Ring (Wand, dann Tinte).

### Fakten-Zeile
Drei Spalten, getrennt durch 2px Tintenlinien, Titel in Display, Text leise. Unter 900px gestapelt mit Trennlinien.

### Schwerpunkte-Fächer (`.fan`)
Drei Rollenfelder: Fassade als Hauptstreifen über volle Breite (Titel bis 6rem, Abzug überlappt nach oben), Innenraum und Dämmung kleiner darunter mit Abzug an der Oberkante. Hover (nur Zeiger) hebt um 4px. Mobil: einspaltig, versetzt eingerückt.

### Zollstock-Ablauf (`.zollstock`)
Goldband-Leiste mit SVG-Teilung (Zollstock-Striche in Tinte), Stencil-Ziffer, darunter Titel und Kurztext. Automatisch umbrechendes Raster (Spaltenminimum 14.5rem).

### Foto-Abzug (`.muster`)
Wandfarbener Rahmen, zwei schräge Goldband-Abdeckbänder an den Ecken, darunter die Bildzeile "Beispielfoto". Bild im Seitenverhältnis 4:3, `object-fit: cover`.

### Inhaber-Typoplakat (`.meister`)
Der Name in Display bis 6rem, Großbuchstaben, mit Tape-Label "Inhaber & Malermeister" und kurzem Text. Ohne Portrait. Der Portrait-Platz bleibt frei, bis ein echtes Foto vorliegt.

### Region-Musterfelder (`.patch`)
Asymmetrisches Raster: Sitz in Tinte (doppelt hoch), Sandstein und Taubenblau als Muster-Felder, ein gestricheltes offenes Feld für Duisburg auf Anfrage.

### Abschluss-Fläche (`.cta-section`)
Volles Goldband, Überschrift links, Text und zwei Buttons rechts (Tinte-Primär).

### Seitenköpfe
Farbfeld in der Rolle der Seite (`--feld`), Goldband (`--gold`, Kontakt) oder Wand mit kurzem Goldband-Balken (`--wand`); `--kante` setzt die Pinselkante am Unterrand, der Abzug überlappt rechts.

### Faktor-Zeilen, Check-Liste, FAQ, Cross-Link
- **Faktor-Zeilen (`.factor-grid`, `.region-card`):** Zeilen mit 2px Tintenlinie, links Titel, rechts Text.
- **Check-Liste:** Häkchen auf Goldband-Quadrat 28px, Text 600.
- **FAQ:** `details` mit Display-Frage, Plus-Zeichen dreht auf 45 Grad, Inhalt öffnet per `::details-content` (240ms, nur ohne reduzierte Bewegung und mit `interpolate-size`).
- **Cross-Link-Feld:** Rollenfeld der Zielseite (Stahl, Salbei) mit goldenem Button.

### Swatches und Kontaktfelder
- **Swatches:** hohe Farbchips (3:4,2) mit 2px Tinte, alternierend versetzt, Name darunter.
- **Kontaktfelder:** Telefon als Goldband-Hauptfläche (links, doppelt hoch, Nummer bis 5.25rem), WhatsApp und E-Mail als Wandfelder mit Tinte-Rand; Hover (nur Zeiger) kehrt zu Tinte um.

### Formular
- **Felder:** 16px Schrift (kein iOS-Zoom), weiß, 2px Tinte, scharf, Höhe 52px. Fokus: 3px Goldband-Outline.
- **Chips als Radios** (`.choice-group`): Wandfläche mit 2px Tinte, gewählt Tinte, Fokus 3px Tinte-Outline. Radios sind visuell verborgen, nicht entfernt.
- **Honeypot:** `.hp-field` weit außerhalb des Bildschirms.
- **Fehler:** 3px Rotrand am Feld oder Fieldset, Fehlerbox rosa mit Rotrand, Statusbox Goldband mit Tinterand.

### WDVS-Zeichnung
Inline-SVG der Dämmschichten auf Wandfläche, daneben eine Legendenliste mit nummerierten Tinte-Marken. Zeichnung und Liste tragen dieselbe Information, die Liste ist die Textfassung.

### Footer
Tinte mit Korn, Logo mit Goldband-Zusatz, drei Link-Spalten, Zeile mit Hinweis, dass die Fotos Beispielbilder (lizenzfreie Stockfotos) sind, und dem Slogan in Display. Links in Auf-Tinte leise, Hover Goldband (nur Zeiger).

### Bewegung
Eine Signatur: die Farbprobe. Sonst nur kurze Übergänge (120 bis 240ms) auf Transform, Farbe, Größe der Unterlegung. Kurven: `--ease-out` (`cubic-bezier(0.23, 1, 0.32, 1)`) für Ein- und Auslauf, `--ease-in-out` (`cubic-bezier(0.77, 0, 0.175, 1)`) für Zustandswechsel, `--ease-drawer` (`cubic-bezier(0.32, 0.72, 0, 1)`) für den Drawer. Kein `ease-in`. Press `scale(0.97)`. Reduzierte Bewegung: Animationen auf 0.01ms, Transform-Übergänge entfallen, Drawer und Farbprobe wechseln auf weiches Einblenden (Opacity).

## Do's and Don'ts

### Do:
- **Do** Goldband für jeden Button und jedes Tape-Label; Text darauf Tinte.
- **Do** Rollenfarben (Salbei = Innenraum, Ziegel = Fassade, Stahlblau = Dämmung) als große Felder, gesetzt über `body[data-rolle]`.
- **Do** jedes Farbfeld mit dem Korn (`--korn`) hinterlegen; die Pinselkante nur an Startseiten-Farbfeld und Seitenkopf-Unterrand.
- **Do** Tiefe durch Überlappung und Abdeckband bilden, Ecken scharf (0), Linien 2px Tinte.
- **Do** Hover ausschließlich unter `(hover: hover) and (pointer: fine)` und Press mit `scale(0.97)`.
- **Do** Kontrast mindestens 4,5:1 für Text, Touch-Ziele mindestens 44px (2.75rem).
- **Do** jedes Stockfoto als Abzug mit der Zeile "Beispielfoto" zeigen und im Footer als Beispielbild kennzeichnen.
- **Do** einen Ausweg für reduzierte Bewegung (weiches Einblenden) mitbauen.
- **Do** Schriften nur selbst gehostet (OFL) einbinden.

### Don't:
- **Don't** Zahlen, Gründungsjahr, Bewertungen, Kundenstimmen, Zitate, Preise oder Referenzprojekte erfinden. Was fehlt, steht als "folgt".
- **Don't** Eyebrows oder Kicker über Überschriften setzen; das Tape-Label beschriftet ein Objekt, keinen Abschnitt.
- **Don't** Schatten (`box-shadow`, Blur, Glow) für Tiefe verwenden.
- **Don't** eine zweite Aktionsfarbe einführen und Rollenfarben nie für Hover, Auswahl, Erfolg oder Fehler nutzen.
- **Don't** den Inhaber mit einem Stockfoto abbilden; das Portrait nur mit echtem Foto.
- **Don't** Stockfotos als eigene Arbeit oder als echte Referenz ausgeben.
- **Don't** Hover auf Touchgeräte hängen lassen (kein Hover ohne Gate).
- **Don't** einen dunklen Modus bauen; die Seite ist `color-scheme: light`.
- **Don't** Fließtext einfärben oder Kästen mit Rundung und Schatten als Karten verwenden.
- **Don't** den Stencil-Schnitt für etwas anderes als Ziffern nutzen.

## Bewusste Abweichungen

- **Einthemig hell.** Kein dunkler Modus (`color-scheme: light`): Farbe lässt sich nur auf hellem Grund beurteilen.
- **Rollenfarben als Inhalt.** Salbei, Ziegel, Stahlblau sind die Ware (Farbe) und stehen als große Felder. Sie tragen nie UI-Zustände, damit die eine Aktionsfarbe Goldband eindeutig bleibt.
- **Eine Aktionsfarbe.** Goldband für alle Buttons und Tape-Label; kein Akzent-Paar.
- **Selbst erzeugte Randgrafik.** Pinselkante (`--kante-links`, `--kante-oben`, als Maske) und Korn (`--korn`) sind selbst erzeugte SVG-Daten in `css/style.css`, keine Fremdgrafik.
- **Beschränkte Kreisform.** Die Ziffern-Marke der WDVS-Legende ist rund (`border-radius: 50%`); sonst gilt scharf.
- **Zweifarbiger Fokusring.** Der Ring der Farbprobe-Chips nutzt eine `box-shadow`-Linie ohne Blur (0 0 0 3px) nur als Ring-Technik, nicht als Tiefe.

## Bildherkunft

Alle Rasterbilder sind lizenzfreie Stockfotos von Unsplash und Pexels (Nachweis je Datei in `BILDNACHWEIS.md`, Stand 14.09.2026), zugeschnitten, skaliert und als JPEG komprimiert. Keine KI-Bilder, keine echten Betriebsfotos, keine neuen Fotos im Redesign. Sie erscheinen nur als Beiwerk im Foto-Abzug mit "Beispielfoto". `bilder/hero/hero-malerarbeiten.*` und `bilder/hero/cta-banner.*` sind nicht mehr eingebunden, aber behalten. Die beiden Portrait-Plätze des Inhabers zeigen bewusst kein Foto. Pinselkante und Korn sind selbst erzeugte SVG-Daten, keine Rasterbilder; die Zollstock-Teilung, die Häkchen und die WDVS-Zeichnung sind Inline-SVG.
