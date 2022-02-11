const express = require('express'); //express can be used
const bodyParser = require('body-parser'); //post 요청을 받아 읽을 수 있게 하려고

const server = express(); //making server

server.use(bodyParser.json()); //post method를 통해 data들을 읽을 수 있게


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

//name 조회 이 자리가 중요
server.get("/v1/stocks/:name",(req,res)=>{
    console.log(req.params.name);
});


server.post("/v1/stocks", (req, res) => {
    users.push(req.body) // user add
    res.json(users);
    }); 



server.listen(3000, () => {
    console.log("running");
}); //opening the server

//next -> to execute the server, write ' node server' In terminal.
