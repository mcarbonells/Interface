//Importando lo necesario
const soap = require('soap');

//Definiendo la URL
const serverData = require('../server');

let url = `http://${serverData.ss_1a_url}:${serverData.ss_1a_port}/${serverData.ss_1a_action}?wsdl`;
let path = 'ss_1a.wsdl';

//Consumiendo funcion ejemplo Soap
async function getUser1a(username) {
  let args = {"email": username}
  const client = await soap.createClientAsync('src/Soap_1a/ss_1a.wsdl');
  let getUser1aSoap = (args) => {
    return new Promise(resolve => {
      client.UserFunction(args, (err, result) => {
          if(err){
              console.log("ERROR");
              console.log(err);
          }else{
            console.log("RESPUESTA");
            console.log(result.body);
            resolve(result.body);
          }
      });
    });
  };
  let result = await getUser1aSoap(args);
  return result;
}

module.exports = { getUser1a }