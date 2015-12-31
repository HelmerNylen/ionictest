angular.module('starter.controllers', [])

.controller('GitCtrl', function($scope, $state, GitService, DetailService) {
	$scope.$on('$ionicView.enter', function(e) {
		$scope.data = GitService.all();
	});
	$scope.details = function(obj) {
		DetailService.set(obj);
		$state.go('app.detail');
	};
})

.controller('DetailCtrl', function($scope, DetailService) {
	$scope.obj = DetailService.get();
	if ($scope.obj)
	{
		$scope.creationTime = new Date($scope.obj.created_at).toLocaleDateString();
		$scope.link = $scope.obj.homepage;
		//snygga till urlen
		if ($scope.link)
		{
			$scope.link = $scope.link.replace("http://", "").replace("https://", "");
			
			if ($scope.link.length > 4 && $scope.link.substring(0, 4) == "www.")
				$scope.link = $scope.link.substring(4);
			
			if ($scope.link[$scope.link.length - 1] == '/')
				$scope.link = $scope.link.substring(0, $scope.link.length - 1);
		}
	}
});
