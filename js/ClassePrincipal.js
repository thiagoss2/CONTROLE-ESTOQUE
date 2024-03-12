import Produto from "./Produto.js";
import ControladorAcaoUsuario from "./ControladorAcaoUsuario.js";

const botaoAdicionarProduto = document.querySelector('.cabecalho__btn--despesa');
const blocoFlutunte = document.querySelector('.bloco-funtutante-venda');
const telaTrasparente = document.querySelector('.overlay');
const botaoFechar = document.querySelector('.botao-fechar-js');
const imagemCarregada = document.querySelector('.capiturar-produto');


const produto = new Produto();
let imagemProduto = '';


const controladorAcaoUsuario = new ControladorAcaoUsuario();
controladorAcaoUsuario.abreJanelaCadastroProduto(blocoFlutunte, telaTrasparente, botaoAdicionarProduto);
controladorAcaoUsuario.fechaJanelaCadastroProduto(blocoFlutunte, telaTrasparente, botaoFechar);
controladorAcaoUsuario.selecionaImagemProduto(imagemCarregada);

if(controladorAcaoUsuario.imagemSrc != '') {
    imagemProduto = controladorAcaoUsuario.getImagemSrc();
    console.log(imagemProduto);
}

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



