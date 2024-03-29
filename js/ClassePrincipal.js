import Produto from "./Produto.js";
import ControladorAcaoUsuario from "./ControladorAcaoUsuario.js";
import ValidadorDeProduto from "./ValidadorDeProduto.js"
import ValidadorPalavras from "./ValidadorPalavras.js";

const botaoAdicionarCriarProduto = document.querySelector('.bloco-flutuante-venda__botao-adicionar');
const botaoAdicionarProduto = document.querySelector('.cabecalho__btn--despesa');
const blocoFlutunte = document.querySelector('.bloco-funtutante-venda');
const telaTrasparente = document.querySelector('.overlay');
const botaoFechar = document.querySelector('.botao-fechar-js');
const imagemCarregada = document.querySelector('.capiturar-produto');
const inputRecarregarImagem = document.getElementById('bloco-flutuante-venda__bloco-imagem-subbloco-texto__file-img');
const produto = new Produto();
let imagemProduto = '';


const nomeProdutoInput = document.querySelector('.bloco-flutuante-venda__produto-input');
const controladorAcaoUsuario = new ControladorAcaoUsuario();
controladorAcaoUsuario.abreJanelaCadastroProduto(blocoFlutunte, telaTrasparente, botaoAdicionarProduto);
controladorAcaoUsuario.fechaJanelaCadastroProduto(blocoFlutunte, telaTrasparente, botaoFechar)
controladorAcaoUsuario.selecionaImagemProduto(imagemCarregada);
controladorAcaoUsuario.atualizaImagem(imagemCarregada);
controladorAcaoUsuario.recarregarImagem(inputRecarregarImagem);
controladorAcaoUsuario.abrirMenu();

const validadorPalavras = new ValidadorPalavras();
       
validadorPalavras.exibeMensagemErro(nomeProdutoInput);
validadorPalavras.removeSinalizadorVermelho(nomeProdutoInput);

controladorAcaoUsuario.criadorDeProduto( botaoAdicionarCriarProduto, function () {
 
       
        
        imagemProduto = localStorage.getItem('imagem');
       
    

})
//  novaImagemSrc = controladorAcaoUsuario.getImagemProduto();

// const validadorDeProduto = new ValidadorDeProduto();
// validadorDeProduto.setImagemSrc(novaImagemSrc);
// validadorDeProduto.setNome(nome);
// validadorDeProduto.setCodigoBarras(codigoBarras);

// controladorAcaoUsuario.adicionaQuantidade();
// controladorAcaoUsuario.removeQuantidade();

// validadorDeProduto.setCustoUnitario(custoUnitario);
// validadorDeProduto.setPreco(precoProduto);
// validadorDeProduto.setDescricao(descricaoProduto);

// produto = validadorDeProduto.getDadosProduto();
// controladorAcaoUsuario.criarProduto(produto)

// document.addEventListener('click' , function(evento) {
//    const quadradoOpcoesImagem = document.querySelector('.bloco-flutuante-venda__bloco-imagem-subbloco');
//    const iconeLapis = document.querySelector('.bloco-flutuante-venda__bloco-imagem-icone');
//    const alvo = evento.target;
    
//    if(iconeLapis.contains(alvo)) {
//        quadradoOpcoesImagem.style.display = 'block';
//    }

//    if(quadradoOpcoesImagem.contains(alvo)) {
//        quadradoOpcoesImagem.style.visibility = 'hidden';
      

//    }
// })

