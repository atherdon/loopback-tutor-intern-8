import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class NewUser extends Component{

	onSubmit(e) {
		//Take the form data
		e.preventDefault();
		const newUser = {
			firstName: this.refs.fname.value,
			lastName: this.refs.lname.value,
			email: this.refs.email.value
		}
		this.addUser(newUser);

	}

	addUser(newUser) {
	
	 	let email = newUser.email;
	 	let filter = "filter={\"where\":{\"email\":\""+email+"\"}}";
		axios.get(`http://localhost:3000/api/userData?${filter}`)
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
						<label>First Name</ label>
						<input type="text" name="fname" ref="fname" />
						<br />
						<label>Last Name</ label>
						<input type="text" name="lname" ref="lname" />
						<br />
						<input type="submit" value="Add User" />
					</form>
				</div>
			</div>
		);
	}
}

export default NewUser;