'use strict';

/**
* FUNCTION: onDropdownClose( evt )
*	Event handler invoked on a 'dropdownClose' event.
*
* @param {Event} evt - event object
* @returns {Boolean} true
*/
function onDropdownClose( evt ) {
	/* jshint validthis:true */
	var detail,
		model,
		item;

	detail = evt.detail;
	model = evt.model;
	item = model.item;

	// [0] Set parameter
	this.element[ item.name ] = item.choices[ detail.selected ];

	return true;
} // end FUNCTION onDropdownClose()


// EXPORTS //

module.exports = onDropdownClose;
