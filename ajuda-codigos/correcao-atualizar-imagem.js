selecionaImagemProduto(imagemCarregada) {
    imagemCarregada.addEventListener('change', function (event) {
      // se o arquivo foi carregado com sucesso
      if (imagemCarregada.files[0] && imagemCarregada.files) {
        const arquivo = imagemCarregada.files[0];
        const leitor = new FileReader();

        leitor.readAsDataURL(arquivo);
        leitor.onload = function (event) {
          imagem = event.target.result;
          localStorage.setItem('imagem', imagem);


          // ATUALIZA O CARREGAMENTO DA IMAGEM
          if (imagemCarregada != null) {
            const blocoImagem = document.querySelector('.bloco-flutuante-venda__arquivo');
            const containerImagem = document.querySelector('.bloco-flutuante-venda__bloco-imagem');
            const img = containerImagem.querySelector('img');

            blocoImagem.style.display = 'none';
            img.src = localStorage.getItem('imagem')
            img.style.display = 'block';

          }
        }
      }
    });

  }