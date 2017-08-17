const app = angular.module('GamesApp', []);

app.controller('MainController', ['$http', function($http){
	const controller = this;

	this.getGames = function(){
		$http({
			method: 'GET',
			url: '/games'
		}).then(
		function(response){
			controller.games = response.data;
		},
		function(error){

		});
	};

	
}]);