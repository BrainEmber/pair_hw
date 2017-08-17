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
	this.createGame = function(){
		$http({
			method: 'POST',
			url: '/games',
			data: {
				title: this.title,
				description: this.description,
				year: this.year
		}
		}).then(
		function(response){
			controller.getGames();
		},
		function(error){

		});
	};
	this.getGames();

	this.editGame = function(game){
		console.log(game);
		console.log('h1');

		$http({
			method: "PUT",
			url: "/games/" + game._id,
			data: {
				title: this.updatedTitle,
				description: this.updatedDescription,
				year: this.updatedYear,
			}
		}).then(
			function(response){
				console.log(response);
				controller.getGames();
			},
			function(err){
				console.log(err);
			}
		);
	}
}]);
