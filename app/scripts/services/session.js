'use strict';

angular.module('portfolioApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
