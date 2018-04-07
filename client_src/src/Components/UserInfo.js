import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

/*import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUser } from '../Actions/UserAction';*/
import  { Redirect } from 'react-router-dom';

class UsersInfo extends Component{



/*REMOVE IF SUCCESFUL
*/	constructor() {
		super();
		this.state = {
			userdata: {}
		}
	}

	componentWillMount(){
		this.getUsersData();
	}

	getUsersData() {
		let accessToken = sessionStorage.getItem("accessToken");//this.props.dataaccess.id;
		let userId = sessionStorage.getItem("userId");//this.props.dataaccess.userId;
		axios.get(`http://localhost:3000/api/userData/${userId}?access_token=${accessToken}`)
		.then(response => {
		//	console.log(response.data)
		//	this.props.setUser(response.data);
		//	console.log(this.props.userData.firstName);
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

	/*=========================================
		componentWillMount() {
		this.getUsersData();
	}

	getUsersData() {
		let accessToken = sessionStorage.getItem("accessToken");
		let userId = sessionStorage.getItem("userId");
		axios.get(`http://localhost:3000/api/userData/${userId}?access_token=${accessToken}`)
		.then(response => {
			this.setState({userdata: response.data})
			//console.log(response.data)
		})
		.catch(error => {
			console.log(error.response.data.error.message + "Error in getting user data")
		});
	}
				<div>

					<h1>Existing User data</h1>
					<label> Name: {this.props.userData.firstName} {this.props.userData.lastName}</label>
					<br />
					Email: {this.props.userData.email}
					<br />
					username: {this.props.userData.username}
					<br />
					<button >Edit profile </ button>
				</div>


	render() {

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
	=============================================*/
	/*TRIAL FOR REDUX WORKING
	render() {

		return (
			<div>
				<h1>Existing User data</h1>
				Name: {this.props.userData.firstName} {this.props.userData.lastName}
				<br />
				Email: {this.props.userData.email}
				<br />
				username: {this.props.userData.doing} {this.props.userData.age}
				<br />
				<button >Edit profile </ button>
			</div>
		);
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
		setUser: (data) => {
			dispatch(setUser(data));
		}
	}
}
export default connect(mapStateToProps, matchDispatchToProps)(UsersInfo);

function mapStateToProps(state) {
	return {
		userData: state.user,
		isLoggedIn: state.authenticated,
		dataaccess: state.dataaccess
	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({setUser: setUser}, dispatch)
	

}
*/
//export default connect(mapStateToProps)(UserData);