function showImage(imageID) {
  const img = document.getElementById(imageID);
  img.style.display = "block";
}

function findFlower() {
  const flower = document.getElementById("flowerMonth").value.toLowerCase().trim();
  const info = document.getElementById("flowerInfo");
  const image = document.getElementById("flowerImage");

  if (flower === "january") {
   info.textContent = "The primary flower for January is a carnation, and the secondary flower is a snowdrop. These flowers symbolize love, devotion, and new beginnings.";
   image.src = "images/january-flower.jpeg";
   image.alt = "carnation flower";
  }

  else if (flower === "february") {
   info.textContent = "The primary flower for February is violet, and the secondary flower is a primrose. These flowers symbolize faith, wisdom, youth and protection.";
   image.src = "images/february-flower.jpeg";
   image.alt = "violet flower";
  }

  else if (flower === "march") {
   info.textContent = "The primary flower for March is a daffodil, and the secondary flower is the jonquil. These flowers symbolize hope, rebirth, and new beginnings.";
   image.src = "images/march-flower.jpeg";
   image.alt = "daffodil flower";
  }

  else if (flower === "april") {
   info.textContent = "The primary flower for April is a daisy, and the secondary flower is a sweet pea. These flowers symbolize youth, innocence, affection, and gratitude.";
   image.src = "images/april-flower.jpeg";
   image.alt = "daisy flower";
  }

  else if (flower === "may") {
   info.textContent = "The primary flower for May is lily of the valley, and the secondary flower is a hawthorn. These flowers symbolize happiness, gentility, and luck.";
   image.src = "images/may-flower.jpeg";
   image.alt = "lily of the valley flower";
  }

  else if (flower === "june") {
   info.textContent = "The primary flower for June is a rose, and the secondary flower is a honeysuckle. These flowers symbolize love, passion, and romance.";
   image.src = "images/june-flower.jpeg";
   image.alt = "rose flower";
  }

  else if (flower === "july") {
   info.textContent = "The primary flower for July is a larkspur, and the secondary flower is a water lily. These flowers symbolize lightness, levity, and enlightenment.";
   image.src = "images/july-flower.jpeg";
   image.alt = "larkspur flower";
  }

  else if (flower === "august") {
   info.textContent = "The primary flower for August is a gladiolus, and the secondary flower is a poppy. These flowers symbolize strength, integrity, and imagination.";
   image.src = "images/august-flower.jpeg";
   image.alt = "gladiolus flower";
  }

  else if (flower === "september") {
   info.textContent = "The primary flower for September is an aster, and the secondary flower is the morning glory. These flowers symbolize wisdom and maturity.";
   image.src = "images/september-flower.jpeg";
   image.alt = "aster flower";
  }

  else if (flower === "october") {
   info.textContent = "The primary flower for October is a marigold, and the secondary flower is the cosmos. These flowers symbolize creativity and tranquility.";
   image.src = "images/october-flower.jpeg";
   image.alt = "marigold flower";
  }

 else if (flower === "november") {
   info.textContent = "The primary flower for November is a chrysanthemum, and the secondary flower is a peony. These flowers symbolize love and friendship.";
   image.src = "images/november-flower.jpeg";
   image.alt = "chrysanthemum flower";
  }

 else if (flower === "december") {
   info.textContent = "The primary flower for December is a narcissus, and the secondary flower is a holly. These flowers symbolize rebirth, goodwill, and joy.";
   image.src = "images/december-flower.jpeg";
   image.alt = "narcissus flower";
  }
 image.style.display = "block";
}
