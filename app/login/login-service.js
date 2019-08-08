(function(angular) {
  'use strict';

  const LoginService = function($http, $cookies) {
    return {
      trigger: function(userData) {
        $http({
          method: 'POST',
          url: 'http://192.168.0.95:8080/escritorio/api/auth/signin',
          data: {
            email: userData.email,
            password: userData.password,
            usernameOrEmail: userData.email
          }
        })
          .then((res) => {
            $cookies.get('Bearer');
            $cookies.put('Bearer', res.data.accessToken);
            console.log($cookies.getAll());
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  LoginService.$inject = ['$http', '$cookies'];
  angular
    .module('am.login')
    .factory('LoginService', LoginService);
})(angular);