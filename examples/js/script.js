(function() {
	'use strict';

	var config,
		out,
		el;

	config = [
		{
			'type': 'slider',
			'id': 1,
			'name': 'a',
			'min': 0,
			'max': 12
		},
		{
			'type': 'slider',
			'id': 2,
			'name':'b',
			'min':0,
			'max':30,
			'step':1
		},
		{
			'type': 'checkbox',
			'id': 3,
			'name': 'log',
			'choices': [ false, true ]
		},
		{
			'type': 'slider',
			'id': 4,
			'name': 'width',
			'min': 400,
			'max': 800,
			'value': 400
		},
		{
			'type': 'dropdown',
			'id': 5,
			'name': 'xAxisOrient',
			'choices': [
				'bottom',
				'top'
			]
		},
		{
			'type': 'input',
			'id': 6,
			'name': 'color',
			'value': 'red'
		}
	];

	el = document.querySelector( '#gui' );
	for ( var i = 0; i < config.length; i++ ) {
		el.add( config[ i ] );
	}

	out = document.querySelector( '.component .text' );
	el.addEventListener( 'change', onChange );

	function onChange( evt ) {
		out.innerHTML = 'Element ' + evt.detail.cid + ' changed. The element\'s new value is ' + evt.detail.value + '.';
	}

})();
