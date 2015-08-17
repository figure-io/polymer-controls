(function() {
	'use strict';

	var config,
		el;

	config = [
		{
			'type': 'slider',
			'name': 'a',
			'min': 0,
			'max': 12
		},
		{
			'type': 'slider',
			'name':'b',
			'min':0,
			'max':30,
			'step':1
		},
		{
			'type': 'checkbox',
			'name': 'log',
			'choices': [ false, true ]
		},
		{
			'type': 'slider',
			'name': 'width',
			'min': 400,
			'max': 800,
			'value': 400
		},
		{
			'type': 'dropdown',
			'name': 'xAxisOrient',
			'choices': [
				'bottom',
				'top'
			]
		},
		{
			'type': 'input',
			'name': 'color',
			'value': 'red'
		}
	];

	// [0] Grab control element
	el = document.querySelector( '#gui' );

	// [1] Configure the control figure...
	for ( var i = 0; i < config.length; i++ ) {
		el.add( config[ i ] );
	}

})();
