// chama o modal
var modal = document.getElementById("modal-promocoes");

//chama o botão que liga o modal
var btn = document.getElementById("btn-modal");

// chama o botão que fecha o modal
var span = document.getElementsByClassName("close")[0];

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