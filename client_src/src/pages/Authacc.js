import React, { Component } from 'react';
import axios from 'axios';
import  { Redirect } from 'react-router-dom';

class Authacc extends Component{
	constructor() {
		super();
		this.state = {
			userdata: {}
		}
	}

	componentDidMount(){
		axios.get('http://localhost:3000/userstatus')
		.then(response => {
			console.log(response.data)
			this.setState({userdata: response.data})
		}).catch(err => console.log(err))
	}


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


	render() {

				return this.renderNormal();

	}

}
export default Authacc;
