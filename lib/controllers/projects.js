'use strict';

var mongoose = require('mongoose'),
    Project = mongoose.model('Project'),
    passport = require('passport');

/**
 * Create new Project
 */
exports.create = function(req, res, next) {
  var newProject = new Project(req.body);
  newProject.save(function(err) {
    if(err) return res.json(400, err);
  });
};

exports.update = function(req, res, next) {
  var projectId = req.params.id;
  var newProject = req.body;
  Project.findByIdAndUpdate(projectId, newProject, function(err, project) {
    if(err) return next(err);
  });
};

exports.delete = function(req, res, next) {
  projectId = req.params.id;
  Project.findByIdAndRemove(projectId, function(err, project) {
    if(err) return next(err);
    if(!project) return res.send(404);
  });
};

