angular.module('myApp', ['ngMessages', 'ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl : 'templates/home.html',
			controller : 'HomeCtrl'
		}).when('/home', {
			templateUrl : 'templates/home.html',
			controller : 'HomeCtrl'
		}).when('/myEarnings', {
			templateUrl : 'templates/myEarnings.html',
			controller : 'MyEarningsCtrl'
		}).when('/newMeal', {
			templateUrl : 'templates/newMeal.html',
			controller : 'NewMealCtrl'
		}).otherwise('/error', {
			template: '<p>Error - Page not Found</p>'
		});
	}])
	.controller('HomeCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
		$rootScope.mealCount = 0; 
		$rootScope.tipTotal = 0;
		$rootScope.tipAvg = 0;
	}])
	.controller('NewMealCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
		$scope.baseMealPrice = '';
		$scope.taxRate = '';
		$scope.tipPercentage = '';

		$scope.submit = function() {
			console.log('form submited');
			if( $scope.myForm.$valid ) {

				$scope.subTotal = $scope.subTotalCalc();
				$scope.tip = $scope.tipCalc();
				$scope.total = $scope.totalCalc();

				$scope.earningsCalc();
			}
		};
		$scope.clear = function() {
			$scope.myForm.$setPristine();
			
			$scope.baseMealPrice = '';
			$scope.taxRate = '';
			$scope.tipPercentage = '';
		};
		$scope.subTotalCalc = function() {
			return ($scope.baseMealPrice * $scope.taxRate + $scope.baseMealPrice); 
		};

		$scope.tipCalc = function() {
			return  ($scope.subTotal * ($scope.tipPercentage/100));
		};

		$scope.totalCalc = function() {
			return ($scope.subTotal + $scope.tip);
		};

		$scope.earningsCalc = function() {
			$scope.mealCount++;

			$scope.tipTotal += $scope.tip;

			$scope.tipAvg = $scope.tipTotal/$scope.mealCount;
		};
	}])
	.controller('MyEarningsCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
		$scope.subTotal = 0;
		$scope.tip = 0;
		$scope.total = 0;

		$scope.reset = function() {
			$scope.mealCount = 0; 
			$scope.tipTotal = 0;
			$scope.tipAvg = 0;

			$scope.baseMealPrice = '';
			$scope.taxRate = '';
			$scope.tipPercentage = '';

			$scope.subTotal = 0;
			$scope.tip = 0;
			$scope.total = 0;

			$scope.myForm.$setPristine();
		};
	}]);

// \d*(.\d{2})?


