import express from './node_modules/express';
const app = express();

// Rota para servir o script 'meu_script.js'
app.get('./overlay.js', (req, res) => {
  // Define o tipo MIME como 'application/javascript'
  res.type('application/javascript');

  // Envia o script
  res.sendFile(__dirname + './overlay.js');
});

app.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});
