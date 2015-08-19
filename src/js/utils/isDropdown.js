'use strict';

// IS DROPDOWN //

/**
* FUNCTION isDropdown( item )
*	Returns whether a configuration item should be a dropdown menu.
*
* @param {Object} item - element configuration
* @returns {Boolean} boolean indicating whether a control should be a dropdown menu
*/
function isDropdown( item ) {
	return item.type === 'dropdown';
} // end FUNCTION isDropdown()


// EXPORTS //

module.exports = isDropdown;
