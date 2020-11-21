const axios= require('axios');
const apiUrl = 'http://localhost:5000/graphql';

const dotenv = require ('dotenv') ;

dotenv.config();

 getUserByEmail = async (email) => {
  return axios.post(apiUrl, {
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
      console.log("axios");
      console.log(res.data.data.getUserByEmail);
      return res.data.data.getUserByEmail;
  }
  else{
    console.log("Usuario no encontrado");
      return "Usuario no encontrado";
  }
  })
  .catch((error) => {
    console.log("No conecta con UnracoonApi")
    console.error(error)
    throw "No conecta con UnracoonApi"
  });
}
console.log(getUserByEmail("elusuariodeprueba2@unal.edu.co"));

module.exports = {
  getUserByEmail
}


