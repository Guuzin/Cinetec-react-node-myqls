const database = require('../repository/connectMysql.js')

async function createUser(name, password, email, typeUser) {
  const sql = `insert into tbl_usuario (nome, email, senha, tipo_usuario)
      values (?, ?, ?, ?)`
  const dataUser = [name, password, email, typeUser]

  const connect = await database.connect()
  await connect.query(sql, dataUser)
  connect.end()
}
module.exports = { createUser }
