module.exports = {
  
    //Data service of 1a
    ss_1a_url: process.env.SS_1A_URL || "18.216.17.168",
    ss_1a_port: process.env.SS_1A_PORT || "8000",
    ss_1a_action: process.env.SS_1A_ACTION || "wsdl",


    //Data server rest
    rest_server_port: process.env.REST_SERVER_PORT || "9090",


    //Data server soap
    soap_server_port: process.env.SOAP_SERVER_PORT || "6060"
};