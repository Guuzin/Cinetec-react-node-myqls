const database = require('../repository/connectMysql.js')

async function createActor(nameActor, sex, birth, image) {
  const sql = `insert into tbl_ator (nome_ator, sexo, dt_nascimento, foto_ator)
      values (?, ?, ?, ? )`
  const dataActor = [nameActor, sex, birth, image]

  const connect = await database.connect()
  await connect.query(sql, dataActor)
  connect.end()
}

async function searchActor(id, nameActor, sex, birth, image) {
  const sql = `select * from tbl_ator`

  const dataActor = [id, nameActor, sex, birth, image]

  const connect = await database.connect()
  const [rows] = await connect.query(sql, dataActor)
  connect.end()
  return rows
}

async function editActor(nameActor, sex, birth, image, id) {
  const sql = `UPDATE tbl_ator
  SET nome_ator = ?,
      sexo = ?,
      dt_nascimento = ?,
      foto_ator = ?
  WHERE id_ator = ?`

  const dataActor = [nameActor, sex, birth, image, id]

  const connect = await database.connect()
  const [rows] = await connect.query(sql, dataActor)
  connect.end()
  return rows
}

async function deleteActor(id) {
  const sql = `DELETE FROM tbl_ator WHERE id_ator = ?`

  const dataActor = [id]

  const connect = await database.connect()
  const [rows] = await connect.query(sql, dataActor)
  connect.end()
  return rows
}

async function searchActorQuery(nameActor) {
  const sql = `SELECT * FROM tbl_ator where nome_ator LIKE ? `

  const dataActor = [nameActor]

  const connect = await database.connect()
  const [rows] = await connect.query(sql, dataActor)
  connect.end()
  return rows
}
module.exports = {
  createActor,
  searchActor,
  searchActorQuery,
  editActor,
  deleteActor,
}
