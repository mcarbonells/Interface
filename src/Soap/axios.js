const axios= require('axios');
const apiUrl = 'https://3.236.236.86:30000/graphql';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
async function getUserByEmail(email){
  console.log('Axios:');
  console.log(email);
  return await axios.post(apiUrl, {
    query: ` query{
      getUserByEmail(email: "${email.email}"){
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
      let users = {
        id: res.data.data.getUserByEmail.id,
        email: res.data.data.getUserByEmail.email,
        name: res.data.data.getUserByEmail.name,
        nickname: res.data.data.getUserByEmail.nickname,
        image: res.data.data.getUserByEmail.image
      }
      return {users:users};
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
/*console.log("el retorno");
console.log(getUserByEmail("elusuariodeprueba2@unal.edu.co"));*/
module.exports = {
  getUserByEmail
}