import React, { Component } from 'react';
import axios from 'axios';
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

	edit() {
		this.setState({editing:true});
	}

	handleChangeFirstName(e) {
		let userdata = Object.assign ( {}, this.state.userdata);
		userdata.firstName = e.target.value;
		this.setState( {userdata} );
	}

	handleChangeLastName(e) {
		let userdata = Object.assign ( {}, this.state.userdata);
		userdata.lastName = e.target.value;
		this.setState( {userdata} );
	}

	handleChangeEmail(e) {
		let userdata = Object.assign ( {}, this.state.userdata);
		userdata.email = e.target.value;
		this.setState( {userdata} );
	}

	save() {
		let userId = sessionStorage.getItem("userId");
		let accessToken = sessionStorage.getItem("accessToken");
		let updateurl = `http://localhost:3000/api/userData/${userId}?access_token=${accessToken}`;
		let user = {
			"firstName": this.refs.fname.value,
			"lastName": this.refs.lname.value
		//	email: this.refs.email.value		//solve the issue of email verification after changing
		}
		axios.request({
			method: 'patch',
			url: updateurl,//url called to update the data
			data: user			
		}).then(response => {
			console.log(user)
			console.log("Success updating user data")
		}).catch(err => console.log(err))
		this.setState({editing:false});
	}

	getUsersData() {
		let accessToken = sessionStorage.getItem("accessToken");
		let userId = sessionStorage.getItem("userId");
		console.log(userId);
		axios.get(`http://localhost:3000/api/userData/${userId}?access_token=${accessToken}`)
		.then(response => {
		//	console.log(response.data)
			this.setState({userdata: response.data})
			sessionStorage.setItem("email",response.data.email);
		})
		.catch(error => {
			console.log(error + "Error in getting user data")
		});
	}
//===ADD EDIT PROFILE WORKING BUTTON
	renderNormal() {
			return (
				<div>
				<h1>Existing User data</h1>
				Name: {this.state.userdata.firstName} {this.state.userdata.lastName}
				<br />
				Email: {this.state.userdata.email}
				<br />
				username: {this.state.userdata.username}
				<br />
				<button onClick={this.edit.bind(this)}>Edit profile </ button>
			</div>
			);
	}

	renderEditMode() {
		return (
			<div>
			<h1>Existing User data</h1>
			<label>First Name: </label>
			<input type="text" value={this.state.userdata.firstName} ref="fname" onChange={this.handleChangeFirstName.bind(this)} />
			<br />
			<label>Last Name: </label>
			<input type="text" value={this.state.userdata.lastName} ref="lname" onChange={this.handleChangeLastName.bind(this)} />
			<br />
			<label>Email:</label> 
			<input type="text" value={this.state.userdata.email} ref="email" onChange={this.handleChangeEmail.bind(this)} />
			<br />
			username: {this.state.userdata.username}
			<br />
			<button onClick={this.save.bind(this)}>Save Changes </ button>
		</div>
		);
	}

	render() {
		let check = JSON.parse(sessionStorage.getItem("isLoggedIn"));
		if(check === true){
			if(this.state.editing){
				return this.renderEditMode();
			}
			else
				return this.renderNormal();
		}
		else{
			console.log("you need to login first");
		//	console.log(sessionStorage.getItem("isLoggedIn"));
			return <Redirect to="/" />
		}
	}


//===ORIGINAL working
/*	render() {
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
	}*/
}
export default UsersInfo;
