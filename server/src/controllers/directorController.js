const express = require('express')
const db = require('../services/directorService.js')

const routes = express.Router()
routes.post('/', (req, res) => {
  try {
    const { nameDirector, nationality, sex, birth } = req.body

    db.createDirector(nameDirector, nationality, sex, birth)
    res.status(201).send({ message: 'Diretor criado com sucesso!' })
  } catch (error) {
    return res.status(404).send({ message: `${error}` })
  }
})

module.exports = routes
