# Product

<!-- impeccable:product-schema 1 -->

> Hinweis zur Herkunft: Der Nutzer war für die Init-Runde nicht verfügbar und wollte keine Rückfragen.
> Alles unten stammt aus Repo-Fakten (REDAKTION-TODO.md, DESIGN-SYSTEM.md, BILDNACHWEIS.md, bestehende Seiten)
> und der Projekt-Memory vom 14.09.2026. Nichts ist erfunden. Wo etwas offen ist, steht es unter "Offen".
> Die Init-Runde wurde nicht mit dem Nutzer bestätigt (Substitution, ausgewiesen).

## Platform

web

## Stack

Plain HTML, CSS und Vanilla-JS, kein Framework, kein Build-Step. Deploy über GitHub Pages
(Repo `daiworld450/malerbetrieb-abduloski`). Schriften nur selbst gehostet (woff2 unter `fonts/`).

## Users

- **Hausbesitzer und Mieter in Mülheim an der Ruhr, Essen und Oberhausen**, die einen Handwerker für
  Fassade, Innenraum oder Dämmung suchen. Sie kommen meist über die Suche und vergleichen mehrere Betriebe.
- Sie wollen schnell wissen: Gibt es den Betrieb wirklich, macht er das, was ich brauche, wie erreiche ich ihn.
- Viele kommen vom Handy und rufen an oder schreiben per WhatsApp.

## Product Purpose

Die Website eines Einzelunternehmens ersetzt den fehlenden eigenen Auftritt (bisher nur passive
Branchenbuch-Einträge). Sie soll Anfragen bringen (Telefon, WhatsApp, Formular) und bei der lokalen
Suche sichtbar sein. Erfolg: ein Besucher ruft an oder schickt eine Anfrage.

## Positioning

Der Betrieb wird persönlich vom Malermeister geführt: Sevdan Abduloski ist Ansprechpartner, Anfragen
werden persönlich beantwortet, ein Angebot entsteht nach Vor-Ort-Termin oder anhand von Fotos. Sitz in
Mülheim-Heißen, kurze Wege nach Essen und Oberhausen. Das kann ein Anbieter ohne Meisterbetrieb und ohne
diese Ortsbindung nicht wahrheitsgemäß sagen.

## Operating Context

Maler- und Lackiererarbeiten außen und innen. Ablauf laut Seite: Beratung, Planung (Termin vor Ort oder
Einschätzung per Foto), Umsetzung, Übergabe. Abrechnung nach Aufmaß, feste Einheitspreise erst nach
Einschätzung. Fassade braucht meist Gerüst. Lackierarbeiten meint Holz, Fenster, Türen am Haus, keine Fahrzeuge.

## Capabilities and Constraints

- Firma: Sevdan Abduloski Malerbetrieb, Einzelunternehmen. Fünter Weg 37, 45472 Mülheim an der Ruhr (Heißen).
- Telefon (01573) 1464675, E-Mail sa-service@gmx.de, WhatsApp über dieselbe Nummer.
- Malermeister: vom Inhaber am 14.09.2026 bestätigt ("Malermeister", "Meisterqualität" sind erlaubt).
- Leistungen: Fassadenanstrich und Fassadensanierung (inkl. Untergrundvorbereitung, Risssanierung),
  Wärmedämmung WDVS, Innenanstrich, Tapezieren, Lackierarbeiten (Holz, Fenster, Türen).
- Einsatzgebiet: Mülheim, Essen, Oberhausen; Duisburg auf Anfrage.
- 15 Seiten, Struktur und Inhalte bleiben. Kontaktformular über FormSubmit (Aktion und Adresse unverändert),
  Honeypot, Pflichtfeld-Prüfung per JS.
- Impressum und Datenschutz-Texte sind rechtlich geprüft und werden nicht verändert.

## Brand Commitments

- Name: "Sevdan Abduloski Malerbetrieb". Slogan im Footer: "Qualität, die man sieht. Ein gutes Gefühl."
- Tonfall: ruhig, ehrlich, persönlich, ohne Superlative.
- Keine Portraits ohne echtes Foto (kein Fremdgesicht als Inhaber).

## Evidence on Hand

- **Keine echten Fotos vom Betrieb.** 24 lizenzfreie Stockfotos (Unsplash/Pexels, `BILDNACHWEIS.md`),
  im Footer als Beispielbilder gekennzeichnet. Sie dürfen nicht als eigene Arbeit erscheinen.
- **Nicht vorhanden und nicht zu erfinden:** Gründungsjahr, Teamgröße, Erfahrungsjahre, Bewertungen,
  Kundenstimmen, Inhaber-Zitat, Referenzprojekte, Preise, Garantien, Zertifikate, USt-IdNr.
- Portrait-Slots, Vorher/Nachher-Slider und Beispiel-Projektkarten sind bewusst ausgeblendet, bis echte
  Fotos mit Fotoerlaubnis vorliegen (REDAKTION-TODO.md Punkte 1, 8, 11, 12).

## Product Principles

1. **Nichts behaupten, was nicht belegt ist.** Fehlende Beweise werden ehrlich als "folgt" benannt, nicht gefüllt.
2. **Der Weg zum Anruf ist immer frei.** Telefon, WhatsApp und Formular sind auf jeder Seite und jedem Gerät in einem Griff.
3. **Das Design muss ohne Fotos tragen.** Fotos sind Beiwerk, nie die Substanz.
4. **Persönlich vor groß.** Ein Meister, ein Ansprechpartner, ein Ort. Kein Konzern-Auftritt.
5. **Kostenfrei im Betrieb.** Statisch, selbst gehostet, keine laufenden Dienste außer FormSubmit.

## Accessibility & Inclusion

- Kontrast mindestens 4,5:1 für Text, 3:1 für große Schrift.
- Touch-Ziele mindestens 44 px, Skip-Link, sichtbarer Fokus, `prefers-reduced-motion` respektiert.
- Formular mit Fieldset/Legend, Honeypot, erreichbarer Fehlermeldung. Seit der Design-Prüfung 10/2026
  dürfen diese Punkte nicht regredieren.
- Sprache Deutsch, `lang="de"`.

## Offen (keine Erfindung)

- Gründungsjahr, Teamgröße, Inhaber-Zitat, Portrait, USt-IdNr., echte Referenzen: warten auf den Inhaber.
- FormSubmit-Aktivierung (Bestätigungsmail an sa-service@gmx.de) steht aus.
- Eigene Domain: Geldentscheidung des Inhabers, bis dahin github.io.
