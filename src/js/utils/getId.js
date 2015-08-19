'use strict';

/**
* FUNCTION getId( index )
*	Generates a valid value for the HTML `id` attribute.
*
* @param {Number} index - index of the control element
* @return {String} string of the form 'control-' + index
*/
function getId( index ) {
	return 'control-' + index;
} // end FUNCTION getId()


// EXPORTS //

module.exports = getId;
