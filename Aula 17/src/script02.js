// Alterando CSS de elemento com o JavaScript
const elemento1 = document.querySelector(".ex1");

elemento1.style.fontFamily = "sans-serif";
elemento1.style.fontSize = "32px";
elemento1.style.color = "orangered";

// Alterando CSS de elemento com evento no JavaScript
const elementoParagrafo = document.querySelector(".ex2-p");
const elementoBotao = document.querySelector(".ex2-btn");

function estilizarParagrafo() {
  elementoParagrafo.style.fontSize = "26px";
  elementoParagrafo.style.color = "darkred";
  elementoParagrafo.style.fontFamily = "monospace";
}

elementoBotao.addEventListener("click", estilizarParagrafo);