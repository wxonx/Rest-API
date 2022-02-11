const express = require('express'); //express can be used

const server = express(); //making server

server.listen(3000, () => {
    console.log("running");
}); //opening the server

//next -> to execute the server, write ' node server' In terminal 
