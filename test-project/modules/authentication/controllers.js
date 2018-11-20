'use strict';

angular.module('Authentication')

.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService, demoService) {
        // reset login status

		
/*angular.module('Authentication').factory("demoService", function($rootScope){
	this.TempData = "";
	this.SetData = function(d){
		this.TempData = d;
		$rootScope.$emit("dummtevnt");
	}
	this.GetData = function(d){
		return this.TempData;
	}
	
 
	
});*/
		
		
    AuthenticationService.ClearCredentials();
		
  $scope.data = {  
    model: null,
    subscriptionOptions: [
      {id: '1', name: 'Basic', Selected:false},
      {id: '2', name: 'Advanced', Selected:true},
      {id: '3', name: 'Pro', Selected:false},
	  //$scope.userSelect = "2",
    ]
	
   };
   
   $scope.reset = function() {
    $scope.list = {};
}
   
        $scope.login = function () {
            $scope.dataLoading = true;
			
			var d = $scope.email;  
			//demoService.SetData(d);  
			
            AuthenticationService.Login($scope.email, $scope.subscriptionOptions, $scope.password, function (response) {
						
                if (response.success) {
                    AuthenticationService.SetCredentials($scope.email, $scope.subscriptionOptions, $scope.password);
					$rootScope.email = $scope.email;
						$scope.email = '';
                    $location.path('/');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
		
		
   
    }]);