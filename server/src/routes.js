const express = require('express')
const userController = require('./controllers/userController.js')
const actorController = require('./controllers/actorController.js')
const directorController = require('./controllers/directorController.js')
const genderController = require('./controllers/genderController.js')
const loginController = require('./controllers/loginController.js')
const movieController = require('./controllers/movieController.js')

const routes = express()

routes.get('/', (req, res) => {
  res.send({ hello: 'world!' })
})

routes.use('/user', userController)

routes.use('/login', loginController)

routes.use('/actor', actorController)

routes.use('/director', directorController)

routes.use('/gender', genderController)

routes.use('/movie', movieController)

module.exports = routes
