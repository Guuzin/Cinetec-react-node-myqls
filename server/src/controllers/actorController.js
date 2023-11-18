const express = require('express')
const db = require('../services/actorService.js')
const upload = require('../config/multer.js')

let image

const routes = express.Router()

routes.post('/', (req, res) => {
  try {
    const { nameActor, sex, birth } = req.body

    db.createActor(nameActor, sex, birth, image)

    res.status(201).send({ message: 'Ator criado com sucesso!' })
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
    const query = req.query
    const { nome_ator } = query

    if (!nome_ator) {
      const actor = await db.searchActor()
      res.status(200).send(actor)
      return
    }

    const actorQuery = await db.searchActorQuery(nome_ator)
    res.status(200).send(actorQuery)
  } catch (error) {
    return res.status(404).send({ message: `${error}` })
  }
})

module.exports = routes
