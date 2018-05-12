exports.getSectionById = async (req, next) => {
    try {
        section = await mongoSection.find({_id: req.params.id}).exec();
        if(section && section.length > 0)
            next(null, section[0]);
        else 
            next({"name": "empty_list", "message": "Section with given id not found"}, null);
            
    } catch (error) {
        next(error, null);
    }
}

exports.saveSection = async (req, next) =>{
    try {
        section = new mongoSection();
        section.section_name = req.body.name;
        section.total_tables = req.body.total_tables;
        section.table_prefix_name = req.body.table_prefix_name;
        section.restro = req.body.restroId;
    
        var tables = [];
        for (let i = 0; i < req.body.total_tables; i++) {
            table = {};
            table.table_name = req.body.table_prefix_name + i;
            table.table_status = 'empty';
            tables.push(table);
        }
        section.tables = tables;

        newSection = await section.save(); 
        next(null, {id: section._id, name: section.section_name});
    } catch (error) {
        next(error, null);
    }
}