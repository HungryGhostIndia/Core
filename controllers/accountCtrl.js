var passport = require("passport");
var passportLocal = require("../login/passport/passport-local");
var express = require('express');
var router = express.Router();
var jwt = require("../login/jwt/jwtService").jwtProfile;
var accountService = require("../services/account.service");
var helperService = require("../services/helper.service");

router.post("/login", (req, res) => {
  passportLocal.authenticate(req, res, (err, data) => {
    if (err) {
      res.status(200);
      if(err.message){  
        res.json({error: {message: err.message}}); 
      }
      else{
       res.json({error: {message: "something went wrong"}});
      }
    } else {
      data.token = jwt.generateToken(data);
      res.status(200).json({success: {data}});
    }
  });
});

router.post("/register", (req, res) => {
  accountService.register(req, (err, data) => {
    helperService.createResponse(req, res, err, data);
  })
});


module.exports.account = router;