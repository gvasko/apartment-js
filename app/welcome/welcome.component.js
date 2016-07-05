'use strict';

angular.module('apartmentsApp').component('welcome', {
	templateUrl: 'welcome/welcome.template.html',
	controller: ['ApartmentModel', function WelcomeController(ApartmentModel) {
		var self = this;
		ApartmentModel.getCommonInfo().then(function(info) {
			self.info = info;
		});
		$('.carousel').carousel({ interval: 5000 });
	}]
});
