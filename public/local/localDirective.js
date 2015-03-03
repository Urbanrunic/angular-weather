angular.module("ang-weather").directive("local", function () {
	return {
	    restrict: 'E',
	    require: '^mainController',
	    controllerAs: 'mainCtrl',
	    templateUrl: 'local/local.html'
	}
});