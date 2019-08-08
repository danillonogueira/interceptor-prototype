(function(angular) {
  'use strict';

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
            templateUrl: 'app/login/login-view.html',
            controller: 'LoginController as ctrl'
          })
          .otherwise('/login');
      }
    ]);
})(angular);