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
        if(!err) next(null, `Saved with Id-${restro._id}`);
    }); 
}