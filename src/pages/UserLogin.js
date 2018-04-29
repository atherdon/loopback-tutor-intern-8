import React, { Component } from 'react';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'


class LogInUser extends Component{


	onSubmit(e) {

		const user = {
			username: this.refs.username.value,
		//	email: this.refs.email.value,
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
			sessionStorage.setItem("accessToken",response.data.id);
			sessionStorage.setItem("userId",response.data.userId);
			sessionStorage.setItem("isLoggedIn",JSON.stringify(true));
			//console.log("Token:"+sessionStorage.getItem("accessToken"));
			this.props.history.push('/users');//push the page you want to display
		}).catch(err => {
			if(err.response)
				console.log(err.response.data.error.message + "Error at login verification");
			else
				console.log(err)
		});
	}
	getGoogleLogin() {
		axios.get('/auth/google')
		.then(response => console.log(response.data))
		.catch(err => console.log(err))
	}

	render() {
		let check = false;
		if( check === false ){
			return (
				<div>
					<h1>LogIn</h1>
					<div>
						<form className="entryForm" method="post" onSubmit={this.onSubmit.bind(this)}>
							<br />
							<label>Username</ label>
							<input type="text" name="username" ref="username" />
							<br />
							<label>Password</ label>
							<input type="password" name="password" ref="password" />
							<br />
							<input type="submit" value="Login" />
							<a href="/adduser" >New User?</a>
							<br />
							<a href="/forgot" >Forgot password? </a>
						</form>
						<br />
						<br />
						<button onClick={this.getGoogleLogin.bind(this)}>Login with google plus</button>
						<a href="https://groceristar.netlify.com/auth/google">Signin with google</a>
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
//
//
export default LogInUser;
