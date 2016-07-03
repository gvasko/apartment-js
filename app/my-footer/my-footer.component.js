'use strict';

angular.module('apartmentsApp').component('myFooter', {
	templateUrl: 'my-footer/my-footer.template.html',
	controller: function MyFooterController($http) {
		var self = this;
		
		$http.get('data/common-information.json').then(function(response) {
			self.info = response.data;
		});
	}
});
