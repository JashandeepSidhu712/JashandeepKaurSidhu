var express = require("express");

var mysql = require("mysql");

var app = express();

app.listen(2006, function(){
    console.log("Server Started");
})

//to open index of the project
app.get("/",function(req, resp){
    var path = __dirname+"/public/index.html";
    resp.sendFile(path);
})

/////////////////////////////////                        to add pic/css/js files to the project, rather acceptable by server 
app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));