'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var SkillSchema = new Schema({
	id: Schema.Types.ObjectId,
	name: String,
	percentage: Number
});

SkillSchema.path('percentage').validate(function (num) {
	return num >= 1 && num <= 100;
}, 'percentage must be between 1 and 100');

mongoose.model('Skill', SkillSchema);