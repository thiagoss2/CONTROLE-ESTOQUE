
export default class filtradoraArray {

    removeElementos(barraLateralDireitaFlutuante, blocoFlutuanteImagemOpcoes) {

        const blocoFlutuanteImagemOpcoesNodeLista = blocoFlutuanteImagemOpcoes.querySelectorAll('*');
        let blocoFlutuanteImagemOpcoesLista = Array.from(blocoFlutuanteImagemOpcoesNodeLista)
        blocoFlutuanteImagemOpcoesLista.push(blocoFlutuanteImagemOpcoes);


        console.log('antes', barraLateralDireitaFlutuante)
        for (let indiceA = 0; indiceA < barraLateralDireitaFlutuante.length; indiceA++) {

            let nomeElemento = barraLateralDireitaFlutuante[indiceA].classList.value;

            for (let indiceB = 0; indiceB < blocoFlutuanteImagemOpcoesLista.length; indiceB++) {
                if (nomeElemento === blocoFlutuanteImagemOpcoesLista[indiceB].classList.value) {
                    barraLateralDireitaFlutuante.splice(indiceA, blocoFlutuanteImagemOpcoesLista.length)
                } 
            }
        }

        console.log('depois', barraLateralDireitaFlutuante)
        return barraLateralDireitaFlutuante
    }
}