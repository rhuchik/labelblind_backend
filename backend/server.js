const cors = require('cors');
var multer = require('multer');
const path = require("path") 
const fileupload=require('express-fileupload')
const {Parser} = require('json2csv');
const csvjson = require("csvjson")
const fetch = require("node-fetch") 
const express=require("express");
const app=express();
const bodyParser=require("body-parser");
var values=[];
//Middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileupload())
app.use(cors())


      
app.use("/api/upload", require("./utils/file_operations"));
app.use("/api/currency",require("./utils/currency"))
app.use("/api/sendmail",require("./utils/sendmail"))


app.get("/", (req, res) => res.json({ msg: "Api is running" }));

app.listen(8080, function(req, res){
    console.log('server listening at port no 5000')
});