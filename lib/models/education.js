'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EducationSchema = new Schema({
  id: Schema.Types.ObjectId,
  education: String,
  school: String,
  completionDate: Date
});

mongoose.model('Education', EducationSchema);
