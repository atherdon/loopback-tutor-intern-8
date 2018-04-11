import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class NewUser extends Component{

	onSubmit(e) {
		//Take the form data
		e.preventDefault();
		if(this.refs.password.value === this.refs.cpassword.value){
			const newUser = {
				email: this.refs.email.value,
				firstName: this.refs.fname.value,
				lastName: this.refs.lname.value,
				password: this.refs.password.value,
				username: this.refs.username.value
			}
			this.addUser(newUser);
		}
		else{
			alert("passwords do not match");
			window.document.getElementById('cpassword').focus();
		}

	}

	addUser(newUser) {
	
/*	 	let email = newUser.email;
	 	let uname = newUser.username;
//	 	let filter = "filter={\"where\":{\"email\":\""+email+"\"}}";
//filter={"where":{"or":[{"id":1},{"id":2},...,{"id":20"},{"id":21}]}}  to keep both username and password
	 	//first check if user's email exists in database
		axios.get(`http://localhost:3000/api/userData?${filter}`)
		.then(response => {
			if(response.data.length === 0){
*/				axios.request({
				method: 'post',
				url:'http://localhost:3000/api/userData',//url:'http://localhost:3000/api/Users',
				data: newUser
				}).then(respons => {
					console.log(respons.data);//can get userId from this response object
//if it doesn't exist then get the access token from respons.data and insert in the userData model 
					axios.request({
						method: 'post',
						url:'http://localhost:3000/api/userData/login',//url:'http://localhost:3000/api/Users/login',
						data: newUser
					}).then(respon => {
						console.log(respon.data);	//returns the object containing access token
						sessionStorage.setItem("accessToken",respon.data.id);
						sessionStorage.setItem("userId",respon.data.userId);
//						console.log(sessionStorage.getItem("accessToken"));
						this.props.history.push('/');
					}).catch(err => console.log(err + " Error at login verification"));

					//this.props.history.push('/userInfo');
				}).catch(err => console.log(err +" Error at add user"));
/*			}
			else{
				console.log("user already exists");
			}
		})
		.catch(error => {
			console.log("Error in getting user checked")
		});
*/		
		
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
						<label>UserName</ label>
						<input type="text" name="username" ref="username" />
						<br />
						<label>Password</ label>
						<input type="text" name="password" ref="password" />
						<br />
						<label>Confirm Password</ label>
						<input type="text" name="cpassword" id="cpassword" ref="cpassword" />
						<input type="submit" value="Save" />
					</form>
				</div>
			</div>
		);
	}
}

export default NewUser;