const database = require('../repository/connectMysql.js')

async function createGender(gender) {
  const sql = `insert into tbl_genero ( genero )
      values ( ? )`
  const dataGender = [gender]

  const connect = await database.connect()
  await connect.query(sql, dataGender)
  connect.end()
}

async function searchGender(gender) {
  const sql = `select * from tbl_genero`

  const dataGender = [gender]

  const connect = await database.connect()
  const [rows] = await connect.query(sql, dataGender)
  connect.end()
  return rows
}
module.exports = { createGender, searchGender }
