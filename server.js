var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public'));

function rnGreeting() {
    
    var arr = ["hello", "ciao", "howdy", "greetings", "salut", "hola", "Hey"]
    
    var greeting = arr[Math.floor(Math.random() * 4)];
    
    
    return greeting;
}

app.get('/gr/:name', function(req, res) {
  res.send(rnGreeting() + " " + req.params.name)
})

app.listen(process.env.PORT || 8080, function(){
    console.log("The server started on port 8080");
})

