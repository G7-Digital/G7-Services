// JS do Modal Promoções e Cupons
//chama o modal
let modal = document.getElementById("modal-promocoes");

//chama o botão que liga o modal
let btn = document.getElementById("btn-modal");

// chama o botão que fecha o modal
let span = document.getElementsByClassName("close")[0];

// função para aprecer o modal
btn.onclick = function() {
  modal.style.display = "block";
}

// função para fechar o modal
span.onclick = function() {
  modal.style.display = "none";
}

// fechar o modal clicando fora do modal-box
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

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

