//Menu Hamburgur e Menu Usuário
//mostra e esconde o menu hamburguer e usuario//
const menuHamburguer = document.querySelector(".icone-menu");
menuHamburguer.onclick = function hamburgerActive() {
  let hamburger = document.getElementById("hamburguer");
  if (hamburger.style.display === "block") {
    hamburger.style.display = "none";
  } else {
    hamburger.style.display = "block";
  }
}

const menuUsuario = document.querySelector(".icone-usuario");
menuUsuario.onclick = function usuarioActive() {
  let usuario = document.getElementById("usuario");
  if (usuario.style.display === "block") {
    usuario.style.display = "none";
  } else {
    usuario.style.display = "block";
  }
}

 //botões adicionar e remover item do carinho
   
const btnAdd = document.querySelector(".btn-add");
let quant = document.querySelector(".quant");
let contador = parseInt(quant.innerText)
let containerProduto = document.querySelector('.serv-quant')
let btnRemove = document.querySelector('.btn-remove')


btnAdd.addEventListener("click", function(e) {
  e.preventDefault()
    contador++
    quant.innerText = contador
  })
  
btnRemove.addEventListener('click', function (e){
  e.preventDefault()
  contador--
  quant.innerText = contador
  if (contador <= 0){
    containerProduto.remove()
    document.querySelectorAll('.resumo').forEach(div => div.remove())
  }
})

let slideIndex = 1;
showImagens(slideIndex);

// Next/previous controls
function nextImagens(n) {
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
    


