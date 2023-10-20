const express = require('express')
const db = require('../services/genderService.js')

const routes = express.Router()
routes.post('/', (req, res) => {
  try {
    const { gender } = req.body

    db.createGender(gender)
    res.status(201).send({ message: 'Genero criado com sucesso!' })
  } catch (error) {
    return res.status(404).send({ message: `${error}` })
  }
})

module.exports = routes
