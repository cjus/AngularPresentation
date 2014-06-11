angular.module('myApp', [])
  .controller('myFirstController', function($scope) {
    $scope.data = {
      message: 'Hello from a simple controller!'
    };
  });

/* Use chanining rather than creating a new app varible in the global scope
var myApp = angular.module('myApp', []);
myApp.controller('myFirstController', function($scope) {
  $scope.data = {
    message: 'Hello from a simple controller!'
  };
});
*/