'use strict';

/**
* FUNCTION: onCheckboxChange( evt )
*	Event handler invoked on a 'checkboxChange' event.
*
* @param {Event} evt - event object
* @returns {Boolean} true
*/
function onCheckboxChange( evt ) {
	/* jshint validthis:true */
	var model, item;

	model = evt.model;
	item = model.item;

	// Set parameter
	this._controls[ item.name ] = item.value;

	return true;
} // end FUNCTION onCheckboxChange()


// EXPORTS //

module.exports = onCheckboxChange;
