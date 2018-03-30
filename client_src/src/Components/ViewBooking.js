import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class ViewBooking extends Component{
	constructor() {
		super();
		this.state = {
			bookings: []
		}
	}

	componentWillMount() {
		this.getBookings();
	}

	getBookings() {
		axios.get('http://localhost:3000/api/reservations')
		.then(response => {
			this.setState({bookings: response.data})
			//console.log(response.data)
		})
		.catch(error => {
			console.log("Error in getting bookings")
		});
	}

	render() {
		const eachBooking = this.state.bookings.map((booking,i) => {
			return (
				<li key={i}>email: {booking.email}
					<ul>
						<li>start date: {booking.startDate}</li>
						<li>end date: {booking.endDate}</li>
					</ul>
				</li>
			)
		})

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
}

export default ViewBooking;