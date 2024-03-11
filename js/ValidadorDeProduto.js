class ValidadorDeProduto {
    
    
    
    constructor() {

     
    const imagemSrc = document.querySelector('.capiturar-produto');
    const nomeProdutoInput = document.querySelector('bloco-flutuante-venda__produto-input estilos__input');
    const codigoBarrasProduto = document.querySelector('.bloco-flutuante-venda__input-bloco bloco-flutuante-venda__input-bloco--codigo-barras');
    const quantidadeProduto = document.querySelector('.bloco-flutuante-venda__input-bloco bloco-flutuante-venda__input-bloco--quantidade')
    const custoProduto = document.querySelector('.bloco-flutuante-venda__custo__input estilos__input');
    const precoProduto = document.querySelector('.bloco-flutuante-venda__preco__input estilos__input')
    const descricaoProduto = document.querySelector('.bloco-flutuante-venda__descricao-produto estilos__textarea');
    

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
}