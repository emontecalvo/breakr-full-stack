import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const mongooseHidden = require('mongoose-hidden')();

const UserSchema = new mongoose.Schema({
	username: { type: String, required: true, unique: true }, 
	password: { type: String, hide: true }, // hide true
	timer: { breaks: { type: Array }, work: { type: Array }}
});

UserSchema.methods.validatePassword = function (password, callback) {
	bcrypt.compare(password, this.password, callback);
};

UserSchema.methods.hashPassword = (password, callback) => {
	bcrypt.genSalt(10, (err, salt) => {
		if (err) {
			return callback(err);
		}

		bcrypt.hash(password, salt, callback);
	})
};

UserSchema.plugin(mongooseHidden);
const User = mongoose.model('User', UserSchema);

export default User;