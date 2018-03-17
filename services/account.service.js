var config = require('../config').config();
var bcryptNodejs = require("bcrypt-nodejs");


exports.register = async (req, next) => {
    try {
        let hash = bcryptNodejs.hashSync(req.body.password);
        user = new mongoUser();
        user.userName = req.body.username;
        user.password = hash;
        var user = await user.save();
        next("User Saved", null);     
    } catch (error) {
        next(null, error);
    }
};