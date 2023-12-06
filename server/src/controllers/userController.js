const express = require('express')
const db = require('../services/userService.js')

const routes = express.Router()
routes.post('/', (req, res) => {
  try {
    const { name, email, password } = req.body
    let { typeUser } = req.body

    if (password.length < 8) {
      return res
        .status(400)
        .send({ message: 'Senha deve ter 8 ou mais caracteres' })
    }

    if (!typeUser) {
      typeUser = 'comum'
    }

    db.createUser(name, email, password, typeUser)
    res.status(201).send({ message: 'Usuario criado com sucesso!' })
  } catch (error) {
    return res.status(404).send({ message: `${error}` })
  }
})

routes.get('/', async (req, res) => {
  try {
    const user = await db.searchUser()
    res.status(200).send(user)
  } catch (error) {
    return res.status(404).send({ message: `${error}` })
  }
})

routes.put('/edit', (req, res) => {
  try {
    const { name, password, email, id_usuario } = req.body
    db.editUser(name, password, email, id_usuario)

    res.status(201).send({ message: 'Usuario editado com sucesso!' })
  } catch (error) {
    return res.status(404).send({ message: `${error}` }, console.log(error))
  }
})

routes.delete('/delete/:id_usuario', (req, res) => {
  try {
    const { id_usuario } = req.params

    db.deleteUser(id_usuario)

    res.status(201).send({ message: 'Usuario deletado com sucesso!' })
  } catch (error) {
    return res.status(404).send({ message: `${error}` }, console.log(error))
  }
})

module.exports = routes
