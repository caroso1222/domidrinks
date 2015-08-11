angular.module('domiapp', []).controller('domictrl', function($scope) {
	$scope.precio_chivas = 120000;
	$scope.precio_buchanan = 120000;
	$scope.precio_jack = 120000;
	$scope.precio_oldparr = 120000;
	$scope.precio_redlabel = 120000;
	$scope.cant_chivas=0;
	$scope.cant_buchanan=0;
	$scope.cant_jack=0;
	$scope.cant_oldparr=0;
	$scope.cant_redlabel=0;
	$scope.total = $scope.cant_chivas*$scope.precio_chivas+$scope.cant_buchanan*$scope.precio_buchanan+$scope.cant_jack*$scope.precio_jack+$scope.cant_oldparr*$scope.precio_oldparr+$scope.cant_redlabel*$scope.precio_redlabel;
	//$scope.total = $scope.cant_chivas*$scope.precio_chivas+$scope.cant_buchanan*$scope.precio_buchanan;

	$scope.decrease_cant = function(licor){
		eldiv = licor.split("_");
		elprecio = "precio_"+eldiv[1];
		if($scope[licor] == 1){
			$scope[licor] = $scope[licor] - 1;

			$scope.total = $scope.total - $scope[elprecio];
			eldiv = $('#'+eldiv[1]);
			eldiv.css('background-color','#ffffff');
		}else if($scope[licor] > 0){
			$scope[licor] = $scope[licor] - 1;
			$scope.total = $scope.total - $scope[elprecio];
		}
	}

	$scope.increase_cant = function(licor){
		$scope[licor] = $scope[licor] + 1;
		eldiv = licor.split("_");
		elprecio = "precio_"+eldiv[1];
		eldiv = $('#'+eldiv[1]);
		$scope.total = $scope.total + $scope[elprecio];
		
		//eldiv.css('background-color','#8FFF91');
		eldiv.find('.text-quantity').css('color','#000000');
	}

	$scope.show_cart = function(){
		var suma = $scope.cant_chivas+$scope.cant_buchanan+$scope.cant_jack+$scope.cant_oldparr+$scope.cant_redlabel;
		
		if(suma>0){
			return true;
		}else{
			return false;
		}
	}
});