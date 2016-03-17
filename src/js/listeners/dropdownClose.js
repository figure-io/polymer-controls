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
	var detail;
	var model;
	var item;

	detail = evt.detail;
	model = evt.model;
	item = model.item;

	this._controls[ item.name ] = item.choices[ detail.selected ];

	this.fire( 'change', {
		'cid': evt.target.cid,
		'value': detail.selected
	});

	return true;
} // end FUNCTION onDropdownClose()


// EXPORTS //

module.exports = onDropdownClose;
