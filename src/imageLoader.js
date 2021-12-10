const images = [
  "http://images6.fanpop.com/image/photos/38100000/Luke-Skywalker-luke-skywalker-38118976-1647-2700.jpg",
  "https://starwarsblog.starwars.com/wp-content/uploads/2017/01/c3po-revenge-of-the-sith-1088x816-518927837349.jpg",
  "https://media.wired.com/photos/5a21ef3769e4a92363d488c6/master/w_1600%2Cc_limit/r2d2-IL.jpg",
  "https://blenderartists.org/uploads/default/original/4X/b/9/c/b9c874ce7cadfd60d7d53802594744e15df04d08.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg/220px-Princess_Leia%27s_characteristic_hairstyle.jpg",
  "https://i.pinimg.com/736x/82/cd/5f/82cd5f3b24e37039fd965689e7087aed--lars-old-mans.jpg",
  "https://64.media.tumblr.com/4a226f58dac4b56f3820eaad2337ae80/70f092a80ad4b4ca-26/s500x750/262b5c06d86dc59c419cdf075106cea9e7ce83bb.png",
  "https://bbts1.azureedge.net/images/p/full/2018/03/819c4477-8b59-4076-962c-91e5c0d5c526.jpg",
  "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C780",
  "https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=960",
  

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
