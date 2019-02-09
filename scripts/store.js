function getStore() {
  return [
    {
      category: "books",
      desc: "a collection of some books that have shaped my philosophy",
      items: [
        {
          title:
            "Advanced Yoga Practices - Easy Lessons for Ecstatic Living Vol I",
          link: "http://amzn.to/2CaIbtJ",
        },
        {
          title:
            "Advanced Yoga Practices - Easy Lessons for Ecstatic Living Vol II",
          link: "https://amzn.to/2ub6xhq",
        },
        {
          title: "Kundalini Tantra",
          link: "https://amzn.to/2waDGKW",
        },
        {
          title: "The Enchiridion",
          link: "http://amzn.to/2vyGzmW",
        },
      ],
    },
  ];
}

function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

function populateStore() {
  const categories = getStore();
  const StoreList = document.getElementById("store-list");

  categories.map(function(c, index) {
    var INNER = "<div class='store-category-container'>";
    INNER +=
      "<h2>" +
      titleCase(c.category) +
      "</h2><h3>" +
      titleCase(c.desc) +
      "</h3><div class='store-items'>";

    c.items.map(function(item, index) {
      INNER +=
        "<div className='store-item index-" +
        index +
        "'><h4><a href='" +
        item.link +
        "'>" +
        item.title +
        "</a></h4><p></p></div>";
    });

    INNER += "</div></div>";

    StoreList.innerHTML = INNER;
  });
}

populateStore();
