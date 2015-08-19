'use strict';

// IS COLORPICKER //

/**
* FUNCTION isColorpicker( item )
*	Returns whether a configuration item should be a color picker.
*
* @param {Object} item - element configuration
* @returns {Boolean} boolean indicating whether a control should be a color picker
*/
function isColorpicker( item ) {
	return item.type === 'colorpicker';
} // end FUNCTION isColorpicker()


// EXPORTS //

module.exports = isColorpicker;
