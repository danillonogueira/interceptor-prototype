(function __LoginModule(angular) {
  'use strict';

  console.log('login-module loaded');
  angular.module('am.login', [
    'ngRoute',
    'ngCookies'
  ]);
})(angular);