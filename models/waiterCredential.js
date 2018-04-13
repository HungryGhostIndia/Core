const Schema = mongoose.Schema;

const waiterCredentialSchema = new Schema({
    user_name: { type: String, required: [true, 'email is empty']},
    password: { type: String, required: [true, 'Password is empty'] },
    restro: { type: Schema.Types.ObjectId, ref: 'restro_detail' },
});

global.mongoWaiterCredentials = mongoose.model('waiter_credential', waiterCredentialSchema);