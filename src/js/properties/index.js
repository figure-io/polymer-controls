'use strict';

// MODULES //


// PROPERTIES //

var props = {};

/**
* Polymer element for which controls should be created.
*
* @type {Object}
* @default {}
*/
props.element = {
	'type': Object,
	'value': function(){
		return {};
	}
};

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
* Array controlling the variables which can be manipulated by the user.
*
* @type {Object}
* @default empty array
*/
props.manipulate = {
	'type': Array,
	'value': function() {
		return [];
	}
};

// EXPORTS //

module.exports = props;
