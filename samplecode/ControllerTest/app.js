angular.module('myApp', [])
  .controller('myController', function($scope) {
    $scope.getDate = function() {
      return "20140613";
    };
  });
