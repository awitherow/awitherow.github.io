// scripts.js
// table of contents
// -------
// global variables
// 0. event listeners
// 1. mobile menu handler
// 2. scroll enablers and disablers
// 3. consultingPopup opener
// 4. consultingPopup TopicSwitcher functions

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

  // dropdown for picking a consulting topic to select subtopic
  var cT = document.getElementById("consultTopic");
  cT.addEventListener("select", handleTopicSwitcher);
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
  // TODO: this attribute of data smart choose the correct subtopics
  handleTopicSwitcher(key);
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

//
//
//
// 4. consultingPopup TopicSwitcher functions
function handleTopicSwitcher(selected) {
  console.log(this);
  var key = selected ? selected : this.attribute; // store this.selected as variable
  var subTopics = document.getElementById("subTopics");
  if (subTopics) {
    // get nested select from subTopics
    // add fadeUpOut to nested select, delete it after 500 seconds.
    addSubTopicOptions(key);
    return;
  }

  var consultingSubject = document.getElementById("consultingSubject");
  consultingSubject.insertAdjacentHTML(
    "<fieldset id='subTopics'>" +
      "<label>Specific Inqiury</label>" +
      "<select id='subTopicsDropdown'></select>" +
      "</fieldset>"
  );
  addSubTopicOptions(key);
}

function addSubTopicOptions(key) {
  var subTopicsAvailable = {
    Development: [],
    Spirituality: []
  };

  var subTopicsToUse = subTopicsAvailable[key];
  var subTopicsHTML = document.getElementById("subTopics");
  subTopicsHTML.appendChild("");
}
