const express = require('express'); //express can be used

const server = express(); //making server

const users = [
    {
        name: "a",
        amount: 1
    },
    {
        name: "b",
        amount: 5
    }
]; //making json of users 


server.get("/v1/stocks", (req,res)=>{
    res.json(users);
}); //api get, json(users)<- name of the json, write in domain "localhost:3000/v1/stocks" and then check 


server.post("/v1/stocks",  (req,res)=>{
    res.json(users);
}); 



server.listen(3000, () => {
    console.log("running");
}); //opening the server

//next -> to execute the server, write ' node server' In terminal.
