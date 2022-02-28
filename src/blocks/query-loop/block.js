import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import getIcon from '../../utils/get-icon';
import attributes from './attributes';
import editGridContainer from '../grid/edit';
import { InnerBlocks } from '@wordpress/block-editor';
import withQueryLoop from './hoc/withQueryLoop';
import './editor.scss';

registerBlockType( 'generateblocks/query-loop', {
	apiVersion: 2,
	title: __( 'Query Loop', 'generateblocks' ),
	description: __( 'Create advanced loops.', 'generateblocks' ),
	icon: getIcon( 'grid' ),
	category: 'generateblocks',
	keywords: [
		__( 'query' ),
		__( 'loop' ),
		__( 'generate' ),
	],
	attributes,
	supports: { className: false },
	providesContext: {
		'generateblocks/query': 'query',
		'generateblocks/gridId': 'uniqueId',
	},
	edit: withQueryLoop( editGridContainer ),
	save: () => {
		return (
			<InnerBlocks.Content />
		);
	},
} );
