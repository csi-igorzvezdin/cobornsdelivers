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

// function LoginCtrl($scope, $location, $rootScope) {
// 	$scope.username_hint = false;
// 	$scope.password_hint = false;

// 	$scope.login = function(){
// 		$scope.templatePath = 'templates/home.html';
// 		alert("$scope.templatePath = " + $scope.templatePath);
// 	};
// }

// function HomeCtrl($scope, $location, $rootScope) {
// 	alert('HomeCtrl');
// 	//$scope.qwe = false;
// }

sampleApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'templates/login.html',
			controller:  'LoginCtrl'
		}).
		when('/home', {
			templateUrl: 'templates/home.html',
			controller:  'HomeCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
	}]);

// sampleApp.directive('includeReplace', function () {
//     return {
//         require: 'ngInclude',
//         link: function (scope, el, attrs) {
//         	alert('asdasd')
//             el.replaceWith(el.children());
//         }
//     };
// });