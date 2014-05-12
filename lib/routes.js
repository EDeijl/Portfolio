'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    users = require('./controllers/users'),
    projects = require('./controllers/projects'),
    session = require('./controllers/session'),
    middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.route('/api/awesomeThings')
    .get(api.awesomeThings);
  
  app.route('/api/users')
    .post(users.create)
    .put(users.changePassword);
  app.route('/api/users/me')
    .get(users.me);
  app.route('/api/users/:id')
    .get(users.show);

  app.route('/api/session')
    .post(session.login)
    .delete(session.logout);

  app.route('/api/projects')
    .get(api.projects)
    .post(middleware.auth, projects.create)
    .delete(middleware.auth, projects.delete);

  app.route('/api/projects/:id')
    .put(middleware.auth, projects.update);

  app.route('/api/skills')
    .get(api.skills);

  app.route('/api/employment')
    .get(api.employment);
  
  app.route('/api/education')
    .get(api.education);

  // All undefined api routes should return a 404
  app.route('/api/*')
    .get(function(req, res) {
      res.send(404);
    });

  // All other routes to use Angular routing in app/scripts/app.js
  app.route('/partials/*')
    .get(index.partials);
  app.route('/*')
    .get( middleware.setUserCookie, index.index);
};
