angular.module('myApp', [])
  // controller
  .controller('myController', ['$scope', 'StartDate',
    function($scope, myDateProvider) {
      $scope.startDate = myDateProvider.getStartDate();
    }])

  // provider
  .provider('StartDate', function() {
    this.startDate = new Date();
    this.$get = function() {
      var startDate = this.startDate;
      return {
        getStartDate: function() {
          return startDate;
        }
      };
    };
    this.setStartDate = function(newDate) {
       this.startDate = newDate;
    };
  })

  // config
  .config(function(StartDateProvider) {
    //StartDateProvider.setStartDate(new Date("October 13, 1975 11:13:00"));
  });
