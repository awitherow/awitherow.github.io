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
          "This book formed the foundation of my Sadhāna for the last 7 years and I still incorporate techniques described. To me, it will ever be an invaluable resource for a really good overview of Yoga without the fluff.",
        affiliate: true
      },
      {
        title:
          "Advanced Yoga Practices - Easy Lessons for Ecstatic Living Vol II",
        link: "https://amzn.to/2ub6xhq",
        description:
          "This book is the second in the series of Advanced Yoga Practices.",
        affiliate: true
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
          "This book was my first introduction to the philosophy of taming the mind in order to actively shape perception of reality basic on the Stoic Philosophy.",
        affiliate: true
      },
      {
        title: "The Ra Contact: Teaching the Law of One",
        link: "https://amzn.to/2KOkHzc",
        description:
          "Ra is the entity whose teachings were perverted by the Egyptians. In the Teachings of the Law Of One, Ra attempts to rectify these perversions and teach the Truth of the Universe according to their understanding.",
        affiliate: true
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
        description: "",
        affiliate: true
      },
      {
        title: "The Lost Hegemon: Whom The Gods Would Destroy",
        link: "https://amzn.to/2NHSvff",
        description:
          "A very interesting and well cited book on how First World Powers enabled, used, and eventually lost control of Radical Islamic groups, which has lead the world to the unfortunate situation we face today. May Islam find healing and peace, and those who have brought evil upon this world face Justice before God.",
        affiliate: true
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
        "<li><strong><a target='_blank' href='" +
        rec.link +
        "'>" +
        rec.title +
        "</a></strong><p>" +
        rec.description +
        "</p>" +
        affilateFlag +
        "</li>";
      listItems += li;
    });

    document.getElementById(listElementID).innerHTML = listItems;
  });
}

populateCategories();
