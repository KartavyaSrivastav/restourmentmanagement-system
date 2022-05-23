
const request= require("request");
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

app.set('view engine','ejs');
app.use(express.static("public"));



app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.get("/home",function(req,res){
    res.render("header")
});




app.listen(3000,function(){
    console.log("your port is starting on 3000");
});
