const categories = [
  {
    category: "Philosophy",
    description: "",
    items: [
      {
        title: "The Enchiridion",
        link: "http://amzn.to/2vyGzmW",
        description:
          "This book was my first introduction to the philosophy of taming the mind in order to actively shape perception of reality basic on the Stoic Philosophy."
      },

      {
        title:
          "Advanced Yoga Practices - Easy Lessons for Ecstatic Living Vol I",
        link: "http://amzn.to/2CaIbtJ",
        description:
          "This book formed the foundation of my Sadhāna for the last 7 years and I still incorporate techniques described. To me, it will ever be an invaluable resource for a really good overview of Yoga without the fluff."
      },
      {
        title:
          "Advanced Yoga Practices - Easy Lessons for Ecstatic Living Vol II",
        link: "https://amzn.to/2ub6xhq",
        description:
          "This book is the second in the series of Advanced Yoga Practices."
      },
      {
        title: "The Ra Contact: Teaching the Law of One",
        link: "https://amzn.to/2KOkHzc",
        description:
          "Ra is the entity whose teachings were perverted by the Egyptians. In the Teachings of the Law Of One, Ra attempts to rectify these perversions and teach the Truth of the Universe according to their understanding."
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
        description: ""
      }
    ]
  },
  {
    category: "",
    description: "",
    items: [
      {
        title: "The Lost Hegemon: Whom The Gods Would Destroy",
        link: "https://amzn.to/2NHSvff",
        description:
          "A very interesting and well cited book on how First World Powers enabled, used, and eventually lost control of Radical Islamic groups, which has lead the world to the unfortunate situation we face today. May Islam find healing and peace, and those who have brought evil upon this world face Justice before God."
      }
    ]
  }
];

function populateCategories() {
  const TableOfContents = document.getElementById("toc");
  const ListOfItems = document.getElementById("the-list");

  categories.map(function(cat) {
    TableOfContents.appendChild(
      "<li><a href='#" + cat.category + "'>" + cat.category + "</a></li>"
    );

    let title = "<h4 id='" + cat.title + "'>" + cat.title + "</h4>";
    let description = "<p>" + cat.description + "</p>";
    let listElementID = cat.title + "-list";
    let innerHTML =
      title + description + "<ul id='" + listElementID + "'></ul>";

    ListOfItems.appendChild(
      "<div class='category-list'>" + innerHTML + "</div>"
    );

    let listItems = "";

    cat.items.map(function(rec) {
      let li =
        "<li><a target='_blank' href='" +
        rec.link +
        "'>" +
        rec.title +
        "</a><p>" +
        rec.description +
        "</p></li>";
      listItems.appendChild(li);
    });

    document.getElementById(listElementID).innerHTML = listItems;
  });
}

populateCategories();
