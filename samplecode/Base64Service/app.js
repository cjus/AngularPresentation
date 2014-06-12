angular.module('myApp', [])
  .controller('myController', ['$scope','Base64Service', function($scope, base64Service) {
    $scope.data = {
      message: base64Service.encode('Hello from a simple controller!')
    };
  }]);
