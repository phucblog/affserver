const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
	_id: Schema.ObjectId,
	email: {
		type: String,
		required: true,
		trim: true,
	},
	firstname: {
		type: String,
		required: true,
		trim: true,
	},
	lastname: {
		type: String,
		required: true,
		trim: true,
	},
	password: {
		type: String,
		required: true,
		trim: true,
	},
});

module.exports = mongoose.model('User', User);
