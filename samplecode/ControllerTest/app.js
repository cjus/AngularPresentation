angular.module('myApp', [])
  .controller('myController', ['$scope', function($scope) {
    $scope.getDate = function() {
      return "20140613";
    };
  }]);
