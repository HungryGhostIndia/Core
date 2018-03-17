const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: { type: String, required: [true, 'UserName is empty'], unique: true, validate: { isAsync: true,
        validator: (v) => { return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v);},
        message: '{VALUE} is not a valid email!'
      } 
    },
    password: { type: String, required: [true, 'Password is empty'] }
});
global.mongoUser = mongoose.model('user', userSchema);


   