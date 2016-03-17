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
	var model;
	var item;

	model = evt.model;
	item = model.item;

	this._controls[ item.name ] = item.value;

	this.fire( 'change', {
		'cid': evt.target.cid,
		'value': item.value
	});

	return true;
} // end FUNCTION onSliderChange()

// EXPORTS //

module.exports = onSliderChange;
