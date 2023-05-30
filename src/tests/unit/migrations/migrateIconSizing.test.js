import { migrationPipe } from '../../../hoc/migrations/utils';
import migrateIconSizing from '../../../hoc/migrations/migratingIconSizing';

describe( 'Migrating icon sizing', () => {
	const defaults = {
		iconSize: {
			default: 1,
		},
		iconSizeTablet: {
			default: '',
		},
		iconSizeMobile: {
			default: '',
		},
		iconSizeUnit: {
			default: 'em',
		},
	};

	it( 'can migrate values with separate units', () => {
		const attributes = {
			blockVersion: 3,
			iconSize: 2,
			iconSizeUnit: 'em',
			iconSizeTablet: 1.5,
			iconSizeMobile: 0.8,
		};

		const newAttributes = migrationPipe(
			attributes,
			[
				migrateIconSizing( {
					blockVersionLessThan: 4,
					defaults,
				} ),
			]
		);

		expect( newAttributes ).toEqual( {
			iconStyles: {
				width: '2em',
				height: '2em',
				widthTablet: '1.5em',
				heightTablet: '1.5em',
				widthMobile: '0.8em',
				heightMobile: '0.8em',
			},
			iconSize: 1,
			iconSizeTablet: '',
			iconSizeMobile: '',
			iconSizeUnit: 'em',
		} );
	} );
} );
