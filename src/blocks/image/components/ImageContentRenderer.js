import ImagePlaceholder from './ImagePlaceholder';
import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import RootElement from '../../../components/root-element';
import Element from '../../../components/element';
import Image from './Image';
import BlockControls from './BlockControls';
import { useRef, useState, useMemo, useEffect } from '@wordpress/element';
import getDynamicImage from '../../../utils/get-dynamic-image';
import getMediaUrl from '../../../utils/get-media-url';

export default function ImageContentRenderer( props ) {
	const {
		attributes,
		setAttributes,
		name,
		clientId,
		context,
	} = props;

	const {
		uniqueId,
		isDynamicContent,
		contentType,
		dynamicSource,
		href,
		openInNewWindow,
		relNoFollow,
		relSponsored,
		width,
		height,
		sizeSlug,
		className,
	} = attributes;

	const imageRef = useRef();
	const [
		{ loadedNaturalWidth, loadedNaturalHeight },
		setLoadedNaturalSize,
	] = useState( {} );

	// Get naturalWidth and naturalHeight from image ref, and fall back to loaded natural
	// width and height. This resolves an issue in Safari where the loaded natural
	// witdth and height is otherwise lost when switching between alignments.
	// See: https://github.com/WordPress/gutenberg/pull/37210.
	const { naturalWidth, naturalHeight } = useMemo( () => {
		return {
			naturalWidth:
				imageRef.current?.naturalWidth ||
				loadedNaturalWidth ||
				undefined,
			naturalHeight:
				imageRef.current?.naturalHeight ||
				loadedNaturalHeight ||
				undefined,
		};
	}, [
		loadedNaturalWidth,
		loadedNaturalHeight,
		imageRef.current?.complete,
	] );

	useEffect( () => {
		if ( ! isDynamicContent ) {
			if ( ! width ) {
				setAttributes( { width: naturalWidth } );
			}

			if ( ! height ) {
				setAttributes( { height: naturalHeight } );
			}
		}
	}, [
		loadedNaturalWidth,
		loadedNaturalHeight,
	] );

	const currentImage = getDynamicImage( props );
	const dynamicImageUrl = getMediaUrl( currentImage, sizeSlug );
	const imageUrl = isDynamicContent && contentType ? dynamicImageUrl : attributes.mediaUrl;
	const altText = isDynamicContent && contentType ? currentImage?.alt_text : attributes.alt;
	const titleText = isDynamicContent && contentType ? currentImage?.title?.rendered : attributes.title;

	const figureAttrs = {
		className: classnames( {
			'gb-block-image': true,
			[ `gb-block-image-${ uniqueId }` ]: true,
		} ),
	};

	const blockProps = useBlockProps( figureAttrs );

	// We don't want our className appearing in the figure.
	if ( blockProps?.className.includes( className ) ) {
		blockProps.className = blockProps.className.replace( className, '' ).trim();
	}

	const isDescendentOfQueryLoop = !! context[ 'generateblocks/query' ];

	const canUploadImage =
		! isDynamicContent ||
		(
			isDynamicContent &&
			'featured-image' === contentType &&
			'current-post' === dynamicSource &&
			! isDescendentOfQueryLoop
		);

	const anchorAttributes = {
		href,
		openInNewWindow,
		relNoFollow,
		relSponsored,
		disabled: true,
	};

	const imageProps = {
		src: imageUrl,
		alt: altText,
		title: titleText,
		setAttributes,
		anchorAttributes,
		imageRef,
		setLoadedNaturalSize,
		attributes,
	};

	return (
		<>
			<BlockControls { ...props } imageUrl={ imageUrl } canUploadImage={ canUploadImage } />

			<RootElement name={ name } clientId={ clientId }>
				<Element tagName="figure" htmlAttrs={ blockProps }>
					{ ( !! imageUrl )
						? <Image { ...imageProps } />
						: <ImagePlaceholder { ...props } canUploadImage={ canUploadImage } />
					}
				</Element>
			</RootElement>
		</>
	);
}
