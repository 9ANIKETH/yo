const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'aniketh'
});

connection.connect((err) => {
    if (err) {
      console.error('Error connecting: ' + err.stack);
      return;
    }
    console.log('Connected as id ' + connection.threadId);
  
    // Test a simple query
    connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
      connection.end();
    });
  });

connection.query('SELECT * from users', (error, results, fields) => {
    if (error) throw error;
    console.log('Results: ', results);
  });

