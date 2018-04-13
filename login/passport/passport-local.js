var LocalStrategy = require('passport-local').Strategy;
var passport = require("passport");
const crypto = require("crypto");
var bcryptNodejs = require("bcrypt-nodejs");

exports.setup =  () => {
  passport.use(new LocalStrategy({
          passReqToCallback : true // allows us to pass back the entire request to the callback
      },
       async (req, username, password, done) => {
        try {
          var user;
          if(req.body.loginType == 2)
            user = await mongoWaiterCredentials.findOne({user_name: username});  
          else
            user = await mongoUser.findOne({email: username});
          if(user){
            bcryptNodejs.compare(password, user.password, (err, res) => {
                if(err)
                  return  done(null, false, {message: err});
                else if(res){
                  if(req.body.loginType == 2)
                    return done(null, {displayName: user.user_name, id: user._id, loginType: req.body.loginType});
                  else
                    return done(null, {displayName: user.name, id: user._id, loginType: req.body.loginType});
                }
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
