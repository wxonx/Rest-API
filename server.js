const express = require('express'); //express can be used
const bodyParser = require('body-parser'); //post 요청을 받아 읽을 수 있게 하려고

const server = express(); //making server

server.use(bodyParser.json()); //post method를 통해 data들을 읽을 수 있게

// CRUD (create, read, updete, delete)
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


//Inventory check 이 자리가 중요 순서대로 조회되니까
server.get("/v1/stocks/:name",(req,res)=>{
    const user = users.find((u)=>{
        return u.name === req.params.name;
    });
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({"message": "ERROR"});
    }    
});



// user add
server.post("/v1/stocks", (req, res) => {
    users.push(req.body) 
    res.json(users);
    }); 


//Update     
server.put("/v1/stocks/:name", (req, res) => {
    let foundIndex = users.findIndex(u => u.name === req.params.name);
    if (foundIndex === -1) {
        res.status(404).json({error : "error"});
    } else {
        users[foundIndex] = { ...users[foundIndex], ...req.body};
        res.json(users[foundIndex]);
    }
});

server.listen(3000, () => {
    console.log("running");
}); //opening the server

//next -> to execute the server, write ' node server' In terminal.
