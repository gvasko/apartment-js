'use strict';

angular.module('apartmentsApp').
	config(['$locationProvider', '$routeProvider',
	function config($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix('!');
		
		$routeProvider.
			when('/welcome', {
				template: '<welcome></welcome>'
			}).
			when('/apartments', {
				template: '<apartments></apartments>'
			}).
			otherwise('/welcome');
		}
]);
