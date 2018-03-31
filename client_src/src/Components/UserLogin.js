import React, { Component } from 'react';
/*import axios from 'axios';*/
import '../App.css';

class NewUser extends Component{

	render() {


		return (
			<div>
				<h1>LogIn</h1>
				<div>
					<form className="entryForm" method="post" action="http://localhost:3000/api/Users/login">
						<br />
						<label>User Name</ label>
						<input type="text" name="username" ref="username" />
						<br />
						<label>Password</ label>
						<input type="text" name="password" ref="password" />
						<br />
						<input type="submit" value="Login" />
						<a href="/adduser" >New User?</a>
					</form>
				</div>
			</div>
		);
	}
}

export default NewUser;