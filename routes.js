var jwt = require("./login/jwt/jwtService").jwtProfile;
var config = require("./config").config();
var expressJwt = require("express-jwt");
var pathToRegexp = require('path-to-regexp');

module.exports = function (app) {
  var unprotected = [
    pathToRegexp('/api/account/*')
  ];

  app.use("/api", expressJwt({secret: secretCycleCallBack}).unless({path: unprotected}));
  app.use('/api/account', require('./controllers/accountCtrl').account);
  app.use('/api/restro', require('./controllers/restroCtrl').restro);
  app.use('/api/section', require('./controllers/sectionCtrl').section);
};


var secretCycleCallBack = function (req, payload, done) {
    //Generate new token for a authenticated request
    if(payload){
      var token = jwt.generateToken({username: payload.username});

      // Set the session details for the request in the request header
      // Add the new token to request header
      req.headers.session = {username: payload.username};
      req.headers['x-token'] = token;

      //Fetch and return the secrect key for the tenant of the request
      var sect = config.jwt.secret;
      done(null, sect);
    }
    else
      done(null, null);

};
