(function(angular) {
  'use strict';

  console.log('app loaded');

  // Injecting
  angular.module('am', [
    'ngRoute',
    'am.login'
  ]);

  // Route configuration
  angular
    .module('am')
    .config([
      '$routeProvider', 
      function($routeProvider) {
        $routeProvider
          .when('/login', {
            template: '<am.login></am.login>'
          })
          .otherwise('/login');
      }
    ]);
})(angular);