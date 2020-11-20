const soap = require(`soap`);
const express = require(`express`);
const dataServer = require('../server');


const fs = require('fs');


const ss_2b = require('./service');

//Sever Soap
let soap_server = express();
soap_server.use(require(`body-parser`).raw({type: function(){return true;}, limit: '5mb'}));
var xml = fs.readFileSync(`./src/soap_server/ss_2b_service.wsdl`, 'utf8');

soap_server .listen(dataServer.soap_server_port, function(){
    soap.listen(soap_server , '/ss_2b', ss_2b, xml, function(){
      console.log('Soap corriendo en http://localhost:' + dataServer.soap_server_port);
    });
  });
