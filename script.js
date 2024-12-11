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
// BOOK PROMOTION IMG SLIDER
const scrollers = document.querySelectorAll(".scroller");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
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
                   popis radnih nedjelja možete vidjeti <a href="https://www.hocuknjigu.hr/radne-nedjelje-u-hocu-knjigu-knjizarama">ovdje</a>`,
  },
  {
    locationName: "City Centar One East -Zagreb",
    lat: 45.80271689482512,
    lng: 16.05064119699203,
    address: "Slavonska Avenija 11d, 10000, Zagreb",
    workingHours: `<strong>Radno vrijeme:</strong><br>
                   ponedjeljak-nedjelja od 9:00 do 21:00<br>
                   popis radnih nedjelja možete vidjeti <a href="https://www.hocuknjigu.hr/radne-nedjelje-u-hocu-knjigu-knjizarama">ovdje</a>`,
  },
  {
    locationName: "City Centar One West -Zagreb",
    lat: 45.79937520926983,
    lng: 15.883985454661627,
    address: "Jankomir 33, 10000, Zagreb",
    workingHours: `<strong>Radno vrijeme:</strong><br>
                   ponedjeljak-nedjelja od 9:00 do 21:00<br>
                   popis radnih nedjelja možete vidjeti <a href="https://www.hocuknjigu.hr/radne-nedjelje-u-hocu-knjigu-knjizarama">ovdje</a>`,
  },
  {
    locationName: "Supernova Buzin -Zagreb",
    lat: 45.755487372288705,
    lng: 15.987564369999244,
    address: "Av. Većeslava Holjevca 62, 10010, Buzin, Zagreb",
    workingHours: `<strong>Radno vrijeme:</strong><br>
    Ponedjeljak-nedjelja od 9:00 do 21:00<br>
    popis radnih nedjelja možete vidjeti <a href="https://www.hocuknjigu.hr/radne-nedjelje-u-hocu-knjigu-knjizarama">ovdje</a>`,
  },
  {
    locationName: "Supernova Garden Mall -Zagreb",
    lat: 45.83615984477321,
    lng: 16.04624933932366,
    address: "Ul. Rudolfa Kolaka 14, 10040, Zagreb",
    workingHours: `<strong>Radno vrijeme:</strong><br>
    Ponedjeljak-nedjelja od 9:00 do 21:00<br>
    popis radnih nedjelja možete vidjeti <a href="https://www.hocuknjigu.hr/radne-nedjelje-u-hocu-knjigu-knjizarama">ovdje</a>`,
  },
  {
    locationName: "Hoću knjigu webshop -Zagreb",
    lat: 45.755487372288705,
    lng: 15.987564369999244,
    address: "Sveti Duh 6, Zagreb",
    workingHours: `<strong>Radno vrijeme:</strong><br>
    Ponedjeljak-petak od 7:00 do 15:00<br>
    <a href="web.shop@hocuknjigu.hr">web-shop</a>`,
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
  {
    locationName: "Supernova Koprivnica",
    lat: 46.14745270083373,
    lng: 16.834661721278163,
    address: "Gospodarska ul. 1, 48000, Koprivnica",
    workingHours: `<strong>Radno vrijeme:</strong><br>
    Ponedjeljak-nedjelja od 9:00 do 21:00<br>
    popis radnih nedjelja možete vidjeti <a href="https://www.hocuknjigu.hr/radne-nedjelje-u-hocu-knjigu-knjizarama">ovdje</a>`,
  },
  // PULA
  {
    locationName: "Max City centar -Pula",
    lat: 44.86047896895157,
    lng: 13.824885441126407,
    address: "Stoja 14A, 52100, Pula",
    workingHours: `<strong>Radno vrijeme:</strong><br>
    Ljetno radno vrijeme (20.5.-8.9.) ponedjeljak-nedjelja od 9:00 do 22:00<br>
    Zimsko radno vrijeme (9.9.-19.5.) ponedjeljak-nedjelja od 9:00 do 21:00<br>
    popis radnih nedjelja možete vidjeti <a href="https://www.hocuknjigu.hr/radne-nedjelje-u-hocu-knjigu-knjizarama">ovdje</a>`,
  },
  // RIJEKA
  {
    locationName: "Tower Center -Rijeka",
    lat: 45.31742524688753,
    lng: 14.469384083475898,
    address: "Pećine 81A, Janka Polića Kamova, 51000, Rijeka",
    workingHours: `<strong>Radno vrijeme:</strong><br>
   ponedjeljak-nedjelja od 9:00 do 21:00<br>
    popis radnih nedjelja možete vidjeti <a href="https://www.hocuknjigu.hr/radne-nedjelje-u-hocu-knjigu-knjizarama">ovdje</a>`,
  },
  // ZADAR
  {
    locationName: "Supernova -Zadar",
    lat: 44.116543836505045,
    lng: 15.271730339251087,
    address: "Ul. Akcije Maslenica 1-23 000, 23000, Zadar",
    workingHours: `<strong>Radno vrijeme:</strong><br>
   ponedjeljak-nedjelja od 9:00 do 21:00<br>
    popis radnih nedjelja možete vidjeti <a href="https://www.hocuknjigu.hr/radne-nedjelje-u-hocu-knjigu-knjizarama">ovdje</a>`,
  },
  // SPLIT
  {
    locationName: "Trgovacki centar Joker -Split",
    lat: 43.519987639482906,
    lng: 16.447115192813282,
    address: "Put Brodarice 6, 21 000 Split",
    workingHours: `<strong>Radno vrijeme:</strong><br>
    ponedjeljak-nedjelja od 9:00 do 21:00<br>
                   popis radnih nedjelja možete vidjeti <a href="https://www.hocuknjigu.hr/radne-nedjelje-u-hocu-knjigu-knjizarama">ovdje</a>`,
  },
  {
    locationName: "City Center One -Split",
    lat: 43.51390947745783,
    lng: 16.501832542914567,
    address: "Vukovarska ul. 207, 21000, Split",
    workingHours: `<strong>Radno vrijeme:</strong><br>
    Ljetno radno vrijeme (20.5.-8.9.)
                   ponedjeljak-nedjelja od 9:00 do 22:00<br>
                   Zimsko radno vrijeme (9.9.-19.5.)
                   ponedjeljak-nedjelja od 9:00 do 21:00<br>
                   popis radnih nedjelja možete vidjeti <a href="https://www.hocuknjigu.hr/radne-nedjelje-u-hocu-knjigu-knjizarama">ovdje</a>`,
  },
];
let infoWindow;
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
  infoWindow = new google.maps.InfoWindow();
  for (let i = 0; i < markers.length; i++) {
    const marker = new google.maps.marker.AdvancedMarkerElement({
      map,
      position: { lat: markers[i]["lat"], lng: markers[i]["lng"] },
      title: markers[i].locationName,
      gmpClickable: true,
    });

    marker.addEventListener("click", () => {
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
