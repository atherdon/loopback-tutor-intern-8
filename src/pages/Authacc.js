import React, { Component } from 'react'
import axios from 'axios'
var config = require('../utils/config.json');

class Authacc extends Component{
	constructor() {
		super();
		this.state = {
			userdata: {}
		}
	}

	componentDidMount(){
		axios.get(config.url + '/userstatus')
		.then(response => {
			if(response !== null){
			console.log("This came->" + response)
			this.setState({userdata: response.data})
			console.log("state"+this.state.userdata)}
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
