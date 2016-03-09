angular.module('myApp', ['ngMessages', 'ngRoute', 'ngAnimate'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl : 'templates/home.html',
			controller : 'HomeCtrl as home'
		}).when('/myEarnings', {
			templateUrl : 'templates/myEarnings.html',
			controller : 'MyEarningsCtrl as earnings'
		}).when('/newMeal', {
			templateUrl : 'templates/newMeal.html',
			controller : 'NewMealCtrl as meal'
		}).otherwise('/error', {
			template: '<p>Error - Page not Found</p>'
		});
	}]) 
	.run(function($rootScope) {
		$rootScope.mealCount = 0;
		$rootScope.tipTotal = 0;
		$rootScope.tipAvg = 0;
	})
	.controller('HomeCtrl', ['$rootScope', function($rootScope) {
		
	}])
	.controller('NewMealCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {

		this.submit = function() {

			//Calculate Subtotal (Meal plus tax)
			$rootScope.subTotal = this.baseMealPrice * this.taxRate + this.baseMealPrice;
			
			//Calculate Tip
			$rootScope.tip = $rootScope.subTotal * (this.tipPercentage/100);
			
			//Calculate Total (Subtotal plus tip)
			$rootScope.total = $rootScope.subTotal + $rootScope.tip;

			//Increment Meal Count {
			$rootScope.mealCount++;

			//Calculate Earnings
			$rootScope.tipTotal =+ $rootScope.tip;
			if($rootScope.mealCount !== 0) {
				$rootScope.tipAvg = $rootScope.tipTotal/$rootScope.mealCount;
			}
			
			//Clear Input values
			this.baseMealPrice = '';
			this.taxRate = '';
			this.tipPercentage = '';

			$scope.myForm.$setPristine(); 

		};
			
	}])
	.controller('MyEarningsCtrl', ['$rootScope', function($rootScope) {

		this.reset = function() {
			$rootScope.mealCount = 0; 
			$rootScope.tipTotal = 0;
			$rootScope.tipAvg = 0;

			$rootScope.subTotal = 0;
			$rootScope.tip = 0;
			$rootScope.total = 0;
		};
	}]);
