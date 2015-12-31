angular.module('starter.services', [])
//service för att hämta data från github
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
})
//service för att skicka data till detaljvyn
.factory('DetailService', function($http) {
	var data = null;

	return {
		set: function(obj) {
			data = obj;
		},
		get: function() {
			return data;
		},
		clear: function() {
			data = null;
		}
	}
});

