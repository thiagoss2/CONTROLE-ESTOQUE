// AJUDA DE COMO CARREGAR A IMAGEM USANDO CALLBACK

class ControladorAcaoUsuario {
    #imagemSrc = '';

    selecionaImagemProduto(imagemCarregada, callback) {
        imagemCarregada.addEventListener('change', function (event) {
            let imagem = '';
            if (imagemCarregada.files[0] && imagemCarregada.files) {
                const arquivo = imagemCarregada.files[0];
                const leitor = new FileReader();

                leitor.readAsDataURL(arquivo);
                leitor.onload = function (event) {
                    imagem = event.target.result;
                    this.imagemSrc = imagem;
                    callback(imagem); // Chamada do callback com a imagem
                };
            }
        });
    }

    getImagemSrc() {
        return this.imagemSrc;
    }
}

// E NO MAIN
const controladorAcaoUsuario = new ControladorAcaoUsuario();

const seletorImagem = document.querySelector('#seletor-imagem');

controladorAcaoUsuario.selecionaImagemProduto(seletorImagem, function (imagemSrc) {
    if (imagemSrc != '') {
        imagemProduto = imagemSrc;
        console.log(imagemProduto);
    }
});


//   =============== OUTRO EXEMPLO ====================

// USANDO RETURN

selecionaImagemProduto(imagemCarregada) {
    imagemCarregada.addEventListener('change', function (event) {
        let imagem = '';

        if (imagemCarregada.files[0] && imagemCarregada.files) {
            const arquivo = imagemCarregada.files[0];
            const leitor = new FileReader();

            leitor.readAsDataURL(arquivo);
            leitor.onload = function (event) {
                imagem = event.target.result;
                this.imagemSrc = imagem;

                // Retorna a imagem após o carregamento
                return imagem;
            };
        }
    });
}

// E NO METODO GET 

getImagemSrc() {
    if (this.imagemSrc === '') {
        return ''; // Retorna uma string vazia se a imagem não estiver carregada
    } else {
        return this.imagemSrc; // Retorna a imagem se estiver carregada
    }
}

// E NO MAIN

const imagemSelecionada = controladorAcaoUsuario.getImagemSrc();

if (imagemSelecionada !== '') {
    console.log(imagemSelecionada); // Imprime a imagem selecionada
}

// EXEMPLO COMPLETO

class ControladorAcaoUsuario {
    #imagemSrc = '';

    selecionaImagemProduto(imagemCarregada) {
        imagemCarregada.addEventListener('change', function (event) {
            let imagem = '';

            if (imagemCarregada.files[0] && imagemCarregada.files) {
                const arquivo = imagemCarregada.files[0];
                const leitor = new FileReader();

                leitor.readAsDataURL(arquivo);
                leitor.onload = function (event) {
                    imagem = event.target.result;
                    this.imagemSrc = imagem;
                };
            }
        });
    }

    getImagemSrc() {
        if (this.imagemSrc === '') {
            return '';
        } else {
            return this.imagemSrc;
        }
    }
}

const controladorAcaoUsuario = new ControladorAcaoUsuario();

const seletorImagem = document.querySelector('#seletor-imagem');

controladorAcaoUsuario.selecionaImagemProduto(seletorImagem);

const imagemSelecionada = controladorAcaoUsuario.getImagemSrc();

if (imagemSelecionada !== '') {
    console.log(imagemSelecionada); // Imprime a imagem selecionada
}


// USANDO O LOCAL STORAGE A QUE MAIS GOSTEI

selecionaImagemProduto(imagemCarregada) {
    imagemCarregada.addEventListener('change', function (event) {
      let imagem = '';
  
      if (imagemCarregada.files[0] && imagemCarregada.files) {
        const arquivo = imagemCarregada.files[0];
        const leitor = new FileReader();
  
        leitor.readAsDataURL(arquivo);
        leitor.onload = function (event) {
          imagem = event.target.result;
          this.imagemSrc = imagem;
  
          // Salva a imagem no Local Storage
          localStorage.setItem('imagemSelecionada', imagem);
        };
      }
    });
  }
  
  getImagemSrc() {
    // Recupera a imagem do Local Storage
    const imagemArmazenada = localStorage.getItem('imagemSelecionada');
  
    if (imagemArmazenada !== null) {
      return imagemArmazenada;
    } else {
      return '';
    }
  }
  

