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
const inputPreco = document.querySelector('.bloco-flutuante-venda__preco__input');
const textAreaDescricaoProduto = document.querySelector('.bloco-flutuante-venda__descricao-produto');
const botaoAdicionarProduto = document.querySelector('.bloco-flutuante-venda__botao-adicionar');
const produtoElementoContainer = document.querySelector('.pesquisa-produto-produto__lista');
const quantidadeReferencias = document.querySelector('.total-referencias');
const custoPrecoProduto = document.getElementById('js-custo-produto');

let armazemProdutos = [];
let quantidadeProdutos = 0;
let custoProduto = 0;
let produto = {};

let acumulaValoresCusto = [];


// async function verificarElementos() {
//     const listaUl = document.querySelector(".pesquisa-produto-produto__lista");
//     const numElementos = listaUl.querySelectorAll("li").length;

//     if (numElementos > 0) {
//       for(let i = 0 ; i < numElementos.length; i++) {
//         console.log('fazendo a leitura ' +  i);

//       }
//       console.log("Executando código porque há elementos na lista!");
//       console.log('quantidade de elementos ' + numElementos);
//     } else {
//       console.log("Nenhum elemento na lista, aguardando...");
//       await new Promise(resolve => setTimeout(resolve, 100)); // Aguarda 100ms
//       verificarElementos(); // Chama a função novamente para verificar
//     }
//   }

//   verificarElementos();



botaoAdicionarProduto.addEventListener('click', function () {


    criarDadosProduto(produto);
    const itemDaLista = criarItemLista(produto);
    insereProdutoNaTela(itemDaLista);
    adicionaCustoDoProduto(produtoElementoContainer);
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
    } if (imagemArquivo) {
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

    produtoElementoContainer.appendChild(produto);
}

function criarDadosProduto(produto) {
    const mensagemErro = 
              document.querySelector('.bloco-flutuante-venda__mensagem-erro-imagem');
    const mensagemErroNome = 
              document.querySelector('.bloco-flutuante-venda__mensagem-erro');
    
    const mensagemErroCodigoBarras =
              document.querySelector('.bloco-flutuante-venda__mensagem-erro-codigo-barras');
   
    console.log(mensagemErroCodigoBarras)

    if (imagemArquivo.src == "http://127.0.0.1:5500/produtos.html" || imagemArquivo == null ||
        imagemArquivo.src == '') {
        mensagemErro.style.display = "block";  
        mensagemErro.textContent = 'Este campo è obrigatorio'

    } else {
        mensagemErro.style.display = 'none';
        produto.imagem = imagemArquivo.src;
    } if(inputNomeProduto.value == ''  ) {
        
         mensagemErroNome.style.display = 'block';     
         mensagemErroNome.textContent = 'Digite o nome do produto';    
    } else {
       mensagemErroNome.style.display = 'none';
       produto.nome = inputNomeProduto.value;
    } if(inputCodigoBarras == '' || inputCodigoBarras == null) {
           mensagemErroCodigoBarras.textContent = 'Digite o codigo de barras'
           mensagemErro.style.display = 'block';
    }




    
   
    produto.codigoBarras = inputCodigoBarras.value;
    produto.quantidade = inputQuantidade.value;
    produto.custo = removeSimboloMoeda(inputCusto.value);
    produto.preco = removeSimboloMoeda(inputPreco.value);
    produto.descricao = textAreaDescricaoProduto.value;

    console.log(produto);
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

    preco.textContent = formataValorDeMoeda('pt-BR', 'BRL', produto.preco);

    const nome = document.createElement('p');
    nome.classList.add('pesquisa-produto-produto__nome');
    nome.textContent = produto.nome;

    const custo = document.createElement('p');
    custo.classList.add('pesquisa-produto-produto__custo');
    custo.textContent = formataValorDeMoeda('pt-BR', 'BRL', produto.custo);

    const quantidade = document.createElement('p');
    quantidade.classList.add('pesquisa-produto-produto__quantidade');
    quantidade.textContent = `${produto.quantidade} disponiveis`;

    // Adicione os elementos filho ao link
    link.appendChild(imagem);
    link.appendChild(preco);
    link.appendChild(custo);
    link.appendChild(nome);
    link.appendChild(quantidade);

    // Adicione o link ao elemento `li`
    itemLista.appendChild(link);

    adicionaEventoNoProduto(itemLista);


    return itemLista;
}

function adicionaEventoNoProduto(itemLista) {

    itemLista.addEventListener('click', function () {
        console.log('teste')
    })
}

function adicionaCustoDoProduto(listaDeProdutos) {
    let quantidadeProdutos = listaDeProdutos.children.length;
    let produtos = listaDeProdutos.querySelectorAll('li');

    let somaValores = 0;

    if (quantidadeProdutos > 0) {

        for (let index = 0; index < produtos.length; index++) {
            const itemLista = listaDeProdutos.querySelector('li');
            let custoProduto = itemLista.
                querySelector('.pesquisa-produto-produto__custo').textContent;
            let custoProdutoSemSimbolo = removeSimboloMoeda(custoProduto);
            let custoProdutoSemVirgula = removeVirgulaDeMoedas(custoProdutoSemSimbolo);

            somaValores += parseFloat(custoProdutoSemVirgula);
            console.log(somaValores)
        }
    }

    console.log(acumulaValoresCusto);
}



function formataValorDeMoeda(lingua, paisOrigem, valor) {
    if (!isNaN(valor)) {
        const formatoMoeda = new Intl.NumberFormat(lingua, {
            style: 'currency',
            currency: paisOrigem,
        });
        return formatoMoeda.format(valor);
    }
    return 0;
}

function removeSimboloMoeda(valor) {
    let valorSemSimbolo = valor.replace('R$', '').trim();
    return valorSemSimbolo;
}

function removeVirgulaDeMoedas(valor) {
    let moeda = removeSimboloMoeda(valor);
    let moedaSemVirgula = moeda.replace(',', '.');
    return moedaSemVirgula;
}


