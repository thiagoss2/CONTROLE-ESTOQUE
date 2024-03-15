
/*
   O problema provavelmente está relacionado ao escopo do this dentro da função de callback.
    Quando você chama this.setImagem(imagem); dentro da função onload do FileReader, 
    o this não se refere mais à instância da classe ControladorAcaoUsuario, e sim ao objeto FileReader.

   Para corrigir isso, você pode armazenar uma referência ao this da classe antes de entrar na função
    de callback. Veja como ajustar o código:
*/


selecionaImagemProduto(imagemCarregada) {
    let self = this; // Armazenando uma referência à instância da classe

    imagemCarregada.addEventListener('change', function (event) {
        let imagem = '';
        // se o arquivo foi carregado com sucesso
        if (imagemCarregada.files[0] && imagemCarregada.files) {
            const arquivo = imagemCarregada.files[0];
            const leitor = new FileReader();

            leitor.readAsDataURL(arquivo);
            leitor.onload = function (event) {
                imagem = event.target.result;
                // Agora podemos usar a referência self para chamar setImagem
                self.setImagem(imagem);
            }
        }
    });
}
