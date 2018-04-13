var config = require('../config').config();
var helperService = require("./helper.service");

exports.register = async (req, next) => {
    let hash = helperService.createHash_bcrypt(req.body.password);
    user = new mongoUser();

    user.email = req.body.email;
    user.password = hash;
    user.name = req.body.name;
    user.phone = req.body.phone;

    user.save((err, data)=>{
        if(err) next(err, null);
        else next(null, data); 
    });
};