#!/usr/bin/env node

var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var inText = fs.readFileSync('index.html');
    var buf = new Buffer(inText);
    response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
