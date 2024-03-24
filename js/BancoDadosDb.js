/**
 * Função que realiza uma operação com o banco de dados usando a biblioteca mysql2.
 * @param {string} query - A query SQL a ser executada no banco de dados.
 * @returns {Promise} - Uma Promise que será resolvida com o resultado da operação.
 */
const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database_name',
    connectionLimit: 10 // Adjust the connection limit as per your requirements
});

// Get a connection from the pool
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }

    // Use the connection to perform database operations
    connection.query('SELECT * FROM your_table', (err, results) => {
        connection.release(); // Release the connection back to the pool

        if (err) {
            console.error('Error executing query:', err);
            return;
        }

        console.log('Query results:', results);
    });
});
// ... previous code ...

// Use the connection to perform database operations
connection.query('INSERT INTO your_table (column1, column2) VALUES (?, ?)', ['value1', 'value2'], (err, results) => {
    connection.release(); // Release the connection back to the pool

    if (err) {
        console.error('Error executing query:', err);
        return;
    }

    console.log('Data inserted successfully:', results);
});

// ... remaining code ...

// o que seria esses parametros no metodo conecction.query  ['value1', 'value2'] me explique    // o que seria esses parametros no metodo conecction.query  ['value1', 'value2'] me explique

// mas esse array [value1 , valueN ] como utilizo ele dentro do metodo connection.query sendo que esse array é um array que eu não criei variavel para ele?    // mas esse array [value1 , valueN ] como utilizo ele dentro do metodo connection.query sendo que esse array é um array que eu não criei variavel para ele?  // mas esse array [value1 , valueN ] como utilizo ele dentro do metodo connection.query 
// sendo que esse array é um array que eu não criei variavel para ele? me explique 