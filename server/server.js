const path = require('path')
const express = require('express')

const server = express()
const words = require('./Routes/wordRoutes')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/words', words)

module.exports = server
