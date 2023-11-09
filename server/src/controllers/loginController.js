const express = require('express')
const db = require('../services/loginService.js')

const routes = express.Router()

routes.post('/', async (req, res) => {
  const { email, password } = req.body

  const user = await db.handleLogin(password, email)

  if (user.length < 1) {
    res.status(401).send({ message: 'Email ou senha invalido.' })
    return
  }
  res.status(200).send({ message: 'Login efetudado com sucesso.' })
})

module.exports = routes
