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
const produtoElementoContainer = document.querySelector('.pesquisa-produto-produto__lista');



let quantidadeProdutos = 0;
let custoProduto = 0;
let produto = {};



botaoAdicionarProduto.addEventListener('click', function () {
    criarDadosProduto(produto);
    validaDados(produto);
    console.log(produto);
    const itemDaLista = criarItemLista(produto);
    insereProdutoNaTela(itemDaLista);
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
    zerarValores();

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

function zerarValores() {


    imagemArquivo.src = ''

    labelEscolhaArquivo.style.display = 'block';
    imagemArquivo.style.display = 'none';
    inputNomeProduto.value = '';
    inputCodigoBarras.value = 0;
    inputCusto.value = 0;
    inputPreco.value = 0
    textAreaDescricaoProduto.textContent = '';
    inputQuantidade.value = 0;

    

}

function insereProdutoNaTela(produto) {
    console.log(produto)

    produtoElementoContainer.appendChild(produto);
}

function criarDadosProduto(produto) {



    produto.imagem = imagemArquivo.src;
    produto.nome = inputNomeProduto.value;
    produto.codigoBarras = inputCodigoBarras.value;
    produto.quantidade = inputQuantidade.value;
    produto.custo = removeSimboloMoeda(inputCusto.value);
    produto.preco = removeSimboloMoeda(inputPreco.value);
    produto.descricao = textAreaDescricaoProduto.value;


    // Exiba as informações do produto no console
    console.log('Nome do produto:', produto.nome);
    console.log('Imagem do produto:', produto.imagem);
    console.log('Código de barras:', produto.codigoBarras);
    console.log('Quantidade:', produto.quantidade);
    console.log('Custo:', produto.custo);
    console.log('Preço:', produto.preco);
    console.log('Descrição:', produto.descricao);

}


function validaDados(produto) {

    const mensagemErroNomeProdudo = document.querySelector('.bloco-flutuante-venda__mensagem-erro');

    if (produto.nome == '') {

        mensagemErroNomeProdudo.textContent = 'Este campo é obrigadorio';

    }

}

function criarItemLista(produto) {
    const itemLista = document.createElement('li');
    itemLista.classList.add('pesquisa-produto-produto__item-lista');

    const link = document.createElement('a');
    link.classList.add('pesquisa-produto-produto__link');
    link.href = '#'; // Insira o link do produto aqui

    const imagem = document.createElement('img');
    imagem.classList.add('pesquisa-produto-produto__imagem');
    imagem.src = produto.imagem; // Insira a URL da imagem do produto aqui

    const preco = document.createElement('h3');
    preco.classList.add('pesquisa-produto-produto__preco');
    preco.textContent = `R$ ${produto.preco}`;

    const nome = document.createElement('p');
    nome.classList.add('pesquisa-produto-produto__nome');
    nome.textContent = produto.nome;

    const quantidade = document.createElement('p');
    quantidade.classList.add('pesquisa-produto-produto__quantidade');
    quantidade.textContent = `${produto.quantidade} disponiveis`;

    // Adicione os elementos filho ao link
    link.appendChild(imagem);
    link.appendChild(preco);
    link.appendChild(nome);
    link.appendChild(quantidade);

    // Adicione o link ao elemento `li`
    itemLista.appendChild(link);

    return itemLista;
}

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


