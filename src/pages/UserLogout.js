import React, { Component } from 'react';
import axios from 'axios';
var config = require('../utils/config');

class LogOutUser extends Component{

	logOutUser(){
		let at = sessionStorage.getItem("accessToken");
		const user = {
			accessToken : sessionStorage.getItem("accessToken"),
			userId : sessionStorage.getItem("userId")
		}
		axios.request({
			method: 'post',
			url: config.url + `/api/userData/logout?access_token=${at}`, //url:'http://localhost:3000/api/Users/login',
			data: user
		}).then(response => {
			console.log(response.data);	//returns the object containing access token
			sessionStorage.removeItem("accessToken");
			sessionStorage.removeItem("userId");
			sessionStorage.setItem("isLoggedIn", JSON.stringify(false));
			console.log(sessionStorage.getItem("accessToken"));
			this.props.history.push('/');
		}).catch(err => {
			if(err.response)
				console.log(err.response.data.error.message + "Error in logging out user")
			else
				console.log(err + ", Error at log out user")
		}); 
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