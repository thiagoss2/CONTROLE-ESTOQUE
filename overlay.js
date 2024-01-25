const overlay = document.querySelector(".overlay");
const blocoFlutunte = document.querySelector(".bloco-funtutante-venda");
const botaoAdicionar = document.getElementById('cabecalho__btn--despesa-js');
const botaoFechar = document.querySelector(".botao-fechar-js");
const iconeMenos = document.querySelector(".icone-menos-js");
const iconeMais = document.querySelector(".icone-mais-js")
const inputQuantidade = document.querySelector('.bloco-flutuante-venda__quantidade__input');

let quantidadeProdutos = 0;

console.log(botaoFechar)


overlay.addEventListener("click", function () {

    overlay.style.display = "none";
    blocoFlutunte.style.display = "none";

})


botaoAdicionar.addEventListener("click", function () {

    overlay.style.display = "block";
    blocoFlutunte.style.display = "block";


})


botaoFechar.addEventListener('click', function () {
    overlay.style.display = "none";
    blocoFlutunte.style.display = "none";

});


iconeMenos.addEventListener('click' , function() {
    quantidadeProdutos--;
    if(quantidadeProdutos <= 0) {
        quantidadeProdutos = 0;
    }
    inputQuantidade.value = quantidadeProdutos;


})

iconeMais.addEventListener('click' , function() {
    quantidadeProdutos++
    inputQuantidade.value = quantidadeProdutos;
});