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
		}
	}
}]);