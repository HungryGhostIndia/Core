const Schema = mongoose.Schema;

const sectionSchema = new Schema({
    section_name: { type: String, required: [true, 'Section name is empty'] },
    total_tables: { type: Number, required: [true, 'Total Tables is empty'] },
    table_prefix_name: { type: String, required: [true, 'Table Prefix Name is empty'] },
    tables: { type: Object },

    restro: { type: Schema.Types.ObjectId, ref: 'restro_detail' },
    
});

global.mongoSection = mongoose.model('section', sectionSchema);