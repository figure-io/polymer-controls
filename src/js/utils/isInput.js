'use strict';

// IS INPUT //

/**
* FUNCTION isInput( item )
*	Returns whether a configuration item should be an input field.
*
* @param {Object} item - element configuration
* @returns {Boolean} boolean indicating whether a control should be an input field
*/
function isInput( item ) {
	return item.type === 'input';
} // end FUNCTION isInput()


// EXPORTS //

module.exports = isInput;
