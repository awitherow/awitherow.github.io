const categories = [
  {
    category: "Yoga and Tantra",
    description: "",
    items: [
      {
        title:
          "Advanced Yoga Practices - Easy Lessons for Ecstatic Living Vol I",
        link: "http://amzn.to/2CaIbtJ",
        description:
          "Advanced Yoga Practices (AYP) brings together the most effective methods of Yoga in a flexible integrated system that anyone can use. Instructions are given in plain English for deep meditation, spinal breathing pranayama, bodily manipulations (asanas, mudras and bandhas), tantric sexual practices, and other methods that are systematically applied to swing open the door of our nervous system to permanent higher experience. This is a non-sectarian approach that is compatible with any belief system or religious background.",
        affiliate: true,
        img: {
          src: "ayp.jpg",
          alt: "OM sound symol in sanskrit haloed by sunshine type light"
        }
      },
      {
        title:
          "Advanced Yoga Practices - Easy Lessons for Ecstatic Living Vol II",
        link: "https://amzn.to/2ub6xhq",
        description:
          "This book is the second in the series of Advanced Yoga Practices.",
        affiliate: true,
        img: {
          src: "ayp.jpg",
          alt: ""
        }
      },
      {
        title: "Kundalini Tantra",
        link: "https://amzn.to/2waDGKW",
        description:
          "Kundalini Yoga is a part of the tantric tradition. Even though you may have already been introduced to yoga, it is necessary to know something about tantra also. Since ancient times, the wise have realised that mind can be expanded and that experiences do not necessarily depend on the object. This means that if somebody is playing music, I can hear it, and if somebody has painted a picture, I can see it, but I can also see if there is no picture, and I can also hear if there is no music. This is also a quality of man's personality which has been ignored in the last 150 to 200 years. This Book presents a systematic and pragmatic approach to the awakening of kundalini, which arouses greater intelligence from it's sleep and you can give birth to a new range of creativity.",
        affiliate: true,
        img: {
          src: "kt.jpg",
          alt: ""
        }
      }
    ]
  },
  {
    category: "Philosophy",
    description:
      "Philosophy is the 'Investigation of the nature, causes, or principles of reality, knowledge, or values, based on logical reasoning rather than empirical methods'. Mostly books, the following provide insights to past and present paradigms and technologies I have used to navigate these Realities that still have some impact on my views.",
    items: [
      {
        title: "The Enchiridion",
        link: "http://amzn.to/2vyGzmW",
        description:
          "Although he was born into slavery and endured a permanent physical disability, Epictetus (ca. 50–ca. 130 AD) maintained that all people are free to control their lives and to live in harmony with nature. We will always be happy, he argued, if we learn to desire that things should be exactly as they are.",
        affiliate: true,
        img: {
          src: "ench.png",
          alt: ""
        }
      },
      {
        title: "The Ra Contact: Teaching the Law of One",
        link: "https://amzn.to/2KOkHzc",
        description:
          "For thousands of years those of Ra have sought to teach the Law of One to seekers of truth on Earth who wished to learn of the unity or oneness of all things. This basic law of all creation is buried deep within each of our hearts because we really are one in love and in light, the building blocks of the universe. We are all manifestations of the One Infinite Creator. We are the Creator. We are not learning this law for the first time but are remembering it yet again as all mystics have taught throughout Earth’s history. Our journey of self-realization is the discovery or remembrance of this essential truth, our essential identity. A waking up, as some have called it, within an illusion of separation.",
        affiliate: true,
        img: {
          src: "one.jpg",
          alt: ""
        }
      },
      {
        title: "Angel Tech: A Modern Shamans Guide to Reality Selection",
        link: "https://amzn.to/2PALVIj",
        description:
          "Angel Tech is a guide for the realization of the Multidimensional Self. The great neurological scripts of the past are synthesized and modernized for our day: Tarot, Cabala, Alchemy, the Hindu Chakra System and more are all made accessible and understandable.",
        affiliate: true,
        img: {
          src: "atech.jpg",
          alt: ""
        }
      }
    ]
  },
  {
    category: "Conspiracy",
    description:
      "Don your tin foil hats before entering this section... Some of this stuff might be controversial, but they were fun reads. Sorry if these offend you, and sorry I'm not really sorry.",
    items: [
      {
        title: "Behold A Pale Horse",
        link: "http://amzn.to/2ERKjaG",
        description:
          "Bill Cooper, former United States Naval Intelligence Briefing Team member, reveals information that remains hidden from the public eye. This information has been kept in topsecret government files since the 1940s. His audiences hear the truth unfold as he writes about the assassination of John F. Kennedy, the war on drugs, the secret government, UFOs and a fake alien invasion orchestrated by the secret government. ",
        affiliate: true,
        img: {
          src: "behold.jpg",
          alt: ""
        }
      },
      {
        title: "The Lost Hegemon: Whom The Gods Would Destroy",
        link: "https://amzn.to/2NHSvff",
        description:
          "A very interesting and well cited book on how First World Powers enabled, used, and eventually lost control of Radical Islamic groups, which has lead the world to the unfortunate situation we face today. May Islam find healing and peace, and those who have brought evil upon this world face Justice before God.",
        affiliate: true,
        img: {
          src: "lh.jpg",
          alt: ""
        }
      }
    ]
  },
  {
    category: "Placeholder",
    description: "Placeholder description of category",
    items: [
      {
        title: "Placeholder Item",
        link: "https://amzn.to/NA",
        description: "Placeholder description of item",
        affiliate: true
      }
    ]
  }
];

function populateCategories() {
  const TableOfContents = document.getElementById("toc");
  const ListOfItems = document.getElementById("the-list");

  categories.pop(); // remove placeholder so that it can be kept in data set for testing/copypaste assistance

  categories.map(function(cat) {
    TableOfContents.innerHTML +=
      "<li><a href='#" + cat.category + "'>" + cat.category + "</a></li>";

    let title = "<h4 id='" + cat.category + "'>" + cat.category + "</h4>";
    let description = "<p>" + cat.description + "</p>";
    let listElementID = cat.category + "-list";
    let ItemHeader =
      title + description + "<ul id='" + listElementID + "'></ul>";

    ListOfItems.innerHTML +=
      "<div class='category-list'>" + ItemHeader + "</div>";

    let listItems = "";

    cat.items.map(function(rec) {
      let affilateFlag = rec.affiliate
        ? "<p class='small'>Affiliate Link</p>"
        : "";

      let li =
        "<li><img src='./img/store/" +
        rec.img.src +
        "' alt='" +
        rec.img.alt +
        "' /><div><strong><a target='_blank' href='" +
        rec.link +
        "'>" +
        rec.title +
        "</a></strong><p>" +
        rec.description +
        "</p>" +
        affilateFlag +
        "</div></li>";
      listItems += li;
    });

    document.getElementById(listElementID).innerHTML = listItems;
  });
}

populateCategories();
