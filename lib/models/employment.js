'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EmploymentSchema = new Schema({
  id: Schema.Types.ObjectId,
  employer: String,
  function: String,
  description: String,
  startDate: Date,
  endDate: Date,
  isCurrentEmployer: Boolean
});

mongoose.model('Employment', EmploymentSchema);
