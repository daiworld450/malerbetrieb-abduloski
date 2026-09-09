# Website – Sevdan Abduloski Malerbetrieb

Statische, produktionsreife Website für den Malerbetrieb Sevdan Abduloski in
Mülheim an der Ruhr (Stadtteil Heißen). Reines HTML/CSS/Vanilla-JS, kein
Build-Step, kein Framework, keine externen JS-Bibliotheken.

- **Live:** https://daiworld450.github.io/malerbetrieb-abduloski/
- **Kontaktformular:** über [FormSubmit](https://formsubmit.co/) (`action="https://formsubmit.co/sa-service@gmx.de"`), kein eigenes Backend.
- **Basis-Domain / SITE_BASE_URL:** `https://daiworld450.github.io/malerbetrieb-abduloski/`
  – aktuell als Platzhalter in jedem `<head>` (canonical, Open-Graph-URLs) und im
  JSON-LD auf jeder Seite verwendet. Bei einer eigenen Domain diesen einen Wert
  überall per Suchen/Ersetzen austauschen (Kommentar `<!-- SITE_BASE_URL: ... -->`
  markiert die Stelle in jeder Datei) und danach `sitemap.xml` sowie
  `robots.txt` anpassen.

## Struktur

```
index.html
leistungen/
  fassadenanstrich-fassadensanierung-muelheim.html   (Pillar Fassade)
  waermedaemmung-wdvs-muelheim.html                  (Spoke)
  fassadenanstrich-essen.html                        (Spoke)
  fassadenanstrich-oberhausen.html                   (Spoke)
  innenanstrich-tapezieren-muelheim.html             (Pillar Innenraum)
  innenanstrich-essen.html                           (Spoke)
  innenanstrich-oberhausen.html                      (Spoke)
ueber-uns.html
kontakt.html
impressum.html
datenschutz.html
404.html
css/style.css
js/main.js
sitemap.xml
robots.txt
REDAKTION-TODO.md   (NICHT auf der Live-Seite verlinkt)
```

## Deploy (GitHub Pages)

Branch `main`, Pfad `/` (Root). Bei jedem Push auf `main` aktualisiert GitHub
Pages automatisch. Einrichtung/Status prüfen:

```
gh api repos/daiworld450/malerbetrieb-abduloski/pages
```

## Wichtiger Hinweis zum Kontaktformular

Das Formular läuft über FormSubmit.co. **Nach der allerersten eingehenden
Anfrage schickt FormSubmit eine Bestätigungs-Mail an `sa-service@gmx.de` –
diese muss der Inhaber bestätigen (Link anklicken), sonst kommen keine
weiteren Formular-Anfragen an.** Das ist bei einem Schwesterprojekt schon
einmal übersehen worden und die Anfragen liefen ins Leere. Am besten direkt
nach dem Go-live einmal testweise das Formular selbst ausfüllen und die
Bestätigungsmail freischalten.

## Redaktion offen

Diese Website verwendet bewusst **keine erfundenen Angaben** (kein
Gründungsjahr, kein Meistertitel, keine Bewertungen, keine Referenzprojekte).
Folgendes muss der Inhaber nachliefern bzw. entscheiden:

1. **Fotos** – alle Bild-Slots sind aktuell CSS-Platzhalter ("Foto folgt").
   Alt-Texte sind bereits so geschrieben, wie sie mit echtem Foto passen
   würden – beim Einbau nur `<div class="img-placeholder">…</div>` durch
   `<img src="…" alt="…" width="…" height="…" loading="lazy">` ersetzen
   (der jeweils passende Alt-Text steht als HTML-Kommentar direkt über dem
   Platzhalter im Quelltext).
2. **Leistungsdetails** – ob es weitere Leistungen gibt (z. B.
   Bodenbeschichtung, Gerüstbau, Spachtelarbeiten, Farbberatung), wurde nicht
   angegeben und fehlt aktuell auf der Seite.
3. **Gründungsjahr / Meistertitel / Teamgröße** – nicht bestätigt, daher
   nirgends auf der Seite erwähnt. Falls vorhanden, gehört das auf
   `ueber-uns.html` und ggf. in den Trust-Bereich der Startseite.
4. **USt-IdNr.** fürs Impressum (`impressum.html`, Abschnitt
   „Umsatzsteuer-Identifikationsnummer“) – nur der Inhaber kann sie eintragen.
5. **Inhaber-Zitat** auf `ueber-uns.html` – aktuell Platzhalter
   `[Zitat vom Inhaber folgt]`.
6. **FormSubmit-Bestätigungsmail** – siehe Hinweis oben, unbedingt nach Go-live
   erledigen.

Vollständige, gebündelte Liste inkl. Kontext: siehe `REDAKTION-TODO.md`
(nicht von der Live-Seite verlinkt).

## Local-SEO-Checkliste (nächste Schritte neben der Website)

1. **Google-Business-Profil anlegen und verifizieren** – mit exakt denselben
   NAP-Daten wie auf der Website (Name, Adresse, Telefon).
2. **Eine NAP-Quelle festlegen** – die Kontaktdaten aus dem Impressum/Footer
   dieser Website als verbindliche Referenz für alle Verzeichnisse nutzen.
3. **Bestehende Verzeichniseinträge korrigieren/beanspruchen**, in dieser
   Reihenfolge:
   1. Gelbe Seiten
   2. Das Örtliche
   3. 11880
   4. meinestadt.de
   5. Creditreform
   6. Das Telefonbuch
4. **Bewertungsaufbau ab 0 anstoßen** – z. B. zufriedene Kunden nach
   Auftragsabschluss aktiv um eine Google-Rezension bitten.
5. **Zusätzliche Fotos in Google Business Profile hochladen**, sobald echte
   Baustellenfotos vorliegen (dieselben, die auch die Platzhalter auf der
   Website ersetzen).
