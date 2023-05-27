const express = require('express')
const sports = require('./sportsRouter')

const server = express()

server.use(express.json())

server.use('/')

module.exports = server;