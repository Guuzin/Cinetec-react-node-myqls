const mysql2 = require('mysql2/promise')
require('dotenv').config()
async function connect() {
  return await mysql2.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    user: process.env.DB_USER,
  })
}
module.exports = { connect }
