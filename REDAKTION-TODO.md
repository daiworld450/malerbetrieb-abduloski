# Redaktion offen – NICHT auf der Live-Seite verlinkt

Diese Liste sammelt alles, was auf der Website bewusst generisch/ohne
konkrete Angabe geblieben ist, weil der Fakt noch nicht bestätigt war. Nichts
davon wurde erfunden. Sobald ein Punkt geklärt ist, den jeweiligen
Textbaustein in der genannten Datei ergänzen.

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

Betroffene Slots (Stand Redesign Welle A, 2026-09-13):
- `index.html`: Hero-Bild, drei Service-Karten (Innenraum/Fassade/WDVS),
  Vorher/Nachher-Bildpaar (siehe Punkt 8), Portrait im Block „Der Betrieb“
- alle 7 Leistungsseiten: je ein Hero-Bild zum jeweiligen Thema
- `ueber-uns.html`: ein Bild (Inhaber/Betrieb)

Aktion: Fotos vom Inhaber einsammeln, in `bilder/` ablegen, Platzhalter-Divs
1:1 durch `<img>` mit dem vorgegebenen Alt-Text ersetzen.

## 2. Leistungsdetails jenseits von "Maler"
Nicht bestätigt: gibt es weitere Angebote (Bodenbeschichtung, Gerüstbau,
Spachtel-/Rigips-Arbeiten, Farbberatung, Betriebsfarben/Gewerbe)? Aktuell nur
das, was der Auftrag als Fakt vorgab: Fassadenanstrich, Fassadensanierung,
Wärmedämmung/WDVS, Innenanstrich, Tapezieren, Lackierarbeiten an Holz/Fenster/
Türen.

## 3. Gründungsjahr / Meistertitel / Teamgröße
Nicht bestätigt. Deshalb nirgends ein "seit 19XX", kein "Meisterbetrieb",
keine Team- oder Mitarbeiterzahl auf der Seite. Falls einer dieser Punkte
zutrifft, gehört er in `ueber-uns.html` (Abschnitt "Der Betrieb") und kann den
Trust-Bereich auf `index.html` verstärken.

## 4. USt-IdNr. für das Impressum
Datei: `impressum.html`, Abschnitt "Umsatzsteuer-Identifikationsnummer".
Aktuell: `[TODO Redaktion: USt-IdNr. gemäß § 27a Umsatzsteuergesetz ergänzen,
sofern vorhanden.]` – nur der Inhaber kann diese Angabe machen (oder
bestätigen, dass keine vorliegt/nötig ist, z. B. bei Kleinunternehmerregelung).

## 5. Inhaber-Zitat
Datei: `ueber-uns.html`, Blockquote. Aktuell Platzhaltertext
`[Zitat vom Inhaber folgt]`. Ein kurzes, persönliches Statement des Inhabers
einsetzen, sobald vorhanden.

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

## 8. Vorher/Nachher-Projekt auf der Startseite (neu seit Redesign Welle A)
Datei: `index.html`, Abschnitt „Vorher. Nachher. Ein echter Unterschied.“
(Komponente `BeforeAfterSlider`, Klasse `.before-after`). Der Slider selbst
ist voll funktionsfähig (Maus/Touch/Tastatur), zeigt aber noch zwei
Platzhalterbilder mit den Texten „Vorher-Foto folgt“ / „Nachher-Foto folgt“.
Zusätzlich ist der Begleittext daneben komplett Platzhalter:
`[Projektname folgt]`, `[Ort folgt]`, `[Leistung folgt]` sowie ein
generischer Ankündigungssatz. Aktion: Sobald ein erstes abgeschlossenes
Projekt mit Fotoerlaubnis des Kunden vorliegt, beide `.img-placeholder`-Divs
im `.before-after`-Block durch echte Vorher-/Nachher-Fotos ersetzen (Alt-Text
entsprechend anpassen) und die drei eckigen Klammern durch echte Angaben
ersetzen – keine Fantasieprojekte eintragen.

## 9. Inhaltliche Beschreibung „Der Betrieb“ auf der Startseite (neu)
Datei: `index.html`, Abschnitt „Der Betrieb“ (Komponente Owner-Block).
Verwendet bewusst denselben Platzhaltertext wie `ueber-uns.html`
(`[Zitat vom Inhaber folgt]`), damit nicht zwei unterschiedliche erfundene
Zitate entstehen. Sobald ein echtes Zitat vorliegt, an **beiden** Stellen
(`index.html` und `ueber-uns.html`) eintragen.

## 10. Regionsgrafik (SVG, neu)
Datei: `index.html`, Abschnitt „Unsere Region“ (`.region-map`). Es handelt
sich um eine bewusst einfache, selbst gezeichnete, schematische Darstellung
(keine echte Kartengrafik, kein Kartendienst mit Kosten) – rein dekorativ,
`aria-hidden="true"`. Kein Redaktionsbedarf, außer die Orte ändern sich.
