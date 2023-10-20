const express = require('express')
const db = require('../services/userService.js')

const routes = express.Router()
routes.post('/', (req, res) => {
  try {
    const { name, email, password, typeUser } = req.body

    if (password.length < 8) {
      return res
        .status(400)
        .send({ message: 'Senha deve obter 8 ou mais caracteres' })
    }
    db.createUser(name, email, password, typeUser)
    res.status(201).send({ message: 'Usuario criado com sucesso!' })
  } catch (error) {
    return res.status(404).send({ message: `${error}` })
  }
})

module.exports = routes
