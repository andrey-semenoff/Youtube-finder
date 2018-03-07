import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

class SearchBar extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = { term: '' }
		this.onChangeValue = _.debounce(this.onChangeValue, 500);
	}

	onChangeValue(term) {
		this.props.onChangeValue(term);
	}

	render() {

		return (
			<input className="form-control search-bar" placeholder="Enter keywords to find" autoFocus
				onChange={ event => this.onChangeValue(event.target.value) } />
		);
	}
}

export default SearchBar;