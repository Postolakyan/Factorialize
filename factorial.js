const express = require("express")
const path = require('path')
const app = express()

var port = process.env.port || 3000

// View Engine Setup
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var myNumber = req.url;
  res.write(myNumber);
  res.end();
}).listen(8080);



function factorial(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }