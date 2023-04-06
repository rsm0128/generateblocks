const el = wp.element.createElement;

export default function getIcon( icon ) {
	if ( 'tabs-desktop' === icon ) {
		return el( 'svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none' },
			el( 'path', {
				d: 'M18.95 4H4.55C3.55589 4 2.75 4.76751 2.75 5.71429V14.2857C2.75 15.2325 3.55589 16 4.55 16H18.95C19.9441 16 20.75 15.2325 20.75 14.2857V5.71429C20.75 4.76751 19.9441 4 18.95 4Z',
				stroke: 'currentColor',
				strokeWidth: '2',
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
			} ),
			el( 'path', {
				d: 'M1.75 18C1.19772 18 0.75 18.4477 0.75 19C0.75 19.5523 1.19772 20 1.75 20H21.75C22.3023 20 22.75 19.5523 22.75 19C22.75 18.4477 22.3023 18 21.75 18H1.75ZM9 18.8C8.86193 18.8 8.75 18.9119 8.75 19.05C8.75 19.1881 8.86193 19.3 9 19.3H14.5C14.6381 19.3 14.75 19.1881 14.75 19.05C14.75 18.9119 14.6381 18.8 14.5 18.8H9Z',
				stroke: 'currentColor',
				fillRule: 'evenodd',
				clipRule: 'evenodd',
			} ),
		);
	}

	if ( 'tabs-tablet' === icon ) {
		return el( 'svg', { width: 24, height: 24, viewBox: '0 0 24 24' },
			el( 'path', { d: 'M16.6429 4H7.35714C6.33147 4 5.5 4.71634 5.5 5.6V18.4C5.5 19.2837 6.33147 20 7.35714 20H16.6429C17.6685 20 18.5 19.2837 18.5 18.4V5.6C18.5 4.71634 17.6685 4 16.6429 4Z' } ),
			el( 'path', { d: 'M12 17.5H12.01' } )
		);
	}

	if ( 'tabs-mobile' === icon ) {
		return el( 'svg', { width: 24, height: 24, viewBox: '0 0 24 24' },
			el( 'path', { d: 'M15.5714 4H8.42857C7.63959 4 7 4.71634 7 5.6V18.4C7 19.2837 7.63959 20 8.42857 20H15.5714C16.3604 20 17 19.2837 17 18.4V5.6C17 4.71634 16.3604 4 15.5714 4Z' } ),
			el( 'path', { d: 'M12 17.5H12.01' } )
		);
	}

	if ( 'sync' === icon ) {
		return el( 'svg', { width: 24, height: 24, viewBox: '0 0 24 24' },
			el( 'path', {
				d: 'm7.34133533 6.23855964v-1.98499625c-2.17404351.03150788-4.03300825 1.38634659-4.85221305 3.27681921-.31507877.72468117-.44111028 1.51237809-.4096024 2.33158289.06301575 1.13428361.47261815 2.20555141 1.16579145 3.05626411.37809452.4411102.28357089 1.1027757-.18904726 1.4493623-.44111028.3150788-1.07126782.2205551-1.41785447-.1890473-.85071268-1.0397599-1.38634658-2.3315829-1.54388597-3.7179294-.12603151-1.00825211-.03150788-2.01650417.25206302-2.9302326.88222055-3.02475619 3.6864216-5.26181546 6.99474868-5.29332334v-1.98499624c0-.09452363.12603151-.15753939.22055514-.09452363l4.09602403 2.99324831c.0630157.06301575.0630157.15753938 0 .18904726l-4.09602403 2.99324831c-.09452363.06301575-.22055514 0-.22055514-.09452363zm.22055514 13.17029256c.09452363.0630158.22055514 0 .22055514-.0945236v-1.9849963c3.30832709-.0315078 6.11252809-2.2685671 6.99474869-5.2933233.252063-.9137284.3780945-1.8904726.252063-2.93023256-.1575394-1.38634658-.7246812-2.67816954-1.543886-3.71792948-.3465866-.44111028-.9767441-.53563391-1.4178544-.18904726-.4726182.34658665-.5671418 1.00825206-.1890473 1.44936234.6931733.85071268 1.1027757 1.89047262 1.1657915 3.05626407.0315078.81920479-.1260315 1.63840959-.4096024 2.33158289-.787697 1.8904726-2.6466617 3.2453113-4.85221309 3.2768192v-1.9849962c0-.0945237-.12603151-.1575394-.22055514-.0945237l-4.096024 2.9932483c-.06301576.0630158-.06301576.1575394 0 .1890473z',
				transform: 'translate(4 2)',
			} ),
		);
	}

	if ( 'headline' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="gblocks-block-icon"><path style={ { fill: 'none' } } d="M0 0h24v24H0z" /><path d="M21.375 22h-5.769a.625.625 0 0 1-.625-.625v-6.042H9.019v6.042a.625.625 0 0 1-.625.625H2.625A.625.625 0 0 1 2 21.375V2.625C2 2.28 2.28 2 2.625 2h5.769c.346 0 .625.28.625.625v6.041h5.961V2.625A.626.626 0 0 1 15.606 2h5.769c.345 0 .625.28.625.625v18.75c0 .345-.28.625-.625.625zm-5.144-1.25h4.519V3.25h-4.519v6.041c0 .345-.28.625-.625.625H8.394a.625.625 0 0 1-.625-.625V3.25H3.25v17.5h4.519v-6.042c0-.345.28-.625.625-.625h7.212c.345 0 .625.28.625.625v6.042z" /></svg>;
	}

	if ( 'grid' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="gblocks-block-icon"><path style={ { fill: 'none' } } d="M0 0h24v24H0z" /><path d="M21.375 10.755h-4.689a.625.625 0 0 1-.625-.625V2.625c0-.345.28-.625.625-.625h4.689a.624.624 0 0 1 .625.625v7.505c0 .345-.28.625-.625.625zm-4.064-1.251h3.44V3.25h-3.44v6.254zm-4.474 1.251H2.625A.625.625 0 0 1 2 10.13V2.625C2 2.28 2.28 2 2.625 2h10.212c.345 0 .625.28.625.625v7.505a.626.626 0 0 1-.625.625zM3.249 9.504h8.963V3.25H3.249v6.254zm4.064 12.497H2.625A.625.625 0 0 1 2 21.375V13.87c0-.345.28-.625.625-.625h4.688c.345 0 .625.28.625.625v7.505a.627.627 0 0 1-.625.626zM3.249 20.75h3.439v-6.255H3.249v6.255zm18.126 1.251H11.162a.625.625 0 0 1-.625-.625V13.87c0-.345.28-.625.625-.625h10.213c.345 0 .625.28.625.625v7.505c0 .346-.28.626-.625.626zm-9.588-1.251h8.964v-6.255h-8.964v6.255z" /></svg>;
	}

	if ( 'container' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="gblocks-block-icon"><path style={ { fill: 'none' } } d="M0 0h24v24H0z" /><path d="M21.375 22h-3.75v-1.25h3.125v-3.125H22v3.75c0 .345-.28.625-.625.625zM9.188 20.75h5.625V22H9.188zM6.375 22h-3.75A.625.625 0 0 1 2 21.375v-3.75h1.25v3.125h3.125V22zM2 9.187h1.25v5.625H2zm1.25-2.812H2v-3.75C2 2.28 2.28 2 2.625 2h3.75v1.25H3.25v3.125zM9.188 2h5.625v1.25H9.188zM22 6.375h-1.25V3.25h-3.125V2h3.75c.345 0 .625.28.625.625v3.75zm-1.25 2.812H22v5.625h-1.25z" /></svg>;
	}

	if ( 'button' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="gblocks-block-icon"><path style={ { fill: 'none' } } d="M0 0h24v24H0z" /><path d="M21.375 16.45H2.625A.625.625 0 0 1 2 15.825v-7.65c0-.345.28-.625.625-.625h18.75c.345 0 .625.28.625.625v7.65c0 .345-.28.625-.625.625zM3.25 15.2h17.5V8.8H3.25v6.4z" /><path d="M15.536 12.625H5.882a.625.625 0 0 1 0-1.25h9.654a.625.625 0 0 1 0 1.25z" /><circle cx="17.936" cy="12" r=".807" /></svg>;
	}

	if ( 'button-container' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="gblocks-block-icon"><path style={ { fill: 'none' } } d="M0 0h24v24H0z" /><path d="M21.375 10.9H2.625A.625.625 0 0 1 2 10.275v-7.65C2 2.28 2.28 2 2.625 2h18.75c.345 0 .625.28.625.625v7.65c0 .345-.28.625-.625.625zM3.25 9.65h17.5v-6.4H3.25v6.4zM21.375 22H2.625A.625.625 0 0 1 2 21.375v-7.649c0-.345.28-.625.625-.625h18.75c.345 0 .625.28.625.625v7.649c0 .345-.28.625-.625.625zM3.25 20.75h17.5v-6.4H3.25v6.4z" /><path d="M15.224 7.075H5.57a.625.625 0 0 1 0-1.25h9.654a.625.625 0 0 1 0 1.25z" /><circle cx="17.624" cy="6.45" r=".807" /><path d="M18.431 18.176H8.777a.625.625 0 0 1 0-1.25h9.654a.625.625 0 0 1 0 1.25z" /><circle cx="6.377" cy="17.551" r=".807" /></svg>;
	}

	if ( 'post-template' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20" className="gblocks-block-icon"><path d="M23.7 12.9H.3c-.2 0-.3-.1-.3-.3V.3C0 .1.1 0 .3 0h23.4c.2 0 .3.1.3.3v12.3c0 .2-.1.3-.3.3zM1.8 11.1h20.4V1.8H1.8v9.3zM13.4 15h10.3c.2 0 .3.1.3.3v8.4c0 .2-.1.3-.3.3H13.4c-.2 0-.3-.1-.3-.3v-8.4c0-.1.2-.3.3-.3zm8.8 1.8h-7.3v5.4h7.3v-5.4zM.3 18.6H10c.2 0 .3.1.3.3v1.2c0 .2-.1.3-.3.3H.3c-.2 0-.3-.1-.3-.3v-1.2c0-.1.1-.3.3-.3zm0-3.6H10c.2 0 .3.1.3.3v1.2c0 .2-.1.3-.3.3H.3c-.2 0-.3-.1-.3-.3v-1.2c0-.1.1-.3.3-.3zm0 7.2H10c.2 0 .3.1.3.3v1.2c0 .2-.1.3-.3.3H.3c-.2 0-.3-.1-.3-.3v-1.2c0-.2.1-.3.3-.3z" /></svg>;
	}

	if ( 'query-loop' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="gblocks-block-icon"><path style={ { fill: 'none' } } d="M0 0h24v24H0z" /><path d="M21.374 6.133H14.67a.625.625 0 0 1 0-1.25h6.704a.625.625 0 0 1 0 1.25zm0 2.882H14.67a.625.625 0 0 1 0-1.25h6.704a.625.625 0 0 1 0 1.25zm0-5.764H14.67a.625.625 0 0 1 0-1.251h6.704a.625.625 0 0 1 0 1.251zM9.329 19.118H2.625a.625.625 0 1 1 0-1.25h6.704a.625.625 0 0 1 0 1.25zm0 2.883H2.625a.625.625 0 0 1 0-1.25h6.704a.625.625 0 0 1 0 1.25zm0-5.766H2.625a.625.625 0 1 1 0-1.25h6.704a.625.625 0 0 1 0 1.25z" /><path d="M16.841 22.001a5.17 5.17 0 0 1-3.661-1.517c-1.961-1.961-1.876-5.29-1.793-8.51.095-3.705.185-7.204-2.646-8.399-1.275-.538-2.731-.405-3.8.351-.981.692-1.576 1.721-1.677 2.895a3.929 3.929 0 0 0 1.137 3.116c.882.882 2.245 1.322 4.419 1.428.344.017.61.31.594.655a.621.621 0 0 1-.655.594c-1.688-.082-3.81-.36-5.242-1.792a5.179 5.179 0 0 1-1.498-4.107A5.211 5.211 0 0 1 4.22 2.904c1.418-1.002 3.337-1.186 5.006-.481 3.616 1.526 3.511 5.622 3.409 9.583-.076 2.956-.154 6.012 1.428 7.594a3.924 3.924 0 0 0 3.114 1.137c1.174-.1 2.202-.695 2.896-1.675.754-1.066.889-2.52.353-3.796-.72-1.716-2.283-2.509-5.226-2.652a.626.626 0 0 1-.594-.655.615.615 0 0 1 .655-.594c2.32.112 5.136.602 6.317 3.416.701 1.67.515 3.587-.486 5.002a5.204 5.204 0 0 1-4.251 2.218z" /></svg>;
	}

	if ( 'image' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="gblocks-block-icon"><path style={ { fill: 'none' } } d="M0 0h24v24H0z" /><path d="M15.77 11.655a3.429 3.429 0 0 1-3.425-3.425 3.428 3.428 0 0 1 3.425-3.425 3.429 3.429 0 0 1 3.424 3.425 3.429 3.429 0 0 1-3.424 3.425zm0-5.6a2.179 2.179 0 0 0-2.176 2.175c0 1.199.977 2.175 2.176 2.175s2.175-.976 2.175-2.175a2.178 2.178 0 0 0-2.175-2.175z" /><path d="M21.375 22.001H2.625A.625.625 0 0 1 2 21.375V2.625C2 2.28 2.28 2 2.625 2h18.751a.624.624 0 0 1 .624.625v18.751c0 .345-.28.625-.625.625zM3.249 20.75H20.75V3.25H3.249v17.5z" /><path d="M20.956 21.839 8.968 11.018l-5.91 5.698-.867-.9L8.52 9.714a.624.624 0 0 1 .853-.014l12.422 11.212-.839.927z" /></svg>;
	}

	if ( 'paragraph' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 20 20' },
			el( 'path', {
				d: 'M15 2H7.54c-.83 0-1.59.2-2.28.6-.7.41-1.25.96-1.65 1.65C3.2 4.94 3 5.7 3 6.52s.2 1.58.61 2.27c.4.69.95 1.24 1.65 1.64.69.41 1.45.61 2.28.61h.43V17c0 .27.1.51.29.71.2.19.44.29.71.29.28 0 .51-.1.71-.29.2-.2.3-.44.3-.71V5c0-.27.09-.51.29-.71.2-.19.44-.29.71-.29s.51.1.71.29c.19.2.29.44.29.71v12c0 .27.1.51.3.71.2.19.43.29.71.29.27 0 .51-.1.71-.29.19-.2.29-.44.29-.71V4H15c.27 0 .5-.1.7-.3.2-.19.3-.43.3-.7s-.1-.51-.3-.71A.984.984 0 0 0 15 2z',
			} ),
		);
	}

	if ( 'spacing' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 113 113', fillRule: 'evenodd' },
			el( 'path', {
				d: 'M106.283,6.217c8.289,8.29 8.289,91.776 0,100.066c-8.29,8.289 -91.776,8.289 -100.066,0c-8.289,-8.29 -8.289,-91.776 0,-100.066c8.29,-8.289 91.776,-8.289 100.066,0Zm-10.007,10.007c6.632,6.632 6.632,73.42 0,80.052c-6.632,6.632 -73.42,6.632 -80.052,0c-6.632,-6.632 -6.632,-73.42 0,-80.052c6.632,-6.632 73.42,-6.632 80.052,0Z',
			} ),
			el( 'path', {
				d: 'M40.452,77.705c7.802,1.393 23.794,1.393 31.596,0l13.635,13.635c-12.215,3.213 -46.652,3.213 -58.866,0l13.635,-13.635Zm50.888,-50.888c3.213,12.215 3.213,46.653 0,58.866l-13.635,-13.635c1.393,-7.801 1.393,-23.794 0,-31.596l13.635,-13.635Zm-70.18,0l13.635,13.635c-1.393,7.802 -1.393,23.794 0,31.596l-13.635,13.635c-3.213,-12.213 -3.213,-46.651 0,-58.866Zm5.657,-5.657c12.214,-3.213 46.652,-3.213 58.866,0l-13.635,13.635c-7.801,-1.393 -23.795,-1.393 -31.596,0l-13.635,-13.635Z',
			} ),
		);
	}

	if ( 'advanced' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 113 113', fillRule: 'evenodd' },
			el( 'path', {
				d: 'M106.283,6.217c8.289,8.29 8.289,91.776 0,100.066c-8.29,8.289 -91.776,8.289 -100.066,0c-8.289,-8.29 -8.289,-91.776 0,-100.066c8.29,-8.289 91.776,-8.289 100.066,0Zm-10.007,37.215c6.632,2.124 6.632,23.512 0,25.636c-6.632,2.124 -73.42,2.124 -80.052,0c-6.632,-2.124 -6.632,-23.512 0,-25.636c6.632,-2.124 73.42,-2.124 80.052,0Z',
			} ),
			el( 'path', {
				d: 'M48.61,51.916c2.243,0.718 2.243,7.95 0,8.668c-2.242,0.718 -24.823,0.718 -27.065,0c-2.243,-0.718 -2.243,-7.95 0,-8.668c2.242,-0.718 24.823,-0.718 27.065,0Z',
			} ),
			el( 'path', {
				d: 'M90.955,51.916c2.243,0.718 2.243,7.95 0,8.668c-2.242,0.718 -24.823,0.718 -27.065,0c-2.243,-0.718 -2.243,-7.95 0,-8.668c2.242,-0.718 24.823,-0.718 27.065,0Z',
			} ),
		);
	}

	if ( 'backgrounds' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 113 113', fillRule: 'evenodd' },
			el( 'path', {
				d: 'M1.491,87.777l37.79,-37.79l31.352,31.352c2.412,2.171 5.656,0 5.656,0l17.248,-17.247l13.186,13.186l4.796,4.797c-0.971,12.199 -2.726,21.685 -5.249,24.208c-8.29,8.289 -91.776,8.289 -100.066,0c-2.113,-2.113 -3.687,-9.113 -4.713,-18.506Z',
			} ),
			el( 'path', {
				d: 'M0.631,77.323c-1.742,-27.728 0.125,-65.658 5.573,-71.106c8.29,-8.289 91.776,-8.289 100.066,0c5.07,5.07 7.039,38.265 5.89,65.185l-15.795,-15.795c-2.412,-2.172 -5.657,0 -5.657,0l-17.247,17.246l-31.351,-31.351c-0.731,-0.658 -1.036,-1 -2.619,-1.166c-0.263,0 -0.477,-0.075 -1.245,0.131c-0.912,0.244 -1.793,1.035 -1.793,1.035l-35.822,35.821Zm76.434,-59.584c7.115,0 12.891,5.776 12.891,12.89c0,7.114 -5.776,12.89 -12.891,12.89c-7.114,0 -12.89,-5.776 -12.89,-12.89c0,-7.114 5.776,-12.89 12.89,-12.89Z',
			} ),
		);
	}

	if ( 'colors' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 113 113', fillRule: 'evenodd' },
			el( 'path', {
				d: 'M106.283,6.217c8.289,8.29 8.289,91.776 0,100.066c-8.29,8.289 -91.776,8.289 -100.066,0c-8.289,-8.29 -8.289,-91.776 0,-100.066c8.29,-8.289 91.776,-8.289 100.066,0Zm-50.033,12.818c-20.551,0 -37.215,16.664 -37.215,37.215c0,20.551 16.664,37.215 37.215,37.215c3.432,0 6.202,-2.77 6.202,-6.203c0,-1.612 -0.62,-3.059 -1.612,-4.176c-0.951,-1.075 -1.571,-2.522 -1.571,-4.094c0,-3.432 2.77,-6.202 6.202,-6.202l7.319,0c11.413,0 20.675,-9.262 20.675,-20.675c0,-18.277 -16.664,-33.08 -37.215,-33.08Zm-22.742,37.215c-3.433,0 -6.203,-2.77 -6.203,-6.202c0,-3.433 2.77,-6.203 6.203,-6.203c3.432,0 6.202,2.77 6.202,6.203c0,3.432 -2.77,6.202 -6.202,6.202Zm45.484,0c-3.432,0 -6.202,-2.77 -6.202,-6.202c0,-3.433 2.77,-6.203 6.202,-6.203c3.433,0 6.203,2.77 6.203,6.203c0,3.432 -2.77,6.202 -6.203,6.202Zm-33.079,-16.54c-3.433,0 -6.203,-2.77 -6.203,-6.202c0,-3.433 2.77,-6.203 6.203,-6.203c3.432,0 6.202,2.77 6.202,6.203c0,3.432 -2.77,6.202 -6.202,6.202Zm20.674,0c-3.432,0 -6.202,-2.77 -6.202,-6.202c0,-3.433 2.77,-6.203 6.202,-6.203c3.433,0 6.203,2.77 6.203,6.203c0,3.432 -2.77,6.202 -6.203,6.202Z',
			} ),
		);
	}

	if ( 'gradients' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 113 113', fillRule: 'evenodd' },
			el( 'path', {
				d: 'M112.426,48.746c0.503,25.204 -1.545,52.939 -6.143,57.537c-8.29,8.289 -91.776,8.289 -100.066,0c-8.289,-8.29 -8.289,-91.776 0,-100.066c8.289,-8.288 91.748,-8.289 100.061,-0.004c0,0 0.005,0.004 0.005,0.004c3.691,3.692 5.739,22.295 6.143,42.529Zm-16.154,-32.526c-6.656,-6.628 -73.418,-6.627 -80.048,0.004c-6.631,6.63 -6.632,73.392 -0.004,80.048l80.052,-80.052Z',
			} ),
		);
	}

	if ( 'icons' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 113 113', fillRule: 'evenodd' },
			el( 'path', {
				d: 'M106.283,6.217c8.289,8.29 8.289,91.776 0,100.066c-8.29,8.289 -91.776,8.289 -100.066,0c-8.289,-8.29 -8.289,-91.776 0,-100.066c8.29,-8.289 91.776,-8.289 100.066,0Zm-10.007,10.007c6.632,6.632 6.632,73.42 0,80.052c-6.632,6.632 -73.42,6.632 -80.052,0c-6.632,-6.632 -6.632,-73.42 0,-80.052c6.632,-6.632 73.42,-6.632 80.052,0Z',
			} ),
			el( 'path', {
				d: 'M89.605,22.895c5.527,5.526 5.527,61.184 0,66.71c-5.526,5.527 -61.184,5.527 -66.71,0c-5.527,-5.526 -5.527,-61.184 0,-66.71c5.526,-5.527 61.184,-5.527 66.71,0Zm-21.066,62.31l0,-2.731c-0.648,-0.074 -1.272,-0.199 -1.87,-0.374c-0.599,-0.174 -1.148,-0.374 -1.646,-0.598c-0.699,-0.299 -1.235,-0.755 -1.609,-1.366c-0.374,-0.611 -0.561,-1.353 -0.561,-2.226l0,-29.703l-0.561,-0.561l-18.331,0.972l0,2.731c0.748,0.075 1.577,0.25 2.488,0.524c0.91,0.274 1.589,0.561 2.038,0.86c0.599,0.399 1.098,0.929 1.497,1.59c0.399,0.661 0.598,1.428 0.598,2.301l0,21.773c0,0.923 -0.162,1.665 -0.486,2.226c-0.324,0.561 -0.885,0.991 -1.683,1.29c-0.449,0.175 -0.986,0.3 -1.609,0.374c-0.624,0.075 -1.26,0.138 -1.908,0.187l0,2.731l23.643,0Zm-12.978,-59.459c4.76,0 8.625,3.864 8.625,8.625c0,4.76 -3.865,8.625 -8.625,8.625c-4.76,0 -8.625,-3.865 -8.625,-8.625c0,-4.761 3.865,-8.625 8.625,-8.625Z',
			} ),
		);
	}

	if ( 'typography' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 113 113', fillRule: 'evenodd' },
			el( 'path', {
				d: 'M106.283,6.217c8.289,8.29 8.289,91.776 0,100.066c-8.29,8.289 -91.776,8.289 -100.066,0c-8.289,-8.29 -8.289,-91.776 0,-100.066c8.29,-8.289 91.776,-8.289 100.066,0Zm-8.783,78.583l0,-2.817c-0.661,-0.026 -1.481,-0.165 -2.46,-0.417c-0.979,-0.251 -1.773,-0.562 -2.381,-0.932c-0.9,-0.609 -1.601,-1.23 -2.103,-1.865c-0.503,-0.635 -0.953,-1.468 -1.349,-2.5l-18.769,-48.569l-3.175,0c-2.672,6.878 -5.714,14.721 -9.126,23.53c-3.266,8.43 -6.265,16.06 -8.998,22.891l-11.672,-28.684l-2.304,0c-1.939,4.742 -4.148,10.149 -6.625,16.222c-2.477,6.072 -4.743,11.543 -6.798,16.412c-0.403,0.949 -0.816,1.692 -1.238,2.23c-0.423,0.538 -1.018,1.053 -1.786,1.545c-0.48,0.292 -1.095,0.524 -1.844,0.698c-0.749,0.173 -1.373,0.278 -1.872,0.314l0,1.942l15.382,0l0,-1.942c-1.518,-0.073 -2.881,-0.31 -4.091,-0.711c-1.209,-0.401 -1.814,-0.966 -1.814,-1.696c0,-0.31 0.048,-0.711 0.144,-1.204c0.096,-0.492 0.268,-1.13 0.518,-1.914c0.269,-0.803 0.571,-1.678 0.907,-2.626c0.336,-0.948 0.773,-2.061 1.311,-3.338l14.316,0l3.399,8.699c0.012,0.03 0.024,0.06 0.036,0.092c-0.161,0.119 -0.329,0.237 -0.503,0.355c-0.661,0.423 -1.508,0.76 -2.539,1.012c-1.032,0.251 -1.892,0.403 -2.58,0.456l0,2.817l21.19,0l0,-2.817c-2.09,-0.106 -3.968,-0.45 -5.635,-1.032c-1.666,-0.582 -2.499,-1.402 -2.499,-2.46c0,-0.45 0.066,-1.032 0.198,-1.746c0.132,-0.714 0.37,-1.64 0.714,-2.777c0.371,-1.164 0.787,-2.434 1.25,-3.81c0.463,-1.375 1.065,-2.989 1.806,-4.841l19.721,0l4.682,12.619c0.106,0.264 0.186,0.568 0.238,0.912c0.053,0.344 0.08,0.635 0.08,0.873c0,0.582 -0.681,1.072 -2.044,1.468c-1.362,0.397 -3.075,0.662 -5.138,0.794l0,2.817l23.451,0Zm-56.864,-15.865l-6.193,-15.045l-6.078,15.045l12.271,0Zm34.167,-7.15l-8.532,-21.824l-8.373,21.824l16.905,0Z',
			} ),
		);
	}

	if ( 'addContainer' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path style={ { fill: 'none' } } d="M0 0h24v24H0z" /><path d="M21.375 22h-3.75v-1.25h3.125v-3.125H22v3.75c0 .345-.28.625-.625.625zM9.188 20.75h5.625V22H9.188zM6.375 22h-3.75A.625.625 0 0 1 2 21.375v-3.75h1.25v3.125h3.125V22zM2 9.187h1.25v5.625H2zm1.25-2.812H2v-3.75C2 2.28 2.28 2 2.625 2h3.75v1.25H3.25v3.125zM9.188 2h5.625v1.25H9.188zM22 6.375h-1.25V3.25h-3.125V2h3.75c.345 0 .625.28.625.625v3.75zm-1.25 2.812H22v5.625h-1.25zM12 18.293a.625.625 0 0 1-.625-.625V6.331a.625.625 0 0 1 1.25 0v11.337c0 .346-.28.625-.625.625z" /><path d="M17.669 12.625H6.332a.625.625 0 0 1 0-1.25h11.337a.625.625 0 0 1 0 1.25z" /></svg>;
	}

	if ( 'gradient' === icon ) {
		return el( 'svg', { width: 24, height: 24, viewBox: '0 0 24 24', fillRule: 'evenodd' },
			el( 'path', {
				d: 'M17.66 8L12 2.35L6.34 8A8.02 8.02 0 0 0 4 13.64c0 2 .78 4.11 2.34 5.67a7.99 7.99 0 0 0 11.32 0c1.56-1.56 2.34-3.67 2.34-5.67S19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z',
			} ),
		);
	}

	if ( 'documentation' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 113 113', fillRule: 'evenodd' },
			el( 'path', {
				d: 'M106.755 6.245c8.327 8.326 8.327 92.184 0 100.51-8.326 8.327-92.184 8.327-100.51 0-8.327-8.326-8.327-92.184 0-100.51 8.326-8.327 92.184-8.327 100.51 0zm-92.661 93.896C9.279 84 9.781 23.714 15.834 17.661c2.491-2.491 19.588-4.132 26.354-4.712 4.748-.408 10.115.671 14.243 1.23 4.128-.559 9.495-1.638 14.243-1.23 6.766.58 23.863 2.221 26.354 4.712 6.053 6.053 6.791 66.339 1.976 82.48-4.729-1.977-19.708-3.436-26.784-3.853-5.234-.308-11.129.739-15.671 1.354-4.543-.615-10.437-1.662-15.672-1.354-7.075.417-22.054 1.876-26.783 3.853z',
			} ),
			el( 'path', {
				d: 'M50.188 32.738c2.252.536 2.252 5.927 0 6.463-2.252.535-24.934.535-27.186 0-2.252-.536-2.252-5.927 0-6.463 2.252-.535 24.934-.535 27.186 0zM50.277 46.846c2.252.535 2.252 5.927 0 6.462-2.252.535-24.934.535-27.186 0-2.252-.535-2.252-5.927 0-6.462 2.252-.535 24.934-.535 27.186 0zM50.277 60.037c2.252.535 2.252 5.927 0 6.462-2.252.535-24.934.535-27.186 0-2.252-.535-2.252-5.927 0-6.462 2.252-.535 24.934-.535 27.186 0zM50.277 73.799c2.252.536 2.252 5.927 0 6.463-2.252.535-24.934.535-27.186 0-2.252-.536-2.252-5.927 0-6.463 2.252-.535 24.934-.535 27.186 0z',
			} ),
			el( 'path', {
				d: 'M89.909 32.738c2.252.536 2.252 5.927 0 6.463-2.252.535-24.934.535-27.186 0-2.252-.536-2.252-5.927 0-6.463 2.252-.535 24.934-.535 27.186 0zM89.998 46.846c2.252.535 2.252 5.927 0 6.462-2.252.535-24.934.535-27.186 0-2.252-.535-2.252-5.927 0-6.462 2.252-.535 24.934-.535 27.186 0zM89.998 60.037c2.252.535 2.252 5.927 0 6.462-2.252.535-24.934.535-27.186 0-2.252-.535-2.252-5.927 0-6.462 2.252-.535 24.934-.535 27.186 0z',
			} ),
		);
	}

	if ( 'layout' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 113 113', fillRule: 'evenodd' },
			el( 'path', {
				d: 'M106.719 6.238c8.362 8.362 8.362 92.208 0 100.57-8.362 8.287-92.208 8.287-100.495 0-8.362-8.362-8.362-92.208 0-100.57 8.287-8.286 92.133-8.286 100.495 0zm-9.417 9.417c6.78 6.78 6.78 74.957 0 81.737-6.78 6.78-74.956 6.78-81.661 0-6.78-6.78-6.78-74.957 0-81.737 6.705-6.78 74.881-6.78 81.661 0z',
			} ),
			el( 'path', {
				d: 'M93.988 48.877c.602 17.477-.754 37.893-3.993 41.132-3.164 3.164-22.75 4.52-40.002 4.068v-45.2h43.995zm-75.108 0h23.58v44.899c-9.718-.603-17.553-1.808-19.512-3.767-3.24-3.24-4.595-23.655-4.068-41.132zm.377-7.533c.678-9.19 1.883-16.498 3.691-18.306 5.575-5.575 61.472-5.575 67.047 0 1.808 1.808 3.013 9.115 3.691 18.306h-74.43z',
			} ),
		);
	}

	if ( 'shapes' === icon ) {
		return el( 'svg', { width: 20, height: 20, viewBox: '0 0 113 113', fillRule: 'evenodd' },
			el( 'path', {
				d: 'M106.756,6.244C115.081,14.571 115.081,98.429 106.756,106.756C98.429,115.081 14.571,115.081 6.244,106.756C-2.081,98.429 -2.081,14.571 6.244,6.244C14.571,-2.081 98.429,-2.081 106.756,6.244ZM67.875,88.052C67.875,86.977 67.003,86.105 65.928,86.105L47.072,86.105C45.997,86.105 45.125,86.977 45.125,88.052L45.125,91.948C45.125,93.023 45.997,93.896 47.072,93.896L65.928,93.896C67.003,93.896 67.875,93.023 67.875,91.948L67.875,88.052ZM57.899,31.409L59.305,31.409C60.853,31.409 62.11,30.152 62.11,28.604L62.11,28.089L73.263,57.543C73.757,58.333 73.731,59.161 73.731,59.403C73.729,62.659 65.231,69.414 65.375,83.611L47.625,83.611C47.769,69.414 39.271,62.659 39.269,59.403C39.269,59.161 39.243,58.333 39.737,57.543L50.89,28.089L50.89,28.604C50.89,30.152 52.147,31.409 53.695,31.409L55.101,31.409C55.111,35.738 55.142,50.367 55.098,54.109C55.093,54.494 54.907,54.988 54.68,55.45C52.915,56.169 51.669,57.903 51.669,59.925C51.669,62.592 53.834,64.756 56.5,64.756C59.166,64.756 61.331,62.592 61.331,59.925C61.331,57.903 60.085,56.169 58.32,55.45C58.093,54.988 57.907,54.494 57.902,54.109C57.858,50.367 57.889,35.738 57.899,31.409ZM52.227,19.451L52.227,18.881C52.227,17.702 53.185,16.745 54.364,16.745L58.636,16.745C59.815,16.745 60.773,17.702 60.773,18.881L60.773,19.451L88.831,19.451C89.457,17.867 91.002,16.745 92.807,16.745C95.165,16.745 97.08,18.66 97.08,21.018C97.08,23.376 95.165,25.29 92.807,25.29C91.03,25.29 89.505,24.203 88.861,22.658L71.798,22.658C83.83,28.003 92.531,39.501 93.898,53.148L94.93,53.148C96.109,53.148 97.067,54.105 97.067,55.284L97.067,59.557C97.067,60.736 96.109,61.693 94.93,61.693L90.657,61.693C89.478,61.693 88.521,60.736 88.521,59.557L88.521,55.284C88.521,54.105 89.478,53.148 90.657,53.148L90.922,53.148C89.19,37.24 76.627,24.564 60.773,22.659L60.773,23.154C60.773,24.333 59.815,25.29 58.636,25.29L54.364,25.29C53.185,25.29 52.227,24.333 52.227,23.154L52.227,22.688C36.484,24.689 24.036,37.318 22.312,53.148L22.329,53.148C23.508,53.148 24.466,54.105 24.466,55.284L24.466,59.557C24.466,60.736 23.508,61.693 22.329,61.693L18.056,61.693C16.877,61.693 15.92,60.736 15.92,59.557L15.92,55.284C15.92,54.105 16.877,53.148 18.056,53.148L19.336,53.148C20.703,39.501 29.405,28.003 41.437,22.658L24.139,22.658C23.495,24.203 21.97,25.29 20.193,25.29C17.835,25.29 15.92,23.376 15.92,21.018C15.92,18.66 17.835,16.745 20.193,16.745C21.998,16.745 23.543,17.867 24.169,19.451L52.227,19.451Z',
			} ),
		);
	}

	if ( 'sizing' === icon ) {
		return <svg width="20" height="20" viewBox="0 0 113 113" style={ { fillRule: 'evenodd' } }><path d="M106.283,6.217C114.572,14.507 114.572,97.993 106.283,106.283C97.993,114.572 14.507,114.572 6.217,106.283C-2.072,97.993 -2.072,14.507 6.217,6.217C14.507,-2.072 97.993,-2.072 106.283,6.217ZM96.276,16.224C102.908,22.856 102.908,89.644 96.276,96.276C89.644,102.908 22.856,102.908 16.224,96.276C9.592,89.644 9.592,22.856 16.224,16.224C22.856,9.592 89.644,9.592 96.276,16.224Z" /><path d="M61.111,66.666L61.111,82.793C68.473,82.75 74.913,82.604 76.176,82.357C67.724,90.476 59.273,97.249 56.25,97.249C53.227,97.249 44.775,90.476 36.324,82.357C37.586,82.604 44.027,82.75 51.388,82.793L51.388,66.666L61.111,66.666ZM66.666,51.388L82.793,51.388C82.75,44.027 82.604,37.586 82.357,36.324C90.476,44.775 97.249,53.227 97.249,56.25C97.249,59.273 90.476,67.724 82.357,76.176C82.604,74.913 82.75,68.473 82.793,61.111L66.666,61.111L66.666,51.388ZM45.834,51.388L45.834,61.111L29.706,61.111C29.75,68.473 29.895,74.913 30.143,76.176C22.024,67.724 15.25,59.273 15.25,56.25C15.25,53.227 22.024,44.775 30.143,36.324C29.896,37.586 29.75,44.027 29.706,51.388L45.834,51.388ZM51.388,45.834L51.388,29.706C44.027,29.75 37.586,29.895 36.324,30.143C44.775,22.024 53.227,15.25 56.25,15.25C59.273,15.25 67.724,22.024 76.176,30.143C74.913,29.896 68.473,29.75 61.111,29.706L61.111,45.834L51.388,45.834Z" /></svg>;
	}

	if ( 'container-settings' === icon ) {
		return <svg viewBox="0 0 113 113" style={ { fillRule: 'evenodd' } }><path d="M106.283 6.217c8.289 8.29 8.289 91.776 0 100.066-8.29 8.289-91.776 8.289-100.066 0-8.289-8.29-8.289-91.776 0-100.066 8.29-8.289 91.776-8.289 100.066 0ZM88.125 90.25h-12.75V86H86V75.375h4.25v12.75a2.126 2.126 0 0 1-2.125 2.125ZM46.689 86h19.125v4.25H46.689V86Zm-9.564 4.25h-12.75a2.135 2.135 0 0 1-2.125-2.125v-12.75h4.25V86h10.625v4.25ZM22.25 46.686h4.25v19.125h-4.25V46.686Zm63.75 0h4.25v19.125H86V46.686Zm-59.5-9.561h-4.25v-12.75c0-1.173.952-2.125 2.125-2.125h12.75v4.25H26.5v10.625Zm63.75 0H86V26.5H75.375v-4.25h12.75c1.173 0 2.125.952 2.125 2.125v12.75ZM46.689 22.25h19.125v4.25H46.689v-4.25Z" /></svg>;
	}

	if ( 'button-settings' === icon ) {
		return <svg viewBox="0 0 113 113" style={ { fillRule: 'evenodd ' } }><path d="M106.283 6.217c8.289 8.29 8.289 91.776 0 100.066-8.29 8.289-91.776 8.289-100.066 0-8.289-8.29-8.289-91.776 0-100.066 8.29-8.289 91.776-8.289 100.066 0Zm-18.627 64.94H24.843a2.103 2.103 0 0 1-2.093-2.094V43.436c0-1.156.938-2.094 2.093-2.094h62.813c1.156 0 2.094.938 2.094 2.094v25.627a2.095 2.095 0 0 1-2.094 2.094ZM26.937 66.97h58.625V45.53H26.937v21.44Zm49.198-13.424a2.706 2.706 0 0 1 2.704 2.704 2.704 2.704 0 1 1-2.704-2.704Zm-8.04 4.797H35.754a2.103 2.103 0 0 1-2.093-2.093c0-1.149.945-2.094 2.093-2.094h32.341c1.149 0 2.094.945 2.094 2.094a2.103 2.103 0 0 1-2.094 2.093Z" /></svg>;
	}

	if ( 'wrench' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><rect x="0" fill="none" width="20" height="20" /><g><path d="M16.68 9.77c-1.34 1.34-3.3 1.67-4.95.99l-5.41 6.52c-.99.99-2.59.99-3.58 0s-.99-2.59 0-3.57l6.52-5.42c-.68-1.65-.35-3.61.99-4.95 1.28-1.28 3.12-1.62 4.72-1.06l-2.89 2.89 2.82 2.82 2.86-2.87c.53 1.58.18 3.39-1.08 4.65zM3.81 16.21c.4.39 1.04.39 1.43 0 .4-.4.4-1.04 0-1.43-.39-.4-1.03-.4-1.43 0-.39.39-.39 1.03 0 1.43z" /></g></svg>;
	}

	if ( 'x' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><rect x="0" fill="none" width="20" height="20" /><g><path d="M14.95 6.46L11.41 10l3.54 3.54-1.41 1.41L10 11.42l-3.53 3.53-1.42-1.42L8.58 10 5.05 6.47l1.42-1.42L10 8.58l3.54-3.53z" /></g></svg>;
	}

	if ( 'ellipsis' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><rect x="0" fill="none" width="20" height="20" /><g><path d="M5 10c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm12-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></g></svg>;
	}

	if ( 'insert' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><rect x="0" fill="none" width="20" height="20" /><g><path d="M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z" /></g></svg>;
	}

	if ( 'reset' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 50 50"><path d="M25 38c-5.1 0-9.7-3-11.8-7.6l1.8-.8c1.8 3.9 5.7 6.4 10 6.4 6.1 0 11-4.9 11-11s-4.9-11-11-11c-4.6 0-8.5 2.8-10.1 7.3l-1.9-.7c1.9-5.2 6.6-8.6 12-8.6 7.2 0 13 5.8 13 13s-5.8 13-13 13z" fill="currentColor" /><path d="M20 22h-8v-8h2v6h6z" fill="currentColor" /></svg>;
	}

	if ( 'dynamic' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 921 921" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"><path d="M869.447 50.856c67.809 67.817 67.809 750.774 0 818.59-67.817 67.807-750.774 67.807-818.591 0-67.808-67.816-67.808-750.773 0-818.59 67.817-67.808 750.774-67.808 818.591 0Zm-395.295 685.52h3.579c9.702 0 17.579 7.877 17.579 17.579v3.42H723.3c5.451-12.361 17.818-21 32.187-21 19.405 0 35.159 15.755 35.159 35.159 0 19.405-15.754 35.159-35.159 35.159-14.491 0-26.947-8.786-32.325-21.317H495.31v3.738c0 9.702-7.877 17.579-17.579 17.579h-35.159c-9.702 0-17.579-7.877-17.579-17.58v-3.737H197.141c-5.378 12.53-17.834 21.317-32.325 21.317-19.405 0-35.159-15.754-35.159-35.16 0-19.403 15.754-35.157 35.159-35.157 14.369 0 26.736 8.638 32.187 21h227.99v-3.421c0-9.702 7.877-17.58 17.579-17.58h3.58V609.535h28v126.842ZM129.657 414.193c0 29.527 148.09 53.5 330.495 53.5 182.404 0 330.494-23.973 330.494-53.5v94c0 29.527-148.09 53.5-330.494 53.5-182.405 0-330.495-23.973-330.495-53.5v-94Zm0-134.5c0 29.527 148.09 53.5 330.495 53.5 182.404 0 330.494-23.973 330.494-53.5v94c0 29.527-148.09 53.5-330.494 53.5-182.405 0-330.495-23.973-330.495-53.5v-94Zm.002-134.673c.591-29.45 148.453-53.327 330.493-53.327 182.404 0 330.494 23.973 330.494 53.5v94c0 29.527-148.09 53.5-330.494 53.5-182.405 0-330.495-23.973-330.495-53.5v-94l.002-.173Z" /></svg>;
	}

	if ( 'trash' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" fill="none" style={ { fill: 'none' } } stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" /></svg>;
	}

	if ( 'query-params' === icon ) {
		return <svg viewBox="0 0 2876 2876" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"><path d="M2717.022 158.925c211.903 211.928 211.903 2346.168 0 2558.097-211.928 211.893-2346.169 211.893-2558.097 0-211.9-211.929-211.9-2346.17 0-2558.097 211.928-211.9 2346.169-211.9 2558.097 0ZM1786.4 1975.975c-155.978 116.55-349.419 185.565-558.85 185.565-515.969 0-934.872-418.9-934.872-934.872 0-515.968 418.903-934.868 934.872-934.868 515.969 0 934.872 418.9 934.872 934.868 0 211.963-70.694 407.541-189.725 564.372l508.869 508.87c25.609 25.608 25.609 67.196 0 92.805l-92.81 92.81c-25.61 25.61-67.197 25.61-92.806 0l-509.55-509.55ZM1227.55 529.253c384.916 0 697.419 312.5 697.419 697.415 0 384.916-312.503 697.42-697.419 697.42s-697.419-312.504-697.419-697.42c0-384.915 312.503-697.415 697.419-697.415Zm-28.434 1248.965c-43.153 0-77.044-11.55-101.666-34.65-24.625-23.1-36.934-54.703-36.934-94.812 0-40.616 12.309-72.472 36.934-95.572 24.622-23.1 58.513-34.65 101.666-34.65s76.915 11.55 101.284 34.65c24.369 23.1 36.553 54.956 36.553 95.572 0 40.11-12.184 71.712-36.553 94.812-24.369 23.1-58.131 34.65-101.284 34.65Zm-346.504-811.04c1.016-47.216 9.9-90.497 26.657-129.844 16.753-39.347 40.868-73.11 72.347-101.284 31.475-28.178 69.934-50.138 115.371-65.875 45.438-15.738 97.35-23.607 155.735-23.607 54.325 0 103.697 7.235 148.122 21.704 44.422 14.468 82.5 34.778 114.231 60.921 31.731 26.147 56.225 57.372 73.487 93.672 17.263 36.3 25.894 76.535 25.894 120.703 0 57.37-13.71 106.616-41.125 147.741-27.415 41.122-68.031 77.675-121.847 109.66-25.384 14.724-46.325 28.306-62.825 40.743-16.5 12.438-29.7 25.131-39.6 38.078-9.9 12.944-16.88 26.653-20.943 41.122-4.063 14.469-6.094 30.844-6.094 49.119v40.362h-201.806l-1.525-41.884c-2.538-30.462-1.775-57.878 2.284-82.247 4.063-24.369 11.678-46.581 22.847-66.634 11.169-20.053 26.019-38.46 44.55-55.213s40.997-32.747 67.397-47.978c24.369-14.722 44.803-28.303 61.303-40.74 16.503-12.438 29.703-25.004 39.603-37.697 9.9-12.694 16.878-26.02 20.94-39.982 4.063-13.962 6.094-29.828 6.094-47.596 0-17.77-3.428-34.016-10.28-48.738-6.854-14.722-16.629-27.416-29.32-38.078-12.693-10.66-27.925-19.038-45.693-25.131-17.77-6.09-37.57-9.138-59.4-9.138-44.17 0-79.582 12.438-106.235 37.316-26.656 24.878-41.25 58.384-43.79 100.525H852.612Z" /></svg>;
	}

	if ( 'caption' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 32 32"><path fill="currentColor" d="M11.5 13C10.24 13 9 14.213 9 16s1.24 3 2.5 3a2.17 2.17 0 0 0 1.274-.421 1 1 0 1 1 1.164 1.626A4.17 4.17 0 0 1 11.5 21C8.893 21 7 18.632 7 16s1.893-5 4.5-5c.95 0 1.822.326 2.536.867a1 1 0 1 1-1.208 1.594A2.183 2.183 0 0 0 11.5 13Zm7.5 3c0-1.787 1.24-3 2.5-3 .479 0 .934.162 1.328.46a1 1 0 0 0 1.208-1.593A4.182 4.182 0 0 0 21.5 11c-2.607 0-4.5 2.368-4.5 5s1.893 5 4.5 5a4.17 4.17 0 0 0 2.438-.795 1 1 0 1 0-1.164-1.626A2.172 2.172 0 0 1 21.5 19c-1.26 0-2.5-1.213-2.5-3ZM2 8.5A4.5 4.5 0 0 1 6.5 4h19A4.5 4.5 0 0 1 30 8.5v15a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 23.5v-15ZM6.5 6A2.5 2.5 0 0 0 4 8.5v15A2.5 2.5 0 0 0 6.5 26h19a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 25.5 6h-19Z" /></svg>;
	}

	if ( 'add-pagination' === icon ) {
		return <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 8.2h-5.2V3h-1.6v5.2H6v1.6h5.2V15h1.6V9.8H18V8.2ZM8.5 17.5h-3a1.5 1.5 0 0 0 0 3h3a1.5 1.5 0 0 0 0-3ZM15 19a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM20 19a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" fill="#000" /></svg>;
	}

	if ( 'section' === icon ) {
		return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="gblocks-block-icon"><path style={ { fill: 'none' } } d="M0 0h24v24H0z" /><path d="M17 17.6h-3.6v-1.2h3v-3h1.2V17a.6.6 0 0 1-.6.6zm-6.399 0H7a.6.6 0 0 1-.6-.6v-3.6h1.2v3h3v1.2zm-3-7H6.4V7a.6.6 0 0 1 .6-.6h3.6v1.2h-3v3zm9.999 0h-1.2v-3h-3V6.4H17a.6.6 0 0 1 .6.6v3.6zM21.375 22h-3.75v-1.25h3.125v-3.125H22v3.75c0 .345-.28.625-.625.625zm-15 0h-3.75A.625.625 0 0 1 2 21.375v-3.75h1.25v3.125h3.125V22zM2 9.187h1.25v5.625H2zm1.25-2.812H2v-3.75C2 2.28 2.28 2 2.625 2h3.75v1.25H3.25v3.125zm18.75 0h-1.25V3.25h-3.125V2h3.75c.345 0 .625.28.625.625v3.75zm-1.25 2.812H22v5.625h-1.25z" /></svg>;
	}

	if ( 'single-container' === icon ) {
		return <svg viewBox="0 0 130 70" xmlns="http://www.w3.org/2000/svg"><path d="M0 60v9.346c0 .361.293.654.654.654H10v-2H2v-8H0ZM10 0H.654A.654.654 0 0 0 0 .654V10h2V2h8V0ZM0 15h2v10H0zM15 68h10v2H15zM30 68h10v2H30zM45 68h10v2H45zM60 68h10v2H60zM75 68h10v2H75zM90 68h10v2H90zM105 68h10v2h-10zM120 70h9.346a.654.654 0 0 0 .654-.654V60h-2v8h-8v2ZM128 30h2v10h-2zM128 45h2v10h-2zM128 15h2v10h-2zM130 10V.654a.654.654 0 0 0-.654-.654H120v2h8v8h2ZM90 0h10v2H90zM105 0h10v2h-10zM75 0h10v2H75zM60 0h10v2H60zM45 0h10v2H45zM30 0h10v2H30zM15 0h10v2H15zM0 30h2v10H0zM0 45h2v10H0z" /><path d="M125 6.341c0-.74-.601-1.341-1.341-1.341H6.341C5.601 5 5 5.601 5 6.341v57.318C5 64.399 5.601 65 6.341 65h117.318c.74 0 1.341-.601 1.341-1.341V6.341Z" /></svg>;
	}

	if ( 'with-inner-container' === icon ) {
		return <svg viewBox="0 0 130 70" xmlns="http://www.w3.org/2000/svg"><path d="M0 60v9.346c0 .361.293.654.654.654H10v-2H2v-8H0ZM10 0H.654A.654.654 0 0 0 0 .654V10h2V2h8V0ZM0 15h2v10H0zM15 68h10v2H15zM30 68h10v2H30zM45 68h10v2H45zM60 68h10v2H60zM75 68h10v2H75zM90 68h10v2H90zM105 68h10v2h-10zM120 70h9.346a.654.654 0 0 0 .654-.654V60h-2v8h-8v2ZM128 30h2v10h-2zM128 45h2v10h-2zM128 15h2v10h-2zM130 10V.654a.654.654 0 0 0-.654-.654H120v2h8v8h2ZM90 0h10v2H90zM105 0h10v2h-10zM75 0h10v2H75zM60 0h10v2H60zM45 0h10v2H45zM30 0h10v2H30zM15 0h10v2H15zM0 30h2v10H0zM0 45h2v10H0z" /><path d="M125 6.341v57.318c0 .74-.601 1.341-1.341 1.341H6.341C5.601 65 5 64.399 5 63.659V6.341C5 5.601 5.601 5 6.341 5h117.318c.74 0 1.341.601 1.341 1.341ZM107.5 40V30h-2v10h2Zm-10 15h9.346a.654.654 0 0 0 .654-.654V45h-2v8h-8v2Zm-60 0h10v-2h-10v2Zm45 0h10v-2h-10v2Zm-15 0h10v-2h-10v2Zm-45-25v10h2V30h-2Zm10-15h-9.346a.654.654 0 0 0-.654.654V25h2v-8h8v-2Zm15 0h-10v2h10v-2Zm15 0h-10v2h10v-2Zm-40 30v9.346c0 .361.293.654.654.654H32.5v-2h-8v-8h-2Zm30 10h10v-2h-10v2Zm25-40h-10v2h10v-2Zm15 0h-10v2h10v-2Zm15 10v-9.346a.654.654 0 0 0-.654-.654H97.5v2h8v8h2Z" /></svg>;
	}
}
