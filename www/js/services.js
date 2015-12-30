angular.module('starter.services', [])
.factory('GitService', function($http, $state) {
	var data = [];
	
	$http.get('https://api.github.com/users/github/repos').then(function(resp) {
		console.log('Success', resp);
		data = resp.data;
		$state.go($state.current, {}, {reload: true});
	}, function(err) {
		console.error('ERR', err);
		alert(err.status);
	})

	return {
		all: function() {
			return data;
		}
	}
});
