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

	$scope.tipos = [
		{id:0,nombre:'Promociones'},
		{id:1,nombre:'Aguardiente'},
		{id:2,nombre:'Cerveza'},
		{id:3,nombre:'Ron'},
		{id:4,nombre:'Whisky'},
		{id:5,nombre:'Tequila'},
		{id:6,nombre:'Vodka'},
		{id:7,nombre:'Otros'},
		{id:8,nombre:'Bebidas Sin Alcohol'},
		{id:9,nombre:'Cigarrillos'},
		{id:10,nombre:'Snacks'}
	];

	$scope.licores2 = [
		{id:00, tipo:'Promociones', nombre:'Promo Lanzamiento',items:[
				{
					id:01, tamanio:"Promoción(es)", titulo:"Red Label (750CC)/Redbull(250CC)",precio:50000
				}
			]
		},
		{id:01, tipo:'Promociones', nombre:'Promo Johnnie Walker',items:[
				{
					id:01, tamanio:"Promoción(es)", titulo:"Jhonnie Walker (Sello Rojo)/3 cervezas/Trident",precio:74900
				}
			]
		},
		{id:02, tipo:'Promociones', nombre:'Promo Oldparr',items:[
				{
					id:02, tamanio:"Promoción(es)", titulo:"Oldparr (12 Años)/ 2 botellas Agua tonica",precio:122000
				}
			]
		},
		{id:03, tipo:'Promociones', nombre:'Promo Vodka',items:[
				{
					id:03, tamanio:"Promoción(es)", titulo:"Vodka Absolut/Jugo del Valle",precio:70800
				}
			]
		},
		{id:04, tipo:'Promociones', nombre:'Promo Jose Cuervo',items:[
				{
					id:04, tamanio:"Promoción(es)", titulo:"Jose Cuervo/Ginger Ale",precio:70500
				}
			]
		},



		{id:10, tipo:'Aguardiente', nombre:'Antioqueño',items:[
				{
					id:10, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:32000
				},
				{
					id:20, tamanio:"Litro(s)", titulo:"Litro",precio:42000
				}
			]
		},
		{id:20, tipo:'Aguardiente', nombre:'Antioqueño Sin Azucar',items:[
				{
					id:30, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:35000
				},
				{
					id:40, tamanio:"Litro(s)", titulo:"Litro",precio:48000
				}
			]
		},
		{id:30, tipo:'Aguardiente', nombre:'Cristal',items:[
				{
					id:50, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:25000
				},
				{
					id:60, tamanio:"Litro(s)", titulo:"Litro",precio:35000
				}
			]
		},
		{id:40, tipo:'Aguardiente', nombre:'Nectar Verde',items:[
				{
					id:70, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:20000
				},
				{
					id:80, tamanio:"Litro(s)", titulo:"Litro",precio:30000
				}
			]
		},
		{id:50, tipo:'Aguardiente', nombre:'Nectar Rojo',items:[
				{
					id:90, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:18000
				},
				{
					id:100, tamanio:"Litro(s)", titulo:"Litro",precio:23000
				}
			]
		},
		{id:60, tipo:'Aguardiente', nombre:'Nectar Azul',items:[
				{
					id:110, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:25000
				},
				{
					id:120, tamanio:"Litro(s)", titulo:"Litro",precio:35000
				}
			]
		},


		{id:70, tipo:'Cerveza', nombre:'Poker',items:[
				{
					id:130, tamanio:"Lata(s) de Cerveza", titulo:"Lata",precio:3000
				}
			]
		},
		{id:80, tipo:'Cerveza', nombre:'Aguila Light',items:[
				{
					id:140, tamanio:"Lata(s) de Cerveza", titulo:"Lata",precio:3000
				}
			]
		},
		{id:90, tipo:'Cerveza', nombre:'Aguila',items:[
				{
					id:150, tamanio:"Lata(s) de Cerveza", titulo:"Lata",precio:3000
				}
			]
		},
		{id:100, tipo:'Cerveza', nombre:'Club Colombia Roja',items:[
				{
					id:160, tamanio:"Lata(s) de Cerveza", titulo:"Lata",precio:3500
				}
			]
		},
		{id:110, tipo:'Cerveza', nombre:'Club Colombia Rubia',items:[
				{
					id:170, tamanio:"Lata(s) de Cerveza", titulo:"Lata",precio:3500
				}
			]
		},
		{id:120, tipo:'Cerveza', nombre:'Corona',items:[
				{
					id:180, tamanio:"Lata(s) de Cerveza", titulo:"Lata",precio:5000
				}
			]
		},
		{id:130, tipo:'Cerveza', nombre:'Heineken',items:[
				{
					id:190, tamanio:"Lata(s) de Cerveza", titulo:"Lata",precio:5000
				}
			]
		},


		{id:140, tipo:'Ginebra', nombre:'Bombay',items:[
				{
					id:200, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:120000
				}
			]
		},
		{id:150, tipo:'Ginebra', nombre:'Tanqueray',items:[
				{
					id:210, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:120000
				}
			]
		},


		{id:160, tipo:'Ron', nombre:'Bacardí Limón',items:[
				{
					id:220, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:53000
				}
			]
		},
		{id:170, tipo:'Ron', nombre:'Bacardí Limón Mojito',items:[
				{
					id:230, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:44000
				}
			]
		},
		{id:180, tipo:'Ron', nombre:'Zacapa Solera Reserva 15 Años',items:[
				{
					id:240, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:124000
				}
			]
		},
		{id:190, tipo:'Ron', nombre:'Zacapa 23 Años',items:[
				{
					id:250, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:150000
				}
			]
		},
		{id:200, tipo:'Ron', nombre:'Tres Esquinas Tradicional',items:[
				{
					id:260, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:36000
				}
			]
		},
		{id:210, tipo:'Ron', nombre:'Viejo Caldas',items:[
				{
					id:270, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:40000
				},
				{
					id:280, tamanio:"Litro(s)", titulo:"Litro",precio:47000
				}
			]
		},
		{id:220, tipo:'Ron', nombre:'Santafé',items:[
				{
					id:290, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:25000
				},
				{
					id:300, tamanio:"Litro(s)", titulo:"Litro",precio:32000
				}
			]
		},
		{id:230, tipo:'Ron', nombre:'Medellín Añejo',items:[
				{
					id:310, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:40000
				},
				{
					id:320, tamanio:"Litro(s)", titulo:"Litro",precio:47000
				}
			]
		},
		{id:240, tipo:'Ron', nombre:'Havana Club Añejo',items:[
				{
					id:330, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:69000
				}
			]
		},
		{id:250, tipo:'Ron', nombre:'Havana Club Clásico',items:[
				{
					id:340, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:63000
				}
			]
		},


		{id:260, tipo:'Whisky', nombre:"Buchanan's (12 Años)",items:[
				{
					id:350, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:120000
				}
			]
		},
		{id:270, tipo:'Whisky', nombre:"Buchanan's Master",items:[
				{
					id:360, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:135000
				}
			]
		},
		{id:280, tipo:'Whisky', nombre:"Buchanan's (18 Años)",items:[
				{
					id:370, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:230000
				}
			]
		},
		{id:290, tipo:'Whisky', nombre:"Grant's Family",items:[
				{
					id:380, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:65000
				}
			]
		},
		{id:300, tipo:'Whisky', nombre:"Old Parr Superior",items:[
				{
					id:390, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:220000
				}
			]
		},
		{id:310, tipo:'Whisky', nombre:"Old Parr Tribute",items:[
				{
					id:400, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:125000
				}
			]
		},
		{id:320, tipo:'Whisky', nombre:"Old Parr (12 Años)",items:[
				{
					id:410, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:120000
				}
			]
		},
		{id:330, tipo:'Whisky', nombre:"Jhonnie Walker (Sello Negro)",items:[
				{
					id:420, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:110000
				}
			]
		},
		{id:340, tipo:'Whisky', nombre:"Jhonnie Walker (Sello Rojo)",items:[
				{
					id:430, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:70000
				}
			]
		},
		{id:350, tipo:'Whisky', nombre:"Something Special",items:[
				{
					id:440, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:70000
				}
			]
		},
		{id:360, tipo:'Whisky', nombre:"Chivas Regal (12 Años)",items:[
				{
					id:450, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:125000
				}
			]
		},
		{id:370, tipo:'Whisky', nombre:"Chivas Regal (18 Años)",items:[
				{
					id:460, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:245000
				}
			]
		},
		{id:380, tipo:'Whisky', nombre:"Jack Daniel's",items:[
				{
					id:470, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:110000
				}
			]
		},


		{id:390, tipo:'Tequila', nombre:"Don Julio Reposado",items:[
				{
					id:480, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:170000
				}
			]
		},
		{id:400, tipo:'Tequila', nombre:"Don Julio Blanco",items:[
				{
					id:490, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:160000
				}
			]
		},
		{id:410, tipo:'Tequila', nombre:"José Cuervo",items:[
				{
					id:500, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:70000
				}
			]
		},
		{id:420, tipo:'Tequila', nombre:"José Cuero Silver",items:[
				{
					id:510, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:70000
				}
			]
		},


		{id:430, tipo:'Vodka', nombre:"Vodka Absolut",items:[
				{
					id:520, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:70000
				}
			]
		},
		{id:440, tipo:'Vodka', nombre:"Smirnoff Ice",items:[
				{
					id:530, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:7000
				}
			]
		},
		{id:450, tipo:'Vodka', nombre:"Smirnoff Red",items:[
				{
					id:540, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:70000
				}
			]
		},


		{id:460, tipo:'Otros', nombre:"Brandy Domeq",items:[
				{
					id:550, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:45000
				}
			]
		},
		{id:470, tipo:'Otros', nombre:"Baylie's",items:[
				{
					id:560, tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:60000
				}
			]
		},


		{id:480, tipo:'Bebidas Sin Alcohol', nombre:"Red Bull Energizante",items:[
				{
					id:570, tamanio:"Lata(s)", titulo:"Lata",precio:7500
				}
			]
		},
		{id:490, tipo:'Bebidas Sin Alcohol', nombre:"Agua Natural Domi Drinks",items:[
				{
					id:580, tamanio:"Botella(s)", titulo:"Botella",precio:2000
				}
			]
		},
		{id:500, tipo:'Bebidas Sin Alcohol', nombre:"Agua Con Gas Domi Drinks",items:[
				{
					id:590, tamanio:"Botella(s)", titulo:"Botella",precio:2200
				}
			]
		},
		{id:510, tipo:'Bebidas Sin Alcohol', nombre:"Agua Tónica 300 CC",items:[
				{
					id:600, tamanio:"Botella(s)", titulo:"Botella de 300CC",precio:2200
				}
			]
		},
		{id:520, tipo:'Bebidas Sin Alcohol', nombre:"Ginger Ale",items:[
				{
					id:610, tamanio:"Botella(s)", titulo:"Botella de 1,5L",precio:4500
				}
			]
		},
		{id:530, tipo:'Bebidas Sin Alcohol', nombre:"Gaseosa Coca Cola",items:[
				{
					id:620, tamanio:"Botella(s)", titulo:"Botella de 1,5L",precio:4500
				}
			]
		},
		{id:540, tipo:'Bebidas Sin Alcohol', nombre:"Gaseosa Sprite",items:[
				{
					id:630, tamanio:"Botella(s)", titulo:"Botella de 1,5L",precio:4500
				}
			]
		},
		{id:550, tipo:'Bebidas Sin Alcohol', nombre:"Jugo del Valle",items:[
				{
					id:640, tamanio:"Botella(s)", titulo:"Botella de 1,75L",precio:5000
				}
			]
		},
		{id:560, tipo:'Bebidas Sin Alcohol', nombre:"Gatorade Tropical",items:[
				{
					id:650, tamanio:"Botella(s)", titulo:"Botella de 500ml",precio:3500
				}
			]
		},
		{id:570, tipo:'Bebidas Sin Alcohol', nombre:"Gatorade Mandarina",items:[
				{
					id:660, tamanio:"Botella(s)", titulo:"Botella de 500ml",precio:3500
				}
			]
		},


		{id:580, tipo:'Cigarrillos', nombre:"Mustang",items:[
				{
					id:670, tamanio:"Caja(s) de 20 Cigarrillos", titulo:"Caja de 20",precio:5500
				}
			]
		},
		{id:590, tipo:'Cigarrillos', nombre:"Marlboro Blue",items:[
				{
					id:680, tamanio:"Caja(s) de 20 Cigarrillos", titulo:"Caja de 20",precio:6500
				}
			]
		},
		{id:600, tipo:'Cigarrillos', nombre:"Marlboro Ice",items:[
				{
					id:690, tamanio:"Caja(s) de 20 Cigarrillos", titulo:"Caja de 20",precio:6500
				}
			]
		},
		{id:610, tipo:'Cigarrillos', nombre:"Marlboro Rojo",items:[
				{
					id:700, tamanio:"Caja(s) de 20 Cigarrillos", titulo:"Caja de 20",precio:6500
				}
			]
		},
		{id:620, tipo:'Cigarrillos', nombre:"Green",items:[
				{
					id:710, tamanio:"Caja(s) de 20 Cigarrillos", titulo:"Caja de 20",precio:5000
				}
			]
		},
		{id:630, tipo:'Cigarrillos', nombre:"Beltmon",items:[
				{
					id:720, tamanio:"Caja(s) de 20 Cigarrillos", titulo:"Caja de 20",precio:5000
				}
			]
		},
		{id:640, tipo:'Cigarrillos', nombre:"Kool Original",items:[
				{
					id:730, tamanio:"Caja(s) de 20 Cigarrillos", titulo:"Caja de 20",precio:6000
				}
			]
		},


		{id:650, tipo:'Snacks', nombre:"De Todito BBQ",items:[
				{
					id:740, tamanio:"Paquete(s)", titulo:"Paquete de 71g",precio:3000
				}
			]
		},
		{id:660, tipo:'Snacks', nombre:"De Todito Natural",items:[
				{
					id:750, tamanio:"Paquete(s)", titulo:"Paquete de 71g",precio:3000
				}
			]
		},
		{id:670, tipo:'Snacks', nombre:"Detodito Familiar",items:[
				{
					id:760, tamanio:"Paquete(s)", titulo:"Paquete",precio:5300
				}
			]
		},
		{id:680, tipo:'Snacks', nombre:"Mani la Especial Natural",items:[
				{
					id:770, tamanio:"Bolsa(s)", titulo:"Bolsa",precio:2000
				}
			]
		},
		{id:690, tipo:'Snacks', nombre:"Doritos Familiar",items:[
				{
					id:780, tamanio:"Paquete(s)", titulo:"Paquete de 71g",precio:5500
				}
			]
		}

	]

	$scope.licores = [
	{id:10, tipo:'Aguardiente', nombre:'Antioqueño', tamanio:"Botella(s)", titulo:"Botella de 750CC",precio:32000 },
	{id:20, tipo:'Aguardiente', nombre:'Antioqueño (Litro)', tamanio:"Litro", titulo:"Litro", precio:42000 },
	{id:30, tipo:'Aguardiente', nombre:'Antioqueño Sin Azucar (Botella)', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:35000 },
	{id:40, tipo:'Aguardiente', nombre:'Antioqueño Sin Azucar (Litro)', tamanio:"Litro", titulo:"Litro", precio:48000 },
	{id:50, tipo:'Aguardiente', nombre:'Cristal (Botella)', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:25000 },
	{id:60, tipo:'Aguardiente', nombre:'Cristal (Litro)', tamanio:"Litro", titulo:"Litro", precio:35000 },
	{id:70, tipo:'Aguardiente', nombre:'Nectar Verde (Botella)', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:20000 },
	{id:80, tipo:'Aguardiente', nombre:'Nectar Verde (Litro)', tamanio:"Litro", titulo:"Litro", precio:30000 },
	{id:90, tipo:'Aguardiente', nombre:'Nectar Rojo (Botella)', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:18000 },
	{id:100, tipo:'Aguardiente', nombre:'Nectar Rojo (Litro)', tamanio:"Litro", titulo:"Litro", precio:23000 },
	{id:110, tipo:'Aguardiente', nombre:'Nectar Azul (Botella)', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:25000 },
	{id:120, tipo:'Aguardiente', nombre:'Nectar Azul (Litro)', tamanio:"Litro", titulo:"Litro", precio:35000 },

	{id:130, tipo:'Cerveza', nombre:'Poker', tamanio:"Lata(s) de Cerveza", titulo:"Lata", precio:3000 },
	{id:140, tipo:'Cerveza', nombre:'Aguila Light', tamanio:"Lata(s) de Cerveza", titulo:"Lata", precio:3000 },
	{id:150, tipo:'Cerveza', nombre:'Aguila', tamanio:"Lata(s) de Cerveza", titulo:"Lata", precio:3000 },
	{id:160, tipo:'Cerveza', nombre:'Club Colombia Roja', tamanio:"Lata(s) de Cerveza", titulo:"Lata", precio:3500 },
	{id:170, tipo:'Cerveza', nombre:'Club Colombia Rubia', tamanio:"Lata(s) de Cerveza", titulo:"Lata", precio:3500 },
	{id:180, tipo:'Cerveza', nombre:'Corona', tamanio:"Lata(s) de Cerveza", titulo:"Lata", precio:5000 },
	{id:190, tipo:'Cerveza', nombre:'Heineken', tamanio:"Lata(s) de Cerveza", titulo:"Lata", precio:5000 },

	{id:200, tipo:'Ginebra', nombre:'Bombay', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:120000 },
	{id:210, tipo:'Ginebra', nombre:'Tanqueray', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:120000 },

	{id:220, tipo:'Ron', nombre:'Bacardí Limón', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:53000 },
	{id:230, tipo:'Ron', nombre:'Bacardí Limón Mojito', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:44000 },
	{id:240, tipo:'Ron', nombre:'Zacapa Solera Reserva 15 Años', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:124000 },
	{id:250, tipo:'Ron', nombre:'Zacapa 23 Años', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:150000 },
	{id:260, tipo:'Ron', nombre:'Tres Esquinas Tradicional', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:36000 },
	{id:270, tipo:'Ron', nombre:'Viejo Caldas', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:40000 },
	{id:280, tipo:'Ron', nombre:'Viejo Caldas', tamanio:"Litro(s)", titulo:"Litro", precio:47000 },
	{id:290, tipo:'Ron', nombre:'Santafé', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:25000 },
	{id:300, tipo:'Ron', nombre:'Santafé', tamanio:"Litro(s)", titulo:"Litro", precio:32000 },
	{id:310, tipo:'Ron', nombre:'Medellín Añejo', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:40000 },
	{id:320, tipo:'Ron', nombre:'Medellín Añejo', tamanio:"Litro(s)", titulo:"Litro", precio:47000 },
	{id:330, tipo:'Ron', nombre:'Havana Club Añejo', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:69000 },
	{id:340, tipo:'Ron', nombre:'Havana Club Clásico', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:63000 },

	{id:350, tipo:'Whisky', nombre:"Buchanan's (12 Años)", tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:120000 },
	{id:360, tipo:'Whisky', nombre:"Buchanan's Master", tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:135000 },
	{id:370, tipo:'Whisky', nombre:"Buchanan's (18 Años)", tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:230000 },
	{id:380, tipo:'Whisky', nombre:"Grant's Family", tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:65000 },
	{id:390, tipo:'Whisky', nombre:'Old Parr Superior', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:220000 },
	{id:400, tipo:'Whisky', nombre:'Old Parr Tribute', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:125000 },
	{id:410, tipo:'Whisky', nombre:'Old Parr (12 Años)', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:120000 },
	{id:420, tipo:'Whisky', nombre:'Jhonnie Walker (Sello Negro)', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:110000 },
	{id:430, tipo:'Whisky', nombre:'Jhonnie Walker (Sello Rojo)', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:70000 },
	{id:440, tipo:'Whisky', nombre:'Something Special', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:70000 },
	{id:450, tipo:'Whisky', nombre:'Chivas Regal (12 Años)', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:125000 },
	{id:460, tipo:'Whisky', nombre:'Chivas Regal (18 Años)', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:245000 },
	{id:470, tipo:'Whisky', nombre:"Jack Daniel's", tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:110000 },

	{id:480, tipo:'Tequila', nombre:'Don Julio Reposado', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:170000 },
	{id:490, tipo:'Tequila', nombre:'Don Julio Blanco', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:160000 },
	{id:500, tipo:'Tequila', nombre:'José Cuervo', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:70000 },
	{id:510, tipo:'Tequila', nombre:'José Cuero Silver', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:70000 },

	{id:520, tipo:'Vodka', nombre:'Vodka Absolut', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:70000 },
	{id:530, tipo:'Vodka', nombre:'Smirnoff Ice', tamanio:"Botella(s)", titulo:"Botella de 275CC", precio:7000 },
	{id:540, tipo:'Vodka', nombre:'Smirnoff Red', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:70000 },

	{id:550, tipo:'Otros', nombre:'Brandy Domeq', tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:45000 },
	{id:560, tipo:'Otros', nombre:"Baylie's", tamanio:"Botella(s)", titulo:"Botella de 750CC", precio:60000 },

	{id:570, tipo:'Bebidas Sin Alcohol', nombre:'Red Bull Energizante', tamanio:"Lata(s)", titulo:"Lata", precio:7500 },
	{id:580, tipo:'Bebidas Sin Alcohol', nombre:'Agua Natural Domi Drinks', tamanio:"Botella(s)", titulo:"Botella", precio:2000 },
	{id:590, tipo:'Bebidas Sin Alcohol', nombre:'Agua Con Gas Domi Drinks', tamanio:"Botella(s)", titulo:"Botella", precio:2200 },
	{id:600, tipo:'Bebidas Sin Alcohol', nombre:'Agua Tónica 300 CC', tamanio:"Botella(s)", titulo:"Botella de 300CC", precio:2200 },
	{id:610, tipo:'Bebidas Sin Alcohol', nombre:'Ginger Ale', tamanio:"Botella(s)", titulo:"Botella de 1,5L", precio:4500 },
	{id:620, tipo:'Bebidas Sin Alcohol', nombre:'Gaseosa Coca Cola', tamanio:"Botella(s)", titulo:"Botella de 1,5L", precio:4500 },
	{id:630, tipo:'Bebidas Sin Alcohol', nombre:'Gaseosa Sprite', tamanio:"Botella(s)", titulo:"Botella de 1,5L", precio:4500 },
	{id:640, tipo:'Bebidas Sin Alcohol', nombre:'Jugo del Valle', tamanio:"Botella(s)", titulo:"Botella de 1,75L", precio:5000 },
	{id:650, tipo:'Bebidas Sin Alcohol', nombre:'Gatorade Tropical', tamanio:"Botella(s)", titulo:"Botella de 500ml", precio:3500 },
	{id:660, tipo:'Bebidas Sin Alcohol', nombre:'Gatorade Mandarina', tamanio:"Botella(s)", titulo:"Botella de 500ml", precio:3500 },

	{id:670, tipo:'Cigarrillos', nombre:'Mustang', tamanio:"Caja(s) de 20 Cigarrillos", titulo:"Caja de 20", precio:5500 },
	{id:680, tipo:'Cigarrillos', nombre:'Marlboro Blue', tamanio:"Caja(s) de 20 Cigarrillos", titulo:"Caja de 20", precio:6500 },
	{id:690, tipo:'Cigarrillos', nombre:'Marlboro Ice', tamanio:"Caja(s) de 20 Cigarrillos", titulo:"Caja de 20", precio:6500 },
	{id:700, tipo:'Cigarrillos', nombre:'Marlboro Rojo', tamanio:"Caja(s) de 20 Cigarrillos", titulo:"Caja de 20", precio:6500 },
	{id:710, tipo:'Cigarrillos', nombre:'Green', tamanio:"Caja(s) de 20 Cigarrillos", titulo:"Caja de 20", precio:5000 },
	{id:720, tipo:'Cigarrillos', nombre:'Beltmon', tamanio:"Caja(s) de 20 Cigarrillos", titulo:"Caja de 20", precio:5000 },
	{id:730, tipo:'Cigarrillos', nombre:'Kool Original', tamanio:"Caja(s) de 20 Cigarrillos", titulo:"Caja de 20", precio:6000 },

	{id:740, tipo:'Snacks', nombre:'De Todito BBQ', tamanio:"Paquete(s)", titulo:"Paquete de 71g", precio:3000 },
	{id:750, tipo:'Snacks', nombre:'De Todito Natural', tamanio:"Paquete(s)", titulo:"Paquete de 71g", precio:3000 },
	{id:760, tipo:'Snacks', nombre:'Detodito Familiar', tamanio:"Paquete(s)", titulo:"Paquete", precio:5300 },
	{id:770, tipo:'Snacks', nombre:'Mani la Especial Natural', tamanio:"Bolsa", titulo:"Bolsa", precio:2000 },
	{id:780, tipo:'Snacks', nombre:'Doritos Familiar', tamanio:"Paquete(s)", titulo:"Paquete de 71g", precio:5500 }
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
		for(var i = 0; i<$scope.licores2.length; i++){
			for(var j = 0; j<$scope.licores2[i].items.length; j++){	
				if($scope.licores2[i].items[j].id == id){
					return {id:id, tipo:$scope.licores2[i].tipo, nombre:$scope.licores2[i].nombre, tamanio:$scope.licores2[i].items[j].tamanio, titulo:$scope.licores2[i].items[j].titulo,precio:$scope.licores2[i].items[j].precio };
				}
			}
		}
	}

	$scope.getGroupLicores = function(tipoN){
		var whiskys = [];
		for (var i = 0; i < $scope.licores2.length;i++){
			if ($scope.licores2[i].tipo == tipoN){
				whiskys.push($scope.licores2[i]);
			}
		}
		return whiskys;
	}

	$scope.getQuantityInPedido2 = function(id){
		var losIds = [];
		for(var i = 0; i < $scope.licores2.length; i++){
			if($scope.licores2[i].id == id){
				for(var j = 0; j < $scope.licores2[i].items.length; j++){
					losIds.push($scope.licores2[i].items[j].id);
				}
			}
		}
		var suma = 0;
		for(var i = 0; i < $scope.pedido.length; i++){
			for(var j = 0; j < losIds.length ; j++){
				if($scope.pedido[i].item.id == losIds[j]){
					suma = suma + $scope.pedido[i].cant;
				}
			}
		}
		return suma;
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
		$('#input-pedido').attr('value', darTotalString(suma));
		$('#input-total').attr('value', suma);
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

	function darTotalString(total){
		var temp = "";
		for(var i = 0; i<$scope.pedido.length;i++){
			temp = temp + $scope.pedido[i].cant + " "+$scope.pedido[i].item.tamanio + " de " + $scope.pedido[i].item.nombre +"; ";
		}
		temp = temp + "TOTAL: $ " + total;
		return temp;
	}

});