/*
  Slider de imagenes en el Home.
  Los nombres de las imagenes usadas se pasan en un array y se loopean en un intervarlo de cinco segundos
*/

let i = 0;
let images = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.jpg", "slide5.jpg", "slide6.jpg", "slide7.jpg", "slide8.jpg", "slide9.jpg"];
let time = 5000;

function slider() {
    document.slide.src = 'images/' + images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
}

setInterval(slider, time);

window.onload = slider;
