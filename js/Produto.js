export default class Produto {
    constructor(imagemSrc, nome, codigoBarras,
        quantidadeProdutos, custoUnitario, preco, descricao) {

       this.imagemSrc = imagemSrc;
       this.nome = nome;
       this.codigoBarras = codigoBarras;
       this.quantidadeProdutos = quantidadeProdutos;
       this.custoUnitario = custoUnitario;
       this.preco = preco;
       this.descricao = descricao;
    }

    getImagemSrc() {
        return this.imagemSrc;
    }

    getNome() {
        return this.nome;
    }

    getCodigoBarras() {
        return this.codigoBarras;
    }

    getQuantidadeProdutos() {
        return this.quantidadeProdutos
    }

    getCustoUnitario() {
        return this.custoUnitario;
    }

    getPreco() {
        return this.preco;
    }

    getDescricao() {
        return this.descricao;
    }
    
}


