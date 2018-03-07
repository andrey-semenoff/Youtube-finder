import React from 'react';
import ReactDOM from 'react-dom';

const VideoItem = ({video, onVideoSelect}) => {

	return (
		<li className="list-group-item"
			onClick={ () => onVideoSelect(video) }
			>
			<img src={ video.snippet.thumbnails.default.url } />
			{ video.snippet.title }
		</li>
	);

}

export default VideoItem;