'use strict';

angular.module('apartmentsApp').component('apartmentDetails', {
    templateUrl: 'apartment-details/apartment-details.template.html',
    controller: ['$routeParams', 'ApartmentModel', function($routeParams, ApartmentModel) {
		var self = this;
		ApartmentModel.getApartment($routeParams.apartmentID).then(function(apartmnt) {
			self.apartment = apartmnt;
			self.setImage(self.apartment.imageUrls[0]);
		});
		
		self.setImage = function(imageUrl) {
			console.log('set image: ' + imageUrl);
		    self.mainImageUrl = imageUrl;
		};
    }]
});
