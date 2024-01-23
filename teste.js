
let inputArquivo = document.querySelector(".capiturar-produto");
console.log(inputArquivo)

inputArquivo.addEventListener('change', function() {
    let imagem = inputArquivo.files[0];
    if (imagem) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let imgElement = document.createElement("img");
            imgElement.src = e.target.result;
            document.body.appendChild(imgElement);
        }
        reader.readAsDataURL(imagem);
    }
});


// document.addEventListener('DOMContentLoaded', function () {
//     const inputArquivo = document.querySelector('.capiturar-produto');

 

//     // Adiciona um ouvinte de evento 'change' ao input do tipo file
//     inputArquivo.addEventListener('change', function () {
//         // Obtém o valor do input do tipo file (o arquivo selecionado)
//         const arquivoSelecionado = inputArquivo.files[0];

//         console.log(arquivoSelecionado)

//         // Verifica se um arquivo foi selecionado
//         if (arquivoSelecionado) {
//             console.log('Nome do arquivo:', arquivoSelecionado.name);
//             console.log('Tamanho do arquivo:', arquivoSelecionado.size, 'bytes');
//             console.log('Tipo do arquivo:', arquivoSelecionado.type);
//         } else {
//             console.log('Nenhum arquivo selecionado');
//         }
//     });
// });