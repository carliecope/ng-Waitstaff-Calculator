angular.module('myApp', ['ngMessages'])
	.controller('MyCtrl', function($scope) {

		$scope.mealCount = 0; 
		$scope.tipTotal = 0;
		$scope.tipAvg = 0;

		$scope.baseMealPrice = '';
		$scope.taxRate = '';
		$scope.tipPercentage = '';

		$scope.subTotal = 0;
		$scope.tip = 0;
		$scope.total = 0;

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
	});

// \d*(.\d{2})?


