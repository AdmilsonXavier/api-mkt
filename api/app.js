const http = require('http'); 
const express = require('express');

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.json({api : "API MKT"})
})

const server = http.createServer(app); 
server.listen(3000);
console.log("Servidor rodando na porta 3000...")