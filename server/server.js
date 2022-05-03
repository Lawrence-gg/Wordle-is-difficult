const path = require('path')
const express = require('express')

const server = express()
const words = require('./Routes/wordRoutes')
const history = require('./Routes/history')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/words', words)
server.use('/api/history', history)

module.exports = server
