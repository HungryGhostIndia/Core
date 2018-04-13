const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: [true, 'email is empty'], unique: true, validate: { isAsync: true,
        validator: (v) => { return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v);},
        message: '{VALUE} is not a valid email!'
      } 
    },
    password: { type: String, required: [true, 'Password is empty'] },
    name: { type: String, required: [true, 'Name is empty'] },
    phone: { type: String, required: [true, 'Phone is empty'] },
    
    restros: [{type: Schema.Types.ObjectId, ref: 'restro_detail'}]
});

global.mongoUser = mongoose.model('user', userSchema);


   