var sampleApp = angular.module('app', ['ngRoute']);

function MainCtrl($scope, $location, $rootScope) {
	$scope.templatePath = 'templates/login.html';

	$scope.username_hint = false;
	$scope.password_hint = false;

	$scope.home = function(){
		$scope.templatePath = 'templates/home.html';
	};

	$scope.login = function(){
		$scope.templatePath = 'templates/login.html';
	};
}
