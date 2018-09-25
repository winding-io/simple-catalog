const express = require('express');
const phones = require('./phones.json');
const app = express();

const front_port = 3000;
const back_port = 8000;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:'+ front_port);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/phones', function (req, res) {
  res.send(phones);
});

app.listen(back_port, function () {
  console.log('Example app listening on port ' + back_port + '!');
});