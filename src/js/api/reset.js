'use strict';

/**
* FUNCTION reset()
*	Removes all control elements from the current plot.
*
*/
function reset() {
	/* jshint validthis:true */
	this.splice( 'config', 0, this.config.length );
} // end FUNCTION reset()

// EXPORTS //

module.exports = reset;
