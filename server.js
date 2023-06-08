const { json } = require('express/lib/response');
const fs = require('fs/promises');
const express = require("express")
const path = require("path")
const app = express()


const file_path = path.join(__dirname,"public")

app.get("/",(req,res)=>{
  res.send("home page")
})

app.get("/about",(req,res)=>{
  res.send(`<h1>about us </h1> ${req.query.name}`)
})

app.use(express.static(file_path))

app.listen(5000)



/* api using http
const http = require("http")
http.createServer((req,resp)=>{
  resp.writeHead(200,{'content-type':'application/json'})
  resp.write(JSON.stringify([
    {name:"amar abbas","age":12},
  {name:"amar abbas","age":13}
  ]))
  
  resp.end()
}).listen(5000);
console.log("working")
*/



