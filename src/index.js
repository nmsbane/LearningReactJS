import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

// YouTube API key
const API_KEY = 'AIzaSyD-yHmzdy23NbrkMEo-FJVGk8R484dyq58';


// create a new component. The new component should return html
const App = () => {
	return (
		<SearchBar />
	)
}


// add the returned html in the DOM( in the page ).
ReactDOM.render(<App />, document.querySelector('.container'));