'use strict';

angular.module('apartmentsApp').component('welcome', {
	templateUrl: 'welcome/welcome.template.html',
	controller: ['commonInfo', function WelcomeController(commonInfo) {
		var self = this;
		commonInfo.getCommonInfo().then(function(info) {
			self.info = info;
		});
		$('.carousel').carousel({ interval: 5000 });
	}]
});
