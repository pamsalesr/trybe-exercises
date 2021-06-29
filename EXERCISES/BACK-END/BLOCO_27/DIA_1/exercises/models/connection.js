const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: 'Dip@2020',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;