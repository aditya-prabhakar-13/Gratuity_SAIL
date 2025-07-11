// navbar.js

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const initiativeDropdown = document.getElementById("initiative-dropdown");
const initiativeMenu = document.getElementById("initiative-menu");
const eventsDropdown = document.getElementById("events-dropdown");
const eventsMenu = document.getElementById("events-menu");
const yearbookDropdown = document.getElementById("yearbook-dropdown");
const yearbookMenu = document.getElementById("yearbook-menu");

let isMenuOpen = false;
let isInitiativeOpen = false;
let isEventsOpen = false;
let isYearbookOpen = false;

// Hamburger toggle
hamburger.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;
  menu.classList.toggle("show", isMenuOpen);
  hamburger.classList.toggle("active", isMenuOpen);
});

// Dropdown toggle functions
const toggleDropdown = (dropdownMenu, stateVarName) => {
  window[stateVarName] = !window[stateVarName];
  dropdownMenu.style.display = window[stateVarName] ? "block" : "none";
};

// Initiatives
initiativeDropdown.querySelector("p").addEventListener("click", () =>
  toggleDropdown(initiativeMenu, "isInitiativeOpen")
);

// Events
eventsDropdown.querySelector("p").addEventListener("click", () =>
  toggleDropdown(eventsMenu, "isEventsOpen")
);

// Yearbook
yearbookDropdown.querySelector("p").addEventListener("click", () =>
  toggleDropdown(yearbookMenu, "isYearbookOpen")
);

// Smooth scroll on hashchange
window.addEventListener("hashchange", () => {
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
});
