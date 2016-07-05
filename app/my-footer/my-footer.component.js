'use strict';

angular.module('apartmentsApp').component('myFooter', {
	templateUrl: 'my-footer/my-footer.template.html',
	controller: ['commonInfo', function MyFooterController(commonInfo) {
		var self = this;
		commonInfo.getCommonInfo().then(function(info) {
			self.info = info;
		});
	}]
});
