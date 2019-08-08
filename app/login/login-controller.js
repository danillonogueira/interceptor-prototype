(function(angular) {
  'use strict';

  const LoginController = function($scope, LoginService) {
    $scope.email = '';
    $scope.password = '';
    this.login = function() {
      LoginService.trigger(
        { 
          email: $scope.email, 
          password: $scope.password 
        }
      );
    };
  };

  angular.$inject = ['LoginService'];
  angular
    .module('am.login')
    .controller('LoginController', LoginController);
})(angular);