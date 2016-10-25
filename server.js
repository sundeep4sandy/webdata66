var express  = require('express');
var app = express();
var fs = require('fs');
var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: 'http://localhost:8080'}));

app.get('/getData',function(req,res){
    fs.readFile("data.json",'utf8',function(err,data){
    console.log(data);
    res.end(data);
     });
})

var server = app.listen(8081, function () {
    var host = "localhost";
    var port = 8081;
    console.log("data at http://%s:%s/getData", host, port)
})