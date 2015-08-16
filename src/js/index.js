'use strict';

// ELEMENT //

var element = {};


// NAME //

element.is = require( './name' );


// PROPERTIES //

element.properties = require( './properties' );

// MULTI-PROPERTY AND ARRAY OBSERVERS //

element.observers = [
	'_manipulateChanged(manipulate.splices)'
];


// LIFECYCLE //


element.created = require( './lifecycle/created.js' );

element.ready = require( './lifecycle/ready.js' );

element.attached = require( './lifecycle/attached.js' );

element.detached = require( './lifecycle/detached.js' );


// INIT //

element._init = require( './init' );

// LISTENERS //

element.onInputChange = require( './listeners/inputChange.js' );

element.onSliderChange = require( './listeners/sliderChange.js' );

element.onDropdownClose = require( './listeners/dropdownClose.js' );

element.onCheckboxChange = require( './listeners/checkboxChange.js' );

// OBSERVERS //

element._manipulateChanged = require( './observers/manipulate.js' );

// UTILS //

element._isSliderControl = require( './utils/isSliderControl.js' );

element._isCheckboxControl = require( './utils/isCheckboxControl.js' );

element._isDropdownControl = require( './utils/isDropdownControl.js' );

element._isInputField = require( './utils/isInputField.js' );

element._computeDefaultStep = require( './utils/computeDefaultStep.js' );

// PUBLIC CONTROL METHODS //

element.addControl = require( './manipulate/addControl.js' );

element.removeControl = require( './manipulate/removeControl.js' );

element.addControls = require( './manipulate/addControls' );

element.resetControls = require( './manipulate/resetControls.js' );

// EXPORTS //

module.exports = element;
