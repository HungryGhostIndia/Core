var https = require("https");
var http = require("http");
var express = require('express');       
var app = express();             
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config').config();
var fs = require("fs");
var passport = require("passport");
global.mongoose =  require('mongoose');
require('./models/mongo.models');

app.use(passport.initialize());
// Add headers
app.use(function (req, res, next) {
    if(config.allowedOrigins.indexOf(req.headers.origin) > -1){
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    }
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

var options = {
  ciphers: config.server.ciphers,
  honorCipherOrder: config.server.honorCipherOrder,
  secureProtocol: config.server.secureProtocol
};

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
var port = process.env.PORT || 8882;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
require('./routes')(app);

//setup passport authentication
require("./login/passport/setup").setup();

// START THE SERVER
// =============================================================================

// var server = https.createServer(options, app).listen(port);
var server = http.createServer(app).listen(port);
server.timeout = 10 * 60 * 1000;

mongoose.connect(config.database.mongoDb);

console.log("server has been started at " + port);
process.on('uncaughtException', function (err) {
  console.log("Something went wrong: ", err);
});

