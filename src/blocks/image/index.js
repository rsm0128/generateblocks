/**
 * WordPress dependencies
 */
import { postFeaturedImage } from '@wordpress/icons';
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';
import dynamicContentAttributes from '../../extend/dynamic-content/attributes';

const attributes = Object.assign(
	{},
	metadata.attributes,
	dynamicContentAttributes
);

registerBlockType( 'generateblocks/image', {
	icon: postFeaturedImage,
	attributes,
	edit,
	save: ( { attributes } ) => {
		if ( ! attributes.isDynamicContent ) {
			return (
				<figure { ...useBlockProps.save() }>
					<img src={ attributes.url } alt="" />
				</figure>
			);
		}

		return undefined;
	},
} );
