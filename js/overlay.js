



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
    console.log(inputNomeProduto.value);



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

        console.log(imagemArquivo.src)
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


function formataValorDeMoeda(valor) {

    if (isNaN(valor) || undefined) {
        valor = '';
    }

    // let novoValor = parseFloat(valor);

    const formatoMoeda = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    // Formata o valor e retorna a string formatada
    return formatoMoeda.format(valor);
}

inputCusto.addEventListener('change', (event) => {

    let valorDigitado = event.target.value;

     let tempoDigitado = inputCusto.value.length;

     if(inputCusto.value.length > 0) {
        inputCusto.value = formataValorDeMoeda(valorDigitado);
    }

  })



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
        document.querySelector('.bloco-flutuante-venda__mensagem-erro-codigo-barras   ');

    const mensagemErroQuantidade =
        document.querySelector('.bloco-flutuante-venda__mensagem-erro-quantidade');

    if (imagemArquivo.src == "http://127.0.0.1:5500/produtos.html" || imagemArquivo == null ||
        imagemArquivo.src == '') {
        mensagemErro.style.display = "block";
        mensagemErro.textContent = 'Selecione a imagem'

    } else {
        mensagemErro.style.display = 'none';
        produto.imagem = imagemArquivo.src;
        console.log(produto.imagem);
    } if (inputNomeProduto.value == '') {

        mensagemErroNome.style.display = 'block';
        mensagemErroNome.textContent = 'Digite o nome do produto';
    } else {
        mensagemErroNome.style.display = 'none';
        produto.nome = inputNomeProduto.value;
    } if (inputCodigoBarras.value == '' || inputCodigoBarras.value == null) {
        mensagemErroCodigoBarras.textContent = 'Digite o codigo de barras'
        mensagemErroCodigoBarras.style.display = 'block';
    } else {
        produto.codigoBarras = inputCodigoBarras.value;
        mensagemErroCodigoBarras.style.display = 'none';

    } if (inputQuantidade.value == 0) {
        mensagemErroQuantidade.textContent = 'Selecione a Quantidade';
        mensagemErroQuantidade.style.display = 'block';

    } else {
        mensagemErroQuantidade.style.display = 'none';
        produto.quantidade = inputQuantidade.value;
    }

    if (inputNomeProduto.value.length > 0 &&
        imagemArquivo.src != 'http://127.0.0.1:5500/produtos.html' &&
        inputCodigoBarras.value.length > 0 && inputQuantidade.value > 0
    ) {

        const itemDaLista = criarItemLista(produto);
        insereProdutoNaTela(itemDaLista);
        // adicionaCustoDoProduto(produtoElementoContainer);
    }




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

function buscarProdutos (nomeBuscado)   {
    const containerProdutos = document.querySelector('.pesquisa-produto-produto__lista');
    let quantidadeProdutos = containerProdutos.children.length; 
    let nomesProdutos = []
    if(quantidadeProdutos > 0) {
      
      const produtos = containerProdutos.querySelectorAll('.pesquisa-produto-produto__item-lista');
       for(let indice = 0 ; indice < produtos.length; indice++) {
        let nomes = produtos[indice].querySelector('.pesquisa-produto-produto__nome').textContent;
        nomesProdutos.push(nomes); 
         produtos[indice].style.display = 'none'; 
         produtos[indice].style.border = '1px solid black';
         if( nomeBuscado.length >= 0 || nomeBuscado != '') {
           produtos[indice].style.display = 'block'; 
         }if(nomeBuscado.includes(nomesProdutos[indice])) {
                 let produto = produtos[indice];
                 produto.style.display = 'block';
                 produto.style.border = '2px solid red'
                 console.log(produto); 
                 break;   
         } 
         
       }
    }
       
}
let barraPesquisa = document.querySelector('.pesquisa-produto__input');
barraPesquisa.addEventListener('keyup' , function () {
    buscarProdutos(barraPesquisa.value);
});


function removeSimboloMoeda(valor) {    
    let valorSemSimbolo = valor.replace('R$', '').trim();
    return valorSemSimbolo;
}

// 


function funcaoTeste(a) {

    for(let i = 1 ; i == a ; i++) {

      console.log('numero de vezes' + i);
    }

}
 
testarMultiplo();

function testarMultiplo () {
    

const MULTIPLO = 12;
let result = 0;
let  acumulador = 0


for( let indice = 1 ; indice <= 84 ; indice++)  {
         result = indice * MULTIPLO;
         acumulador += result;

       if( acumulador >= 60  &&  acumulador <= 84 ) {
          console.log(acumulador);           
       }
  }


}
funcaoTeste(5);

//   VERIFICAR A ORIENTAÇÃO A OBJETOS

// class Produto {
//     constructor(imagem, nome, codigoBarras, quantidade, custo, preco, descricao) {
//       this.imagem = imagem;
//       this.nome = nome;
//       this.codigoBarras = codigoBarras;
//       this.quantidade = quantidade;
//       this.custo = custo;
//       this.preco = preco;
//       this.descricao = descricao;
//     }
  
//     formatarCusto() {
//       // ...
//     }
  
//     formatarPreco() {
//       // ...
//     }
//   }
  
//   class ManipuladorDOM {
//     constructor() {
//       // ...
//     }
  
//     obterElemento(seletor) {
//       // ...
//     }
  
//     inserirElemento(elemento, container) {
//       // ...
//     }
  
//     removerElemento(elemento) {
//       // ...
//     }
  
//     adicionarEvento(elemento, evento, callback) {
//       // ...
//     }
//   }

  
  
//   function criarItemLista(produto) {
//     // ...
//   }
  
//   function atualizarCustoTotal() {
//     // ...
//   }
  
//   // ...
  
//   const manipuladorDOM = new ManipuladorDOM();
  
//   const produtos = [
//     new Produto(...),
//     new Produto(...),
//     // ...
//   ];
  
//   produtos.forEach((produto) => {
//     const itemLista = criarItemLista(produto);
//     manipuladorDOM.inserirElemento(itemLista, listaProdutos);
//   });
  
//   manipuladorDOM.adicionarEvento(botaoAdicionar, 'click', () => {
//     // ...
//   });
  
//   class ValidadorDeProduto {

//   }

// const validadorDeProduto = new ValidadorDeProduto();
// validadorDeProduto.validarProdutos(produto);

// validadorDeProduto.validarProdutos(produto);

// const criadorDeProduto = new CriadorDeProduto(produto , );

