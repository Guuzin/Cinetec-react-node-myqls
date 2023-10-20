const database = require('../repository/connectMysql.js')

async function createGender(gender) {
  const sql = `insert into tbl_genero ( genero )
      values ( ? )`
  const dataGender = [gender]

  const connect = await database.connect()
  await connect.query(sql, dataGender)
  connect.end()
}
module.exports = { createGender }
