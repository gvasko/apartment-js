'use strict';

angular.module('apartments').component('apartments', {
	templateUrl: 'apartments/apartments.template.html',
	controller: function ApartmentsController($http) {
		var self = this;
		
		$http.get('data/apartments.json').then(function(response) {
			self.apartmentList = response.data;
		});
	}
});
