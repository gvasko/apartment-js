'use strict';

angular.module('apartmentsApp').component('myFooter', {
	templateUrl: 'my-footer/my-footer.template.html',
	controller: ['ApartmentModel', function MyFooterController(ApartmentModel) {
		var self = this;
		ApartmentModel.getCommonInfo().then(function(info) {
			self.info = info;
		});
	}]
});
