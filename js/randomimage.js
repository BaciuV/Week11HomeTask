const myButton = document.querySelector("button");
const image = document.querySelector("img");
const images = ["1.png", "2.jpg", "3.jpg", "4.jpg", "5.webp"];

myButton.addEventListener("click", changeImage);

function changeImage() {
  
    console.log(image);
    let randomImage = Math.floor(Math.random() * images.length);
    console.log(randomImage);


    image.src = "../img/" + images[randomImage];
}