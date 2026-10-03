/*
 * Sevdan Abduloski Malerbetrieb – main.js
 * Vanilla JS, keine externen Bibliotheken, kein Build-Step.
 *
 * Enthält:
 *   1) Mobiles Menü (Hamburger) + Leistungen-Dropdown
 *   2) Sticky-Header-Schatten beim Scrollen
 *   3) BeforeAfterSlider – wiederverwendbare Komponente, unterstützt
 *      mehrere Instanzen pro Seite (siehe DESIGN-SYSTEM.md für die API)
 *   4) Kategorie-Auswahl im Kontaktformular (Welle B)
 *   5) Filter-Tabs auf referenzen.html (Welle B)
 *   6) Kontaktformular: Prüfung, Fehlertext, Erfolgsmeldung (Design-Audit 2026-10)
 */
(function () {
  "use strict";

  /* ---------- 1) Mobiles Menü + Dropdown ---------- */
  var hamburger = document.getElementById("hamburger");
  var nav = document.getElementById("main-nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Leistungen-Dropdown: ".dropdown-toggle" ist seit Welle B ein echter Link
  // auf leistungen/index.html. Das Auf-/Zuklappen des Untermenüs übernimmt
  // der separate Chevron-Button ".dropdown-caret" (Klick-Umschaltung fuer
  // Touch/Mobile, Desktop nutzt zusaetzlich :hover per CSS).
  var dropdownCaret = document.querySelector(".dropdown-caret");
  var dropdownParent = dropdownCaret ? dropdownCaret.closest(".has-dropdown") : null;

  if (dropdownCaret && dropdownParent) {
    dropdownCaret.addEventListener("click", function (event) {
      event.preventDefault();
      var isOpen = dropdownParent.classList.toggle("is-open");
      dropdownCaret.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Menü schliessen, wenn ein Link darin angeklickt wird (mobile).
  if (nav) {
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (nav.classList.contains("is-open")) {
          nav.classList.remove("is-open");
          if (hamburger) hamburger.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  // Menü mit Escape schliessen.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && nav && nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      if (hamburger) hamburger.setAttribute("aria-expanded", "false");
    }
  });

  // Klick ausserhalb des Dropdowns schliesst es (Desktop-Klick-Fallback).
  document.addEventListener("click", function (event) {
    if (dropdownParent && dropdownParent.classList.contains("is-open") && !dropdownParent.contains(event.target)) {
      dropdownParent.classList.remove("is-open");
      dropdownCaret.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- 2) Sticky-Header-Schatten beim Scrollen ---------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var updateHeaderShadow = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 4);
    };
    updateHeaderShadow();
    window.addEventListener("scroll", updateHeaderShadow, { passive: true });
  }

  /* ---------- 3) BeforeAfterSlider ----------
   * Markup-Vertrag (siehe DESIGN-SYSTEM.md):
   * <div class="before-after" data-before-after>
   *   <div class="before-after__side before-after__side--before"> … </div>
   *   <div class="before-after__side before-after__side--after"> … </div>
   *   <div class="before-after__handle" tabindex="0" role="slider"
   *        aria-label="Vorher/Nachher-Vergleich" aria-valuemin="0"
   *        aria-valuemax="100" aria-valuenow="50">
   *     <div class="before-after__grip">…</div>
   *   </div>
   * </div>
   * Die Position wird als CSS-Custom-Property --ba-position (0%–100%)
   * auf dem Wurzelelement gesetzt und von style.css für den clip-path
   * des "Nachher"-Bilds sowie die Handle-Position ausgewertet.
   */
  function initBeforeAfterSlider(root) {
    var handle = root.querySelector(".before-after__handle");
    if (!handle) return;

    var setPosition = function (percent) {
      var clamped = Math.min(100, Math.max(0, percent));
      root.style.setProperty("--ba-position", clamped + "%");
      handle.setAttribute("aria-valuenow", String(Math.round(clamped)));
    };

    var positionFromClientX = function (clientX) {
      var rect = root.getBoundingClientRect();
      var percent = ((clientX - rect.left) / rect.width) * 100;
      setPosition(percent);
    };

    var dragging = false;

    var onPointerDown = function (event) {
      dragging = true;
      var clientX = event.touches ? event.touches[0].clientX : event.clientX;
      positionFromClientX(clientX);
      event.preventDefault();
    };
    var onPointerMove = function (event) {
      if (!dragging) return;
      var clientX = event.touches ? event.touches[0].clientX : event.clientX;
      positionFromClientX(clientX);
    };
    var onPointerUp = function () {
      dragging = false;
    };

    handle.addEventListener("mousedown", onPointerDown);
    handle.addEventListener("touchstart", onPointerDown, { passive: false });
    root.addEventListener("mousedown", function (event) {
      if (event.target === handle || handle.contains(event.target)) return;
      onPointerDown(event);
    });
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("touchmove", onPointerMove, { passive: false });
    window.addEventListener("mouseup", onPointerUp);
    window.addEventListener("touchend", onPointerUp);

    // Tastaturbedienung: Pfeiltasten verschieben den Regler in 5%-Schritten.
    handle.addEventListener("keydown", function (event) {
      var current = parseFloat(root.style.getPropertyValue("--ba-position")) || 50;
      if (event.key === "ArrowLeft") {
        setPosition(current - 5);
        event.preventDefault();
      } else if (event.key === "ArrowRight") {
        setPosition(current + 5);
        event.preventDefault();
      } else if (event.key === "Home") {
        setPosition(0);
        event.preventDefault();
      } else if (event.key === "End") {
        setPosition(100);
        event.preventDefault();
      }
    });

    setPosition(50);
  }

  document.querySelectorAll("[data-before-after]").forEach(initBeforeAfterSlider);

  /* ---------- 4) Kategorie-Auswahl im Kontaktformular (Welle B) ----------
   * Markup-Vertrag:
   * <div class="toggle-group" data-category-toggle data-target="#kategorie-feld">
   *   <button type="button" class="toggle-btn" data-value="Innenraum">Innenraum</button>
   *   … weitere Buttons …
   * </div>
   * <input type="hidden" id="kategorie-feld" name="Kategorie" value="">
   * Klick auf einen Button setzt is-active (nur einer aktiv) und schreibt
   * data-value in das per data-target referenzierte Formularfeld.
   */
  function initCategoryToggle(root) {
    var targetSelector = root.getAttribute("data-target");
    var targetField = targetSelector ? document.querySelector(targetSelector) : null;
    var buttons = root.querySelectorAll(".toggle-btn");

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        buttons.forEach(function (b) { b.classList.remove("is-active"); });
        button.classList.add("is-active");
        if (targetField) targetField.value = button.getAttribute("data-value") || "";
      });
    });
  }

  document.querySelectorAll("[data-category-toggle]").forEach(initCategoryToggle);

  /* ---------- 5) Filter-Tabs auf referenzen.html (Welle B) ----------
   * Markup-Vertrag:
   * <div class="toggle-group" data-filter-tabs data-target="[data-project-grid]">
   *   <button type="button" class="toggle-btn is-active" data-filter="alle">Alle</button>
   *   <button type="button" class="toggle-btn" data-filter="innenraum">Innenraum</button>
   *   … weitere Buttons …
   * </div>
   * <div class="project-grid" data-project-grid>
   *   <a class="project-card" data-category="innenraum">…</a>
   *   …
   * </div>
   * Klick auf einen Tab blendet Karten aus, deren data-category nicht passt
   * ("alle" zeigt alle Karten).
   */
  function initFilterTabs(root) {
    var targetSelector = root.getAttribute("data-target");
    var grid = targetSelector ? document.querySelector(targetSelector) : null;
    if (!grid) return;
    var buttons = root.querySelectorAll(".toggle-btn");
    var cards = grid.querySelectorAll("[data-category]");

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        buttons.forEach(function (b) { b.classList.remove("is-active"); });
        button.classList.add("is-active");
        var filter = button.getAttribute("data-filter");
        cards.forEach(function (card) {
          var show = filter === "alle" || card.getAttribute("data-category") === filter;
          card.hidden = !show;
        });
      });
    });
  }

  document.querySelectorAll("[data-filter-tabs]").forEach(initFilterTabs);
  /* ---------- 6) Kontaktformular (Design-Audit 2026-10) ----------
   * Natives POST an FormSubmit bleibt der Versandweg. Das Skript prüft nur die
   * Pflichtfelder vorab (mit Fehlertext + Telefonnummer als Ausweg) und zeigt
   * nach der Rückleitung (?gesendet=1) eine Erfolgsmeldung (role="status").
   */
  var form = document.getElementById("anfrage-form");
  if (form) {
    var statusBox = document.getElementById("form-status");
    var errorBox = document.getElementById("form-error");
    var phoneHtml = ' Oder rufen Sie direkt an: <a href="tel:+4915731464675">(01573) 1464675</a>.';

    if (/[?&]gesendet=1/.test(window.location.search) && statusBox) {
      statusBox.textContent = "Danke, Ihre Anfrage wurde abgeschickt. Sevdan Abduloski meldet sich persönlich bei Ihnen.";
      statusBox.setAttribute("tabindex", "-1");
      statusBox.focus();
    }

    form.addEventListener("submit", function (event) {
      var invalid = [];
      form.querySelectorAll("[required]").forEach(function (field) {
        var ok;
        if (field.type === "radio") {
          ok = !!form.querySelector('input[name="' + field.name + '"]:checked');
        } else {
          ok = field.value.trim() !== "";
        }
        field.setAttribute("aria-invalid", ok ? "false" : "true");
        if (!ok) invalid.push(field);
      });
      var mail = form.querySelector("#email");
      if (mail && mail.value.trim() !== "" && !mail.checkValidity()) {
        mail.setAttribute("aria-invalid", "true");
        invalid.push(mail);
      } else if (mail) {
        mail.setAttribute("aria-invalid", "false");
      }

      if (invalid.length) {
        event.preventDefault();
        if (errorBox) {
          errorBox.innerHTML = "Bitte ergänzen Sie die markierten Felder (Art des Projekts, Name, Telefon, Ort, Nachricht; E-Mail nur bei gültiger Adresse)." + phoneHtml;
        }
        var first = invalid[0];
        if (first.focus) first.focus();
        return;
      }
      if (errorBox) errorBox.innerHTML = "";
      if (/^https?:$/.test(window.location.protocol) && !form.querySelector('[name="_next"]')) {
        var next = document.createElement("input");
        next.type = "hidden";
        next.name = "_next";
        next.value = window.location.origin + window.location.pathname + "?gesendet=1";
        form.appendChild(next);
      }
    });
  }
})();
