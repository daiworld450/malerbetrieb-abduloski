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

Betroffene Slots:
- `index.html`: Hero-Bild, zwei Pillar-Kacheln (Fassade/Innenraum)
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
