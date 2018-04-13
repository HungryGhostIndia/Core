const Schema = mongoose.Schema;

const restroSchema = new Schema({
    logo: Buffer,
    name: { type: String, required: [true, 'Restro name is empty'] },
    website_url: { type: String},
    property_type: { type: String, required: [true, 'Property type is empty'] },
    contact_number: { type: String, required: [true, 'Contact Number is empty'] },
    corporate_email_id:{ type: String, required: [true, 'email is empty'], unique: true, validate: { isAsync: true,
        validator: (v) => { return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v);},
        message: '{VALUE} is not a valid email!'
      } 
    },
    total_employees: { type: Number, required: [true, 'Total Employ is empty'] },
    total_sections: { type: Number, required: [true, 'Total section is empty'] },
    address: { type: String, required: [true, 'address is empty'] },
    
    owner: { type: Schema.Types.ObjectId, ref: 'user' },

    sections: [{type: Schema.Types.ObjectId, ref: 'section'}],
    waitersCredentials: [{type: Schema.Types.ObjectId, ref: 'waiter_credential'}],
});

global.mongoRestroDetail = mongoose.model('restro_detail', restroSchema);