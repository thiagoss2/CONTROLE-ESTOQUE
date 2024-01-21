const overlay = document.querySelector(".overlay");
const blocoFlutunte = document.querySelector(".bloco-funtutante-venda");
const botaoAdicionar = document.getElementById('cabecalho__btn--despesa-js');
const botaoFechar = document.querySelector(".botao-fechar-js");


console.log(botaoFechar)


overlay.addEventListener("click" , function () {

    overlay.style.display = "none";
    blocoFlutunte.style.display = "none";

})


botaoAdicionar.addEventListener("click" , function () {
    
    overlay.style.display = "block";
    blocoFlutunte.style.display = "block";

   
} )


botaoFechar.addEventListener('click' , function() {
    overlay.style.display = "none";
    blocoFlutunte.style.display = "none";
 
});