const images = [ "img100.jpg", "img101.jpg", "img102.jpg", 
                "img103.jpg", "img104.jpg", "img105.jpg" ];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);


