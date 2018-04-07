import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

//import { bindActionCreators } from 'redux';
//import { connect } from 'react-redux';
//import { setUser } from '../Actions/UserAction';
//import { setData } from '../Actions/AccessAction';
//import { setLogIn } from '../Actions/LoginAction';
import  { Redirect } from 'react-router-dom'


class LogInUser extends Component{

/*ORIGINAL WITHOUT ANY CHANGES*/
	onSubmit(e) {

		const user = {
			email: this.refs.email.value,
			password: this.refs.password.value
			
		}
		
		this.submitUser(user);
		e.preventDefault();

	}

	submitUser(user){
		axios.request({
			method: 'post',
			url:'http://localhost:3000/api/userData/login',//url:'http://localhost:3000/api/Users/login',
			data: user
		}).then(response => {
			console.log(response.data);	//returns the object containing access token
			sessionStorage.setItem("accessToken",response.data.id);
			sessionStorage.setItem("userId",response.data.userId);
			sessionStorage.setItem("isLoggedIn",JSON.stringify(true));
			console.log(sessionStorage.getItem("accessToken"));
			this.props.history.push('/users');
		}).catch(err => {
			if(err.response)
				console.log(err.response.data.error.message + "Error at login verification");
			else
				console.log(err)
		});
	}
	
/*action="/login"*/
	render() {
		let check = false;
		if( check === false ){
			return (
				<div>
					<h1>LogIn</h1>
					<div>
						<form className="entryForm" method="post" onSubmit={this.onSubmit.bind(this)}>
							<br />
							<label>email</ label>
							<input type="text" name="email" ref="email" />
							<br />
							<label>Password</ label>
							<input type="text" name="password" ref="password" />
							<br />
							<input type="submit" value="Login" />
							<a href="/adduser" >New User?</a>
						</form>
					</div>
				</div>
			);
		}
		else{
			console.log(sessionStorage.getItem("isLoggedIn"));
			return <Redirect to="/view" />
		}
	}
}

export default LogInUser;
//MODIFIED WITH REDUX
/*	onSubmit(e) {

		const user = {
			username: this.refs.username.value,
			password: this.refs.password.value
			
		}
		
		this.submitUser(user);
		e.preventDefault();

	}

	submitUser(user){
		axios.request({
			method: 'post',
			url:'http://localhost:3000/api/userData/login',//url:'http://localhost:3000/api/Users/login',
			data: user
		}).then(response => {
		//changes here to set state redux
			this.props.setData(response.data);
			//this.props.setLogIn(this.props.isLoggedIn);
			//console.log("access token is:" + this.props.dataaccess.id);
			this.props.history.push('/users');
		}).catch(err => console.log(err.response.data.error.message + "Error at login verification"));
	}

*/
/*
const mapStateToProps = (state) => {
	return {
		userData: state.user,
		dataaccess: state.dataaccess
	}
}

const matchDispatchToProps = (dispatch) => {
	return {
		setData: (data) => {
			dispatch(setData(data));
		}
	}
}

connect(mapStateToProps, matchDispatchToProps)(LogInUser);

function mapStateToProps(state) {
	return {
		userData: state.user,
		dataaccess: state.dataaccess
	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({setData: setData}, dispatch)
}
*/