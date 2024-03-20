/*
  Verificando se um elemento está visível com JavaScript
Existem várias maneiras de verificar se um elemento está visível com JavaScript. Aqui estão algumas das opções mais comuns:

1. Usando a propriedade offsetHeight:

A propriedade offsetHeight de um elemento retorna sua altura total, incluindo bordas e espaçamento. Se a altura for 0, o elemento está oculto.
 */

const elemento = document.getElementById('meuElemento');
const estaVisivel = elemento.offsetHeight > 0;

if (estaVisivel) {
    console.log('O elemento está visível.');
} else {
    console.log('O elemento está oculto.');
}


/*
  2. Usando a propriedade getClientRects():

A propriedade getClientRects() de um elemento retorna um array de objetos que descrevem a posição 
e as dimensões do elemento no layout da página. Se o array estiver vazio, o elemento está oculto.
*/

const elemento = document.getElementById('meuElemento');
const rects = elemento.getClientRects();

if (rects.length > 0) {
    console.log('O elemento está visível.');
} else {
    console.log('O elemento está oculto.');
}

/*
   3. Usando a função IntersectionObserver:

A função IntersectionObserver permite observar as interseções entre um elemento e seu ancestral ou a área visível do viewport. 
 Você pode usar essa função para verificar
 se um elemento está visível no momento ou se ele se torna visível ou invisível.
*/


const elemento = document.getElementById('meuElemento');
const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            console.log('O elemento está visível.');
        } else {
            console.log('O elemento está oculto.');
        }
    });
});

observer.observe(elemento);


// ultima forma de virificar um clique fora do elemento

const element = document.querySelector('element');

document.addEventListener('click', function (evento) {
    if (evento.target !== element &&
        !evento.target.isDescendantOf(element)) {
        // clique fora do elemento capturado
        console.log('vc clicou fora do elemento')
    }
})


/*
  2. Usando a API Event.target e Event.path:

O evento click fornece a propriedade target, que indica o elemento que foi clicado.
A propriedade path fornece uma lista de todos os elementos que foram percorridos para chegar ao elemento clicado.
Você pode verificar se o elemento clicado está na lista path do elemento que você deseja monitorar.
*/

const element = document.getElementById('meuElemento');

document.addEventListener('click', (event) => {
  if (!event.path.includes(element)) {
    // Clique fora do elemento
    console.log('Clicou fora do elemento!');
  }
});
