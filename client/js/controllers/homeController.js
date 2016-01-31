myApp.controller('homeController', ['$scope', function($scope){
	$scope.myInterval = 3500;
	$scope.slides = [{
		image: "imgs/angular-logo.jpeg",
		link: "https://angularjs.org"
	},
	{
		image: "imgs/nodejs_logo.png",
		link: "https://nodejs.org/en"
	},
	{
		image: "imgs/AngularJS-large-resized.png"
	},
	{
		image: "imgs/nodejs-mongodb.png"
	},
	{
		image: "imgs/Angular-2-beta.jpg",
		link: "https://angular.io"
	}]
}]);