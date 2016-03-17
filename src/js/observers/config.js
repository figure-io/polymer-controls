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
	var self = this;
	var ctrl;
	var item;
	var i;
	var j;
	var s;

	if ( changeRecord ) {
		for ( i = 0; i < changeRecord.keySplices.length; i++ ) {
			s = changeRecord.keySplices[ i ];
			if ( s.added.length === 1 ) {
				// Add a new control element
				item = self.config[ s.added[ 0 ] ];

				// Set property of element
				self._controls[ item.name ] = item.value;
			}
		}
		for ( i = 0; i < changeRecord.indexSplices.length; i++ ) {
			s = changeRecord.indexSplices[ i ];
			// Display config panel if at least one control element is present...
			if ( s.object.length > 0 ) {
				self.$.container.style.display = 'block';
			} else if ( s.object.length === 0 ) {
				// Do not display config panel if no control elements are present...
				self.$.container.style.display = 'none';
			}
			// Remove properties from Polymer element...
			for ( j = 0; j < s.removed.length; j++ ) {
				ctrl = s.removed[ j ];
				delete self._controls[ ctrl.name ];
			}
		}
	}
} // end FUNCTION configChanged()


// EXPORTS //

module.exports = configChanged;
