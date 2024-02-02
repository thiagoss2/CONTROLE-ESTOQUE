const overlay = document.querySelector(".overlay");
const blocoFlutunte = document.querySelector(".bloco-funtutante-venda");
const botaoAdicionar = document.getElementById('cabecalho__btn--despesa-js');
const botaoFechar = document.querySelector(".botao-fechar-js");
const iconeMenos = document.querySelector(".icone-menos-js");
const iconeMais = document.querySelector(".icone-mais-js")
const inputQuantidade = document.querySelector('.bloco-flutuante-venda__quantidade__input');
const inputCusto = document.querySelector('.bloco-flutuante-venda__custo__input');
const inputArquivo = document.querySelector('.capiturar-produto');
const imagemArquivo = document.querySelector('.bloco-flutuante-venda__imagem-imagem');






let quantidadeProdutos = 0;

let custoProduto = 0;




inputArquivo.addEventListener('change', function (e) {
    if (inputArquivo.files && inputArquivo.files[0]) {
        const arquivo = inputArquivo.files[0];
        
        const reader = new FileReader();

        // obrigatorio esse evento quando a leitura do arquivo for concluida com sucesso
        reader.onload = function (event) {

           imagemArquivo.src =  event.target.result;
                            
        };

reader.readAsDataURL(arquivo); // Isso irá ler o arquivo como um Data URL
    }
});


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


iconeMenos.addEventListener('click', function () {
    quantidadeProdutos--;
    if (quantidadeProdutos <= 0) {
        quantidadeProdutos = 0;
    }
    inputQuantidade.value = quantidadeProdutos;


})

iconeMais.addEventListener('click', function () {
    quantidadeProdutos++
    inputQuantidade.value = quantidadeProdutos;
});


setTimeout(() => {
    inputCusto.addEventListener('input', function () {

        // inputCusto.value = formataValorDeMoeda('pt-BR', 'BRL', inputCusto.value);
        // custoProduto = inputCusto.value;
        console.log(inputCusto.value)

    });


}, 100);


function formataValorDeMoeda(lingua, paisOrigem, valor) {
    // Formata como moeda usando o formato específico para o Brasil

    // Verifica se o valor é um dado do tipo double ou int
    if (!isNaN(valor)) {
        const formatoMoeda = new Intl.NumberFormat(lingua, {
            style: 'currency',
            currency: paisOrigem,
        });
        console.log(formatoMoeda.format(valor));

        return formatoMoeda.format(valor);

    }

    return 0;
}






function removeSimboloMoeda(valor) {

    // Substituir o símbolo de moeda por uma string vazia
    // pode haver espaços vazios ai o trim remove da String
    let valorSemSimbolo = valor.replace('R$', '').trim();
    return valorSemSimbolo;


}

function removeVirgulaDeMoedas(valor) {
    let moeda = removeSimboloMoeda(valor);
    let moedaSemVirgula = moeda.replace(',', '.');

    return moedaSemVirgula;

}

console.log(removeVirgulaDeMoedas("R$ 700.000.000,00"));

formataValorDeMoeda('pt-BR', 'BRL', "20000");