const express = require('express')
const db = require('../services/actorService.js')

const routes = express.Router()
routes.post('/', (req, res) => {
  try {
    const { nameActor, sex, birth } = req.body

    db.createActor(nameActor, sex, birth)
    res.status(201).send({ message: 'Ator criado com sucesso!' })
  } catch (error) {
    return res.status(404).send({ message: `${error}` })
  }
})

routes.get('/', async (req, res) => {
  try {
    const actor = await db.searchActor()
    res.status(200).send(actor)
  } catch (error) {
    return res.status(404).send({ message: `${error}` })
  }
})

module.exports = routes
