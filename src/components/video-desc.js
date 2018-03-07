import React from 'react';
import ReactDOM from 'react-dom';

const VideoDesc = ({ video }) => {
	
	if( !video ) {
		return <div>Loading...</div>;
	}

	const url = `https://www.youtube.com/embed/${ video.id.videoId }`;
	
	return (
		<div className="col-md-8 embed-media">
			<iframe src={url}></iframe>
			<div>{ video.snippet.description }</div>
		</div>
	);
};

export default VideoDesc;