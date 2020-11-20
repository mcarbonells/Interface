const soap = require(`soap`);
const express = require(`express`);
const dataServer = require('../server');


const fs = require('fs');


const ss_1b = require('./server');

//Sever Soap
let soap_server = express();
soap_server.use(require(`body-parser`).raw({type: function(){return true;}, limit: '5mb'}));
var xml = fs.readFileSync(`./src/Soap/ss_1b_service.wsdl`, 'utf8');
console.log(xml);
soap_server .listen(dataServer.soap_server_port, function(){
    soap.listen(soap_server , '/ss_1b', ss_1b, xml, function(){
      console.log('Soap corriendo en http://localhost:' + dataServer.soap_server_port);
    });
  });
