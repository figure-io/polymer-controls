'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isBooleanArray = require( 'validate.io-boolean-primitive-array' ),
	isObject = require( 'validate.io-object' );


// ADD CONTROL //

/**
* FUNCTION add( config )
*	Adds a control element as specified by `config`.
*
* @param {Object} config - configuration object for control element
* @returns {Object} context
*/
function add( config ) {
	/* jshint validthis:true */
	var err,
		i;

	if ( !isObject( config ) ) {
		err = new TypeError( 'invalid input argument. Must provide an object. Value: `' + config + '`' );
		this.fire( 'err', err );
		return;
	}
	if ( !config.hasOwnProperty( 'name' ) ) {
		err = new Error( 'invalid input argument. Provided configuration object must have a `name` property. Value: `' + config + '`.' );
		this.fire( 'err', err );
		return;
	}
	// Check that control element with the same `name` does not already exist...
	for ( i = 0; i < this.config.length; i++ ) {
		if ( this.config[ i ].name === config.name ) {
			err = new Error( 'invalid input argument. A control element already exists with the name `' + config.name + '`.' );
			this.fire( 'err', err );
			return;
		}
	}
	// Control element should be a slider:
	if ( config.type === 'slider' ) {
		// Set default value if not set by user
		if ( !config.value ) {
			config.value = ( config.max - config.min ) / 2;
		}
		this.push( 'config', config );
		return;
	}

	// Control element should be a checkbox
	if ( config.type === 'checkbox' ) {
		if ( !config.value ) {
			config.value = config.choices[ 0 ];
		}
		this.push( 'config', config );
		return;
	}

	// Control element should be a dropdown menu:
	if ( config.type === 'dropdown' ) {
		if ( !isArray( config.choices ) ) {
			err = new Error( 'invalid input argument. For dropdown elements, the `choices` option must be an array. Value: `' + config + '`.' );
			this.fire( 'err', err );
			return;
		}
		// Set default value if not set by user
		if ( !config.value ) {
			config.value = 0;
		}
		this.push( 'config', config );
		return;
	}

	// Control element should be an input field:
	if ( config.type === 'input' ) {
		this.push( 'config', config );
		return;
	}
	return this;
} // end FUNCTION add()

// EXPORTS //

module.exports = add;
