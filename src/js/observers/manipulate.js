'use strict';

// OBSERVER //

/**
* FUNCTION manipulateChanged( oldVal, newVal )
*	Event handler invoked when the `manipulate` property changes.
*
* @param {Object} changeRecord - object with `keySplices` and `indexSplices`
*/
function manipulateChanged( changeRecord ) {
	/* jshint validthis:true */
	var self = this,
		item;

	if ( changeRecord ) {
		changeRecord.keySplices.forEach( function( s ) {
			if ( s.added.length === 1 ) {
				// Add a new control element
				item = self.manipulate[ s.index ];

				// Set property of element
				self.element[ item.name ] = item.value;

				// Add event listener
				/*
				self.element.addEventListener( item.name, function updateControl() {
					var index = -1;
					var i = 0;
					while ( index === -1 ) {
						if ( self.manipulate[ i ].name === item.name ) {
							index = i;
						}
						i++;
					}
					self.set( 'manipulate.' + index + '.value', self[ item.name ] );
				});
				*/
			}

		});

		changeRecord.indexSplices.forEach( function( s ) {
			// Display manipulate panel if at least one control element is present
			if ( s.object.length > 0 ) {
				self.$.manipulate.style.display = 'block';
			} else if ( s.object.length === 0 ) {
				// Do not display manipulate panel if no control elements are present
				self.$.manipulate.style.display = 'none';
			}
			// Remove properties from Polymer element
			s.removed.forEach( function( control ) {
				delete self.element[ control.name ];
			});
		});
	}
}  // end FUNCTION manipulateChanged()


// EXPORTS //

module.exports = manipulateChanged;
