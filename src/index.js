const soap = require(`soap`);
const fs = require('fs');

//const restServer = require('./rest_server/index')
const dataServer = require('./server');

const soapServer = require(`./Soap/index`);
const ss_1b = require('./Soap/server');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

/*restServer.listen(dataServer.rest_server_port, () => {
    console.log(`REST corriendo en http://localhost:${dataServer.rest_server_port} `)
})*/


var xml = fs.readFileSync(`./src/Soap/ss_1b_service.wsdl`, 'utf8');
soapServer .listen(dataServer.soap_server_port, function(){
    soap.listen(soapServer , '/ss_1b', ss_1b, xml, function(){
      console.log('Soap corriendo en http://localhost:' + dataServer.soap_server_port);
    });
  });
