'use strict';

// ELEMENT //

var element = {};


// NAME //

element.is = require( './name' );


// PROPERTIES //

element.properties = require( './properties' );


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

element._configChanged = require( './observers/config.js' );

element.observers = [
	'_configChanged(config.splices)'
];


// UTILS //

element._computeDefaultStep = require( './utils/computeDefaultStep.js' );

element._isSlider = require( './utils/isSlider.js' );

element._isCheckbox = require( './utils/isCheckbox.js' );

element._isDropdown = require( './utils/isDropdown.js' );

element._isInput = require( './utils/isInput.js' );


// PUBLIC API //

element.add = require( './api/add.js' );

element.remove = require( './api/remove.js' );

element.reset = require( './api/reset.js' );


// EXPORTS //

module.exports = element;
