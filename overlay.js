

const overlay = document.querySelector(".overlay");
const blocoFlutunte = document.querySelector(".bloco-funtutante-venda");
const botaoAdicionar = document.getElementById('cabecalho__btn--despesa-js');
const botaoFechar = document.querySelector(".botao-fechar-js");
const iconeMenos = document.querySelector(".icone-menos-js");
const iconeMais = document.querySelector(".icone-mais-js")
const inputQuantidade = document.querySelector('.bloco-flutuante-venda__quantidade__input');
const inputCusto = document.querySelector('.bloco-flutuante-venda__custo__input');
const inputArquivo = document.querySelector('.capiturar-produto');
const imagemArquivo = document.getElementById('imagem-arquivo');
const labelEscolhaArquivo = document.getElementById('label-arquivo');
const inputNomeProduto = document.querySelector('.bloco-flutuante-venda__produto-input');
const inputCodigoBarras = document.querySelector('.bloco-flutuante-venda__codigo-barras__input')
const inputPreco = document.querySelector('.bloco-flutuante-venda__custo__input');
const textAreaDescricaoProduto = document.querySelector('.bloco-flutuante-venda__descricao-produto');
const botaoAdicionarProduto = document.querySelector('.bloco-flutuante-venda__botao-adicionar');

let BlobImagem = {};

let quantidadeProdutos = 0;

const produto = {
    imagem: '',
    nomeProduto: '',
    codigoBarras: '',
    quantidade: 0,
    custo: 0.00,
    preco: 0.00,
    descricao: ''

}




botaoAdicionarProduto.addEventListener('click', function () {
    produto.imagem = imagemArquivo;
    produto.nomeProduto = inputNomeProduto.value;
    produto.codigoBarras = inputCodigoBarras.value;
    produto.quantidade = inputQuantidade.value;
    produto.custo = removeSimboloMoeda(inputCusto.value);
    produto.preco = removeSimboloMoeda(inputPreco.value);
    produto.descricao = textAreaDescricaoProduto.value;

    // Exiba as informações do produto no console
    console.log('Imagem:', produto.imagem);
    console.log('Nome do produto:', produto.nomeProduto);
    console.log('Código de barras:', produto.codigoBarras);
    console.log('Quantidade:', produto.quantidade);
    console.log('Custo:', produto.custo);
    console.log('Preço:', produto.preco);
    console.log('Descrição:', produto.descricao);
    console.log('dados da imagem ' + BlobImagem.size  + ' bytes');





})

inputArquivo.addEventListener('change', function (event) {
    if (inputArquivo.files && inputArquivo.files[0]) {
        const arquivo = inputArquivo.files[0];

        const reader = new FileReader();
        // o contexto le o arquivo como um caminho  url
        reader.readAsDataURL(arquivo);

        reader.onload = function (event) {
            imagemArquivo.src = event.target.result;

        }

        const reader2 = new FileReader();
        // o contexto le o arquivo como um array de buffer
        reader2.readAsArrayBuffer(arquivo);
        reader2.onload = function (event) {

            const arrayBuffer = event.target.result;
            BlobImagem = new Blob([arrayBuffer], { type: arquivo.type })
            console.log(BlobImagem);



        }




    }
    // se tem imagem
    if (imagemArquivo) {
        imagemArquivo.style.display = 'block'
        labelEscolhaArquivo.style.display = 'none';



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
    inputQuantidade.value--;

    if (inputQuantidade.value <= 0) {
        inputQuantidade.value = 0;
    }

})

iconeMais.addEventListener('click', function () {
    quantidadeProdutos++
    inputQuantidade.value++;


    console.log(inputQuantidade.value);




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