import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class UsersInfo extends Component{
	constructor() {
		super();
		this.state = {
			users: []
		}
	}

	componentWillMount() {
		this.getUsers();
	}

	getUsers() {
		axios.get('http://localhost:3000/api/userData')
		.then(response => {
			this.setState({users: response.data})
			//console.log(response.data)
		})
		.catch(error => {
			console.log("Error in getting users data")
		});
	}

	render() {
		const eachUser = this.state.users.map((user,i) => {
			return (
				<li key={i}>Name: {user.firstName} {user.lastName} Email: {user.email}
					
				</li>
			)
		})

		return (
			<div>
				<h1>View Booking</h1>
				<div  className="usersDisplay">
					<ul className="oneuser">
						{eachUser}
					</ul>
				</div>
			</div>
		);
	}
}

export default UsersInfo;