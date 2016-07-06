'use strict';

angular.module('apartmentsApp').factory('ApartmentModel', ['$http', '$q', function($http, $q) {
	return {
		
		getCommonInfo: function() {
			var deferred = $q.defer();
			
			$http.get('data/common-information.json').then(function(response) {
				deferred.resolve(response.data);
			});
			
			return deferred.promise;
		},
		
		getApartments: function() {
			var deferred = $q.defer();

			$http.get('data/apartments.json').then(function(response) {
				deferred.resolve(response.data);
			});

			return deferred.promise;
		},
		
		getApartment: function(apartmentID) {
			var deferred = $q.defer();
			
			this.getApartments().then(function(apartments) {
				var selected = apartments.find(function(apartment) {
					return apartment.id == apartmentID;
				});
				deferred.resolve(selected);
			});
			
			return deferred.promise;
		}
	}
}]);