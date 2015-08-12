angular.module('domiapp', []).controller('domictrl', function($scope) {
	$scope.precio_chivas = 120000;
	$scope.precio_buchanan = 120000;
	$scope.precio_jack = 120000;
	$scope.precio_oldparr = 120000;
	$scope.precio_redlabel = 120000;
	$scope.cant_450 = 0;
	$scope.cant_chivas=0;
	$scope.cant_buchanan=0;
	$scope.cant_jack=0;
	$scope.cant_oldparr=0;
	$scope.cant_redlabel=0;
	$scope.total = $scope.cant_chivas*$scope.precio_chivas+$scope.cant_buchanan*$scope.precio_buchanan+$scope.cant_jack*$scope.precio_jack+$scope.cant_oldparr*$scope.precio_oldparr+$scope.cant_redlabel*$scope.precio_redlabel;
	//$scope.total = $scope.cant_chivas*$scope.precio_chivas+$scope.cant_buchanan*$scope.precio_buchanan;

	$scope.pedido = [];

	$scope.licores = [
	{id:10, tipo:'Aguardiente', nombre:'Antioqueño', tamanio:"Botella de 750CC", precio:32000 },
	{id:20, tipo:'Aguardiente', nombre:'Antioqueño', tamanio:"Litro", precio:42000 },
	{id:30, tipo:'Aguardiente', nombre:'Antioqueño Sin Azucar', tamanio:"Botella de 750CC", precio:32000 },
	{id:40, tipo:'Aguardiente', nombre:'Antioqueño Sin Azucar', tamanio:"Litro", precio:42000 },
	{id:50, tipo:'Aguardiente', nombre:'Cristal', tamanio:"Botella de 750CC", precio:32000 },
	{id:60, tipo:'Aguardiente', nombre:'Cristal', tamanio:"Litro", precio:42000 },
	{id:70, tipo:'Aguardiente', nombre:'Nectar Verde', tamanio:"Botella de 750CC", precio:32000 },
	{id:80, tipo:'Aguardiente', nombre:'Nectar Verde', tamanio:"Litro", precio:42000 },
	{id:90, tipo:'Aguardiente', nombre:'Nectar Rojo', tamanio:"Botella de 750CC", precio:32000 },
	{id:100, tipo:'Aguardiente', nombre:'Nectar Rojo', tamanio:"Litro", precio:42000 },
	{id:110, tipo:'Aguardiente', nombre:'Nectar Azul', tamanio:"Botella de 750CC", precio:32000 },
	{id:120, tipo:'Aguardiente', nombre:'Nectar Azul', tamanio:"Litro", precio:42000 },
	{id:130, tipo:'Cerveza', nombre:'Poker', tamanio:"Botella de 750CC", precio:32000 },
	{id:140, tipo:'Cerveza', nombre:'Aguila Light', tamanio:"Litro", precio:42000 },
	{id:150, tipo:'Cerveza', nombre:'Aguila', tamanio:"Botella de 750CC", precio:32000 },
	{id:160, tipo:'Cerveza', nombre:'Club Colombia Roja', tamanio:"Litro", precio:42000 },
	{id:170, tipo:'Cerveza', nombre:'Club Colombia Rubia', tamanio:"Botella de 750CC", precio:32000 },
	{id:180, tipo:'Cerveza', nombre:'Corona', tamanio:"Litro", precio:42000 },
	{id:190, tipo:'Cerveza', nombre:'Heineken', tamanio:"Botella de 750CC", precio:32000 },
	{id:200, tipo:'Ginebra', nombre:'Bombay', tamanio:"Litro", precio:42000 },
	{id:210, tipo:'Ginebra', nombre:'Tanqueray', tamanio:"Botella de 750CC", precio:32000 },
	{id:220, tipo:'Ron', nombre:'Bacardí Limón', tamanio:"Litro", precio:42000 },
	{id:230, tipo:'Ron', nombre:'Bacardí Limón Mojito', tamanio:"Botella de 750CC", precio:32000 },
	{id:240, tipo:'Ron', nombre:'Zacapa Solera Reserva 15 Años', tamanio:"Litro", precio:42000 },
	{id:250, tipo:'Ron', nombre:'Zacapa 23 Años', tamanio:"Botella de 750CC", precio:32000 },
	{id:260, tipo:'Ron', nombre:'Tres Esquinas Tradicional', tamanio:"Litro", precio:42000 },
	{id:270, tipo:'Ron', nombre:'Viejo Caldas', tamanio:"Botella de 750CC", precio:32000 },
	{id:280, tipo:'Ron', nombre:'Viejo Caldas', tamanio:"Litro", precio:42000 },
	{id:290, tipo:'Ron', nombre:'Santafé', tamanio:"Botella de 750CC", precio:32000 },
	{id:300, tipo:'Ron', nombre:'Santafé', tamanio:"Litro", precio:42000 },
	{id:310, tipo:'Ron', nombre:'Medellín Añejo', tamanio:"Botella de 750CC", precio:32000 },
	{id:320, tipo:'Ron', nombre:'Medellín Añejo', tamanio:"Litro", precio:42000 },
	{id:330, tipo:'Ron', nombre:'Havana Club Añejo', tamanio:"Botella de 750CC", precio:32000 },
	{id:340, tipo:'Ron', nombre:'Havana Club Añejo', tamanio:"Litro", precio:42000 },
	{id:350, tipo:'Whisky', nombre:"Buchanan's (12 Años)", tamanio:"Botella de 750CC", precio:120000 },
	{id:360, tipo:'Whisky', nombre:"Buchanan's Master", tamanio:"Litro", precio:135000 },
	{id:370, tipo:'Whisky', nombre:"Buchanan's (18 Años)", tamanio:"Botella de 750CC", precio:230000 },
	{id:380, tipo:'Whisky', nombre:"Grant's Family", tamanio:"Litro", precio:65000 },
	{id:390, tipo:'Whisky', nombre:'Old Parr Superior', tamanio:"Botella de 750CC", precio:220000 },
	{id:400, tipo:'Whisky', nombre:'Old Parr Tribute', tamanio:"Botella de 750CC", precio:125000 },
	{id:410, tipo:'Whisky', nombre:'Old Parr (12 Años)', tamanio:"Botella de 750CC", precio:120000 },
	{id:420, tipo:'Whisky', nombre:'Jhonnie Walker (Sello Negro)', tamanio:"Litro", precio:110000 },
	{id:430, tipo:'Whisky', nombre:'Jhonnie Walker (Sello Rojo)', tamanio:"Botella de 750CC", precio:70000 },
	{id:440, tipo:'Whisky', nombre:'Something Special', tamanio:"Litro", precio:70000 },
	{id:450, tipo:'Whisky', nombre:'Chivas Regal (12 Años)', tamanio:"Botella de 750CC", precio:125000 },
	{id:460, tipo:'Whisky', nombre:'Chivas Regal (18 Años)', tamanio:"Litro", precio:245000 },
	{id:470, tipo:'Whisky', nombre:"Jack Daniel's", tamanio:"Botella de 750CC", precio:110000 },
	{id:480, tipo:'Tequila', nombre:'Don Julio Reposado', tamanio:"Litro", precio:42000 },
	{id:490, tipo:'Tequila', nombre:'Don Julio Blanco', tamanio:"Botella de 750CC", precio:32000 },
	{id:500, tipo:'Tequila', nombre:'José Cuervo', tamanio:"Botella de 750CC", precio:32000 },
	{id:510, tipo:'Tequila', nombre:'José Cuero Silver', tamanio:"Botella de 750CC", precio:32000 },
	{id:520, tipo:'Vodka', nombre:'Vodka Absolut', tamanio:"Litro", precio:42000 },
	{id:530, tipo:'Vodka', nombre:'Smirnoff Ice 275 CC', tamanio:"Botella de 750CC", precio:32000 },
	{id:540, tipo:'Vodka', nombre:'Smirnoff Red', tamanio:"Litro", precio:42000 },
	{id:550, tipo:'Otros', nombre:'Brandy Domeq', tamanio:"Botella de 750CC", precio:32000 },
	{id:560, tipo:'Otros', nombre:"Baylie's", tamanio:"Litro", precio:42000 },
	{id:570, tipo:'Bebidas Sin Alcohol', nombre:'Red Bull Energizante', tamanio:"Botella de 750CC", precio:32000 },
	{id:580, tipo:'Bebidas Sin Alcohol', nombre:'Agua Natural Domi Drinks', tamanio:"Litro", precio:42000 },
	{id:590, tipo:'Bebidas Sin Alcohol', nombre:'Agua Con Gas Domi Drinks', tamanio:"Botella de 750CC", precio:32000 },
	{id:600, tipo:'Bebidas Sin Alcohol', nombre:'Agua Tónica 300 CC', tamanio:"Botella de 750CC", precio:32000 },
	{id:610, tipo:'Bebidas Sin Alcohol', nombre:'Ginger Ale 1,5 Litros', tamanio:"Botella de 750CC", precio:32000 },
	{id:620, tipo:'Bebidas Sin Alcohol', nombre:'Gaseosa Coca Cola 1,5 Litros', tamanio:"Litro", precio:42000 },
	{id:630, tipo:'Bebidas Sin Alcohol', nombre:'Gaseosa Sprite 1,5 Litros', tamanio:"Botella de 750CC", precio:32000 },
	{id:640, tipo:'Bebidas Sin Alcohol', nombre:'Jugo del Valle 1,75 Litros', tamanio:"Litro", precio:42000 },
	{id:650, tipo:'Bebidas Sin Alcohol', nombre:'Gatorade Tropical 500 ml', tamanio:"Botella de 750CC", precio:32000 },
	{id:660, tipo:'Bebidas Sin Alcohol', nombre:'Gatorade Mandarina 500 ml', tamanio:"Litro", precio:42000 },
	{id:670, tipo:'Cigarrillos', nombre:'Mustang x 20', tamanio:"Botella de 750CC", precio:32000 },
	{id:680, tipo:'Cigarrillos', nombre:'Marlboro Blue x 20', tamanio:"Litro", precio:42000 },
	{id:690, tipo:'Cigarrillos', nombre:'Marlboro Ice x 20', tamanio:"Botella de 750CC", precio:32000 },
	{id:700, tipo:'Cigarrillos', nombre:'Marlboro Rojo x 20', tamanio:"Botella de 750CC", precio:32000 },
	{id:710, tipo:'Cigarrillos', nombre:'Green x 20', tamanio:"Botella de 750CC", precio:32000 },
	{id:720, tipo:'Cigarrillos', nombre:'Beltmon x 20', tamanio:"Litro", precio:42000 },
	{id:730, tipo:'Cigarrillos', nombre:'Kool Original x 20', tamanio:"Botella de 750CC", precio:32000 },
	{id:740, tipo:'Snack', nombre:'De Todito BBQ 71g', tamanio:"Litro", precio:42000 },
	{id:750, tipo:'Snack', nombre:'De Todito Natural 71g', tamanio:"Botella de 750CC", precio:32000 },
	{id:760, tipo:'Snack', nombre:'Detodito Familiar', tamanio:"Litro", precio:42000 },
	{id:770, tipo:'Snack', nombre:'Mani la Especial Natural', tamanio:"Botella de 750CC", precio:32000 },
	{id:780, tipo:'Snack', nombre:'Doritos Familiar', tamanio:"Litro", precio:42000 }
	];

	$scope.decrease_cant = function(id){
		var bajarPedido = false;
		if($scope.getQuantityInPedido(id) > 0){
			bajarPedido = true;
		}
		if(bajarPedido){
			var esCero = false;
			for (var i = 0; i < $scope.pedido.length; i++){
				if($scope.pedido[i].item.id == id){
					$scope.pedido[i].cant = $scope.pedido[i].cant - 1;
					if ($scope.pedido[i].cant == 0){
						$scope.pedido.splice(i,1);
					}
				}
			}
			$scope.total = calcularTotal();
		}
	}

	$scope.increase_cant = function(id){
		var existe = false;
		for (var i = 0; i < $scope.pedido.length; i++){
			if($scope.pedido[i].item.id == id){
				$scope.pedido[i].cant = $scope.pedido[i].cant + 1;
				existe = true;
			}
		}
		if(!existe){
			item = {item:$scope.getLicor(id),cant:1};
			$scope.pedido.push(item);
		}
		$scope.total = calcularTotal();
	}

	$scope.show_cart = function(){
		var hayAlgo = false;
		for(var i = 0; i< $scope.pedido.length && !hayAlgo; i++){
			if($scope.pedido[i].cant > 0){
				hayAlgo = true;
			}
		}
		return hayAlgo;
	}

	$scope.getLicor = function(id){
		for(var i = 0; i<$scope.licores.length; i++){
			if($scope.licores[i].id == id){
				return $scope.licores[i];
			}
		}
	}

	$scope.getWhiskys = function(){
		var whiskys = [];
		for (var i = 0; i < $scope.licores.length;i++){
			if ($scope.licores[i].tipo == "Whisky"){
				whiskys.push($scope.licores[i]);
			}
		}
		return whiskys;
	}

	$scope.getQuantityInPedido = function(id){
		for(var i = 0; i < $scope.pedido.length; i++){
			if($scope.pedido[i].item.id == id){
				return $scope.pedido[i].cant;
			}
		}
		return 0;
	}

	function calcularTotal(){
		var suma = 0;
		for(var i = 0; i<$scope.pedido.length;i++){
			suma = suma + $scope.pedido[i].item.precio*$scope.pedido[i].cant;
		}
		return suma;
	}

	$scope.getSumOfArray = function(arreglo){
		for(var i = 0; i < arreglo.length; i++){
			if($scope.getQuantityInPedido(arreglo[i].id)>0){
				return true;
			}
		}
	}

	$scope.numberWithCommas = function(x){
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}
});