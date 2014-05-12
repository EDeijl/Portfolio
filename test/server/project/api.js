'use strict';

var should = require('should'),
    app = require('../../../server'),
    request = require('supertest');

describe('GET /api/projects', function() {
  
  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/projects')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});

describe('PUT /api/projects/:id', function() {
  var project = {
    name: 'Sample project 2'
  };
  it('should not update the object in the database if the user is not authenticated', function(done) {
    request(app)
      .put('/api/projects/5368e207bc36fb1a092a1c57', project)
      .expect(401)
      .end(function(err, res) {
        if(err) return done(err);
        done();
      });
  });
});
