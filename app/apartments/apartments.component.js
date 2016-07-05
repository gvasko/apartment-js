'use strict';

angular.module('apartmentsApp').component('apartments', {
	templateUrl: 'apartments/apartments.template.html',
	controller: ['$http', function ApartmentsController($http) {
		var self = this;
		
		$http.get('data/apartments.json').then(function(response) {
			self.apartmentList = response.data;
		});
	}]
});
