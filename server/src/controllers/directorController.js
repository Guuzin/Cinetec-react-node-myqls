const express = require('express')
const db = require('../services/directorService.js')
const upload = require('../config/multer.js')

let image

const routes = express.Router()
routes.post('/', (req, res) => {
  try {
    const { nameDirector, nationality, sex, birth } = req.body

    db.createDirector(nameDirector, nationality, birth, sex, image)
    res.status(201).send({ message: 'Diretor criado com sucesso!' })
  } catch (error) {
    return res.status(404).send({ message: `${error}` })
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
    const query = req.query
    const { nome_diretor } = query

    if (!nome_diretor) {
      const director = await db.searchDirector()
      res.status(200).send(director)
      return
    }

    const directorQuery = await db.searchDirectorQuery(nome_diretor)
    res.status(200).send(directorQuery)
  } catch (error) {
    return res.status(404).send({ message: `${error}` })
  }
})

routes.put('/edit', (req, res) => {
  try {
    if (!image) {
      const {
        nameDirector,
        nationality,
        birth,
        sex,
        foto_diretor,
        id_diretor,
      } = req.body
      db.editDirector(
        nameDirector,
        nationality,
        birth,
        sex,
        foto_diretor,
        id_diretor
      )
      res.status(201).send({ message: 'Diretor editado com sucesso!' })
      return
    }

    const { nameDirector, nationality, birth, sex, id_diretor } = req.body
    db.editDirector(nameDirector, nationality, birth, sex, image, id_diretor)

    res.status(201).send({ message: 'Diretor editado com sucesso!' })
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

routes.delete('/delete/:id_diretor', (req, res) => {
  try {
    const { id_diretor } = req.params

    db.deleteDirector(id_diretor)

    res.status(201).send({ message: 'Diretor deletado com sucesso!' })
  } catch (error) {
    return res.status(404).send({ message: `${error}` }, console.log(error))
  }
})

module.exports = routes
