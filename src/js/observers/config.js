'use strict';

// OBSERVER //

/**
* FUNCTION configChanged( oldVal, newVal )
*	Event handler invoked when the `config` property changes.
*
* @param {Object} changeRecord - object with `keySplices` and `indexSplices`
*/
function configChanged( changeRecord ) {
	/* jshint validthis:true */
	var self = this,
		item;

	if ( changeRecord ) {

		// TODO: why are we using `forEach`? Use a `for` loop. And name the `function`.
		changeRecord.keySplices.forEach( function( s ) {
			if ( s.added.length === 1 ) {
				// Add a new control element
				item = self.config[ s.added[ 0 ] ];

				// Set property of element
				self._controls[ item.name ] = item.value;
			}
		});

		changeRecord.indexSplices.forEach( function( s ) {
			// Display config panel if at least one control element is present
			if ( s.object.length > 0 ) {
				self.$.container.style.display = 'block';
			} else if ( s.object.length === 0 ) {
				// Do not display config panel if no control elements are present
				self.$.container.style.display = 'none';
			}
			// Remove properties from Polymer element
			s.removed.forEach( function( control ) {
				delete self._controls[ control.name ];
			});
		});
	}
} // end FUNCTION configChanged()


// EXPORTS //

module.exports = configChanged;
