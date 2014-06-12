angular.module('myApp', [])
  .controller('myController', ['$scope', 'FirstService', 'FirstFactory',
    function($scope, myFirstService, myFirstFactory) {
      $scope.userFromService = myFirstService.getUser();
      $scope.createUserWithFactory = function(firstName, lastName) {
        var user = myFirstFactory.createUser(firstName, lastName);
        return JSON.stringify(user);
      };
  }])
  .service('FirstService', function() {
    var user = {
      "firstName": "Garry",
      "lastName": " Kasparov"
    };
    this.getUser = function() {
      return JSON.stringify(user);
    };
  })
  .factory('FirstFactory', function() {
    return {
      createUser: function(firstName, lastName) {
        return {
          "firstName": firstName,
          "lastName": lastName
        };
      }
    };
  });
