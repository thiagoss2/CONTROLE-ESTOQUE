/*
  Classe responsavel por controlar a ação do usuario
  como clicar em algum ponto da tela abrir um menu
  atualizar produto e coisas assim
*/
export default class ControladorAcaoUsuario {
  #imagemSrc = '';



  // abre a tela de cadastro de produtos
  // gerencia os botoes adicionar quantidade e remover quanrtidade
  adicionaQuantidade(quantidade) { }
  subtraiQuantidade(quantidade) { }

  abreJanelaCadastroProduto(blocoFlutuante, telaCinza, botaoAdicionarProdutos) {
    botaoAdicionarProdutos.addEventListener('click', function () {
      blocoFlutuante.style.display = 'block';
      telaCinza.style.display = 'block';
    });


  }

  fechaJanelaCadastroProduto(blocoFlutuante, telaCinza, botaoFechar) {

    botaoFechar.addEventListener('click', function () {
      blocoFlutuante.style.display = 'none';
      telaCinza.style.display = 'none';

    })

    telaCinza.addEventListener('click', function () {
      blocoFlutuante.style.display = 'none';
      telaCinza.style.display = 'none';
    })

  }
  selecionaImagemProduto(imagemCarregada) {

    imagemCarregada.addEventListener('change', function (event) {
      let imagem = '';
      // se o arquivo foi carregado com sucesso
      if (imagemCarregada.files[0] && imagemCarregada.files) {
        const arquivo = imagemCarregada.files[0];
        const leitor = new FileReader();

        leitor.readAsDataURL(arquivo);
        leitor.onload = function (event) {
          imagem = event.target.result;
          // esse codigo so terminara quando o callback for chamado
          localStorage.setItem('imagem' , imagem);
        }
      }
    });
  
  }



  criaProduto(produto) {
    const containerLista = document.querySelector('.pesquisa-produto-produto__lista');

    const elementoLi = document.createElement('li');
    elementoLi.classList.add('pesquisa-produto-produto__item-lista');

    const elementoLink = document.createElement('pesquisa-produto-produto__link');
    elementoLink.classList.add('pesquisa-produto-produto__link');
    elementoLink.href = '#';

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
    quantidadeProduto.textContent = '' + ' disponiveis';


    elementoLink.appendChild(elementoImg);
    elementoLink.appendChild(preco);
    elementoLink.appendChild(custo);
    elementoLink.appendChild(nomeProduto);
    elementoLink.appendChild(quantidadeProduto);

    elementoLi.appendChild(elementoLink);
    containerLista.appendChild(elementoLi);

  }

  criadorDeProduto(botaoCriarProduto , callback ) {    
     botaoCriarProduto.addEventListener('click', function() {
         callback();      
     })
}

}

