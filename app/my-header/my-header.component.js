'use strict';

angular.module('apartmentsApp').component('myHeader', {
	templateUrl: 'my-header/my-header.template.html',
	controller: ['commonInfo', function MyHeaderController(commonInfo) {
		var self = this;
		commonInfo.getCommonInfo().then(function(info) {
			self.info = info;
		});
	}]
});
