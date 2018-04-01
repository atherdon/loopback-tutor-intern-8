import React, { Component } from 'react';

class Navbar extends Component{
	render() {
		return (
			<div className="nav">
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/view">View Booking</a></li>
					<li><a href="/edit">Edit Booking</a></li>
					<li><a href="/add">Add Booking</a></li>
					<li><a href="/users">View Users</a></li>
				</ul>
			</div>
		);
	}
}

export default Navbar;