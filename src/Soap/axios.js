const axios_ = require('axios');
const apiUrl = 'https://3.90.88.218:5000/graphql';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function getUserByEmail(email){
  axios_.post(apiUrl, {
    query: ` query{
      getUserByEmail(email: "${email}"){
        id
        email
        name
        nickname
        image
      }
  }`
  })
  .then((res) => {
    console.log(res.data)
    return res
  })
  .catch((error) => {
    console.log("No conecta con UnracoonApi")
    console.error(error)
    return "No conecta con UnracoonApi"
  });
}
getUserByEmail("elusuariodeprueba2@unal.edu.co");
module.exports = {
  getUserByEmail
}


