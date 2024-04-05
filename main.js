var express = require ('express');
var fs = require('fs');
var path = require('path');
var app = express ();
var template = require('./lib/template.js');

app.use(express.static('public'));
app.use('/node_module', express.static(path.join(__dirname, '/node_modules')));
app.use('/data', express.static(path.join(__dirname, '/data')));


app.get('/', function(request, response) { 

    fs.readFile('data/data', 'utf-8', function(err, description){
        
        if (err) {
            next(err);

        } else {
            var obj = JSON.parse(description)
            var html = template.HTML(obj.A_kg, obj.A_rpm, obj.B_kg, obj.B_rpm); 
            response.send(html);
        }
    });    
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});