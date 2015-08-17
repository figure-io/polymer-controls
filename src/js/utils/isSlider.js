'use strict';

// IS SLIDER //

/**
* FUNCTION isSlider( item )
*	Returns whether a configuration item should be a slider.
*
* @param {Object} item - element configuration
* @returns {Boolean} boolean indicating whether a control should be a slider
*/
function isSlider( item ) {
	return item.type === 'slider';
} // end FUNCTION isSlider()


// EXPORTS //

module.exports = isSlider;
