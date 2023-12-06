const database = require('../repository/connectMysql.js')

async function createDirector(
  nameDirector,
  nationality,
  sex,
  birth,
  foto_diretor
) {
  const sql = `insert into tbl_diretor ( nome_diretor, nacionalidade, dt_nascimento, sexo, foto_diretor )
      values (?, ?, ?, ?, ? )`
  const dataDirector = [nameDirector, nationality, sex, birth, foto_diretor]

  const connect = await database.connect()
  await connect.query(sql, dataDirector)
  connect.end()
}

async function searchDirector(id, nameDirector, nationality, sex, birth) {
  const sql = `select * from tbl_diretor`

  const dataDirector = [id, nameDirector, nationality, sex, birth]

  const connect = await database.connect()
  const [rows] = await connect.query(sql, dataDirector)
  connect.end()
  return rows
}

async function editDirector(nameDirector, nationality, sex, birth, image, id) {
  const sql = `UPDATE tbl_diretor
  SET nome_diretor = ?,
      nacionalidade = ?,
      dt_nascimento = ?,
      sexo = ?,
      foto_diretor = ?
  WHERE id_diretor = ?`

  const dataDirector = [nameDirector, nationality, sex, birth, image, id]

  const connect = await database.connect()
  const [rows] = await connect.query(sql, dataDirector)
  connect.end()
  return rows
}

async function deleteDirector(id) {
  const sql = `DELETE FROM tbl_diretor WHERE id_diretor = ?`

  const dataDirector = [id]

  const connect = await database.connect()
  const [rows] = await connect.query(sql, dataDirector)
  connect.end()
  return rows
}

async function searchDirectorQuery(nameDirector) {
  const sql = `SELECT * FROM tbl_diretor where nome_diretor LIKE ? `

  const dataDirector = [nameDirector]

  const connect = await database.connect()
  const [rows] = await connect.query(sql, dataDirector)
  connect.end()
  return rows
}

module.exports = {
  createDirector,
  searchDirector,
  editDirector,
  deleteDirector,
  searchDirectorQuery,
}
