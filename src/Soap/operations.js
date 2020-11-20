const axios = require('./axios');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
async function getUserByEmail (args) {
    let email = args;
    let response = await axios.getUserByEmail(email);

    if(response.status == 200){
        return response.data.data.getUserByEmail;
    }
    else{
        return "Usuario no encontrado"
    }
}

module.exports = {getUserByEmail}