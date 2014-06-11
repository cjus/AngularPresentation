angular.module('myApp', [])
  .run(function($rootScope) {
    'use strict';
    $rootScope.data = {
      message: "Hello from the RootScope"
    };
  });



