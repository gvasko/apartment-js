'use strict';

angular.module('welcome').component('welcome', {
	templateUrl: 'welcome/welcome.template.html',
	controller: function WelcomeController($http) {
		var self = this;
		
		$http.get('data/common-information.json').then(function(response) {
			self.info = response.data;
		});

		$('.carousel').carousel({ interval: 5000 });
	}
});
