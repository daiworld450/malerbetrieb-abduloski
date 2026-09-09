/*
 * Sevdan Abduloski Malerbetrieb – main.js
 * Minimales Vanilla JS: mobiles Menü + Leistungen-Dropdown.
 * Keine externen Bibliotheken, kein Build-Step.
 */
(function () {
  "use strict";

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
})();
