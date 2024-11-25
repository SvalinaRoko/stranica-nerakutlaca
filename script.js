"use strict";
//SET CURRENT YEAR
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;

// MOBILE NAVIGATION
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header-section");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// // STICKY NAVIGATION
const sectionHero = document.querySelector(".section-hero");
const observerHero = new IntersectionObserver(
  function (entriesHero) {
    const entHero = entriesHero[0];
    console.log(entHero);
    if (entHero.isIntersecting === false) document.body.classList.add("sticky");
    if (entHero.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observerHero.observe(sectionHero);
// TOP BUTTON
const buttonFunction = document.querySelector(".section-hero");
const observeButton = new IntersectionObserver(
  function (parametar) {
    const btn = parametar[0];
    console.log(btn);
    if (btn.isIntersecting === false)
      document.querySelector(".top-button").classList.remove("none");
    if (btn.isIntersecting)
      document.querySelector(".top-button").classList.add("none");
  },
  { root: null, threshold: 0 }
);
observeButton.observe(buttonFunction);
//
const buttonFooter = document.querySelector(".section-footer");
const observeFooter = new IntersectionObserver(
  function (entry) {
    const btnF = entry[0];
    console.log(btnF);
    if (btnF.isIntersecting === false)
      document.querySelector(".top-button").classList.remove("none");
    if (btnF.isIntersecting)
      document.querySelector(".top-button").classList.add("none");
  },
  { root: null, threshold: 0 }
);
observeFooter.observe(buttonFooter);
// SMOOTH SCROLLING
const allLinks = document.querySelectorAll("a:not(.btn-cta):not(.footer-link");
console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // SCROLL BACK TO TOP

    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });

    // SCROLL TO OTHER LINKS

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // CLOSE MOBILE NAVIGATION

    if (link.classList.contains("main-nav-link"))
      header.classList.toggle("nav-open");
  });
});
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
