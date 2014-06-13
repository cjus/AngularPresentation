angular.module('myApp', [])
  .controller('myController', ['$scope','Base64Service', function($scope, base64Service) {
    $scope.base64Encode = function(message)  {
      return base64Service.encode(message);
    };
  }]);
