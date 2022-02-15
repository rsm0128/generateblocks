import { Fragment } from '@wordpress/element';
import InspectorControls from '../InspectorControls';
import DynamicContentRenderer from '../DynamicContentRenderer';

export default ( WrappedComponent ) => {
	return ( props ) => {
		const { attributes, setAttributes, context } = props;

		const newProps = attributes.isDynamicContent && 'none' !== attributes.contentType ? Object.assign( {}, props, {
			ContentRenderer: DynamicContentRenderer,
		} ) : props;

		return (
			<Fragment>
				<WrappedComponent { ...newProps } />
				<InspectorControls
					context={ context }
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			</Fragment>
		);
	};
};
