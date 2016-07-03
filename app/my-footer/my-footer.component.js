'use strict';

angular.module('apartmentsApp').component('myFooter', {
	templateUrl: 'my-footer/my-footer.template.html',
	controller: function MyFooterController() {
		console.log('myFooter controller called');
		this.apartmentProviderName = 'Bors Apartman';
	}
});
