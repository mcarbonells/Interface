const axios = require(`./axios`); 


let myService = {
    ss_1b: {
        funtions: {
            GetByUserEmail: axios.getUserByEmail
        }
    }
};


module.exports = myService