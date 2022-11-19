   //window.addEventListener ('load', () => {
   
    //const btnAdd = document.querySelector(".btn-add");
    //const quant = document.querySelector(".quant");
    //const contador = 1
    
    //btnAdd.addEventListener ("click", function() {
    //    contador = contador + 1
    //    quant.innertext = contador
    //   console.log(quant)
    //})
    //})
    
let slideIndex = 1;
showImagens(slideIndex);

// Next/previous controls
function plusImagens(n) {
  showImagens(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showImagens(slideIndex = n);
}

function showImagens(n) {
  let i;
  let Imagens = document.querySelectorAll(".slides");
  let circles = document.querySelectorAll(".balls");
  if (n > Imagens.length) {slideIndex = 1}
  if (n < 1) {slideIndex = Imagens.length}
  for (i = 0; i < Imagens.length; i++) {
    Imagens[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" active", "");
  }
  Imagens[slideIndex-1].style.display = "block";
  circles[slideIndex-1].className += " active";
}
    


