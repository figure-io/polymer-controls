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
	var item = evt.model.item;
	this._controls[ item.name ] = item.value;
	this.fire( 'change', {
		'cid': evt.target.cid,
		'value': item.value
	});
	return true;
} // end FUNCTION onCheckboxChange()


// EXPORTS //

module.exports = onCheckboxChange;
