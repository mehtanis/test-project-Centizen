'use strict';

angular.module('Home')

.controller('HomeController',
    ['$scope', '$rootScope',
    function($scope, $rootScope, $stateParams, $state, LoginService) {
    $scope.email = $rootScope.email;
    
  }
  ]);