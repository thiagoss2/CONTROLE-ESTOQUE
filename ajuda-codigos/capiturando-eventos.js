/*
1
Para fazer com que o quadrado feche quando você clicar fora dele, você pode usar a técnica de escuta de eventos com JavaScript. Essa técnica permite que você defina uma função para ser executada quando um evento específico ocorre, como um clique.

No caso do seu quadrado, você pode definir um escutador de evento para o evento click no documento. Esse escutador de evento verificará se o clique ocorreu fora do quadrado. Se sim, a função fechará o quadrado.

Etapas para fazer o quadrado fechar quando clicar fora dele:

Crie uma função para fechar o quadrado.
*/

function fecharQuadrado() {
    const quadrado = document.getElementById('quadrado');
    quadrado.style.display = 'none';
}
// 2 Adicione um escutador de evento para o evento click no documento.

document.addEventListener('click', (evento) => {
    const quadrado = document.getElementById('quadrado');
    const target = evento.target;
  
    if (!quadrado.contains(target)) {
      fecharQuadrado();
    }
  });
  

/*
  Explicação do código:

A função fecharQuadrado() simplesmente define a propriedade display do elemento quadrado para none, o que o torna invisível.
O escutador de evento click é adicionado ao documento.
Quando um clique ocorre no documento, o escutador de evento verifica se o clique ocorreu dentro do elemento quadrado.
Se o clique ocorreu fora do elemento quadrado, a função fecharQuadrado() é chamada para fechar o quadrado.
*/

