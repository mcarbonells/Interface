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
    if(res.data.data.getUserByEmail != null && res.status == 200){
      console.log("axios")
      console.log(res.data.data.getUserByEmail)
      return res.data.data.getUserByEmail;
  }
  else{
    console.log("Usuario no encontrado");
      return 
  }
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


