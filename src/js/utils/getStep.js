'use strict';

// MODULES //

var isNumber = require( 'validate.io-number-primitive' );


// DEFAULT STEP SIZE //

/**
* FUNCTION getStep( item )
*	Returns the default step size for the slider element.
*
*/
function getStep( item ) {
	/* jshint validthis:true */
	var range;
	var step;
	var err;

	if ( item.step ) {
		step = item.step;
		if ( !isNumber( step ) ) {
			err = new TypeError( 'invalid input argument. Step property must be a number primitive. Value: `' + step + '`.' );
			this.fire( 'err', err );
			return;
		}
	} else {
		range = item.max - item.min;
		step = Math.round( range / 20 );
	}
	return step;
} // end FUNCTION getStep()


// EXPORTS //

module.exports = getStep;
