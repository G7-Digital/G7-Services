// chama o modal
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
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
const menuHamburguer = document.querySelector(".icone-menu");
menuHamburguer.onclick = function hamburgerActive() {
  let hamburger = document.getElementById("hamburguer");
  if (hamburger.style.display === "block") {
    hamburger.style.display = "none";
  } else {
    hamburger.style.display = "block";
  }
}



