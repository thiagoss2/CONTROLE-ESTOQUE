/*
  Classe responsavel por controlar a ação do usuario
  como clicar em algum ponto da tela abrir um menu
  atualizar produto e coisas assim
*/
class ControladorAcaoUsuario {

  constructor() {

    const blocoFlutunte = document.querySelector(".bloco-funtutante-venda");
    const botaoAdicionar = document.getElementById('cabecalho__btn--despesa-js');
    const botaoFechar = document.querySelector(".botao-fechar-js");
    const iconeMenos = document.querySelector(".icone-menos-js");
    const iconeMais = document.querySelector(".icone-mais-js")
    const botaoAdicionarProduto = document.querySelector('.bloco-flutuante-venda__botao-adicionar');
    const imagemArquivo = document.getElementById('imagem-arquivo');
    const overlay = document.querySelector(".overlay");

    this.quantidade = quantidade;

  }

  // abre a tela de cadastro de produtos
  // gerencia os botoes adicionar quantidade e remover quanrtidade
  adicionaQuantidade(quantidade) {}
  subtraiQuantidade(quantidade) {}
  abreJanelaCadastroProduto(blocoFlutuante) {}
  selecionaImagemProduto(imagemProduto) {}
  criaProduto(produto) {
    const containerLista = document.querySelector('.pesquisa-produto-produto__lista');

    const elementoLi = document.createElement('li');
    elementoLi.classList.add('pesquisa-produto-produto__item-lista');
   
    const elementoLink = document.createElement('pesquisa-produto-produto__link');
    elementoLink.classList.add('pesquisa-produto-produto__link');
    elementoLink.href  = '#';

    const elementoImg = document.createElement('img');
    elementoImg.classList.add('pesquisa-produto-produto__imagem');
    elementoImg.src = '';

    const preco = document.createElement('h3');
    preco.classList.add('pesquisa-produto-produto__preco');
    preco.textContent = ''; // recebe a variavel 

    const custo = document.createElement('p');
    custo.classList.add('pesquisa-produto-produto__custo');
    custoProduto.textContent = '';

    const nomeProduto = document.createElement('p');
    nomeProduto.classList.add('pesquisa-produto-produto__nome');
    nomeProduto.textContent = '';

    const quantidadeProduto = document.createElement('pesquisa-produto-produto__quantidade');
    quantidadeProduto.classList.add('pesquisa-produto-produto__quantidade');
    quantidadeProduto.textContent = '' + ' disponiveis' ;


    elementoLink.appendChild(elementoImg);
    elementoLink.appendChild(preco);
    elementoLink.appendChild(custo);
    elementoLink.appendChild(nomeProduto);
    elementoLink.appendChild(quantidadeProduto);

   elementoLi.appendChild(elementoLink);
   containerLista.appendChild(elementoLi);

  }

}


const produto = new produto();
let novaImagemSrc = '';

const controladorAcaoUsuario = new ControladorAcaoUsuario();
controladorAcaoUsuario.abreJanelaCadastroProduto();
controladorAcaoUsuario.selecionaImagemProduto(imagemSrc);

 novaImagemSrc = controladorAcaoUsuario.getImagemProduto();

const validadorDeProduto = new ValidadorDeProduto();
validadorDeProduto.setImagemSrc(novaImagemSrc);
validadorDeProduto.setNome(nome);
validadorDeProduto.setCodigoBarras(codigoBarras);

controladorAcaoUsuario.adicionaQuantidade();
controladorAcaoUsuario.removeQuantidade();

validadorDeProduto.setCustoUnitario(custoUnitario);
validadorDeProduto.setPreco(precoProduto);
validadorDeProduto.setDescricao(descricaoProduto);

produto = validadorDeProduto.getDadosProduto();
controladorAcaoUsuario.criarProduto(produto)



