angular.module('myApp', [])
  .controller('myFirstController', function($scope) {
    $scope.data = {
      message: 'Hello from the first controller!'
    };
  })
  .controller('mySecondController', function($scope) {
    $scope.data2 = {
      message: 'Hello from the second controller!'
    };
  })
  .controller('myThirdController', function($scope) {
    $scope.data3 = {
      message: 'Hello from the third controller!'
    };
  });
