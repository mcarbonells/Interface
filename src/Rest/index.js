const express = require('express')
const bodyParser = require('body-parser')
const dataServer = require('../server');

const rest_server = express()
const api_rest = require('./routes')

rest_server.use(bodyParser.urlencoded({extended: false}))
rest_server.use(bodyParser.json())
rest_server.use('/', api_rest)

rest_server.listen(dataServer.rest_server_port, () => {
    console.log(`REST corriendo en http://localhost:${dataServer.rest_server_port} `)
})
