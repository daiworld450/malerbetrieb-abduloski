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
Status: alle Bild-Slots sind CSS-Platzhalter (`.img-placeholder`, Text "Foto
folgt"), kein externer Platzhalterdienst, keine KI-Bilder, keine Stock-Fotos.
Jeder Platzhalter trägt im Quelltext direkt darüber einen HTML-Kommentar mit
dem vorgesehenen Alt-Text und Beispiel-Markup, z. B.:

```html
<!-- Foto folgt - spaeter ersetzen durch:
     <img src="/bilder/…" alt="Fassadenanstrich an einem Wohnhaus in Mülheim an der Ruhr" width="800" height="600" loading="lazy"> -->
<div class="img-placeholder" ...>...</div>
```

Betroffene Slots (Stand Redesign Welle B, 2026-09-14; **Welle C, 2026-09-14
ergänzt**: CTA-Banner-Hintergrundbild):
- `index.html`: Hero-Bild, drei Service-Karten (Innenraum/Fassade/WDVS),
  Vorher/Nachher-Bildpaar (siehe Punkt 8), Portrait im Block „Ihr
  Malermeister“, **neu (Welle C): Hintergrundbild im Abschluss-CTA-Banner**
  (`.cta-banner--image-bg`, aktuell `.cta-banner__bg`-Platzhalter mit
  sichtbarem „Foto folgt“-Hinweis – sobald ein Foto vorliegt: Inline-Style
  `style="background-image:url('…')"` auf das `<section class="cta-section
  cta-banner--image-bg">`-Tag setzen und die `.cta-banner__bg`-Div
  entfernen, siehe `DESIGN-SYSTEM.md` Abschnitt 11.4)
- `leistungen/index.html`: Hero-Bild, zehn Leistungs-Karten (Innenraum-,
  Fassade- und WDVS-Gruppe)
- `leistungen/fassadenanstrich-fassadensanierung-muelheim.html`: Hero-Hintergrundbild
  (`.page-hero--image-bg`, Inline-Style-Kommentar direkt im Quelltext) +
  Vorher/Nachher-Bildpaar
- `leistungen/waermedaemmung-wdvs-muelheim.html`: Hero-Hintergrundbild
  (Inline-Style-Kommentar im Quelltext) – der Aufbau-Diagramm-Abschnitt
  selbst ist reines Inline-SVG und braucht **kein** Foto
- `leistungen/innenanstrich-tapezieren-muelheim.html`: Hero-Bild, drei
  Bereichs-Karten, Vorher/Nachher-Bildpaar, drei Projekt-Platzhalterkarten
  (siehe Punkt 11)
- `leistungen/fassadenanstrich-essen.html`, `fassadenanstrich-oberhausen.html`,
  `innenanstrich-essen.html`, `innenanstrich-oberhausen.html`: je ein
  Hero-Bild zum jeweiligen Thema/Ort
- `ueber-uns.html`: Portrait-Bild im Hero + vier Slots in der Galerie „Bilder
  bei der Arbeit" (siehe Punkt 12)
- `referenzen.html`: sechs Projekt-Platzhalterkarten (siehe Punkt 11)

Aktion: Fotos vom Inhaber einsammeln, in `bilder/` ablegen, Platzhalter-Divs
1:1 durch `<img>` mit dem vorgegebenen Alt-Text ersetzen.

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
voll funktionsfähig (Maus/Touch/Tastatur), zeigt aber noch Platzhalterbilder
mit den Texten „Vorher-Foto folgt" / „Nachher-Foto folgt". Der Begleittext
daneben ist **seit Welle B klammerfrei**: Kicker „Projekte", Überschrift
„Erste(s) …-Projekt(fotos) folgt/folgen in Kürze", darunter ein
`.placeholder-note`-Satz, der nichts Unbelegtes behauptet. Aktion: Sobald ein
erstes abgeschlossenes Projekt mit Fotoerlaubnis des Kunden vorliegt, die
`.img-placeholder`-Divs durch echte Vorher-/Nachher-Fotos ersetzen (Alt-Text
entsprechend anpassen) und Kicker/Überschrift/Text durch die echten Angaben
ersetzen – keine Fantasieprojekte eintragen.

## 9. (entfällt seit Welle B)
Die frühere Synchronisations-Notiz zwischen `index.html` und `ueber-uns.html`
ist in Punkt 5 aufgegangen (beide Stellen nutzen jetzt denselben
`.placeholder-note`-Text statt eines Klammer-Zitats).

## 10. Regionsgrafik (SVG)
Datei: `index.html`, Abschnitt „Unsere Region" (`.region-map`). Es handelt
sich um eine bewusst einfache, selbst gezeichnete, schematische Darstellung
(keine echte Kartengrafik, kein Kartendienst mit Kosten) – rein dekorativ,
`aria-hidden="true"`. Kein Redaktionsbedarf, außer die Orte ändern sich.

## 11. Referenzen-Grid und Projekt-Platzhalterkarten (neu, Welle B)
Dateien: `referenzen.html` (sechs Karten, Filter Alle/Innenraum/Fassade/WDVS),
`leistungen/innenanstrich-tapezieren-muelheim.html` (drei Karten im Abschnitt
„Aktuelle Innenraum-Projekte"). Alle Karten zeigen bewusst nur eine neutrale
Kategorie-Bezeichnung („Innenraum-Projekt" / „Fassaden-Projekt" /
„WDVS-Projekt") plus `.placeholder-note` „Projekte folgen in Kürze" – kein
erfundener Projektname, Ort oder Datum. Aktion: Sobald abgeschlossene,
freigegebene Projekte vorliegen, Karten einzeln durch echte Fotos, Titel
(z. B. Ort · Leistung) und Kurzbeschreibung ersetzen. Die vier lokalen
Spoke-Seiten (`fassadenanstrich-essen.html`, `fassadenanstrich-oberhausen.html`,
`innenanstrich-essen.html`, `innenanstrich-oberhausen.html`) haben je einen
kompakten `.placeholder-note`-Absatz „Projekte in {Stadt}" mit Verweis auf
`referenzen.html` statt einer eigenen Kartenreihe – bewusst kompakter
gehalten, siehe Anlage des Auftrags.

## 12. Bilder-Galerie auf ueber-uns.html (neu, Welle B)
Datei: `ueber-uns.html`, Abschnitt „Bilder bei der Arbeit" (`.gallery-grid`,
vier `.img-placeholder`-Slots mit Alt-Text-Kommentaren). Kein Redaktionsbedarf
außer den eigentlichen Fotos (siehe Punkt 1).

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
