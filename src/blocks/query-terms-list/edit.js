import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useEffect, useMemo } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withUniqueId } from '../../hoc';
import { useSelect, useDispatch } from '@wordpress/data';
import { BlockStyles, useUpdateEditorStyleCSS } from '@edge22/block-styles';
import { getCss } from '@edge22/styles-builder';
import { currentStyleStore, stylesStore, atRuleStore, nestedRuleStore, tabsStore } from '../../store/block-styles';
import { defaultAtRules } from '../../utils/defaultAtRules.js';
import { __ } from '@wordpress/i18n';
import { convertInlineStyleStringToObject } from '../element/utils.js';
import { BlockSettings } from './components/BlockSettings';

function TermLink() {
	return (
		<>
			<a
				href="/"
				onClick={ ( e ) => e.preventDefault() }
				className="gb-query-terms-list__term"
			>
				{ __( 'Term item', 'generateblocks' ) }
			</a>
		</>
	);
}

function EditBlock( props ) {
	const {
		attributes,
		setAttributes,
	} = props;

	const {
		className,
		uniqueId,
		styles,
		css,
		htmlAttributes,
		globalClasses,
		tagName,
		separator,
	} = attributes;

	const { getStyles } = useSelect( stylesStore );
	const { addStyle } = useDispatch( stylesStore );
	const updateEditorCSS = useUpdateEditorStyleCSS();
	const classNames = useMemo( () => {
		const classes = [];

		if ( className ) {
			classes.push( className );
		}

		if ( globalClasses.length > 0 ) {
			classes.push( ...globalClasses );
		}

		if ( Object.keys( styles ).length > 0 ) {
			classes.push( `gb-query-terms-list-${ uniqueId }` );
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

		return '.gb-query-terms-list-' + uniqueId;
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
					selectorShortcuts={ {
						default: {
							label: __( 'Term Items', 'generateblocks' ),
							items: [
								{ label: __( 'Item', 'generateblocks' ), value: 'a' },
								{ label: __( 'Hovered item', 'generateblocks' ), value: 'a:is(:hover, :focus)' },
							],
						},
					} }
					scope="gb-block-styles-wrapper"
					stylesBuilderScope="gb-styles-builder-wrapper"
				>
					<BlockSettings
						{ ...props }
						getStyleValue={ getStyleValue }
						onStyleChange={ onStyleChange }
					/>
				</BlockStyles>
			</InspectorControls>
			<TagName { ...blockProps }>
				<TermLink />{ separator ? separator : '' }
				<TermLink />{ separator ? separator : '' }
				<TermLink />
			</TagName>
		</>
	);
}

const Edit = compose(
	withUniqueId
)( EditBlock );

export { Edit };
