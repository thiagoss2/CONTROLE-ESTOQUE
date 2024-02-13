import sqlite3  from 'sqlite3';
const db = new sqlite3.Database('database.sqlite2');

function criarTabela() {

  let stmt = null;


  const createTableQuery =
    "CREATE TABLE IF NOT EXISTS produtos (\n" +
    "  id INTEGER PRIMARY KEY AUTOINCREMENT,\n" +
    "  nome TEXT NOT NULL,\n" +
    "  codigo_barras TEXT NOT NULL,\n" +
    "  quantidade INTEGER NOT NULL,\n" +
    "  custo REAL NOT NULL,\n" +
    "  preco REAL NOT NULL,\n" +
    "  descricao TEXT NOT NULL,\n" +
    "  imagem BLOB\n" +
    ");";

  stmt = db.prepare(createTableQuery);
  stmt.run();

  console.log('Tabela produtos criada com sucesso!');

}


// TESTE CONCLUIDO
 export function inserindoDados(nome, codigoBarras, quantidade, custo, preco, descricao, imagem) {

  const query = ('INSERT INTO produtos(nome , codigo_barras , quantidade , custo, preco, descricao, imagem)values(?,?,?,?,?,?,?)');
  const values = [nome, codigoBarras, quantidade, custo, preco, descricao, imagem];

  db.run(query, values, (err) => {
    if (err) {
      console.log(err);
      return
    }

    console.log('dados inseridos com sucesso');


  });

}

function consultarDados() {

  const stmt = db.prepare('SELECT * FROM produtos');
  stmt.all((err, rows) => {
    if (err) {
      console.error(err);
    } else {
      // As linhas da tabela "produtos" estão armazenadas em "rows"
      console.log(rows);
    }
  });
  

}


 export function excluindoDados(identificador) {

  const sql = 'DELETE FROM produtos WHERE id = ? '
  const array = [identificador] ;

  db.run(sql, array, (err) =>  {
    if (err) {
      console.log(err);
      return
    }
    console.log('produto removido com sucesso')

  });



}
 // criarTabela();
 inserindoDados('Macarrao', '3444-4455-444', 12, 4.00, 8.00, 'Macarrao Instantaneo', null);

  // excluindoDados(4);
  // excluindoDados(3);
  // excluindoDados(2);
  // excluindoDados(1);

   consultarDados();

   

