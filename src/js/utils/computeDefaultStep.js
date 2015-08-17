'use strict';

// MODULES //

var isNumber = require( 'validate.io-number-primitive' );


// DEFAULT STEP SIZE //

/**
* FUNCTION computeDefaultStep( item )
*	Computes the default step size for the slider element.
*
*/
function computeDefaultStep( item ) {
	/* jshint validthis:true */
	var range,
		step,
		err;

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
} // end FUNCTION computeDefaultStep()


// EXPORTS //

module.exports = computeDefaultStep;
