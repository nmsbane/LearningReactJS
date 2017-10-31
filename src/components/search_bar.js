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
		//return <input />; // every render() function should return the JSX
		/* 
			Add the listener function to the element
			Whenever writing JSX, if we use JS variables then we will
			wrap it up in {curly braces} 
		*/
		//return <input onChange={this.onInputChange} />

		/*
			Using ES6 fatter function for the above statemen
			return <input onChange={
					(event) => console.log(event.target.value)
			}
		*/
		return <input onChange={(event) => console.log(event.target.value)}/>
	}

	/*
		Some information about handling events;
		Event handling is a 2 step process: 
			We should create a listener function
			Add that listener function to the intrested element
		
		All listener functions will get an event object
		when called
	*/

	// create a listener function
	// onInputChange(event) {
	// 	console.log(event.target.value);
	// }
}

// class based component vs function based component
/*
	If your component needs to be aware of its state ( like what the user has typed, broadcast a event when user stopped typing)
	then use Class Based Component

	Else 
		use Function based component
*/

export default SearchBar;