const mysql = require('mysql2/promise');
require('dotenv').config();
const mysqlEnv = {
  host: process.env.mysql_host,
  user: process.env.mysql_user,
  password: process.env.mysql_password,
  database: process.env.mysql_database
};

const getAllAccounts = async() => {
  const connection = await mysql.createConnection(mysqlEnv);
  try {
    const [data] = await connection.execute('SELECT * FROM account;');
    return data;
  } catch(err) {
    console.error('error: get all accounts');
    throw err;
  } finally {
    connection.end();
  }
}

module.exports = {
  getAllAccounts
}