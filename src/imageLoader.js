const images = [
  {
    name: "lukeskywalker",
    img: "img/lukeskywalker.jpg",
  },
  {
    name: "c3po",
    img: "img/c-3po.jpg",
  },
  {
    name: "r2d2",
    img: "img/r2-d2.jpg",
  },
  {
    name: "darthvader",
    img: "img/darth-vader.jpg",
  },
  {
    name: "leiaorgana",
    img: "img/leia-organa.jpg",
  },
  {
    name: "owenlars",
    img: "img/owen-lars.jpg",
  },
  {
    name: "beruwhitesunflars",
    img: "img/beru-whitesun-lars.jpg",
  },
  {
    name: "r5d4",
    img: "img/r5-d4.jpg",
  },
  {
    name: "biggsdarklighter",
    img: "img/biggs-darklighter.jpg",
  },
  {
    name: "obiwankanobi",
    img: "img/obi-wan-kenobi.jpg",
  },
  {
    name: "anarkinskywalker",
    img: "img/anarkin-skywalker.jpg",
  },
  {
    name: "wilhufftarkin",
    img: "img/wilhuff-tarkin.jpg",
  },
  {
    name: "chewbacca",
    img: "img/chewbacca.jpg",
  },
  {
    name: "hansolo",
    img: "img/han-solo.jpg",
  },
  {
    name: "greedo",
    img: "img/greedo.jpg",
  },
  {
    name: "jabbadesilijic",
    img: "img/jabba-desilijic.jpg",
  },
  {
    name: "wedgesantilles",
    img: "img/wedges-antilles.jpg",
  },
  {
    name: "jektonoporkin",
    img: "img/jek-tono-porkin.jpg",
  },
  {
    name: "yoda",
    img: "img/yoda.jpg",
  },
  {
    name: "palpatine",
    img: "img/palpatine.jpg",
  },
  {
    name: "bobafett",
    img: "img/boba-fett.jpg",
  },
  {
    name: "ig88",
    img: "img/ig-88.jpg",
  },
  {
    name: "bossk",
    img: "img/bossk.jpg",
  },
  {
    name: "landocalrissian",
    img: "img/lando-calrissian.jpg",
  },
  {
    name: "lobot",
    img: "img/lobot.jpg",
  },
  {
    name: "ackbar",
    img: "img/ackbar.jpg",
  },
  {
    name: "monmothma",
    img:  "img/monmothma.jpg",
  },
  {
    name: "arvelcrynyd",
    img: "img/arvelcrynyd.jpg",
  },
  {
    name: "wicketsystriwarrick",
    img: "img/wicketsystriwarrick.jpg",
  },
  {
    name: "niennumb",
    img: "img/niennunb.jpg",
  }
];

export function loadImage(imageCount, searchTerm) {
  let imageRef = "";

  if (searchTerm === undefined) {
    return;
  } else if (searchTerm == "" || undefined) {
    images.map((img, i) => {
      if (imageCount == i) {
        imageRef = images[i].img;
      }
    });
  } else {
    console.log(searchTerm);
    let filteredList = images.filter((img) => img.name.includes(searchTerm));

    filteredList.map((img, i) => {
      if (imageCount == i) {
        imageRef = filteredList[i].img;
      }
    });
  }
  return imageRef;
}
