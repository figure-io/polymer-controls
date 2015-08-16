(function() {
	'use strict';

	// SCRIPT //

	var el;

	// [0] Grab control element
	el = document.querySelector( '#gui' );
	
	// [1] Configure the control figure...
	el.addControl({
		'name':'a',
		'min':0,
		'max':12
	});

	el.addControls([
		{
			'name':'b',
			'min':0,
			'max':30,
			'step':1
		},
		{
			'name': 'log',
			'choices': [ false, true ]
		},
		{
			'name': 'width',
			'min': 400,
			'max': 800,
			'value': 400
		},
		{
			'name': 'xAxisOrient',
			'choices': [
				'bottom',
				'top'
			]
		},
		{
			'name': 'color',
			'value': 'red'
		}
	]);

})();
