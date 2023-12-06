const database = require('../repository/connectMysql.js')

async function createMovie(
  nameMovie,
  releaseYear,
  duration,
  genderId,
  directorId,
  image
) {
  const sql = `insert into tbl_filme (nome_filme, ano_lancamento, duracao, FK_id_genero, FK_id_diretor, foto_filme)
  values (?, ?, ?, ?, ?, ? ) `

  const dataMovie = [
    nameMovie,
    releaseYear,
    duration,
    genderId,
    directorId,
    image,
  ]

  const connect = await database.connect()
  await connect.query(sql, dataMovie)
  connect.end()
}

async function searchMovie(
  id,
  nameMovie,
  releaseYear,
  duration,
  genderId,
  directorId,
  image
) {
  const sql = `select * from tbl_filme`

  const dataActor = [
    id,
    nameMovie,
    releaseYear,
    duration,
    genderId,
    directorId,
    image,
  ]

  const connect = await database.connect()
  const [rows] = await connect.query(sql, dataActor)
  connect.end()
  return rows
}

module.exports = { createMovie, searchMovie }
