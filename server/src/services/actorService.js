const database = require('../repository/connectMysql.js')

async function createActor(nameActor, sex, birth) {
  const sql = `insert into tbl_ator (nome_ator, sexo, dt_nascimento )
      values (?, ?, ? )`
  const dataActor = [nameActor, sex, birth]

  const connect = await database.connect()
  await connect.query(sql, dataActor)
  connect.end()
}
module.exports = { createActor }
