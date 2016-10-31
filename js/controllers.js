angular.module('app.controllers', [])
.controller('MainCtrl', function($scope){

    
    $scope.goToSection = function(sectionName){
		$scope.currentSection = sectionName;
		console.log( sectionName );
	}
    $scope.currentSection = 'base';
    
    
    $scope.manto = {
		base: null,
		jib: null,
		yaghe: null
	}
    $scope.sections = {
		base: {
			text: 'نوع مانتو',
			items: [
				{
					file: './svg/base-01.svg',
					text: 'بلند'
				},
				{
					file: './svg/base-02.svg',
					text: 'متوسط'
				},
				{
					file: './svg/base-03.svg',
					text: 'کوتاه'
				}
			]
		},
		jib: {
			text: 'جیب‌ها',
			items: [
				{
					file: './svg/jib-01.svg',
					text: 'کجکی'
				},
				{
					file: './svg/jib-02.svg',
					text: 'صاف'
				}
			]
		},
		yaghe: {
			text: 'یقه',
			items: [
				{
					file: './svg/yaghe-01.svg',
					text: 'انگلیسی'
				},
				{
					file: './svg/yaghe-02.svg',
					text: 'ساده'
				}
			]
		}
	}
})
