var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var mongoUri = 'mongodb://localhost/rest-apis';
var db = mongoose.connection;
mongoose.connect(mongoUri);

app.use(bodyParser.json());

app.all("/api/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  return next();
});

db.on('error', function () {
    throw new Error('unable to connect at' + mongoUri);
})


require('./models/recipe');
require('./routes')(app);

app.listen(3004);
console.log('port 3004');
