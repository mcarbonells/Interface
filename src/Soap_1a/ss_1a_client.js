//Importando lo necesario
const soap = require('soap');

//Definiendo la URL
const serverData = require('../server');

let url = `http://${serverData.ss_1a_url}:${serverData.ss_1a_port}/${serverData.ss_1a_action}?wsdl`;
let path = 'ss_1a.wsdl';

//Consumiendo funcion ejemplo Soap
async function getUser1a(username) {
  //Definiendo parametros

  const client = await soap.createClientAsync('src/Soap_1a/ss_1a.wsdl');

  let getUser1aSoap = (args) => {
    return new Promise(resolve => {
      client.UserFunction(args, (err, result) => {
          if(err){
              console.log(err);
          }
        console.log(result.body);
        resolve(result.body);
      });
    });
  };

  let result = await getUser1aSoap(username);

  return result;

}


//Exportando las funcionalidades
module.exports = { getUser1a };