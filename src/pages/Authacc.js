import React, { Component } from 'react';
import axios from 'axios';

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
			if(response !== null){
			console.log("This came->" + JSON.stringify(response))
			this.setState({userdata: response.data})
			console.log("state"+this.state.userdata.email)}
		}).catch(err => console.log(err))
	}


	renderNormal() {
			return (
				<div>
				<h1>Google login</h1>
				Name: {this.state.userdata}
				<br />
				<br />
				<br />
			</div>
			);
	}


	render() {

				return this.renderNormal();

	}

}
export default Authacc;
