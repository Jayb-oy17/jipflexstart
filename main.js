/** @format */

"use strict";

// NAV //

const nav = document.querySelector(".nav");
const btnNav = document.querySelector(".nav-btn-box");

btnNav.addEventListener("click", function (e) {
  nav.classList.toggle("navs");
});

// STICKY NAV //

const heroSec = document.querySelector(".hero");

const navObserver = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },

  {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);

navObserver.observe(heroSec);

// ACCORDION //

const accordions = document.querySelectorAll(".faq-accordion");

accordions.forEach((accord) => {
  accord.addEventListener("click", function (e) {
    e.preventDefault();
    this.querySelector(".faq-article").classList.toggle("hidden");
  });
});
