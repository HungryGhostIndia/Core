const Schema = mongoose.Schema;

const waiterCredentialSchema = new Schema({
    user_name: { type: String, required: [true, 'User Name is empty'], unique: true},
    password: { type: String, required: [true, 'Password is empty'] },
    restro: { type: Schema.Types.ObjectId, ref: 'restro_detail' },
});

global.mongoWaiterCredentials = mongoose.model('waiter_credential', waiterCredentialSchema);