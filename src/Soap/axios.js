const axios_ = require('axios');
const apiUrl = require('./apiGraph').apiUrl;
const queries = require('./apiGraph').queries;



process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function getUserByEmail(email){
  axios_.post(apiUrl, {
    query: queries.getUserByEmail,
    variables: { email: email}
  })
  .then((res) => {
    console.log(res)
    return res
  })
  .catch((error) => {
    console.log("No conecta con UnracoonApi")
    console.error(error)
    return "No conecta con UnracoonApi"
  });
}

module.exports = {
  getUserByEmail
}


