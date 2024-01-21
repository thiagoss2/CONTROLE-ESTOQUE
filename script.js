const arquivoProduto = document.querySelector(".capiturar-produto")
const boatoAdicionar = document.querySelector(".adicionar-produto-btn");


let arquivoSelecionado;
let produtos = [];


arquivoProduto.addEventListener("change", function() {
     arquivoSelecionado = arquivoProduto.files[0];
     console.log(arquivoSelecionado);
})
boatoAdicionar.addEventListener("click" , function() {
        produtos.push(arquivoSelecionado);
        console.log(produtos);
});


