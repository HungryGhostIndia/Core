const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    userName: { type: String },
    password: { type: String }
});
global.mongoUser = mongoose.model('user', userSchema);


   