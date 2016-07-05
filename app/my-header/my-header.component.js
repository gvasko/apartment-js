'use strict';

angular.module('apartmentsApp').component('myHeader', {
	templateUrl: 'my-header/my-header.template.html',
	controller: ['ApartmentModel', function MyHeaderController(ApartmentModel) {
		var self = this;
		ApartmentModel.getCommonInfo().then(function(info) {
			self.info = info;
		});
	}]
});
