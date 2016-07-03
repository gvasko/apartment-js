'use strict';

angular.module('apartmentsApp').component('myHeader', {
	templateUrl: 'my-header/my-header.template.html',
	controller: function MyHeaderController() {
		console.log('myHeader controller called');
		this.apartmentProviderName = 'Bors Apartman';
	}
});
