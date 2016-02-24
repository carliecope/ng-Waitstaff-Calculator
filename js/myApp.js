angular.module('myApp', ['ngMessages'])
	.controller('MyCtrl', function($scope) {

		$scope.mealCount = 0; 
		$scope.tipTotal = 0;
		$scope.tipHistory = []

		$scope.baseMealPrice = '';
		$scope.taxRate = '';
		$scope.tipPercentage = '';



		$scope.cancel = function() {

			$scope.baseMealPrice = '';
			$scope.taxRate = '';
			$scope.tipPercentage = '';
		};

		$scope.reset = function() {

		};

		$scope.subTotalCalc = function(baseMealPrice, taxRate) {
			return ($scope.subTotal = (baseMealPrice * taxRate)+baseMealPrice) 
		};

		$scope.tipCalc = function(tipPercentage) {
			return($scope.tip =  $scope.subTotal * (tipPercentage/100))
		};

		$scope.totalCalc = function() {
			return($scope.total = $scope.subTotal + $scope.tip)
		};

		$scope.earningsCalc = function() {
			$scope.mealCount++;

			$scope.tipTotal += tip;

			$scope.tipAvg = $scope.tipTotal/$scope.mealCount;
		};
	});