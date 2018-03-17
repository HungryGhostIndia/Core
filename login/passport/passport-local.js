var LocalStrategy = require('passport-local').Strategy;
var passport = require("passport");
const crypto = require("crypto");
var bcryptNodejs = require("bcrypt-nodejs");
var mongoInstance = require('../../models/mongoModels');

exports.setup =  () => {
  passport.use(new LocalStrategy({
          passReqToCallback : true // allows us to pass back the entire request to the callback
      },
       async (req, username, password, done) => {
        try {
          var user = await mongoUser.findOne({userName: username});
          if(user){
            bcryptNodejs.compare(password, user.password, (err, res) => {
                if(err)
                  return  done(null, false, {message: err});
                else if(res)
                  return done(null, {displayName: user.username,id: user._id});
                else 
                  return done(null, false, {message: "Invalid credentials"}); 
            });
          } else {
            return done(null, false, {message: "User does not exist"}); 
          }
        } catch (error) {
          return done(null, false, {msg: error}); 
        }
    }
  ));

  passport.serializeUser(function (user, done) {
    if (user) {
      done(null, user); // nothing is required
    }
  });

  passport.deserializeUser(function (user, done) {
    return done(null, user); // nothing is required
  });
};

exports.authenticate = function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      next(err, null);
    }
    else if (!user) {
      next(info, null);
    }
    else {
      next(null, user);
    }
  })(req, next);
};
