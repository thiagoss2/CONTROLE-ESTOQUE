const overlay = document.querySelector(".overlay");
const blocoFlutunte = document.querySelector(".bloco-funtutante-venda");
const botaoAdicionar = document.querySelector(".cabecalho__btn--despesa");

overlay.addEventListener("click" , function () {

    overlay.style.display = "none";
    blocoFlutunte.style.display = "none";

})


botaoAdicionar.addEventListener("click" , function () {
    
    overlay.style.display = "block";
    blocoFlutunte.style.display = "block";

   
} )