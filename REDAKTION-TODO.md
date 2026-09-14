# Redaktion offen – NICHT auf der Live-Seite verlinkt

Diese Liste sammelt alles, was auf der Website bewusst generisch/ohne
konkrete Angabe geblieben ist, weil der Fakt noch nicht bestätigt war. Nichts
davon wurde erfunden. Sobald ein Punkt geklärt ist, den jeweiligen
Textbaustein in der genannten Datei ergänzen.

**Wichtige Regel (seit Welle B, 2026-09-14):** Auf der Live-Seite stehen an
keiner Stelle mehr sichtbare eckige Klammern oder TODO-Marker im Fließtext.
Offene Punkte werden ausschließlich hier in `REDAKTION-TODO.md` nachgehalten
und mit ruhigem, fertig wirkendem Platzhaltertext (Klasse `.placeholder-note`
bzw. `.gallery-grid`/`.project-grid` mit „folgt/folgen in Kürze") auf der
Seite selbst dargestellt.

## 1. Fotos (alle Seiten)
**Status seit Welle D (14.09.2026): Stockfotos eingesetzt, echte Projektfotos
ersetzen sobald vorhanden.** Alle Bild-Slots aus Welle B/C (siehe unten) sind
jetzt mit lizenzfreien Unsplash-/Pexels-Fotos befüllt (Unsplash License /
Pexels License, keine Registrierung/Namensnennungspflicht, siehe
`BILDNACHWEIS.md` für Fotograf/Quelle je Datei). Kein KI-generiertes Bild.
Bilder liegen lokal in `bilder/` (`hero/`, `leistungen/`, `vorher-nachher/`,
`referenzen/`, `ueber-uns/`), keine Hotlinks zu Unsplash/Pexels.

**Ausnahme, weiterhin offen:** Die **zwei Portrait-Slots** (Startseite,
Abschnitt „Ihr Malermeister" und Hero auf `ueber-uns.html`) zeigen eine
konkrete, namentlich genannte reale Person (Sevdan Abduloski) – dort bleibt
bewusst der bisherige `.img-placeholder` stehen, kein Stockfoto einer
fremden Person. Aktion: echtes Portraitfoto vom Inhaber einsammeln, dann
Platzhalter-Div 1:1 durch `<img>` mit dem vorgegebenen Alt-Text ersetzen.

**Vorher/Nachher-Bildpaare** (`index.html`, `fassadenanstrich-
fassadensanierung-muelheim.html`, `innenanstrich-tapezieren-muelheim.html`)
und die **Projekt-Karten** auf `referenzen.html` sowie die drei Projekt-
Karten auf `innenanstrich-tapezieren-muelheim.html` zeigen jetzt ebenfalls
Stockfotos – **ausdrücklich als Beispielbild gekennzeichnet** (Kicker
„Beispielhaft" bzw. Zusatz „(Beispielbild)" im Alt-Text und im
`.placeholder-note`-Text „Beispielbild – kein reales Projekt"), keine
erfundenen Orts-/Kunden-/Datumsangaben. Aktion: sobald ein erstes
abgeschlossenes, freigegebenes Projekt vorliegt, das jeweilige Stockfoto
durch das echte Foto ersetzen und Kicker/Überschrift/Text auf die echten
Angaben umstellen (siehe Punkt 8 und 11 für die Details je Slot).

Betroffene Slots (Stand Redesign Welle B, 2026-09-14; Welle C, 2026-09-14:
CTA-Banner-Hintergrundbild; **Welle D, 2026-09-14: alle unten genannten
Slots mit Stockfotos befüllt, außer den zwei Portraits**):
- `index.html`: Hero-Bild, drei Service-Karten (Innenraum/Fassade/WDVS),
  Vorher/Nachher-Bildpaar (siehe Punkt 8, Beispielbild), Portrait im Block
  „Ihr Malermeister“ (weiterhin offen, siehe oben), Hintergrundbild im
  Abschluss-CTA-Banner (`.cta-banner--image-bg`, Inline-Style gesetzt)
- `leistungen/index.html`: Hero-Bild, zehn Leistungs-Karten (Innenraum-,
  Fassade- und WDVS-Gruppe)
- `leistungen/fassadenanstrich-fassadensanierung-muelheim.html`:
  Hero-Hintergrundbild (`.page-hero--image-bg`, Inline-Style gesetzt) +
  Vorher/Nachher-Bildpaar (Beispielbild)
- `leistungen/waermedaemmung-wdvs-muelheim.html`: Hero-Hintergrundbild
  (Inline-Style gesetzt) – der Aufbau-Diagramm-Abschnitt selbst ist reines
  Inline-SVG und braucht **kein** Foto
- `leistungen/innenanstrich-tapezieren-muelheim.html`: Hero-Bild, drei
  Bereichs-Karten, Vorher/Nachher-Bildpaar (Beispielbild), drei
  Projekt-Karten (Beispielbild, siehe Punkt 11)
- `leistungen/fassadenanstrich-essen.html`, `fassadenanstrich-oberhausen.html`,
  `innenanstrich-essen.html`, `innenanstrich-oberhausen.html`: je ein
  Hero-Bild zum jeweiligen Thema/Ort
- `ueber-uns.html`: Portrait-Bild im Hero (weiterhin offen, siehe oben) +
  vier Slots in der Galerie „Bilder bei der Arbeit" (siehe Punkt 12)
- `referenzen.html`: sechs Projekt-Karten (Beispielbild, siehe Punkt 11)

Aktion: Echte Fotos vom Inhaber einsammeln, in `bilder/` ablegen, die
jeweilige Stockfoto-Datei 1:1 durch das echte Foto ersetzen (Dateiname kann
gleich bleiben oder sinnvoll umbenannt werden), Alt-Text auf die echte
Beschreibung (Ort, ggf. Leistung) umstellen und den „(Beispielbild)"-Zusatz
entfernen.

## 2. Leistungsdetails jenseits von "Maler"
Nicht bestätigt: gibt es weitere Angebote (Bodenbeschichtung, Gerüstbau,
Spachtel-/Rigips-Arbeiten, Farbberatung, Betriebsfarben/Gewerbe)? Aktuell nur
das, was der Auftrag als Fakt vorgab: Fassadenanstrich, Fassadensanierung,
Untergrundvorbereitung, Risssanierung, Wärmedämmung/WDVS, Gestaltung und
Beschichtung, Innenanstrich, Tapezieren, Lackierarbeiten an Holz/Fenster/
Türen.

## 3. Gründungsjahr / Teamgröße (weiterhin offen) — Meistertitel jetzt bestätigt
**Update 2026-09-14:** Der Inhaber hat bestätigt, dass Sevdan Abduloski
Malermeister ist. „Malermeister"/„Meisterqualität" darf ab sofort auf der
Seite verwendet werden (Trust-Bereich, „Der Betrieb"/Ihr-Malermeister-Abschnitt,
`ueber-uns.html`, ggf. JSON-LD). Weiterhin NICHT bestätigt: Gründungsjahr
("seit 19XX") und Team-/Mitarbeiterzahl — dort bleibt es bei generischen
Formulierungen, bis der Inhaber das liefert.

## 4. USt-IdNr. für das Impressum
Datei: `impressum.html`. **Seit Welle B (2026-09-14) steht dort keine
sichtbare Platzhalter-Zeile mehr** – die Zeile „Umsatzsteuer-Identifikationsnummer"
wurde komplett aus dem sichtbaren Impressum entfernt (nicht nur versteckt),
da nicht bestätigt ist, ob eine USt-IdNr existiert (z. B. Kleinunternehmerregelung
möglich) und eine erfundene oder mit Klammern markierte Angabe dort nicht
stehen darf.
**Aktion:** USt-IdNr. im Impressum ergänzen, sobald vom Inhaber bestätigt
(Zeile aktuell bewusst weggelassen, nicht nur versteckt).

## 5. Inhaber-Zitat
Betroffene Stellen: `index.html` (Abschnitt „Der Betrieb", Owner-Block) und
`ueber-uns.html` (Abschnitt „Der Betrieb"). **Seit Welle B** steht dort kein
Klammer-Platzhalter und kein Blockquote/Zitat-Optik mehr (das hätte wie ein
echtes, unbelegtes Zitat ausgesehen) – stattdessen ein ruhiger, dezent
gestylter Hinweistext (Klasse `.placeholder-note`): „Ein persönliches Wort
vom Inhaber folgt in Kürze." Sobald ein echtes, kurzes Statement des
Inhabers vorliegt, an **beiden** Stellen synchron eintragen (kann dort dann
auch wieder in einer prominenteren Zitat-Optik dargestellt werden).

## 6. FormSubmit-Bestätigungsmail (Kontaktformular)
Das Kontaktformular auf `kontakt.html` läuft über `formsubmit.co` mit
`action="https://formsubmit.co/sa-service@gmx.de"`. **Nach der ersten
eingehenden Testanfrage schickt FormSubmit eine Bestätigungs-Mail an
sa-service@gmx.de, die bestätigt werden muss** – sonst werden alle weiteren
Formular-Anfragen stillschweigend verworfen. Bitte direkt nach dem Go-live
selbst eine Testanfrage über das Formular senden und die Bestätigungsmail
freischalten. (Ist bei einem anderen Projekt schon einmal übersehen worden.)

## 7. Bewertungen / aggregateRating
Bewusst NICHT ins JSON-LD eingebaut, weil aktuell 0 Bewertungen vorliegen –
das wäre erfundener Content gewesen. Sobald über das Google-Business-Profil
echte Bewertungen vorliegen, kann ein `aggregateRating`-Feld im JSON-LD
(`<script type="application/ld+json">` in jeder Seite) ergänzt werden, aber
nur mit echten, aktuellen Werten (nicht statisch eintragen, sonst veraltet es
und wird zur Falschangabe).

## 8. Vorher/Nachher-Projekte (index.html + 2 Leistungsseiten)
Betroffen: `index.html`, `leistungen/fassadenanstrich-fassadensanierung-muelheim.html`,
`leistungen/innenanstrich-tapezieren-muelheim.html` (Komponente
`BeforeAfterSlider`, Klasse `.before-after`). Der Slider selbst ist jeweils
voll funktionsfähig (Maus/Touch/Tastatur). **Seit Welle D (14.09.2026)**
zeigt jede Seite ein thematisch passendes Stockfoto-Paar (verwitterte vs.
frisch verputzte Fassade auf `index.html` und der Fassadenseite; abgenutzte
vs. frisch gestrichene Wand auf der Innenraum-Seite, siehe
`BILDNACHWEIS.md`) – **ausdrücklich als Beispielbild markiert**: Kicker
„Beispielhaft", Überschrift „So kann eine/ein …aussehen", darunter ein
`.placeholder-note`-Satz „Beispielbild – kein reales Projekt. Sobald ein
abgeschlossenes Projekt mit Fotoerlaubnis vorliegt, ersetzt eine ehrliche
Vorher-/Nachher-Ansicht dieses Beispiel." Aktion: Sobald ein erstes
abgeschlossenes Projekt mit Fotoerlaubnis des Kunden vorliegt, die
Stockfotos durch echte Vorher-/Nachher-Fotos ersetzen (Alt-Text entsprechend
anpassen, „(Beispielbild, kein reales Projekt)"-Zusatz entfernen) und
Kicker/Überschrift/Text durch die echten Angaben ersetzen – keine
Fantasieprojekte eintragen.

## 9. (entfällt seit Welle B)
Die frühere Synchronisations-Notiz zwischen `index.html` und `ueber-uns.html`
ist in Punkt 5 aufgegangen (beide Stellen nutzen jetzt denselben
`.placeholder-note`-Text statt eines Klammer-Zitats).

## 10. Regionsgrafik (SVG)
Datei: `index.html`, Abschnitt „Unsere Region" (`.region-map`). Es handelt
sich um eine bewusst einfache, selbst gezeichnete, schematische Darstellung
(keine echte Kartengrafik, kein Kartendienst mit Kosten) – rein dekorativ,
`aria-hidden="true"`. Kein Redaktionsbedarf, außer die Orte ändern sich.

## 11. Referenzen-Grid und Projekt-Karten (neu, Welle B; Fotos Welle D)
Dateien: `referenzen.html` (sechs Karten, Filter Alle/Innenraum/Fassade/WDVS),
`leistungen/innenanstrich-tapezieren-muelheim.html` (drei Karten im Abschnitt
„So können Innenraum-Projekte aussehen"). **Seit Welle D (14.09.2026)**
zeigt jede Karte ein zur Kategorie passendes Stockfoto (siehe
`BILDNACHWEIS.md`) plus weiterhin nur eine neutrale Kategorie-Bezeichnung
(„Innenraum-Projekt" / „Fassaden-Projekt" / „WDVS-Projekt") und den
`.placeholder-note`-Hinweis „Beispielbild – kein reales Projekt. Echte
Referenzen folgen." – kein erfundener Projektname, Ort oder Datum. Die
Referenzen-Hero-Einleitung wurde entsprechend ergänzt (Hinweis auf
gekennzeichnete Beispielbilder). Aktion: Sobald abgeschlossene, freigegebene
Projekte vorliegen, Karten einzeln durch echte Fotos, Titel (z. B. Ort ·
Leistung) und Kurzbeschreibung ersetzen, „Beispielbild"-Hinweis entfernen.
Die vier lokalen
Spoke-Seiten (`fassadenanstrich-essen.html`, `fassadenanstrich-oberhausen.html`,
`innenanstrich-essen.html`, `innenanstrich-oberhausen.html`) haben je einen
kompakten `.placeholder-note`-Absatz „Projekte in {Stadt}" mit Verweis auf
`referenzen.html` statt einer eigenen Kartenreihe – bewusst kompakter
gehalten, siehe Anlage des Auftrags.

## 12. Bilder-Galerie auf ueber-uns.html (neu, Welle B; Fotos Welle D)
Datei: `ueber-uns.html`, Abschnitt „Bilder bei der Arbeit" (`.gallery-grid`,
vier Slots). **Seit Welle D (14.09.2026)** mit vier Stockfotos befüllt
(Renovierung/Vorbereitung, Werkzeug, Untergrundarbeit, Lackierarbeit – siehe
`BILDNACHWEIS.md`). Kein Redaktionsbedarf außer dem Austausch gegen echte
Fotos vom Betrieb, sobald vorhanden (siehe Punkt 1).

## 13. WDVS-Aufbau-Diagramm (neu, Welle B)
Datei: `leistungen/waermedaemmung-wdvs-muelheim.html`. Reines, selbst
gezeichnetes Inline-SVG (`.wdvs-diagram`) mit sieben beschrifteten Schichten
(Bestandswand, Kleber, Dämmplatte, Armierungsgewebe, Armierungsmörtel,
Oberputz, Beschichtung) – schematisch, produktneutral. **Kein Redaktionsbedarf**,
solange sich der grundsätzliche WDVS-Aufbau nicht ändert.

## 14. Foto-Upload im Kontaktformular (verworfen, Welle B)
Im Auftrag stand die Idee, dem Kontaktformular auf `kontakt.html` einen
Foto-Upload hinzuzufügen (FormSubmit unterstützt `enctype="multipart/form-data"`
im kostenlosen Plan bis zu einer Größenbeschränkung). Bewusst **nicht**
eingebaut, weil die Zuverlässigkeit im kostenlosen FormSubmit-Plan nicht
sicher genug eingeschätzt werden konnte, um eine potenziell kaputte Funktion
live zu stellen. **Idee für später:** Foto-Upload ergänzen, sobald verlässlich
getestet ist, dass Dateianhänge über FormSubmit zuverlässig ankommen –
alternativ auf einen separaten Dienst (z. B. eigenes kleines Upload-Formular)
ausweichen.

## 15. Farbton-Swatches auf der Innenraum-Seite (Klarstellung, Welle B)
Datei: `leistungen/innenanstrich-tapezieren-muelheim.html`, Abschnitt „Farben.
Materialien. Möglichkeiten." Die sechs Farbmuster (Warmweiß, Sandstein,
Salbeigrün, Taubenblau, Terrakotta, Anthrazitgrün) sind **rein dekorative,
generische Farbfamilien-Namen** zur Veranschaulichung der Bandbreite – keine
echten Produkt- oder Herstellerfarbtöne, keine erfundene Marke. Kein
Redaktionsbedarf, außer es sollen künftig reale Farbsysteme/Hersteller
genannt werden.
