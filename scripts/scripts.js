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

  for (var i = 0; i < c.length; i++) {
    c[i].addEventListener("click", closeMenu);
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
  form.addEventListener("submit", handleForm);
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
    data[input.name] = input.value;
  });

  data = removeEmpties(data);

  if (document.getElementById("honeypot").value) {
    window.location = "https://www.youtube.com/watch?v=QH2-TGUlwu4";
  }

  // Log what our lambda function will receive
  console.log(JSON.stringify(data));

  // Construct an HTTP request
  var xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action, true);
  xhr.setRequestHeader("Accept", "application/json; charset=utf-8");
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

  // Send the collected data as JSON
  xhr.send(JSON.stringify(data));

  const formResponse = document.getElementById("js-form-response");

  // Callback function
  xhr.onloadend = function(response) {
    if (response.target.status === 200) {
      // The form submission was successful
      form.reset();

      formResponse.innerHTML =
        "Thanks for the message. I’ll be in touch shortly.";

      closeConsulting();
      formResponse.style = "display: none";
    } else {
      // The form submission failed
      formResponse.innerHTML = "Something went wrong";
      console.error(JSON.parse(response.target.response).message);
    }
  };
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
}

(function printPaths() {
  var paths = [
    {
      id: "fundamentals",
      title: "1:1 Introduction to Yoga Fundamentals",
      description:
        "Learn the fundamentals of Yoga as a Beginner so that you can go to classes and practice with Confidence!",
      features: [
        "What Yoga Really Is About",
        "Components of Class or Daily Practice",
        "Benefits of Daily Yoga Practice",
        "The Power of Breath",
        "Connecting With your Body",
        "Stilling the Mind",
      ],
      link: {
        href: "https://forms.gle/msGWwpS3yBTHMNf49",
        text: "Let's Start Yoga",
      },
    },
    {
      id: "enhance",
      title: "1:1 Yoga Practitioner Enhancements",
      description:
        "A Private Soothing Restorative Yoga Flow with the Healing Power of Reiki and Hands on Realignment Therapy",
      features: [
        "Online or In Person",
        "Empowering Hatha Yoga with Raja Yoga",
        "Fundamentals of Flow",
        "Skillwork, Alignment and Balance",
        "Deepen Your Experience with Breath",
        "Advanced Kriyas for Ecstatic Conductivity",
        "Unlocking Bliss Consciousness with Deep Meditation",
      ],
      link: {
        href: "https://forms.gle/apJxLZKFZmjxeMaSA",
        text: "Let's Start Yoga",
      },
    },
    {
      id: "therapy",
      title: "1:1 Therapeutic Restorative Yoga w/ Reiki",
      description:
        "A Private Soothing Restorative Yoga Flow with the Healing Power of Reiki and Hands on Realignment Therapy",
      features: [
        "Discover What Your Body Needs",
        "Deep Relaxing Breathwork",
        "Personalised Healing Restorative Yoga Flow",
        "Gentle Hands on Reiki, and Therapeutic Realignment Adjustments",
        "Guided Meditation for Deep Relaxation and Healing",
      ],
      link: {
        href: "https://forms.gle/msGWwpS3yBTHMNf49",
        text: "Start Healing",
      },
    },
    {
      id: "online",
      title: "'Movement in Stillness' Self Paced Course",
      description:
        "Integrate ancient and modern yogic theory and practice into your lifestyle to find Stillness in the Movements of Life, and the Movement in within your Stillness.",
      features: [
        "Learn Yoga beyond Āsana",
        "Connect Deeply with Your Life Experience",
        "Discover the Power of Breath",
        "Find Deep Silence with Meditation",
        "Discover Alignment with Your Truth",
      ],
      link: {
        href: "https://forms.gle/7dyNLiZc1UCdEhZA8",
        text: "Interest Form",
      },
    },
  ];

  var container = document.getElementById("paths-container");
  var html = "";

  paths.map(function(path) {
    html +=
      "<div id='" +
      path.id +
      "'class='path'><h1>" +
      path.title +
      "</h1><h2>" +
      path.description +
      "</h2><ul>";
    path.features.map(function(feat) {
      html += "<li>" + feat + "</li>";
    });
    html +=
      "</ul><p class='go'><a href='" +
      path.link.href +
      "' target='_blank' class='button'>" +
      path.link.text +
      " <i class='far fa-arrow-alt-circle-right'></i></a></p></div>";
  });

  container.innerHTML += html;
})();
