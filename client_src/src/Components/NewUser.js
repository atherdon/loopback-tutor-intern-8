import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class NewUser extends Component{

	onSubmit(e) {
		//Take the form data
		e.preventDefault();
		const newUser = {
			email: this.refs.email.value,
			username: this.refs.username.value,
			password: this.refs.password.value,
		}
		this.addUser(newUser);

	}

	addUser(newUser) {
	
	 	let email = newUser.email;
	 	let filter = "filter={\"where\":{\"email\":\""+email+"\"}}";
		axios.get(`http://localhost:3000/api/User?${filter}`)
		.then(response => {
			if(response.data.length === 0){
				axios.request({
				method: 'post',
				url:'http://localhost:3000/api/userData',
				data: newUser
				}).then(response => {
					this.props.history.push('/userInfo');
				}).catch(err => console.log("Error at add user"));
			}
			else{
				console.log("user already exists");
			}
		})
		.catch(error => {
			console.log("Error in getting user checked")
		});
		
		
	}

	render() {


		return (
			<div>
				<h1>New User</h1>
				<div>
					<form className="entryForm" onSubmit={this.onSubmit.bind(this)}>
						<label>Email</ label>
						<input type="text" name="email" ref="email" />
						<br />
						<label>Username</ label>
						<input type="text" name="username" ref="username" />
						<br />
						<label>Password</ label>
						<input type="text" name="password" ref="password" />
						<br />
						<label>Confirm Password</ label>
						<input type="text" name="cpassword" ref="cpassword" />
						<input type="submit" value="Save" />
					</form>
				</div>
			</div>
		);
	}
}

export default NewUser;