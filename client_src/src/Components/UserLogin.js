import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class NewUser extends Component{

	onSubmit(e) {

		const user = {
			username: this.refs.username.value,
			password: this.refs.password.value
			
		}
		
		this.submitUser(user);
		e.preventDefault();

	}

	submitUser(user){
		axios.request({
			method: 'post',
			url:'http://localhost:3000/api/Users/login',
			data: user
		}).then(response => {
			console.log(response.data);	//returns the object containing access token
			this.props.history.push('/view');
		}).catch(err => console.log("Error at login verification"));
	}

	render() {


		return (
			<div>
				<h1>LogIn</h1>
				<div>
					<form className="entryForm" method="post" onSubmit={this.onSubmit.bind(this)}>
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