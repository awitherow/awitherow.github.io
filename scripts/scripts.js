// scripts.js
// table of contents
// -------
// global variables
// 0. event listeners
// 1. mobile menu handler
// 2. scroll enablers and disablers
// 3. consultingPopup opener

//
//
//
// 0. event listeners
(function spawnEventListeners() {
  var h = document.getElementById("hamburger");
  h.addEventListener("click", openMenu);

  // mobile menu event listeners
  // includes closeButton and all links that are clickable
  var c = document.getElementById("mobileMenu").childNodes;
  // TODO: get fancy and add an array 1-11, odd only numbers to show off to people snooping code.
  var n = [c[1], c[3], c[5], c[7]];

  for (var i = 0; i < n.length; i++) {
    n[i].addEventListener("click", closeMenu);
  }

  // consulting buttons scattered throughout the page.
  var cBs = document.getElementsByClassName("consultingButton");
  for (var i = 0; i < cBs.length; i++) {
    cBs[i].addEventListener("click", openConsulting);
  }

  // close popup window
  var ccB = document.getElementById("closeConsulting");
  ccB.addEventListener("click", closeConsulting);
  console.log("closeConsultingButton on standby.");

  const form = document.getElementById("consulting-form");
  form.addEventListener("submit", handleForm)
})();

//
//
//
// 1. mobile menu handlers
function openMenu() {
  disableScroll();
  var mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.add("bounceIn", "shown");
}

function closeMenu() {
  enableScroll();
  var mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.add("fadeOut");
  setTimeout(function() {
    mobileMenu.classList.remove("shown", "bounceIn", "fadeOut");
  }, 500);
}

//
//
//
// 2. scroll enable/disable
function disableScroll() {
  document.getElementsByTagName("body")[0].classList.add("noScroll");
}

function enableScroll() {
  document.getElementsByTagName("body")[0].classList.remove("noScroll");
}

//
//
//
// 3. consulting window popup
function openConsulting() {
  var key; // get this.data attribute of button used
  disableScroll();
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

// email form for consulting handling
function handleForm(e) {
  e.preventDefault();

  const form = this;

  // Prepare data to send
  let data = {};
  const formElements = Array.from(form);

  formElements.map(function(input) {
    data[input.name] = input.value
  });
  
  data = removeEmpties(data);

  const formResponse = document.querySelector("js-form-response");

  // Log what our lambda function will receive
  console.log(JSON.stringify(data));
}

// remove empty key/value pairs from objects
function removeEmpties(obj) {
  var newObj = {};
  Object.keys(obj).forEach(function(prop) {
    if (obj[prop]) {
      newObj[prop] = obj[prop];
    }
  });
  return newObj;
};