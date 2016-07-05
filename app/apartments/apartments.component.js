'use strict';

angular.module('apartmentsApp').component('apartments', {
	templateUrl: 'apartments/apartments.template.html',
	controller: ['ApartmentModel', function ApartmentsController(ApartmentModel) {
		var self = this;
		
		ApartmentModel.getApartments().then(function(apartments) {
			self.apartmentList = apartments;
		});
	}]
});
