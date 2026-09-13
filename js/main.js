/*
 * Sevdan Abduloski Malerbetrieb – main.js
 * Vanilla JS, keine externen Bibliotheken, kein Build-Step.
 *
 * Enthält:
 *   1) Mobiles Menü (Hamburger) + Leistungen-Dropdown
 *   2) Sticky-Header-Schatten beim Scrollen
 *   3) BeforeAfterSlider – wiederverwendbare Komponente, unterstützt
 *      mehrere Instanzen pro Seite (siehe DESIGN-SYSTEM.md für die API)
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

  // Leistungen-Dropdown: Klick-Umschaltung fuer Touch/Mobile,
  // Desktop nutzt zusaetzlich :hover per CSS.
  var dropdownToggle = document.querySelector(".dropdown-toggle");
  var dropdownParent = dropdownToggle ? dropdownToggle.closest(".has-dropdown") : null;

  if (dropdownToggle && dropdownParent) {
    dropdownToggle.addEventListener("click", function (event) {
      event.preventDefault();
      var isOpen = dropdownParent.classList.toggle("is-open");
      dropdownToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
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
      dropdownToggle.setAttribute("aria-expanded", "false");
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
})();
