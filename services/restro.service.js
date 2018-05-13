var helperService = require("./helper.service");

exports.saveRestro = (req, next) =>{
    restro = new mongoRestroDetail();

    restro.name = req.body.name;
    restro.website_url = req.body.website_url
    restro.property_type = req.body.property_type;
    restro.contact_number = req.body.contact_number;
    restro.corporate_email_id = req.body.email;
    restro.total_employees = req.body.total_employees;
    restro.total_sections = req.body.total_sections;
    restro.address = req.body.address;
    restro.owner = req.user.id;
    
    restro.save((err)=>{
        if (err) next(err, null);
        else {
            next(null, {id: restro._id, name: restro.name});
        } 

    }); 
}

exports.saveWaiterCredentials = (req, next) =>{
    waiterCredentials = new mongoWaiterCredentials();
    let hash = helperService.createHash_bcrypt(req.body.password);

    waiterCredentials.user_name = req.body.user_name;
    waiterCredentials.password = hash;
    waiterCredentials.restro = req.body.restroId;
    
    waiterCredentials.save((err)=>{
        if(err) next(err, null);
        else next(null, {id: waiterCredentials._id, name: waiterCredentials.user_name});
    }); 
}

exports.getRestroDetails = (req, next) => {
    //Waiter login check
    if(req.user.loginType == 2){
        mongoWaiterCredentials.findOne({ _id: req.user.id }).populate('restro').exec((err, data) => {
            if (err) next(err, null);
            else{
                mongoSection.find({restro: data.restro._id}).exec((err, sections)=>{
                    if (err) next(err, null);
                    else{ data.restro.sections = sections;
                        next(null, data.restro);
                    } 
                })
            } 
        });
    } else {
        mongoRestroDetail.findOne({ owner: req.user.id }).exec((err, restro) => {
            if (err) next(err, null);
            else{
                if (restro) {
                    mongoSection.find({restro: restro._id}).exec((err, sections)=>{
                        if (err) next(err, null);
                        else{ restro.sections = sections;
                            next(null, restro.restro);
                        } 
                    })
                } else {
                    next({"name": "empty_list", "message": "No restro listed to this user"}, null);
                }

            } 
        });
    }
}

