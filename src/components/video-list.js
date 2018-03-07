import React from 'react';
import ReactDOM from 'react-dom';
import VideoItem from './video-item';

const VideoList = ({ videos, onVideoSelect }) => {
	return (
		<ul className="col-md-4 list-group video__list">
			{videos.map(function(item) {
				return <VideoItem 
					video={ item } 
					key={ item.etag }
					onVideoSelect={ term => onVideoSelect(term) }/>;
			})}
		</ul>
	);
};

export default VideoList;