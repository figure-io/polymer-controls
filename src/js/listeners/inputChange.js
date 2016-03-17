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
	var model;
	var item;

	model = evt.model;
	item = model._config.item;

	this._controls[ item.name ] = item.value;

	this.fire( 'change', {
		'cid': evt.target.cid,
		'value': item.value
	});

	return true;
} // end FUNCTION onInputChange()


// EXPORTS //

module.exports = onInputChange;
