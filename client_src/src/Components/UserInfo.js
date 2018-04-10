import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import  { Redirect } from 'react-router-dom';

class UsersInfo extends Component{
	constructor() {
		super();
		this.state = {
			userdata: {},
			editing: false
		}
	}

	componentWillMount(){
		this.getUsersData();
	}

	getUsersData() {
		let accessToken = sessionStorage.getItem("accessToken");
		let userId = sessionStorage.getItem("userId");
		axios.get(`http://localhost:3000/api/userData/${userId}?access_token=${accessToken}`)
		.then(response => {
		//	console.log(response.data)
			this.setState({userdata: response.data})
			sessionStorage.setItem("email",response.data.email);
		})
		.catch(error => {
			console.log(error.response.data.error.message + "Error in getting user data")
		});
	}

	render() {
		let check = JSON.parse(sessionStorage.getItem("isLoggedIn"));
		if(check === true){

			return (
				<div>
				<h1>Existing User data</h1>
				Name: {this.state.userdata.firstName} {this.state.userdata.lastName}
				<br />
				Email: {this.state.userdata.email}
				<br />
				username: {this.state.userdata.username}
				<br />
				<button >Edit profile </ button>
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
export default UsersInfo;
