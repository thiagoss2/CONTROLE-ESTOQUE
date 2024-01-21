const arquivoProduto = document.querySelector(".capiturar-produto")
const boatoAdicionar = document.querySelector(".adicionar-produto-btn");

let arquivoSelecionado;
let produtos = [];

arquivoProduto.addEventListener("change", function () {
        arquivoSelecionado = arquivoProduto.files[0];

})
boatoAdicionar.addEventListener("click", function () {
        if (arquivoSelecionado) {
                produtos.push(arquivoSelecionado);
                console.log(produtos);
        } else {
                console.log("nenhum arquivo adicionado");
        }
});



