import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

class MakeBooking extends Component{

	constructor() {
		super();
		this.state = {
			users: [],
			hotels: []
		}
	}

	componentWillMount() {
		this.getUsers();
		this.getHotels();
	}

	getHotels() {
		axios.get('http://localhost:3000/api/hotels')
		.then(response => {
			this.setState({hotels: response.data})
			//console.log(response.data)
		})
		.catch(error => {
			console.log("Error in getting bookings")
		});
	}

	getUsers() {
		axios.get('http://localhost:3000/api/userData')
		.then(response => {
			this.setState({users: response.data})
			//console.log(response.data)
		})
		.catch(error => {
			console.log("Error in getting bookings")
		});
	}

	onSubmit(e) {
		//do not place e.preventdefault at top
		const newReservation = {
			email: this.refs.selecteduser.value,
			startDate: this.refs.startDate.value,
			endDate: this.refs.endDate.value,
			
		}
		
		this.addReservation(newReservation);
		e.preventDefault();
	}

	addReservation(newRes) {
		axios.request({
			method: 'post',
			url:'http://localhost:3000/api/reservations',
			data: newRes
		}).then(response => {
			this.props.history.push('/view');
		}).catch(err => console.log("Error at add reservation"));
	}

	render() {
		const individualUser = this.state.users.map((user,i) => {
			return (
				<option key={i}>
					{user.email}
				</option>
			)
		})

		const singleHotel = this.state.hotels.map((hotel,i) => {
			return (
				<option key={i}>
					{hotel.name}, {hotel.city}
				</option>
			)
		})

		return (
			<div>
				<h1>New Booking</h1>
				<div>
					<form className="entryForm" onSubmit={this.onSubmit.bind(this)}>
						<label>Email</ label>
						<select ref="selecteduser">
							{individualUser}
						</select>
						<br />
						<label>Start Date</ label>
						<input type="text" name="startDate" ref="startDate" />
						<br />
						<label>End Date</ label>
						<input type="text" name="endDate" ref="endDate" />
						<br />
						<label>Hotel</ label>
						<select ref="selectedhotel">
							{singleHotel}
						</select>
						<br />
						<input type="submit" value="save" />
					</form>
				</div>
			</div>
		);
	}
}

export default MakeBooking;