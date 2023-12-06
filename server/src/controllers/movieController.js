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

routes.get('/data', async (req, res) => {
  try {
    const movies = await db.searchMovieData()
    res.status(200).send(movies)
  } catch (error) {
    return res.status(404).send({ message: `${error}` })
  }
})

routes.put('/edit', (req, res) => {
  try {
    if (!image) {
      const {
        nameMovie,
        releaseYear,
        duration,
        genderId,
        directorId,
        foto_filme,
        id_filme,
      } = req.body
      db.editMovie(
        nameMovie,
        releaseYear,
        duration,
        genderId,
        directorId,
        foto_filme,
        id_filme
      )
      res.status(201).send({ message: 'Filme editado com sucesso!' })
      return
    }

    const { nameMovie, releaseYear, duration, genderId, directorId, id_filme } =
      req.body
    db.editMovie(
      nameMovie,
      releaseYear,
      duration,
      genderId,
      directorId,
      image,
      id_filme
    )

    res.status(201).send({ message: 'Filme editado com sucesso!' })
  } catch (error) {
    return res.status(404).send({ message: `${error}` }, console.log(error))
  }
})

routes.put('/edit/upload', upload.single('image'), (req, res) => {
  try {
    image = req.file.filename
    res.status(201).send({ message: 'Upload editado com sucesso!' })
  } catch (error) {
    return res.status(404).send({ message: `${error}` }, console.log(error))
  }
})


routes.delete('/delete/:id_filme', (req, res) => {
  try {
    const { id_filme } = req.params

    db.deleteMovie(id_filme)

    res.status(201).send({ message: 'Filme deletado com sucesso!' })
  } catch (error) {
    return res.status(404).send({ message: `${error}` }, console.log(error))
  }
})


module.exports = routes
