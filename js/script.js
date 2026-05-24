const anoAtualizado = () => {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();

  document.getElementById("anoAt").textContent = anoAtual;
};

document.addEventListener("DOMContentLoaded", anoAtualizado);