import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import  { Redirect } from 'react-router-dom';

class ResetPassword extends Component{

	reset (){
		console.log("entered email is: "+this.refs.email.value)
		axios.request({
			method: 'post',
			url:'http://localhost:3000/api/userData/reset',//url:'http://localhost:3000/api/Users/login',
			data: {email: this.refs.email.value }
		}).then(response => {
			console.log(response.data);
			console.log("response received for email is: ")

		}).catch(err => {
			if(err.response)
				console.log(err.response.data.error.message + "Error at password reset");
			else
				console.log(err)
		});

	}

	render() {
		return (
			<div>
				<h4> Please enter your registered email</h4>
				<input type="email" name="email" ref="email" />
				<button onClick={this.reset.bind(this)}> Reset Password </button>
			</div>
		);
	}

}

export default ResetPassword;
