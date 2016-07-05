'use strict';

angular.module('apartmentsApp').factory('commonInfo', ['$http', '$q', function($http, $q) {
	return {
		getCommonInfo: function() {
			var deferred = $q.defer();
			
			$http.get('data/common-information.json').then(function(response) {
				deferred.resolve(response.data);
			});
			
			return deferred.promise;
		}
	}
}]);