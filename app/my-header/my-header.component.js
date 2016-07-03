'use strict';

angular.module('apartmentsApp').component('myHeader', {
	templateUrl: 'my-header/my-header.template.html',
	controller: function MyHeaderController($http) {
		var self = this;
		
		$http.get('data/common-information.json').then(function(response) {
			self.info = response.data;
		});
	}
});
