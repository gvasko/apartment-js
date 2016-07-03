'use strict';

angular.module('welcome').component('welcome', {
	templateUrl: 'welcome/welcome.template.html',
	controller: function WelcomeController() {
		console.log('welcome-controller called');
	}
});
