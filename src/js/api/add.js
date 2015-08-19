'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isObject = require( 'validate.io-object' ),
	validate = require( 'controls-spec' );


// ADD ONE //

/**
* FUNCTION addOne( config )
*	Adds a single control element as specified by `config`.
*
* @private
* @param {Object} config - configuration object for control element
*/
function addOne( config ) {
	/* jshint validthis:true */
	var err,
		i;

	if ( !isObject( config ) ) {
		err = new TypeError( 'invalid input argument. Must provide an object. Value: `' + config + '`' );
		this.fire( 'err', err );
		return;
	}

	// Check whether config element adheres to the schema...
	if ( validate( config) === false ) {
		err = new Error( 'invalid input argument. Schema validation was unsuccessful. Value: `' + validate.errors + '`.' );
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

	// Set default config properties
	switch ( config.type ) {
		case 'slider':
			if ( !config.value ) {
				config.value = ( config.max - config.min ) / 2;
			}
		break;
		case 'checkbox':
			if ( !config.value ) {
				config.value = false;
			}
		break;
		case 'dropdown':
			if ( !config.value ) {
				config.value = 0;
			}
		break;
	}

	this.push( 'config', config );
	return;
} // end FUNCTION addOne()


// ADD CONTROL //

/**
* FUNCTION add( configs )
*	Adds control elements as specified by `configs`.
*
* @param {Array|Object} configs - array of configuration objects / single configuration object for control element
* @returns {Object} context
*/
function add( configs ) {
	/* jshint validthis:true */
	var err,
		len,
		i;

	if ( isArray( configs ) ) {
		len = configs.length;
		for ( i = 0; i < len; i++ ) {
			addOne.call( this, configs[ i ] );
		}
	} else if ( isObject( configs ) ) {
		addOne.call( this, configs );
	} else {
		err = new TypeError( 'invalid input argument. Must provide an array or object. Value: `' + configs + '`' );
		this.fire( 'err', err );
	}

	return this;
} // end FUNCTION add()


// EXPORTS //

module.exports = add;
