var myApp = angular.module('myApp, ['ngRoute']').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'homeController'});
	$routeProvider.otherwise({redirectTo: '/home'});

	$locationProvider.html5Mode({enabled: true, requireBase: false});
}])