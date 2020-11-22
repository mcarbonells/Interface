  
const express = require('express')
const api = express.Router()

const controller = require(`./controller`);

api.get('/getUser1a/:email', controller.getUser1a);


api.get('/user', (req, res) => {
    res.send("Funciona");
})


module.exports = api