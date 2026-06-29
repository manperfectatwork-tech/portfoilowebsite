/* ===========================================================
   Mr. Simboy Explorer — Portfolio Case Study
   Interactions: scroll reveal, animated counters, nav, menu
   =========================================================== */

(function () {
  "use strict";

  /* ---- Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Sticky nav shadow ---- */
  var nav = document.getElementById("nav");
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("is-open");
    });
  }
  if (links) {
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
      });
    });
  }

  /* ---- Animated number counters ---- */
  function formatValue(value, decimals) {
    return decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
  }

  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count")) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    var decimals = (el.getAttribute("data-count").split(".")[1] || "").length;
    var duration = 1400;
    var start = null;

    function step(ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      // easeOutCubic
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = formatValue(target * eased, decimals) + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = formatValue(target, decimals) + suffix;
    }
    requestAnimationFrame(step);
  }

  /* ---- IntersectionObserver: reveal + trigger counters ---- */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");
  var counters = document.querySelectorAll("[data-count]");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    counters.forEach(function (el) {
      var decimals = (el.getAttribute("data-count").split(".")[1] || "").length;
      el.textContent = formatValue(parseFloat(el.getAttribute("data-count")) || 0, decimals) + (el.getAttribute("data-suffix") || "");
    });
    return;
  }

  var revealObserver = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  revealEls.forEach(function (el) { revealObserver.observe(el); });

  var countObserver = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(function (el) { countObserver.observe(el); });
})();
