"use strict";
//SET CURRENT YEAR
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;

// MOBILE NAVIGATION
const btnNav = document.querySelector(".mobile-navigation-button");
const menuBtn = document.querySelector(".menu-outline");
const closeBtn = document.querySelector(".close-outline");
const body = document.querySelector("body");
const navLinks = document.querySelectorAll(".main-nav-link");
const header = document.querySelector(".header-section");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// DISABLE SCROLL
menuBtn.addEventListener("click", function () {
  body.classList.add("scroll-disabled");
  body.classList.remove("scroll-enable");
});

// OMOGUĆI SCROLL
closeBtn.addEventListener("click", function () {
  body.classList.remove("scroll-disabled");
  body.classList.add("scroll-enable");
});

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const targetId = link.getAttribute("href").substring(1);

    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Pomicanje na odgovarajuću sekciju
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      body.classList.remove("scroll-disabled");
      body.classList.add("scroll-enable");
    }
  });
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
// BOOK PROMOTION IMG SLIDER
const scrollers = document.querySelectorAll(".scroller");

if (
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
  window.matchMedia("(max-width: 768px)").matches
) {
  addAnimation();
} else {
  addAnimation();
  if (window.matchMedia("(max-width: 768px)").matches) {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-speed", "ExtraSlow");
    });
  }
}
function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller--inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
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
// CAROUSEL
const carousel = document.querySelector(".reviews");
const arrowBtns = document.querySelectorAll(".arrows");
const firstReviewWidth = carousel.querySelector(".review").offsetWidth;
const nextArrow = carousel.querySelector(".arrow--right");
const prevArrow = carousel.querySelector(".arrow--left");
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft +=
      btn.id === "left" ? -firstReviewWidth : firstReviewWidth;
  });
});
// TODO
// removing and adding arrows
// MAP SECTION
let map;

const croatiaLatLng = { lat: 44.76843149597141, lng: 16.821158701981076 };
const markers = [
  // ZAGREB
  {
    locationName: "Arena Zagreb",
    lat: 45.770901943922325,
    lng: 15.939271106921442,
    address: "Ul. Vice Vukova 6, 10000, Zagreb",
    workingHours: `<strong>Radno vrijeme:</strong><br>
                   ponedjeljak-nedjelja od 9:00 do 21:00<br>
                   popis radnih nedjelja možete vidjeti <a target="_blank" href="https://www.hocuknjigu.hr/radne-nedjelje-u-hocu-knjigu-knjizarama">ovdje</a>`,
  },
  {
    locationName: "City Centar One East -Zagreb",
    lat: 45.80271689482512,
    lng: 16.05064119699203,
    address: "Slavonska Avenija 11d, 10000, Zagreb",
    workingHours: `<strong>Radno vrijeme:</strong><br>
                   ponedjeljak-nedjelja od 9:00 do 21:00<br>
                   popis radnih nedjelja možete vidjeti <a target="_blank" href="https://www.hocuknjigu.hr/radne-nedjelje-u-hocu-knjigu-knjizarama">ovdje</a>`,
  },
  {
    locationName: "City Centar One West -Zagreb",
    lat: 45.79937520926983,
    lng: 15.883985454661627,
    address: "Jankomir 33, 10000, Zagreb",
    workingHours: `<strong>Radno vrijeme:</strong><br>
                   ponedjeljak-nedjelja od 9:00 do 21:00<br>
                   popis radnih nedjelja možete vidjeti <a target="_blank" href="https://www.hocuknjigu.hr/radne-nedjelje-u-hocu-knjigu-knjizarama">ovdje</a>`,
  },
  {
    locationName: "Supernova Buzin -Zagreb",
    lat: 45.755487372288705,
    lng: 15.987564369999244,
    address: "Av. Većeslava Holjevca 62, 10010, Buzin, Zagreb",
    workingHours: `<strong>Radno vrijeme:</strong><br>
    Ponedjeljak-nedjelja od 9:00 do 21:00<br>
    popis radnih nedjelja možete vidjeti <a target="_blank" href="https://www.hocuknjigu.hr/radne-nedjelje-u-hocu-knjigu-knjizarama">ovdje</a>`,
  },
  {
    locationName: "Buzin Supernova -Zagreb",
    lat: 45.83615984477321,
    lng: 16.04624933932366,
    address: " Av. Većeslava Holjevca 62, 10010, Buzin",
    workingHours: `<strong>Radno vrijeme:</strong><br>
    Ponedjeljak-nedjelja od 9:00 do 21:00<br>
    popis radnih nedjelja možete vidjeti <a target="_blank" href="https://www.hocuknjigu.hr/radne-nedjelje-u-hocu-knjigu-knjizarama">ovdje</a>`,
  },
  // {
  //   locationName: "Supernova Garden Mall -Zagreb",
  //   lat: 45.83615984477321,
  //   lng: 16.04624933932366,
  //   address: "Ul. Rudolfa Kolaka 14, 10040, Zagreb",
  //   workingHours: `<strong>Radno vrijeme:</strong><br>
  //   Ponedjeljak-nedjelja od 9:00 do 21:00<br>
  //   popis radnih nedjelja možete vidjeti <a target="_blank" href="https://www.hocuknjigu.hr/radne-nedjelje-u-hocu-knjigu-knjizarama">ovdje</a>`,
  // },
  {
    locationName: "Hoću knjigu webshop -Zagreb",
    lat: 45.755487372288705,
    lng: 15.987564369999244,
    address: "Sveti Duh 6, Zagreb",
    workingHours: `<strong>Radno vrijeme:</strong><br>
    Ponedjeljak-petak od 7:00 do 15:00<br>
    <a target="_blank" href="https://www.hocuknjigu.hr/proizvodi/knjige/publicistika/popularna-psihologija/energija-djetetove-proslosti">web-shop</a>`,
  },
  // VARAZDIN
  {
    locationName: "Centar grada -Varaždin",
    lat: 46.30969731919252,
    lng: 16.337412133166023,
    address: "Ul. Ljudevita Gaja 17-42 000, 42000, Varaždin",
    workingHours: `<strong>Radno vrijeme:</strong><br>
    Ponedjeljak-petak od 7:00 do 14:00<br>
    Subota od 8:00 do 20:00<br>
Nedjelja - ne radi`,
  },
  // KOPRIVNICA
  // {
  //   locationName: "Supernova Koprivnica",
  //   lat: 46.14745270083373,
  //   lng: 16.834661721278163,
  //   address: "Gospodarska ul. 1, 48000, Koprivnica",
  //   workingHours: `<strong>Radno vrijeme:</strong><br>
  //   Ponedjeljak-nedjelja od 9:00 do 21:00<br>
  //   popis radnih nedjelja možete vidjeti <a target="_blank" href="https://www.hocuknjigu.hr/radne-nedjelje-u-hocu-knjigu-knjizarama">ovdje</a>`,
  // },
  // PULA
  {
    locationName: "Max City centar -Pula",
    lat: 44.86047896895157,
    lng: 13.824885441126407,
    address: "Stoja 14A, 52100, Pula",
    workingHours: `<strong>Radno vrijeme:</strong><br>
    Ljetno (20.5.-8.9.) ponedjeljak-nedjelja od 9:00 do 22:00<br>
    Zimsko (9.9.-19.5.) ponedjeljak-nedjelja od 9:00 do 21:00<br>
    popis radnih nedjelja možete vidjeti <a target="_blank" href="https://www.hocuknjigu.hr/radne-nedjelje-u-hocu-knjigu-knjizarama">ovdje</a>`,
  },
  // RIJEKA
  {
    locationName: "Tower Center -Rijeka",
    lat: 45.31742524688753,
    lng: 14.469384083475898,
    address: "Pećine 81A, Janka Polića Kamova, 51000, Rijeka",
    workingHours: `<strong>Radno vrijeme:</strong><br>
   ponedjeljak-nedjelja od 9:00 do 21:00<br>
    popis radnih nedjelja možete vidjeti <a target="_blank" href="https://www.hocuknjigu.hr/radne-nedjelje-u-hocu-knjigu-knjizarama">ovdje</a>`,
  },
  // ZADAR
  {
    locationName: "Supernova -Zadar",
    lat: 44.116543836505045,
    lng: 15.271730339251087,
    address: "Ul. Akcije Maslenica 1-23 000, 23000, Zadar",
    workingHours: `<strong>Radno vrijeme:</strong><br>
   ponedjeljak-nedjelja od 9:00 do 21:00<br>
    popis radnih nedjelja možete vidjeti <a target="_blank" href="https://www.hocuknjigu.hr/radne-nedjelje-u-hocu-knjigu-knjizarama">ovdje</a>`,
  },
  // SPLIT
  {
    locationName: "Trgovacki centar Joker -Split",
    lat: 43.519987639482906,
    lng: 16.447115192813282,
    address: "Put Brodarice 6, 21 000 Split",
    workingHours: `<strong>Radno vrijeme:</strong><br>
    ponedjeljak-nedjelja od 9:00 do 21:00<br>
                   popis radnih nedjelja možete vidjeti <a target="_blank" href="https://www.hocuknjigu.hr/radne-nedjelje-u-hocu-knjigu-knjizarama">ovdje</a>`,
  },
  {
    locationName: "City Center One -Split",
    lat: 43.51390947745783,
    lng: 16.501832542914567,
    address: "Vukovarska ul. 207, 21000, Split",
    workingHours: `<strong>Radno vrijeme:</strong><br>
    Ljetno (20.5.-8.9.)
                   ponedjeljak-nedjelja od 9:00 do 22:00<br>
                   Zimsko (9.9.-19.5.)
                   ponedjeljak-nedjelja od 9:00 do 21:00<br>
                   popis radnih nedjelja možete vidjeti <a target="_blank" href="https://www.hocuknjigu.hr/radne-nedjelje-u-hocu-knjigu-knjizarama">ovdje</a>`,
  },
];
let infoWindow;

const parser = new DOMParser();
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const map = new Map(document.getElementById("map"), {
    zoom: 7,
    center: croatiaLatLng,
    mapId: "987affc3b4e6e1a5",
    zoomControl: true,
    cameraControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    rotateControl: true,
    fullscreenControl: false,
  });
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker"
  );
  const parser = new DOMParser();

  infoWindow = new google.maps.InfoWindow();

  for (let i = 0; i < markers.length; i++) {
    const pinSvgString = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="32.2" height="42.5" style="overflow:visible;enable-background:new 0 0 32.2 42.5"><path d="m.2 2.6 29-2.6s2.2-.2 2.8 2.7l.1 35.4s-.1 2.1-2.3 2.8c0 0-.4.8-1 1.1 0 0-.1.4-2.3.4H.6a.7.7 0 0 1-.7-.7L.2 2.6z" style="fill:#7ccb9c"/><path d="M16.9 18.1c.1.1.4.2.4.5.1.4 0 .8-.4 1l-1.4.6H15c-.1-.1-.4-.2-.4-.4v-.6c.1-.1.2-.4.4-.4l1.4-.6c.2-.2.4-.2.5-.1zM29.3 0 .3 2.6v17.3c.5-.4 1.2-.4 1.7 0V3.7h25.6c1.1 0 1.9 1 1.9 2v33.6c0 1.1-.8 2-1.9 2h-1.7l-.1.2c-.1.2-.2.5-.5.7h2.3c1 0 1.9-.5 2.4-1.4a3.3 3.3 0 0 0 2.3-3V3.1C32 1.4 30.8 0 29.3 0zm1.8 38c0 .7-.4 1.3-.8 1.7V5.8a3 3 0 0 0-2.9-3h-16l17.9-1.6c1.1 0 1.9 1 1.9 2L31.1 38zM5 20.6c.5 0 .8.4.8 1v10.1c0 .5-.4 1-.8 1-.5 0-.8-.4-.8-1v-3.5H2v3.5c0 .5-.4 1-.8 1-.5 0-.8-.4-.8-1V21.6c0-.5.4-1 .8-1 .5 0 .8.4.8 1v4.8h2.2v-4.8c0-.6.4-1 .8-1zm7.2 8.9v.4l-.1.6-.2.7c-.1.2-.2.5-.5.7l-.7.6-1.1.1-1.2-.2a3.7 3.7 0 0 1-1.2-1.3l-.2-.7V23.7l.2-1.4c.1-.4.4-.6.6-.8.5-.5 1.1-.7 1.8-.7l1 .1c.4.1.6.4.8.6.2.2.5.6.6 1l.2 1.4v5.6zm-1.9 1.1.1-.2.1-.4v-6.3l-.1-.6-.2-.4-.4-.1H9.2l-.4.1-.1.2-.1.7v6.3l.1.4.1.2.2.1.5.1.5-.1h.3zm8.3-1.2v.4l-.1.6-.2.7c-.1.2-.2.5-.5.7l-.7.6c-.4.2-.8.2-1.2.2l-1.2-.2a3.7 3.7 0 0 1-1.2-1.3l-.2-.7v-6.8l.2-1.4c.1-.4.4-.6.6-.8.5-.5 1.1-.7 1.8-.7l1 .1c.4.1.6.4.8.6.2.2.5.6.6 1l.2 1.4-.2.6c-.4.4-.8.4-1.2 0-.2-.1-.2-.4-.2-.6l-.1-.6-.2-.4-.4-.1H15.6l-.4.1-.2.4-.1.7v6.3l.1.4.1.2.2.1.5.1.5-.1.2-.1.2-.5v-.6l.1-.4.2-.4.5-.1.5.1c.4 0 .6.3.6.5zm6.5.5-.1.6-.2.7c-.1.2-.2.5-.5.7l-.7.6c-.4.2-.8.2-1.2.2l-1.2-.2a3.7 3.7 0 0 1-1.2-1.3l-.2-.7V21.7c0-.5.4-1 .8-1 .5 0 .8.4.8 1V30.1l.1.4.1.2.2.1c.2.2.4.2.5.2l.5-.1.2-.1.2-.5v-8.5c0-.5.4-1 .8-1 .5 0 .8.4.8 1v7.9c.3-.2.3-.1.3.2zm-20.5 12c0 .1-.1.4-.4.4H4c-.2 0-.5-.1-.6-.4l-1.6-3.2-.5.8v2.2c0 .4-.2.7-.6.7a1 1 0 0 1-.5-.2l-.2-.6v-7.4c0-.4.2-.7.6-.7l.5.2.2.5v2.6l1.8-3 .4-.4.5.1c.1.1.2.2.2.5l-.1.5-1.6 2.8 1.9 4.1c.2.1.2.4.2.5zm3.9-8.4c.4 0 .6.4.6.7v7.6h-.8.1l-.2-.2-2-4.1v4.2c0 .4-.2.7-.6.7-.4 0-.6-.4-.6-.7v-7.6h.9l1.8 4.4v-4.2c.2-.5.5-.7.8-.8zm5.2 6.8v.5l-.1.5-.4.5-.5.5-1 .2c-.4 0-.6 0-1-.2-.2-.1-.4-.2-.5-.5-.2-.1-.4-.4-.4-.6l-.1-.6v-.7l.1-.4.2-.2.4-.1.4.1.1.2v.7l.1.2.1.2.1.1.4.1.4-.1.1-.1.1-.2v-6.5c0-.4.2-.7.6-.7l.5.2.2.5v5.9l.2.5zm1.4-6.8c.1 0 .4 0 .5.2l.2.5v7.6c0 .1 0 .4-.2.5-.1.1-.2.2-.5.2-.4 0-.6-.4-.6-.7v-7.6c0-.4.3-.7.6-.7zm5.3 6.8v.5l-.1.5-.4.5-.5.5-1 .2c-.4 0-.6 0-1-.2-.2-.1-.4-.2-.5-.5l-.4-.5-.1-.5v-5c0-.4 0-.7.2-1.1.1-.2.2-.5.5-.6.4-.4.8-.6 1.3-.5.5 0 1 .1 1.3.5l.5.6.2 1.1c0 .1 0 .4-.2.5-.2.2-.6.2-1 0a1 1 0 0 1-.2-.5v-.5l.1-.3-.2-.1h-.4l-.2.1-.2.2-.1.5v4.9l.1.2.1.1.4.1.4-.1.1-.1.1-.2.1-.2V39h-.5c-.4 0-.6-.4-.6-.7 0-.4.2-.7.6-.7h1.8V40c-.2.1-.2.2-.2.3zm4.6.1v.5l-.1.5-.4.5c-.4.5-1 .6-1.4.6-.4 0-.6 0-1-.2-.2-.1-.4-.2-.5-.5l-.4-.5-.1-.5v-6.6c0-.4.2-.7.6-.7l.5.2.2.5v6.5l.1.2.1.1.4.1.4-.1.1-.1.2-.4v-6.4c0-.4.2-.7.6-.7.4 0 .6.4.6.7V40c.2.2.1.2.1.4z" style="fill:#020202"/></svg>`;
    const pinSvg = parser.parseFromString(
      pinSvgString,
      "image/svg+xml"
    ).documentElement;
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map,
      position: { lat: markers[i]["lat"], lng: markers[i]["lng"] },
      title: markers[i].locationName,
      gmpClickable: true,
      draggable: false,
      content: pinSvg,
    });

    marker.addEventListener("gmp-click", () => {
      infoWindow.close();
      infoWindow.setContent(
        `<div><strong>${markers[i].locationName}</strong><br>${markers[i].address}<br>${markers[i].workingHours}</div>`
      );
      infoWindow.open(map, marker);
    });
  }
}

initMap();

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
