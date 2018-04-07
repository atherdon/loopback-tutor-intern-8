import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

//import { bindActionCreators } from 'redux';
//import { connect } from 'react-redux';
//import { getUser } from '../Actions/UserAction';
import  { Redirect } from 'react-router-dom';

class ViewBooking extends Component{
	constructor() {
		super();
		this.state = {
			bookings: []
		}
	}

	componentWillMount(){
		this.getBookings();
	}


	getBookings() {
		let accessToken =  sessionStorage.getItem("accessToken");//this.props.dataaccess.id;
		let userId = sessionStorage.getItem("userId");//this.props.dataaccess.userId;
		let email = sessionStorage.getItem("email");
		console.log(email+"<--");
		//axios.get(`http://localhost:3000/api/reservations?filter={"where":{"userId":"${userId}"}}&access_token=${accessToken}`)
		axios.get(`http://localhost:3000/api/reservations?filter={"where":{"email":"${email}"}}&access_token=${accessToken}`)
		.then(response => {
			this.setState({bookings: response.data})
			console.log(response.data)
		})
		.catch(error => {
			if(error.response)
				console.log(error.response.data.error.message + "Error in getting bookings")
			else
				console.log(error)
		});
	}


	render() {
		let check = JSON.parse(sessionStorage.getItem("isLoggedIn"));
		if(check === true){
		const eachBooking = this.state.bookings.map((booking,i) => {
			return (
				<li key={i}>email: {booking.email}
					<ul>
						<li>
							userId: {booking.userId}
						</li>
						<li>
							start date: {booking.startDate}
						</li>
						<li>
							end date: {booking.endDate}
						</li>
					</ul>
				</li>
			)
		});


			return (
				<div>
					<h1>View Booking</h1>
					<div  className="bookingsDisplay">
						<ul className="onebooking">
							{eachBooking}
						</ul>
					</div>
				</div>
			);
		}
		else{
			console.log("you need to login first");
			return <Redirect to="/" />
		}
	}
}


export default ViewBooking;
