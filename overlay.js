const overlay = document.querySelector(".overlay");
const blocoFlutunte = document.querySelector(".bloco-funtutante-venda");
const botaoAdicionar = document.getElementById('cabecalho__btn--despesa-js');
const botaoFechar = document.querySelector(".botao-fechar-js");
const iconeMenos = document.querySelector(".icone-menos-js");
const iconeMais = document.querySelector(".icone-mais-js")
const inputQuantidade = document.querySelector('.bloco-flutuante-venda__quantidade__input');
const inputCusto = document.querySelector('.bloco-flutuante-venda__custo__input');

let quantidadeProdutos = 0;

let custoProduto = 0;





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


function formataValorDeMoeda(lingua , paisOrigem , valor) {
    // Formata como moeda usando o formato específico para o Brasil
const formatoMoeda = new Intl.NumberFormat(lingua, {
    style: 'currency',
    currency: paisOrigem,
  });   

  return formatoMoeda.format(valor);
}


inputCusto.addEventListener('change' , function () {
     


    inputCusto.value = formataValorDeMoeda('pr-BR' , 'BRL', inputCusto.value); 
    custoProduto = inputCusto.value;
    console.log(custoProduto)


}   );



function removeSimboloMoeda(valor) {

// Substituir o símbolo de moeda por uma string vazia
let valorSemSimbolo = valor.replace('R$', '').trim();
 return valorSemSimbolo;


}

function removeVirgulaDeMoedas(valor){
   let moeda = removeSimboloMoeda(valor);
   let moedaSemVirgula = moeda.replace( ',', '.');

   return moedaSemVirgula;

}  

console.log(removeVirgulaDeMoedas("R$ 700.000.000,00"));