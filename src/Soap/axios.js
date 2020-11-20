const axios_ = require('axios');
const apiUrl = require('./apiGraph').apiUrl;
const queries = require('./apiGraph').queries;



process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function getUserByEmail(email){
  axios_.post(apiUrl, {
    query: queries.getUserByEmail
  })
  .then((res) => {
    console.log("Entre")
    console.log(res.data.data.getUserByEmail)
    return res.data.data.getUserByEmail
  })
  .catch((error) => {
    console.log(" NO Entre")
    console.error(error)
    return "No se encontro usuario"
  });
}

module.exports = {
  getUserByEmail
}


