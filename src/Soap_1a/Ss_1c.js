
const soap = require('soap');

const serverData = require('../server');

async function getUser1b(username) {
  let args = {"email": username}
  //'src/Soap/ss_1b_service.wsdl'  Hace referencia a la ubicacion del archivo del wsdl del 1_b, 
  //deben cambiar dependiendo de donde lo ubiquen
  const client = await soap.createClientAsync('src/Soap/ss_1b_service.wsdl');
  let getUser1bSoap = (args) => {
    return new Promise(resolve => {
      client.GetByUserEmail(args, (err, result) => {
          if(err){
              console.log("ERROR");
              console.log(err);
          }else{
            console.log("RESPUESTA");
            console.log(result);
            resolve(result);
          }
      });
    });
  };
  let result = await getUser1bSoap(args);
  return result;
}

module.exports = { getUser1a }