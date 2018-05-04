import React, { Component } from 'react';

class Navbar extends Component{
	render() {
		let check = JSON.parse(sessionStorage.getItem("isLoggedIn"));
			if(check === true){
				return (
					<div className="nav">
					<ul>
						<li><a href="/profile">My Profile</a></li>
						<li><a href="/logout">logout</a></li>
					</ul>
					</div>
				);
			}
			else{
				return (
					<div>
					</div>
				);
			}

	}
}

export default Navbar;