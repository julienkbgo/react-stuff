const express = require('express');
const formidable = require('express-formidable');
const PORT = 3000
var app = express();

app.use(formidable());

app.get('/', function(req,res){
 res.send('this is my test for postman');
})

app.post('/', function(req,res){
 console.log(req.fields);
 res.send('linking with postman');
})

app.listen(PORT,function(){console.log ('listening on'+ PORT);})
