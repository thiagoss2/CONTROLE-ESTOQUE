class ManipuladorDOM {
  constructor() {
    const inputQuantidade = document.querySelector('.bloco-flutuante-venda__quantidade__input').value;
    const inputCusto = document.querySelector('.bloco-flutuante-venda__custo__input');
    const inputArquivo = document.querySelector('.capiturar-produto');
    const labelEscolhaArquivo = document.getElementById('label-arquivo');
    const inputNomeProduto = document.querySelector('.bloco-flutuante-venda__produto-input');
    const inputCodigoBarras = document.querySelector('.bloco-flutuante-venda__codigo-barras__input')
    const inputPreco = document.querySelector('.bloco-flutuante-venda__preco__input');
    const textAreaDescricaoProduto = document.querySelector('.bloco-flutuante-venda__descricao-produto');
    const custoPrecoProduto = document.getElementById('js-custo-produto');
    const produtoElementoContainer = document.querySelector('.pesquisa-produto-produto__lista');
    const quantidadeReferencias = document.querySelector('.total-referencias');

    const boato = document.querySelector('.bloco-flutuante-venda__botao-adicionar');

    botao.addEventListener('click', function() {
        console.log(inputQuantidadef.value);
    })
}