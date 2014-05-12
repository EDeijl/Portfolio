'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ProjectSchema = new Schema({
	id: Schema.Types.ObjectId,
	name: String,
	date: Date,
	description: String,
	image: String,
	link: String
});

mongoose.model('Project', ProjectSchema);
