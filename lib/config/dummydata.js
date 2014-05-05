'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Thing = mongoose.model('Thing'),
  Project = mongoose.model('Project'),
  Skill = mongoose.model('Skill'),
  Employment = mongoose.model('Employment'),
  Education = mongoose.model('Education');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
Thing.find({}).remove(function() {
  Thing.create({
    name : 'HTML5 Boilerplate',
    info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
    awesomeness: 10
  }, {
    name : 'AngularJS',
    info : 'AngularJS is a toolset for building the framework most suited to your application development.',
    awesomeness: 10
  }, {
    name : 'Karma',
    info : 'Spectacular Test Runner for JavaScript.',
    awesomeness: 10
  }, {
    name : 'Express',
    info : 'Flexible and minimalist web application framework for node.js.',
    awesomeness: 10
  }, {
    name : 'MongoDB + Mongoose',
    info : 'An excellent document database. Combined with Mongoose to simplify adding validation and business logic.',
    awesomeness: 10
  }, function() {
      console.log('finished populating things');
    }
  );
});

// Clear old users, then add a default user
User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Project.find({}).remove(function() {
  Project.create({
    id: new mongoose.Types.ObjectId(),
    name: 'Sample project 1',
    date: new Date(),
    description: 'Lorum Ipsum...',
    image: 'http://placehold.it/100x350.png',
    link: 'http://erikdeijl.com'
  }, function() {
    console.log('finished populating projects');
   }
  );
});

Skill.find({}).remove(function() {
  Skill.create({
    id: new mongoose.Types.ObjectId(),
    name: 'HTML',
    percentage: 60
  }, function() {
    console.log('finished populating skills');
  });
});

Employment.find({}).remove(function() {
  Employment.create({
    id: new mongoose.Types.ObjectId(),
    employer: 'Arcaplex',
    function: 'Crew Leader',
    Description: 'Lorum Ipsum...',
    startDate: new Date(2011, 6, 6),
    endDate: new Date(2013, 1, 1),
    currentEmployer: false
  }, function() {
    console.log('finished populating employment');
  });
});

Education.find({}).remove(function() {
  Education.create({
    id: new mongoose.Types.ObjectId(),
    education: 'HAVO',
    school: 'Blaise Pascal',
    completionDate: new Date(2011, 7, 1)
  });
});

