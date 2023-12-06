const express = require('express')
const db = require('../services/movieService.js')
const upload = require('../config/multer.js')

let image

const routes = express.Router()

routes.post('/', (req, res) => {
  try {
    const { nameMovie, releaseYear, duration, genderId, directorId } = req.body

    db.createMovie(
      nameMovie,
      releaseYear,
      duration,
      genderId,
      directorId,
      image
    )

    res.status(201).send({ message: 'Filme criado com sucesso!' })
  } catch (error) {
    return res.status(404).send({ message: `${error}` }, console.log(error))
  }
})

routes.post('/upload', upload.single('image'), (req, res) => {
  try {
    image = req.file.filename
    res.status(201).send({ message: 'Upload feito com sucesso!' })
  } catch (error) {
    return res.status(404).send({ message: `${error}` }, console.log(error))
  }
})

routes.get('/', async (req, res) => {
  try {
    const movies = await db.searchMovie()
    res.status(200).send(movies)
  } catch (error) {
    return res.status(404).send({ message: `${error}` })
  }
})

module.exports = routes
