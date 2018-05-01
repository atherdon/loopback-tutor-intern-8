import React, { Component } from 'react';
import axios from 'axios';
var config = require('../utils/config.json');

class NewUser extends Component{

	onSubmit(e) {
		//Take the form data
		e.preventDefault();
		if(this.refs.password.value === this.refs.cpassword.value){
			const newUser = {
				email: this.refs.email.value,
				firstName: this.refs.fname.value,//not required in base class
				lastName: this.refs.lname.value,//not required in base class
				password: this.refs.password.value,
				username: this.refs.username.value
			}
			this.addUser(newUser);
		}
		else{
			alert("passwords do not match");//try to implement it using flash messages
			window.document.getElementById('cpassword').focus();
		}

	}

	addUser(newUser) {
	//handle this part with backend method to verify the user email
	//CALL TO ADD USER DATA IN DATABASE
		axios.request({
		method: 'post',
		url: config.url + '/api/userData',//url:'http://localhost:3000/api/Users' if it is not extended in any class
		data: newUser
		}).then(respons => {
		//	console.log("This is response-->>"+respons.data);//can get userId from this response object
			this.props.history.push('/verify');//tell user to verify email first
		}).catch(err => {
			if(err.response){
				if(err.response.data.error.details.messages.email)
					alert("email" + err.response.data.error.details.messages.email)
				else if(err.response.data.error.details.messages.username)
					alert("username" + err.response.data.error.details.messages.username)
				console.log(err.response.data.error.message + " Error at signup");
			}
			else
				console.log(err)
		});	
	}

	render() {
		return (
			<div>
				<h1>New User</h1>
				<div>
					<form className="entryForm" onSubmit={this.onSubmit.bind(this)}>
						<label>Email</ label>
						<input type="email" name="email" ref="email" required />
						<br />
						<label>First Name</ label>
						<input type="text" name="firstName" ref="fname" required />
						<br />
						<label>Last Name</ label>
						<input type="text" name="lastName" ref="lname" required />
						<br />
						<label>UserName</ label>
						<input type="text" name="username" ref="username" required />
						<br />
						<label>Password</ label>
						<input type="password" name="password" ref="password" required />
						<br />
						<label>Confirm Password</ label>
						<input type="password" name="cpassword" id="cpassword" ref="cpassword" required />
						<input type="submit" value="Save" />
					</form>
				</div>
			</div>
		);
	}
}

export default NewUser;