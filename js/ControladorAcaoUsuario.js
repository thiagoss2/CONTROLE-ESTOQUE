/*
  Classe responsavel por controlar a ação do usuario
  como clicar em algum ponto da tela abrir um menu
  atualizar produto e coisas assim
*/
export default class ControladorAcaoUsuario {
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
          localStorage.setItem('imagem', imagem);


          // ATUALIZA O CARREGAMENTO DA IMAGEM
          if (imagemCarregada != null) {
            const blocoImagem = document.querySelector('.bloco-flutuante-venda__arquivo');
            const containerImagem = document.querySelector('.bloco-flutuante-venda__bloco-imagem');
            const img = containerImagem.querySelector('img');
            const iconeLapis = document.querySelector('.bloco-flutuante-venda__bloco-imagem-icone');

            iconeLapis.style.display = 'block'
            blocoImagem.style.display = 'none';
            img.src = localStorage.getItem('imagem')
            img.style.display = 'block';

          }
        }
      }
    });

  }

  atualizaImagem(imagemCarregada) {
    imagemCarregada.addEventListener('change', function () {

    })
  }

  abrirMenu() {
    const botaoLapis = document.querySelector('.bloco-flutuante-venda__bloco-imagem-icone');
    const blocoFlutuante = document.querySelector('.bloco-flutuante-venda__barra-scrrol');
    const blocoFlutuantteSubbloco = document.querySelector('.bloco-flutuante-venda__bloco-imagem-subbloco');
    const visibilidade = blocoFlutuantteSubbloco.getClientRects();


    document.addEventListener('click', function (evento) {
      console.log(evento.target)
      // consegui
       if(evento.target == blocoFlutuante) {
          console.log('encontrou o elemento')
          blocoFlutuantteSubbloco.style.display = 'none';
       }
      const alvo = evento.target;
      if (botaoLapis.contains(alvo)) {
        console.log('clicado')
        blocoFlutuantteSubbloco.style.display = 'block';
        // a logica deve acontecer depois que o elemento ficar visivel parao usuario
        const visibilidade = blocoFlutuantteSubbloco.getClientRects();
        if (visibilidade.length > 0) {
          blocoFlutuantteSubbloco.addEventListener('click', function (evento2) {
             if(!evento2.target.contains(evento2.target)) {
                console.log('contem o elemento')
             }
          })
        }
      }
    })
  }

  fecharMenu() {

    const blocoFlutuante2 = document.querySelector('.bloco-flutuante-venda__bloco-imagem-subbloco');
    const blocoMestre = document.querySelector('.bloco-funtutante-venda');
    blocoMestre.addEventListener('click', function (event) {

      blocoFlutuante2.style.display = 'none';
      console.log('teste')
    })
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

  criadorDeProduto(botaoCriarProduto, callback) {
    botaoCriarProduto.addEventListener('click', function () {
      callback();
    })
  }

}

