const SS_1A_CLIENT = require(`../Soap_1a/ss_1a_client`);


async function getUser1a(req, res){
    let username = req.params.email;

    let response = await SS_1A_CLIENT.getUser1a(username);
    console.log("Respuesta Controlador:");
    console.log(response);
    res.status(200).send(response);
}

module.exports = {getUser1a};