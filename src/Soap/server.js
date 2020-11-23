const axios = require(`./axios`); 
const axiosPrueba = require('./axios_prueba')


let myService = {
    ss_1b: {
        funtions: {
            GetByUserEmail: axios.getUserByEmail,
            GetByUserEmailPrueba: axiosPrueba.getUserByEmail
        }
    }
};


module.exports = myService