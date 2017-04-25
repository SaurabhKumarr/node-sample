var express = require("express");
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var database = require('./config/database');
var methodOverride = require('method-override');




mongoose.connect(database.remoteUrl);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); 
app.set(express.static('src/view'));
app.listen(5000);




require('./src/router/bookrouter')(app);