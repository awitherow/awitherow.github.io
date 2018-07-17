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
  var n = [c[1], c[3], c[5], c[7], c[9]];

  for (var i = 0; i < n.length; i++) {
    n[i].addEventListener("click", closeMenu);
  }

  console.log("mobileMenu children on standby.");
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

// 2. scrollenabler, disabler

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function disableScroll() {
  console.log("disabling scroll");
  if (window.addEventListener)
    // older FF
    window.addEventListener("DOMMouseScroll", preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
  if (window.removeEventListener)
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}
