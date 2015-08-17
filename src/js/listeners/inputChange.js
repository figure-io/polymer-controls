'use strict';

/**
* FUNCTION: onInputChange( evt )
*	Event handler invoked on a 'inputChange' event.
*
* @param {Event} evt - event object
* @returns {Boolean} true
*/
function onInputChange( evt ) {
	/* jshint validthis:true */
	var model, item;

	model = evt.model;
	item = model._config.item;

	// Set parameter
	this._controls[ item.name ] = item.value;

	return true;
} // end FUNCTION onInputChange()


// EXPORTS //

module.exports = onInputChange;
