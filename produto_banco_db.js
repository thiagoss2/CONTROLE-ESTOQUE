const sqlite3 = require('sqlite3').verbose();

// Abrindo o banco de dados
const db = new sqlite3.Database('banco.db');

db.run(`
CREATE TABLE IF NOT EXISTS produtos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  descricao TEXT,
  preco REAL NOT NULL
);
`);

// inserido dados
const produto = {
    nome:'Geladeira',
    descricao:'Geladeira Bastemp',
    preco: 500.00
}

db.run('INSERT INTO produtos(nome , descricao , preco) values(?, ?, ?)' , 
[produto.nome , produto.preco , produto.descricao]);

// realizando uma consulta

db.all(`
SELECT * FROM produtos;
`, (err, produtos) => {
  if (err) {
    throw err;
  }

  // Exibir os produtos
  console.log(produtos);
});

// Fechando o banco de dados
db.close();