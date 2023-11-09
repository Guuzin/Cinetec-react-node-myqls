const database = require('../repository/connectMysql.js')

async function createDirector(nameDirector, nationality, sex, birth) {
  const sql = `insert into tbl_diretor ( nome_diretor, nacionalidade, dt_nascimento, sexo )
      values (?, ?, ?, ? )`
  const dataDirector = [nameDirector, nationality, sex, birth]

  const connect = await database.connect()
  await connect.query(sql, dataDirector)
  connect.end()
}

async function searchDirector(nameDirector, nationality, sex, birth) {
  const sql = `select * from tbl_diretor`

  const dataDirector = [nameDirector, nationality, sex, birth]

  const connect = await database.connect()
  const [rows] = await connect.query(sql, dataDirector)
  connect.end()
  return rows
}
module.exports = { createDirector, searchDirector }
