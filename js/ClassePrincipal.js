import Produto from "./Produto.js";
  import ControladorAcaoUsuario from "./ControladorAcaoUsuario.js";

const botaoAdicionarProduto = document.querySelector('.cabecalho__btn--despesa');
const blocoFlutunte = document.querySelector('.bloco-funtutante-venda');
const telaTrasparente = document.querySelector('.overlay');
const botaoFechar = document.querySelector('.botao-fechar-js')

const produto = new Produto();
let novaImagemSrc = '';

 const controladorAcaoUsuario = new ControladorAcaoUsuario();
 controladorAcaoUsuario.abreJanelaCadastroProduto(blocoFlutunte, telaTrasparente , botaoAdicionarProduto);
 controladorAcaoUsuario.fechaJanelaCadastroProduto(blocoFlutunte ,telaTrasparente ,botaoFechar);

 console.log(telaTrasparente)


// controladorAcaoUsuario.selecionaImagemProduto(imagemSrc);

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



