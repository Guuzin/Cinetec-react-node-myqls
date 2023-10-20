const express = require('express')
const userController = require('./controllers/userController.js')
const actorController = require('./controllers/actorController.js')
const directorController = require('./controllers/directorController.js')
const genderController = require('./controllers/genderController.js')

const routes = express()

routes.get('/', (req, res) => {
  res.send({ hello: 'world!' })
})

routes.use('/user', userController)

routes.use('/actor', actorController)

routes.use('/director', directorController)

routes.use('/gender', genderController)

module.exports = routes
