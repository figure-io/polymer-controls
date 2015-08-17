'use strict';

/**
* FUNCTION: onSliderChange( evt )
*	Event handler invoked on a 'sliderChange' event.
*
* @param {Event} evt - event object
* @returns {Boolean} true
*/
function onSliderChange( evt ) {
	/* jshint validthis:true */
	var model, item;

	model = evt.model;
	item = model.item;

	// Set parameter
	this._controls[ item.name ] = item.value;

	return true;
} // end FUNCTION onSliderChange()

// EXPORTS //

module.exports = onSliderChange;
