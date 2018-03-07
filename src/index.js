import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDesc from './components/video-desc';
const API_KEY = 'AIzaSyDZM4_awu1EvDRcVY_2dehD9YUPLCT6-N4';

class App extends React.Component {

	constructor() {
		super();

		this.state = {
			term: '',
			videos: [],
			video: null
		};

		this.searchVideo('music');

	}

	searchVideo(term) {
		YTSearch({ key: API_KEY, term: term }, videos => {
			// console.log(videos);
			this.setState({
				video: videos[0],
				videos
			});
		});		
	}

	render() {

	  return (
	  	<div>
	    	<h1>Youtube video finder</h1>
	    	<SearchBar 
	    		onChangeValue={ term => this.searchVideo(term) }/>
	    	<div className="row">
		    	<VideoDesc video={ this.state.video } />
		    	<VideoList 
		    		videos={ this.state.videos } 
		    		onVideoSelect={ video => this.setState({ video }) }/>
	    	</div>
	  	</div>
	  );
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));