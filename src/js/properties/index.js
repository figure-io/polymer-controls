'use strict';

// PROPERTIES //

var props = {};

/**
* Element width. If not explicitly set, defaults to the width of the parent node.
*
* @type {Number}
* @default null
*/
props.width = {
	'observer': '_widthChanged',
	'type': Number,
	'value': null
};

/**
* Element height. If not explicitly set, defaults to the height of the parent node.
*
* @type {Number}
* @default null
*/
props.height = {
	'observer': '_heightChanged',
	'type': Number,
	'value': null
};

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
