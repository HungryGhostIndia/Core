var passport = require("passport");
var passportLocal = require("../login/passport/passport-local");
var express = require('express');
var router = express.Router();
var jwt = require("../login/jwt/jwtService").jwtProfile;
var accountService = require("../services/account.service");

router.post("/login", (req, res) => {
  passportLocal.authenticate(req, res, (err, data) => {
    if (err) {
      res.status(200);// set status as per the error message
      if(err.message){  
        res.json({error: {message: err.message}}); // return a proper error message here
      }
      else{
       res.json({error: {message: "something went wrong"}}); // return a proper error message here
      }
    } else {
      data.token = jwt.generateToken(data);
      res.status(200).json({success: {data}});
    }
  });
});

router.post("/register", (req, res) => {
  accountService.register(req, (err, data) => {
    if (err) {
        res.status(200).json({error: {message: err}});
    }
    else {
        res.status(200).json({success: {data: data}})
    }
  })
});


module.exports.account = router;