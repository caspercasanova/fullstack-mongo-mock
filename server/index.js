// Express Server
// FIX ME :(
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const router = require('./router');
var morgan  = require('morgan')
var cors = require('cors')
const port = 3000

const server = express();


server.use(cors())
//server.options('*', cors())
server.use(morgan())

// check the implementation of this
server.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
server.use(bodyParser.json())

server.use('/', express.static(path.join(__dirname + '/../client/dist')));

server.use('/name', router)

server.listen(port, () => console.log('Connected to port: 3000'))