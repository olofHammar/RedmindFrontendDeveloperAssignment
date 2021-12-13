const images = [
  "img/lukeskywalker.jpg",
  "img/c-3po.jpg",
  "img/r2-d2.jpg",
  "img/darth-vader.jpg",
  "img/leia-organa.jpg",
  "img/owen-lars.jpg",
  "img/beru-whitesun-lars.jpg",
  "img/r5-d4.jpg",
  "img/biggs-darklighter.jpg",
  "img/obi-wan-kenobi.jpg",
  "img/anarkin-skywalker.jpg",
  "img/wilhuff-tarkin.jpg",
  "img/chewbacca.jpg",
  "img/han-solo.jpg",
  "img/greedo.jpg",
  "img/jabba-desilijic.jpg",
  "img/wedges-antilles.jpg",
  "img/jek-tono-porkin.jpg",
  "img/yoda.jpg",
  "img/palpatine.jpg",
  "img/boba-fett.jpg",
  "img/ig-88.jpg",
  "img/bossk.jpg",
  "img/lando-calrissian.jpg",
  "img/lobot.jpg",
];

export function loadImage(imageCount) {
  let imageRef = "";
  images.map((img, i) => {
    if (imageCount == i) {
      imageRef = images[i];
    }
  });
  return imageRef;
}
