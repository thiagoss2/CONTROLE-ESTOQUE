export default class ValidadorPalavras {

    contaLetrasMaiusculas(inputNome) {
        const letrasMaiusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
            'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        let quantidadeLetras = 0;

        for (let indice = 0; indice < inputNome.value.length; indice++) {
            for (let indice2 = 0; indice2 < letrasMaiusculas.length; indice2++) {
                if (letrasMaiusculas[indice2] === inputNome.value[indice]) {
                    quantidadeLetras++
                }
            }
        }

        return quantidadeLetras
    }

    validaQuantidadeLetras(inputNome) {
        let contadorLetras = this.contaLetrasMaiusculas(inputNome);
        if (contadorLetras != 1) {
            return false;
        } else {
            return true;
        }
    }

    exibeMensagemErro(inputNome) {
        inputNome.addEventListener('keyup', (evento) => { // Alterado para arrow function

            console.log(evento.target.value)
            if (this.validaQuantidadeLetras(inputNome) === false) {
                const mensagemErro = document.querySelector('.bloco-flutuante-venda__mensagem-erro');
                mensagemErro.style.display = 'block';
                mensagemErro.innerHTML = 'O nome do produto deve conter apenas uma letra maiúscula';
                inputNome.style.border = '1px solid red';
            } else {
                const mensagemErro = document.querySelector('.bloco-flutuante-venda__mensagem-erro');
                mensagemErro.style.display = 'none';
                inputNome.style.border = '2px solid green';
            }
        })

    }

    removeSinalizadorVermelho(inputNome) {
        inputNome.addEventListener('blur', (evento) => {
            console.log(evento)
            inputNome.style.border = '1px solid #acb4bb';
        })

    }
}