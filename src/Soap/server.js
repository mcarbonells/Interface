const operations = require(`./operations`); 
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

let myService = {
    ss_1b: {
        funtions: {
            GetByUserEmail: operations.getUserByEmail
        }
    }
};


module.exports = myService