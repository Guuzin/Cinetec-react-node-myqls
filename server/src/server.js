const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(express.static('src/uploads'))
app.use('/', routes)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})
