import { AlignmentToolbar, BlockControls } from '@wordpress/block-editor';
import getAttribute from '../../../utils/get-attribute';
import typographyOptions from '../../../extend/inspector-control/controls/typography/options';
import isFlexItem from '../../../utils/is-flex-item';
import getDeviceType from '../../../utils/get-device-type';
import AlignmentMatrixControl from '../../../extend/block-controls/controls/alignment-matrix-control';

export default ( { attributes, setAttributes } ) => {
	const deviceType = getDeviceType();
	const {
		display,
		displayTablet,
		displayMobile,
		flexDirection,
		flexDirectionTable,
		flexDirectionMobile,
		alignItems,
		alignItemsTablet,
		alignItemsMobile,
		justifyContent,
		justifyContentTablet,
		justifyContentMobile,
	} = attributes;

	return (
		<BlockControls>
			{ ! isFlexItem( { device: deviceType, display, displayTablet, displayMobile } ) &&
				<AlignmentToolbar
					value={ getAttribute( 'alignment', { attributes, deviceType } ) }
					onChange={ ( value ) => {
						setAttributes( {
							[ getAttribute( 'alignment', { attributes, deviceType }, true ) ]: value,
						} );
					} }
					alignmentControls={ typographyOptions.alignments }
				/>
			}

			<AlignmentMatrixControl
				attributes={ {
					display,
					displayTablet,
					displayMobile,
					flexDirection,
					flexDirectionTable,
					flexDirectionMobile,
					alignItems,
					alignItemsTablet,
					alignItemsMobile,
					justifyContent,
					justifyContentTablet,
					justifyContentMobile,
				} }
				setAttributes={ setAttributes }
			/>
		</BlockControls>
	);
};
