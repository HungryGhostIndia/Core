var config = require('../config').config();
var bcryptNodejs = require("bcrypt-nodejs");


exports.register = async (req, next) => {
    try {
        var user = await mongoUser.findOne({userName: req.body.username});
        if(!user){
            let hash = bcryptNodejs.hashSync(req.body.password);
            user = new mongoUser();
            user.userName = req.body.username;
            user.password = hash;
            var user = await user.save();
            next(null, "User Saved"); 
        } else {
            next(null, "User Already Exist");
        }    
    } catch (error) {
        next(error, null);
    }
};