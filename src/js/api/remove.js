'use strict';

// MODULES //

var isString = require( 'validate.io-string-primitive' );


// REMOVE CONTROL //

/**
* FUNCTION remove( id )
*	Removes the control element with the supplied `id`.
*
* @param {String} id - id of the control element to be removed
*/
function remove( id ) {
	/* jshint validthis:true */
	var err;
	var len;
	var i;

	if ( !isString( id ) ) {
		err = new TypeError( 'invalid input argument. Must provide a string primitive. Value: `' + name + '`.' );
		this.fire( 'err', err );
		return;
	}
	len = this.config.length;
	for ( i = 0; i < len; i++ ) {
		if ( this.config[ i ].name === id ) {
			this.splice( 'config', i, 1 );
			return true;
		}
	}
	return false;
} // end FUNCTION remove()


// EXPORTS //

module.exports = remove;
