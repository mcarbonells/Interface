const axios = require('./axios');

async function getUserByEmail (email) {
    let res = await axios.getUserByEmail(email);

    if(response.status == 200){
        return response.data.data.getUserByEmail;
    }
    else{
        return "Usuario no encontrado"
    }
}

module.exports = {getUserByEmail}