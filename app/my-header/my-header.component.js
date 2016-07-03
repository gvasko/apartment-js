'use strict';

angular.module('apartmentsApp').component('myHeader', {
	templateUrl: 'my-header/my-header.template.html',
	controller: function MyHeaderController() {
		this.apartmentProviderName = 'Bors Apartman';
		this.baseAddress = '3434 Mályi | Hungary | +36 46 123 456';
	}
});
