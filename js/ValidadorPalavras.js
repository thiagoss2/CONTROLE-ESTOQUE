class ValidadorPalavras {

    contaLetrasMaiusculas(inputNome) {
        const letrasMaiusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
         'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
        let quantidadeLetras = 0;
        
        for (let indice = 0; indice < letrasMaiusculas.length; indice++) {
           for(let indice2 = 0; indice2 < inputNome.value.length; indice2++) {
               if(letrasMaiusculas[indice] === inputNome[indice2]) {
                   quantidadeLetras++
               }
           }
        }
        return quantidadeLetras
    }

    validaQuantidadeLetras(inputNome) {
        let contadorLetras = letrasMaiusculas(inputNome);
         if(contadorLetras)
    }
}