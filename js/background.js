const images = [
    "blue flower.jfif",
    "cloud.jfif",
    "moon.jfif",
    "wave.jfif"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `./img/${chosenImage}`;
document.body.appendChild(bgImage);
