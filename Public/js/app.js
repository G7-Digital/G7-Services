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

// valida Input Buscar
let btnBuscar= document.getElementById("btnBusca");
let inputBuscar = document.getElementById("txtBusca");
let formBuscar = document.querySelector(".buscar form");
let formOut = document;

let avisoBuscar = document.createElement('span');
avisoBuscar.innerText = "Digite o nome do serviço buscado!";
avisoBuscar.classList.add('erro');

//ativa o aviso com mouse sobre o botão buscar se input vazio
//e desativas se preenchido
btnBuscar.addEventListener('mouseover', function(event){
  event.preventDefault()
  if (inputBuscar.value != ""){
    avisoBuscar.remove()
  } else {
    formBuscar.insertAdjacentElement('afterend', avisoBuscar)
  }
})
//zera o value quando clica fora do input
formOut.addEventListener('click', function(event){
  avisoBuscar.remove();
  if(inputBuscar.value.length > 0){
    inputBuscar.value = ''
  }
})
