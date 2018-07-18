// scripts.js
// table of contents
// -------
// global variables
// 0. event listeners
// 1. mobile menu handler
// 2. scroll enablers and disablers

// 0. event listeners
(function spawnEventListeners() {
  var hamburger = document.getElementById("hamburger");
  hamburger.addEventListener("click", openMenu);
  console.log("hamburger on standby.");

  // mobile menu event listeners
  // includes closeButton and all links that are clickable
  var c = document.getElementById("mobileMenu").childNodes;
  var n = [c[1], c[3], c[5], c[7], c[9], c[11]];

  for (var i = 0; i < n.length; i++) {
    n[i].addEventListener("click", closeMenu);
  }

  console.log("mobileMenu children on standby.");

  var consultingButtons = document.getElementsByClassName("consultingButton");
  for (var i = 0; i < consultingButtons.length; i++) {
    consultingButtons[i].addEventListener("click", openConsulting);
  }

  console.log("consultingButtons on standby.");

  var closeConsultingButton = document.getElementById("closeConsulting");
  closeConsultingButton.addEventListener("click", closeConsulting);
  console.log("closeConsultingButton on standby.");
})();

// 1. mobile menu handlers
function openMenu() {
  disableScroll();
  console.log("opening menu");
  var mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.add("bounceIn", "shown");
}

function closeMenu() {
  enableScroll();
  console.log("closing menu");
  var mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.add("fadeOut");
  setTimeout(function() {
    mobileMenu.classList.remove("shown", "bounceIn", "fadeOut");
  }, 500);
}

// 2. scroll enable/disable
function disableScroll() {
  document.getElementsByTagName("body")[0].classList.add("noScroll");
}

function enableScroll() {
  document.getElementsByTagName("body")[0].classList.remove("noScroll");
}

// 3. consulting window popup
function openConsulting() {
  console.log(this);
  disableScroll();
  console.log("opening consultingPopup");
  var consultingPopup = document.getElementById("consultingPopup");
  consultingPopup.classList.add("bounceIn", "shown");
}

function closeConsulting() {
  enableScroll();
  console.log("closing consultingPopup");
  var consultingPopup = document.getElementById("consultingPopup");
  consultingPopup.classList.add("fadeOut");
  setTimeout(function() {
    consultingPopup.classList.remove("shown", "bounceIn", "fadeOut");
  }, 500);
}
