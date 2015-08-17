'use strict';

// IS CHECKBOX //

/**
* FUNCTION isCheckbox( item )
*	Returns whether a configuration item should be a checkbox.
*
* @param {Object} item - element configuration
* @returns {Boolean} boolean indicating whether a control should be a checkbox
*/
function isCheckbox( item ) {
	return item.type === 'checkbox';
} // end FUNCTION isCheckbox()


// EXPORTS //

module.exports = isCheckbox;
