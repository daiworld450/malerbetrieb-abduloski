/*
 * Sevdan Abduloski Malerbetrieb: main.js
 * Vanilla JS, keine externen Bibliotheken, kein Build-Step.
 *
 * Enthält:
 *   1) Mobiles Menü (Hamburger) + Leistungen-Dropdown
 *   2) Farbprobe auf der Startseite (Rollerbahn per Web Animations API)
 *   3) BeforeAfterSlider (derzeit im HTML auskommentiert, Code bleibt einsatzbereit)
 *   4) Kategorie-Auswahl im Kontaktformular
 *   5) Filter-Tabs auf referenzen.html (derzeit im HTML auskommentiert)
 *   6) Kontaktformular: Prüfung, Fehlertext, Erfolgsmeldung
 */
(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 1) Mobiles Menü + Dropdown ---------- */
  var hamburger = document.getElementById("hamburger");
  var nav = document.getElementById("main-nav");

  // Beim Öffnen: Fokus auf den ersten Link, Seiteninhalt und Fußzeile werden inert
  // (kein Tab-Sprung hinter das Menü). Die Aktionsleiste bleibt bedienbar.
  var pageParts = document.querySelectorAll("main, .site-footer, .skip-link");

  function setNav(open) {
    if (!nav || !hamburger) return;
    nav.classList.toggle("is-open", open);
    root.classList.toggle("nav-open", open);
    hamburger.setAttribute("aria-expanded", open ? "true" : "false");
    hamburger.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    pageParts.forEach(function (el) {
      if (open) el.setAttribute("inert", ""); else el.removeAttribute("inert");
    });
    if (open) {
      var first = nav.querySelector("a");
      if (first) first.focus({ preventScroll: true });
    }
  }

  if (hamburger && nav) {
    hamburger.addEventListener("click", function () {
      setNav(!nav.classList.contains("is-open"));
    });
    // Schließt das Menü, wenn der Viewport wieder Desktop-Breite erreicht.
    var mq = window.matchMedia("(min-width: 961px)");
    var onMq = function () { if (mq.matches) setNav(false); };
    if (mq.addEventListener) mq.addEventListener("change", onMq);
  }

  // "Leistungen" ist ein echter Link, der Chevron-Button klappt das Untermenü auf
  // (Touch/Tastatur; Desktop öffnet es zusätzlich per :hover im CSS).
  var dropdownCaret = document.querySelector(".dropdown-caret");
  var dropdownParent = dropdownCaret ? dropdownCaret.closest(".has-dropdown") : null;

  if (dropdownCaret && dropdownParent) {
    dropdownCaret.addEventListener("click", function (event) {
      event.preventDefault();
      var isOpen = dropdownParent.classList.toggle("is-open");
      dropdownCaret.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  if (nav) {
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { setNav(false); });
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    if (nav && nav.classList.contains("is-open")) {
      setNav(false);
      if (hamburger) hamburger.focus();
    }
    if (dropdownParent && dropdownParent.classList.contains("is-open")) {
      dropdownParent.classList.remove("is-open");
      dropdownCaret.setAttribute("aria-expanded", "false");
      dropdownCaret.focus();
    }
  });

  document.addEventListener("click", function (event) {
    if (dropdownParent && dropdownParent.classList.contains("is-open") && !dropdownParent.contains(event.target)) {
      dropdownParent.classList.remove("is-open");
      dropdownCaret.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- 2) Farbprobe ----------
   * Markup-Vertrag (index.html):
   * <div class="farbprobe" data-farbprobe>
   *   <div class="farbprobe__wall"><span class="farbprobe__base"></span><span class="farbprobe__roller"></span></div>
   *   <div class="farbprobe__chips"><button class="chip" data-farbe="#8AA7BC" aria-pressed="true">…</button> …</div>
   *   <span data-farbprobe-status></span>
   * </div>
   * Tippen auf einen Chip streicht die Fläche in dieser Farbe um: eine Rollerbahn
   * (clip-path, von links nach rechts) legt die neue Farbe über die alte. Ein
   * zweiter Tipp während der Bahn beendet die laufende sofort und startet die
   * nächste (unterbrechbar). Bei reduzierter Bewegung blendet die Farbe weich ein.
   */
  function initFarbprobe(box) {
    var base = box.querySelector(".farbprobe__base");
    var roller = box.querySelector(".farbprobe__roller");
    var status = box.querySelector("[data-farbprobe-status]");
    var chips = box.querySelectorAll(".chip");
    if (!base || !roller || !chips.length) return;

    var pressed = box.querySelector('.chip[aria-pressed="true"]');
    var current = pressed ? pressed.getAttribute("data-farbe") : getComputedStyle(base).backgroundColor;
    var anim = null;
    var target = current;

    base.style.backgroundColor = current;

    function settle() {
      if (!anim) return;
      anim.cancel();
      anim = null;
      base.style.backgroundColor = target;
    }

    function paint(next) {
      if (next === target && !anim) return;
      settle();
      target = next;
      roller.style.backgroundColor = next;
      if (!roller.animate) { base.style.backgroundColor = next; return; }
      var frames, options;
      if (reduceMotion) {
        roller.style.clipPath = "none";
        frames = [{ opacity: 0 }, { opacity: 1 }];
        options = { duration: 180, easing: "ease", fill: "forwards" };
      } else {
        roller.style.clipPath = "";
        frames = [{ clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)" }];
        options = { duration: 560, easing: "cubic-bezier(0.23, 1, 0.32, 1)", fill: "forwards" };
      }
      anim = roller.animate(frames, options);
      var mine = anim;
      anim.finished.then(function () {
        if (anim !== mine) return;
        base.style.backgroundColor = next;
        mine.cancel();
        anim = null;
        roller.style.clipPath = "";
      }).catch(function () { /* abgebrochen: nächste Bahn läuft */ });
    }

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.setAttribute("aria-pressed", c === chip ? "true" : "false"); });
        paint(chip.getAttribute("data-farbe"));
        if (status) status.textContent = "Gewählt: " + chip.textContent.trim();
      });
    });
  }

  document.querySelectorAll("[data-farbprobe]").forEach(initFarbprobe);

  /* ---------- 3) BeforeAfterSlider ----------
   * Markup-Vertrag (siehe DESIGN.md):
   * <div class="before-after" data-before-after>
   *   <div class="before-after__side before-after__side--before"> … </div>
   *   <div class="before-after__side before-after__side--after"> … </div>
   *   <div class="before-after__handle" tabindex="0" role="slider" aria-label="…"
   *        aria-valuemin="0" aria-valuemax="100" aria-valuenow="50"><div class="before-after__grip">…</div></div>
   * </div>
   * Position als CSS-Custom-Property --ba-position (0 bis 100 %). Pointer Events mit
   * Pointer-Capture: Ziehen läuft 1:1 auch außerhalb des Rahmens weiter.
   */
  function initBeforeAfterSlider(el) {
    var handle = el.querySelector(".before-after__handle");
    if (!handle) return;

    var setPosition = function (percent) {
      var clamped = Math.min(100, Math.max(0, percent));
      el.style.setProperty("--ba-position", clamped + "%");
      handle.setAttribute("aria-valuenow", String(Math.round(clamped)));
    };
    var fromClientX = function (clientX) {
      var rect = el.getBoundingClientRect();
      setPosition(((clientX - rect.left) / rect.width) * 100);
    };

    var dragging = false;
    el.addEventListener("pointerdown", function (event) {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      dragging = true;
      try { el.setPointerCapture(event.pointerId); } catch (e) { /* ältere Browser */ }
      fromClientX(event.clientX);
    });
    el.addEventListener("pointermove", function (event) { if (dragging) fromClientX(event.clientX); });
    var stop = function () { dragging = false; };
    el.addEventListener("pointerup", stop);
    el.addEventListener("pointercancel", stop);

    handle.addEventListener("keydown", function (event) {
      var current = parseFloat(el.style.getPropertyValue("--ba-position")) || 50;
      var next = null;
      if (event.key === "ArrowLeft") next = current - 5;
      else if (event.key === "ArrowRight") next = current + 5;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = 100;
      if (next !== null) { setPosition(next); event.preventDefault(); }
    });

    setPosition(50);
  }
  document.querySelectorAll("[data-before-after]").forEach(initBeforeAfterSlider);

  /* ---------- 4) Kategorie-Auswahl (Toggle-Gruppe mit verstecktem Feld) ---------- */
  function initCategoryToggle(group) {
    var targetSelector = group.getAttribute("data-target");
    var targetField = targetSelector ? document.querySelector(targetSelector) : null;
    var buttons = group.querySelectorAll(".toggle-btn");
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        buttons.forEach(function (b) { b.classList.remove("is-active"); });
        button.classList.add("is-active");
        if (targetField) targetField.value = button.getAttribute("data-value") || "";
      });
    });
  }
  document.querySelectorAll("[data-category-toggle]").forEach(initCategoryToggle);

  /* ---------- 5) Filter-Tabs (Referenzen) ---------- */
  function initFilterTabs(group) {
    var targetSelector = group.getAttribute("data-target");
    var grid = targetSelector ? document.querySelector(targetSelector) : null;
    if (!grid) return;
    var buttons = group.querySelectorAll(".toggle-btn");
    var cards = grid.querySelectorAll("[data-category]");
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        buttons.forEach(function (b) { b.classList.remove("is-active"); });
        button.classList.add("is-active");
        var filter = button.getAttribute("data-filter");
        cards.forEach(function (card) {
          card.hidden = !(filter === "alle" || card.getAttribute("data-category") === filter);
        });
      });
    });
  }
  document.querySelectorAll("[data-filter-tabs]").forEach(initFilterTabs);

  /* ---------- 6) Kontaktformular ----------
   * Natives POST an FormSubmit bleibt der Versandweg (Aktion und Adresse unverändert).
   * Das Skript prüft nur die Pflichtfelder vorab (mit Fehlertext und Telefonnummer
   * als Ausweg) und zeigt nach der Rückleitung (?gesendet=1) eine Erfolgsmeldung.
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
        if (field.type === "radio") {
          var group = field.closest("fieldset");
          if (group) group.setAttribute("aria-invalid", ok ? "false" : "true");
        }
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
