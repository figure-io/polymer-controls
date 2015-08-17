'use strict';

// PROPERTIES //

var props = {};

/**
* Controls configuration.
*
* @type {Object}
* @default []
*/
props.config = {
	'type': Array,
	'value': function config() {
		return [];
	}
};


// EXPORTS //

module.exports = props;
