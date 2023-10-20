const mysql2 = require('mysql2/promise')
require('dotenv').config()

async function connect() {
  return await mysql2.createConnection({
    host: process.env.HOST,
    port: process.env.PORT_DB,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    user: process.env.USER,
  })
}
module.exports = { connect }
