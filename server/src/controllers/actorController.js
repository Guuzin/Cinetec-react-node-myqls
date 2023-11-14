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
