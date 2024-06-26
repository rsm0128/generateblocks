import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useEffect, useMemo } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { withUniqueId } from '../../hoc';
import { useSelect, useDispatch } from '@wordpress/data';
import { BlockStyles, useUpdateEditorStyleCSS } from '@edge22/block-styles';
import { getCss } from '@edge22/styles-builder';
import { currentStyleStore, stylesStore, atRuleStore, nestedRuleStore, tabsStore } from '../../store/block-styles';
import { defaultAtRules } from '../../utils/defaultAtRules.js';
import { HtmlAttributes } from '../../components/html-attributes/index.js';
import { convertInlineStyleStringToObject } from '../element/utils.js';
import { OpenPanel } from '@components/open-panel';
import { LoopInnerBlocksRenderer } from './components/LoopInnerBlocksRenderer';
import { useCurrentAtRule } from '@hooks/useCurrentAtRule';

import './editor.scss';
import { GridColumnSelector } from '@components/grid-column-selector';
import { moreDesignOptions } from '@components/open-panel/utils';

function EditBlock( props ) {
	const {
		attributes,
		setAttributes,
	} = props;

	const {
		className,
		uniqueId,
		styles = {},
		css,
		htmlAttributes = [],
		globalClasses = [],
		tagName,
	} = attributes;

	const { getStyles } = useSelect( stylesStore );
	const { addStyle } = useDispatch( stylesStore );
	const updateEditorCSS = useUpdateEditorStyleCSS();
	const currentAtRule = useCurrentAtRule();
	const classNames = useMemo( () => {
		const classes = [];

		if ( className ) {
			classes.push( className );
		}

		if ( globalClasses.length > 0 ) {
			classes.push( ...globalClasses );
		}

		if ( Object.keys( styles ).length > 0 ) {
			classes.push( `gb-looper-${ uniqueId }` );
		}

		return classes;
	}, [ className, globalClasses, styles, uniqueId ] );

	useEffect( () => {
		if ( ! tagName ) {
			setAttributes( { tagName: 'div' } );
		}
	}, [ tagName ] );

	const selector = useMemo( () => {
		if ( ! uniqueId ) {
			return '';
		}

		return '.gb-looper-' + uniqueId;
	}, [ uniqueId ] );

	function onStyleChange( property, value = '', atRuleValue = '', nestedRuleValue = '' ) {
		addStyle( property, value, atRuleValue, nestedRuleValue );

		const updatedStyles = getStyles();
		setAttributes( { styles: updatedStyles } );
	}

	function getStyleValue( property, atRuleValue = '', nestedRuleValue = '' ) {
		if ( nestedRuleValue ) {
			if ( atRuleValue ) {
				return styles?.[ atRuleValue ]?.[ nestedRuleValue ]?.[ property ] ?? '';
			}

			return styles?.[ nestedRuleValue ]?.[ property ] ?? '';
		} else if ( atRuleValue ) {
			return styles?.[ atRuleValue ]?.[ property ] ?? '';
		}

		return styles?.[ property ] ?? '';
	}

	useEffect( () => {
		if ( ! selector ) {
			return;
		}

		( async function() {
			const generateCss = await getCss( selector, styles );
			setAttributes( { css: generateCss } );
		}() );
	}, [ JSON.stringify( styles ), selector ] );

	useEffect( () => {
		if ( ! selector ) {
			return;
		}

		updateEditorCSS( selector, css );
	}, [ css, selector ] );

	const { style = '', ...otherAttributes } = htmlAttributes;
	const inlineStyleObject = convertInlineStyleStringToObject( style );
	const combinedAttributes = { ...otherAttributes, style: inlineStyleObject };

	const blockProps = useBlockProps(
		{
			className: classNames.join( ' ' ).trim(),
			...combinedAttributes,
		}
	);

	const TagName = tagName || 'div';

	return (
		<>
			<InspectorControls>
				<BlockStyles
					selector={ selector }
					onStyleChange={ onStyleChange }
					setAttributes={ setAttributes }
					styles={ styles }
					css={ css }
					stores={ { currentStyleStore, stylesStore, atRuleStore, nestedRuleStore, tabsStore } }
					defaultAtRules={ defaultAtRules }
					scope="gb-block-styles-wrapper"
					stylesBuilderScope="gb-styles-builder-wrapper"
				>
					<OpenPanel
						title={ __( 'Design', 'generateblocks' ) }
						dropdownOptions={ [
							moreDesignOptions,
						] }
					>
						<GridColumnSelector
							value={ getStyleValue( 'gridTemplateColumns', currentAtRule ) }
							onClick={ ( value ) => {
								onStyleChange( 'display', 'grid', currentAtRule );
								onStyleChange( 'gridTemplateColumns', value, currentAtRule );
							} }
						/>
					</OpenPanel>

					<OpenPanel
						title={ __( 'Settings', 'generateblocks' ) }
					>
						<HtmlAttributes
							items={ htmlAttributes }
							onAdd={ ( value ) => setAttributes( { htmlAttributes: value } ) }
							onRemove={ ( value ) => setAttributes( { htmlAttributes: value } ) }
							onChange={ ( value ) => setAttributes( { htmlAttributes: value } ) }
						/>
					</OpenPanel>
				</BlockStyles>
			</InspectorControls>
			<TagName { ...blockProps }>
				<LoopInnerBlocksRenderer { ...props } />
			</TagName>
		</>
	);
}

const Edit = compose(
	withUniqueId
)( EditBlock );

export { Edit };
