const database = require('../repository/connectMysql.js')

async function createUser(name, password, email, typeUser) {
  const sql = `insert into tbl_usuario (nome, email, senha, tipo_usuario)
      values (?, ?, ?, ?)`
  const dataUser = [name, password, email, typeUser]

  const connect = await database.connect()
  await connect.query(sql, dataUser)
  connect.end()
}

async function searchUser(id, name, password, email, typeUser) {
  const sql = `select * from tbl_usuario`

  const dataUser = [id, name, password, email, typeUser]

  const connect = await database.connect()
  const [rows] = await connect.query(sql, dataUser)
  connect.end()
  return rows
}

async function editUser(name, password, email, id) {
  const sql = `UPDATE tbl_usuario
  SET nome = ?,
      email = ?,
      senha = ?
  WHERE id_usuario = ?`

  const dataUser = [name, password, email, id]

  const connect = await database.connect()
  const [rows] = await connect.query(sql, dataUser)
  connect.end()
  return rows
}

async function deleteUser(id) {
  const sql = `DELETE FROM tbl_usuario WHERE id_usuario = ?`

  const dataUser = [id]

  const connect = await database.connect()
  const [rows] = await connect.query(sql, dataUser)
  connect.end()
  return rows
}

module.exports = { createUser, searchUser, editUser, deleteUser}
