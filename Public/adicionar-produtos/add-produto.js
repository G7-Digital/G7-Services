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
