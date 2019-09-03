const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
var port = process.env.PORT || 5000;

app = express();
app.use(serveStatic(__dirname + "../client/dist"));

app.listen(port);
console.log('Server started ' + port);