import React, { Component } from 'react';

/*
	The syntax import React, { Component } from 'react'
	effectively means
	const Component = React.Component;

	and you can directly use it after extends like 
	class SearchBar extends Component
*/

// this is a function based component
/*const SearchBar = () => {
	return <input />;
}*/

// this is a class based component.
// ES6 syntax to create a class based component. It should inherit from React.Component
class SearchBar extends Component /*React.Component*/ {

	// every class should have render() method
	// ES6 syntax for creating a method inside a class
	// alternate to render: function() {}
	render() {
		return <input />; // every render() function should return the JSX
	}
}

// class based component vs function based component
/*
	If your component needs to be aware of its state ( like what the user has typed, broadcast a event when user stopped typing)
	then use Class Based Component

	Else 
		use Function based component
*/

export default SearchBar;