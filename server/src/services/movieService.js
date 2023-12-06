const database = require('../repository/connectMysql.js')

async function createMovie(
  nameMovie,
  releaseYear,
  duration,
  genderId,
  directorId,
  image
) {
  const sql = `insert into tbl_filme (nome_filme, ano_lancamento, duracao,
  FK_id_genero, FK_id_diretor, foto_filme)
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

async function searchMovieData(
  id,
  nameMovie,
  releaseYear,
  duration,
  genderId,
  directorId,
  image
) {
  const sql = `SELECT
    f.id_filme,
    f.nome_filme,
    f.ano_lancamento,
    f.duracao,
    g.genero AS genero,
    d.nome_diretor,
    f.foto_filme,
    f.deletado
FROM
    tbl_filme f
    JOIN tbl_genero g ON f.FK_id_genero = g.id_genero
    JOIN tbl_diretor d ON f.FK_id_diretor = d.id_diretor;`

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

async function editMovie(
  nameMovie,
  releaseYear,
  duration,
  genderId,
  directorId,
  image,
  id
) {
  const sql = `UPDATE tbl_filme
  SET nome_filme = ?,
      ano_lancamento = ?,
      duracao = ?,
      FK_id_genero = ?,
      FK_id_diretor = ?,
      foto_filme = ?
      WHERE id_filme = ?`

  const dataMovie = [
    nameMovie,
    releaseYear,
    duration,
    genderId,
    directorId,
    image,
    id,
  ]

  const connect = await database.connect()
  const [rows] = await connect.query(sql, dataMovie)
  connect.end()
  return rows
}

async function deleteMovie(id) {
  const sql = `DELETE FROM tbl_filme WHERE id_filme = ?`

  const dataMovie = [id]

  const connect = await database.connect()
  const [rows] = await connect.query(sql, dataMovie)
  connect.end()
  return rows
}

module.exports = {
  createMovie,
  searchMovie,
  editMovie,
  deleteMovie,
  searchMovieData,
}
