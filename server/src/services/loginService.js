const database = require('../repository/connectMysql.js')

async function handleLogin(password, email) {
  const sql = `select * from tbl_usuario where email = ? and senha = ?`
  const dataLogin = [email, password]

  const connect = await database.connect()
  const [rows] = await connect.query(sql, dataLogin)
  connect.end()
  return rows
}

module.exports = { handleLogin }
