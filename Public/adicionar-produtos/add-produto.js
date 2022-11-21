window.addEventListener('load', () => {
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

//                 Validações de Input
//Input Categoria
let inputCategoria = document.getElementById('choose-cat')

const mensagemCat = document.createElement('span');
mensagemCat.innerText = 'Campo Obrigatório!';
mensagemCat.classList.add('erro1')

inputCategoria.addEventListener ('blur', function(event) {
 
  event.preventDefault();

  if (inputCategoria.value != "") {
    return
  } else {    
    inputCategoria.insertAdjacentElement('afterend', mensagemCat);
  }
})

//input Código 
let inputCodigo = document.getElementById('codigo')

const mensagemCod = document.createElement('span');
mensagemCod.innerText = 'Insira um código com mínimo 4 dígitos';
mensagemCod.classList.add('erro1')

inputCodigo.addEventListener ('blur', function(event) {
 
  event.preventDefault();

  if (inputCodigo.value.length >= 4) {
    return
  } else {    
    inputCodigo.insertAdjacentElement('afterend', mensagemCod);
  }
})

//Input Nome do serviço 
let inputServ = document.getElementById('name-service')

const mensagemServ = document.createElement('span');
mensagemServ.innerText = 'Insira um nome com 2 a 20 dígitos!';
mensagemServ.classList.add('erro1');

inputServ.addEventListener ('blur', function(event) {
 
  event.preventDefault();

  if (inputServ.value.length >= 2 && inputServ.value.length <= 20) {
    return
  } else {    
    inputServ.insertAdjacentElement('afterend', mensagemServ);
  }
})

//Input Preço
let inputPrice = document.getElementById('price'); 

const mensagemPrice = document.createElement('span');
mensagemPrice.innerText = 'Campo Obrigatório!';
mensagemPrice.classList.add('erro1');

inputPrice.addEventListener('blur', function(event) {
  event.preventDefault();

  if (inputPrice.value != "") {
    return
  } else {    
    inputPrice.insertAdjacentElement('afterend', mensagemPrice);
  }
})

})

