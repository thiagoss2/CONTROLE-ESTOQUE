-
]420:0asQclass DiscoLocal {

    ad/CicionarImagem(imagem , nomeImagem) {
      localStorage.setItem(nomeImagem ,imagem)  
    }
    removerImagem(imagem) {
        localStorage.removeItem(imagem);
    }
    getImagem(imagem ){
       let novaImagem = localStorage.getItem(imagem);
       return novaImagem;
    }


}