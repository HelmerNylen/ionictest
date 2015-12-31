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
	$scope.creationTime = new Date($scope.obj.created_at).toLocaleDateString();
});
