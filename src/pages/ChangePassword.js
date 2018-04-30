import React, { Component } from 'react';
import axios from 'axios';
import  { Redirect } from 'react-router-dom';
var config = require('../utils/config.json');

class ChangePassword extends Component{

	validate(e) {
		if(this.refs.password.value === this.refs.cpassword.value){
			this.reset(e);
		}
		else
			alert("Passwords do not match");
	}

	reset (e){
		e.preventDefault();
		let accessToken = sessionStorage.getItem("accessToken");
		console.log("entered pass is: "+this.refs.password.value + ", entered cpass is: "+this.refs.cpassword.value)
		axios.request({
			method: 'post',
			url: config.url + `/api/userData/reset-password?access_token=${accessToken}`,//modify the reset method in  
			data: {newPassword: this.refs.password.value }//         userdata.js backend call a different method to handle this
		}).then(response => {
			console.log(response.data);
			this.props.history.push('/changeresponse');
		}).catch(err => {
			if(err.response)
				console.log(err.response.data.error.message + "Error at change password");
			else
				console.log(err)
		});

	}
//onSubmit={this.reset.bind(this)} use this to call reset or send a direct call to backend
//method="post" action="http://localhost:3000/reset-password" 
	render() {
			
		let check = JSON.parse(sessionStorage.getItem("isLoggedIn"));
		if(check === true){
			return (
				<div>
					<h4> Please enter your registered email</h4>
					<form onSubmit={this.validate.bind(this)} >
						<label>New Password</label>
						<input type="password" name="password" ref="password" id="password" />
						<br />
						<label>Confirm New Password</label>
						<input type="cpassword" name="cpassword" ref="cpassword" id="cpassword" />
						<br />
						<input type="submit" value="Reset Password" />
					</form>
				</div>
			);
		}
		else{
			console.log("you need to login first");
		//	console.log(sessionStorage.getItem("isLoggedIn"));
			return <Redirect to="/" />
		}
			

	}

}

export default ChangePassword;
