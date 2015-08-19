'use strict';

/**
* FUNCTION hasDescripton( item )
*	Checks whether input element has a `description` property.
*
* @param {Object} item - input element
* @returns {Boolean} true if input element has `description` field, false otherwise
*/
function hasDescripton( item ) {
	return item.description ? true : false;
} // end FUNCTION hasDescripton()

module.exports = hasDescripton;
