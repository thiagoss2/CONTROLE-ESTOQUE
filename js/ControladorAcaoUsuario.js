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
    const botaoLapis = document.querySelector('.bloco-flutuante-venda__bloco-imagem-icone')
<<<<<<< HEAD
    const blocoFlutuanteImagemOpcoes = document.querySelector('.bloco-flutuante-venda__bloco-imagem-subbloco');
    const barraLateralDireitaFlutuante = document.querySelector('.bloco-funtutante-venda');
    const barraLateralDireitaFlutuanteNodeList = barraLateralDireitaFlutuante.querySelectorAll('*');
    const barraLateralDireitaFlutuanteElementosLista = Array.from(barraLateralDireitaFlutuanteNodeList);
    const blocoFlutuanteImagemOpcoesNodeList = blocoFlutuanteImagemOpcoes.querySelectorAll('*');
    const blocoFlutuanteImagemOpcoesLista = Array.from(blocoFlutuanteImagemOpcoesNodeList);
    const barraLateralDireitaFlutuanteElementosListaz

    document.addEventListener('click', function (evento) {
      blocoFlutuanteImagemOpcoesLista.push(blocoFlutuanteImagemOpcoes);
      barraLateralDireitaFlutuanteElementosListaFiltrada =
           removeElementos(barraLateralDireitaFlutuanteElementosLista ,blocoFlutuanteImagemOpcoesLista )
       

      console.log(evento.target)
      for (let indice = 0; indice < blocoFlutuanteImagemOpcoesLista.length; indice++) {
        if (evento.target != blocoFlutuanteImagemOpcoesLista[indice]) {
          blocoFlutuanteImagemOpcoes.style.display = 'none';
        }
      } if (evento.target == botaoLapis) {
        blocoFlutuanteImagemOpcoes.style.display = 'block';
      }
    })
  }
  removeElementos(barraLateralDireitaFlutuante, blocoFlutuanteImagemOpcoes) {
    for (let indice = 0; indice < barraLateralDireitaFlutuante.length; indice++) {
      if (barraLateralDireitaFlutuante[indice] === blocoFlutuanteImagemOpcoes[indice]) {
        barraLateralDireitaFlutuante.splice(indice, blocoFlutuanteImagemOpcoes.length);
      }
    }
    return barraLateralDireitaFlutuante
=======
    const blocoFlutuanteSubbloco = document.querySelector('.bloco-flutuante-venda__bloco-imagem-subbloco');
    const blocoFlutuantePrincipal = document.querySelector('.bloco-funtutante-venda');
    const elementosFilhos = blocoFlutuantePrincipal.querySelectorAll('*');
    const blocoFlutuantePrincipalListaSemNode = Array.from(elementosFilhos);
    const blocoFlutuanteSubBlocoLista = blocoFlutuanteSubbloco.querySelectorAll('*');
    const blocoFlutuanteSubBlocoListaSemNode = Array.from(blocoFlutuanteSubBlocoLista);

    blocoFlutuanteSubBlocoListaSemNode.push(blocoFlutuanteSubbloco);

    //   let novoElementos = blocoFlutuantePrincipalListaSemNode.filter(elementos => elementos != botaoLapis || elementos != blocoFlutuanteSubbloco);

    document.addEventListener('click', function (evento) {
      for (let elemento of novoElementos) {
        if (evento.target == elemento) {
          console.log('voce clicou no elemnto')
          blocoFlutuanteSubbloco.style.display = 'none';
        }
      } if (evento.target == botaoLapis) {
        blocoFlutuanteSubbloco.style.display = 'block';
      }
    })
  }

  removeElementos(blocoFlutuantePrincipalListaSemNode, blocoFlutuanteSubBlocoListaSemNode) {

    for (let indice = 0; indice <
      blocoFlutuantePrincipalListaSemNode.length; indice++) {
      if (blocoFlutuantePrincipalListaSemNode[indice]
        == blocoFlutuanteSubBlocoListaSemNode[indice]) {
        blocoFlutuantePrincipalListaSemNode.splice(indice, 1);
      }
    }
    return blocoFlutuantePrincipalListaSemNode
>>>>>>> 53d588ba4108c868cf04bf938d0e07010d17976b
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

