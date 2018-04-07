import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class LogOutUser extends Component{

	logOutUser(){
		let at = sessionStorage.getItem("accessToken");
		const user = {
			accessToken : sessionStorage.getItem("accessToken"),
			userId : sessionStorage.getItem("userId")
		}
		axios.request({
			method: 'post',
			url:`http://localhost:3000/api/userData/logout?access_token=${at}`, //url:'http://localhost:3000/api/Users/login',
			data: user
		}).then(response => {
			console.log(response.data);	//returns the object containing access token
			sessionStorage.removeItem("accessToken");
			sessionStorage.removeItem("userId");
			sessionStorage.setItem("isLoggedIn", JSON.stringify(false));
			console.log(sessionStorage.getItem("accessToken"));
			this.props.history.push('/');
		}).catch(err => console.log(err.response.data.error.message + "Error at log out user")); 
		// this is the object to get the error msg
	}

	render() {


		return (
			<div>
				<h1>you have been logged out</h1>
				{this.logOutUser()}
			</div>
		);
	}
}

export default LogOutUser;