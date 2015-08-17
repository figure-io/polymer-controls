'use strict';

// MODULES //

var isString = require( 'validate.io-string-primitive' );


// REMOVE CONTROL //

/**
* FUNCTION remove( name )
*	Removes the control element with the supplied `name`.
*
* @param {String} name - name of the control element to be removed
*/
function remove( name ) {
	/* jshint validthis:true */
	var err,
		len,
		i;

	if ( !isString( name ) ) {
		err = new TypeError( 'invalid input argument. Must provide a string primitive. Value: `' + name + '`.' );
		this.fire( 'err', err );
		return;
	}
	len = this.config.length;
	for ( i = 0; i < len; i++ ) {
		if ( this.config[ i ].name === name ) {
			this.splice( 'config', i, 1 );
			return true;
		}
	}
	return false;
} // end FUNCTION remove()


// EXPORTS //

module.exports = remove;
