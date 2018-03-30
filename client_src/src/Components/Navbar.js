import React, { Component } from 'react';

class Navbar extends Component{
	render() {
		return (
			<div className="nav">
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/view">View Info</a></li>
					<li><a href="/edit">Edit Info</a></li>
					<li><a href="/add">Add Info</a></li>
				</ul>
			</div>
		);
	}
}

export default Navbar;