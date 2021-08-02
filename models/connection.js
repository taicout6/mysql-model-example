require('dotenv/config')
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: process.env.PASSWORD,
  host: 'localhost',
  database: 'mysql_model_example'
});

module.exports = connection;
