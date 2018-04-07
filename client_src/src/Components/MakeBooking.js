import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

/*import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUser } from '../Actions/UserAction';*/
import  { Redirect } from 'react-router-dom'

class MakeBooking extends Component{

	constructor() {
		super();
		this.state = {
			user: [],
			hotels: []
		}
	}

	componentWillMount() {
		this.getUserData();
		this.getHotels();
	}

	getHotels() {
		let accessToken = sessionStorage.getItem("accessToken")
		axios.get(`http://localhost:3000/api/hotels?access_token=${accessToken}`)
		.then(response => {
			this.setState({hotels: response.data})
			//console.log(response.data)
		})
		.catch(error => {
			console.log("Error in getting hotels")
		});
	}

	getUserData() {
		let id = sessionStorage.getItem("userId")
		let accessToken = sessionStorage.getItem("accessToken")
		axios.get(`http://localhost:3000/api/userData/${id}?access_token=${accessToken}`)
		//axios.get(`http://localhost:3000/api/userData/findOne?filter={"userId":"${id}"}&access_token=${accessToken}`)
		.then(response => {
			this.setState({
				user: response.data
			})
			//checking if user is correct console.log(response.data.email)
		})
		.catch(error => {
			console.log("Error in getting user name")
		});
	}

	onSubmit(e) {
		//do not place e.preventdefault at top
		const newReservation = {
			email: this.state.user.email,
			startDate: this.refs.startDate.value,
			endDate: this.refs.endDate.value,
			userId: this.state.user.id //sessionStorage.getItem("userId")
		}
		
		this.addReservation(newReservation);
		e.preventDefault();
	}

	addReservation(newRes) {
		let accessToken = sessionStorage.getItem("accessToken");
		axios.request({
			method: 'post',
			url:`http://localhost:3000/api/reservations?access_token=${accessToken}`,
			data: newRes
		}).then(response => {
			this.props.history.push('/view');
		}).catch(err => console.log("Error at add reservation"));
	}

	render() {
		const User = this.state.user;

		const singleHotel = this.state.hotels.map((hotel,i) => {
			return (
				<option key={i}>
					{hotel.name}, {hotel.city}
				</option>
			);
		});

		let check = JSON.parse(sessionStorage.getItem("isLoggedIn"));
		if(check === true){
			return (
				<div>
					<h1>New Booking</h1>
					<div>
						<form className="entryForm" onSubmit={this.onSubmit.bind(this)}>
							<label>Email: </ label>
							<label>{User.email}</ label>
							<br />
							<label>Date Format yyyy-mm-dd</ label>
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
		else{
			console.log("you need to login first");
			return <Redirect to="/" />
		}
	}
}

export default MakeBooking;

/*
export default connect(mapStateToProps)(MakeBooking);

function mapStateToProps(state) {
	return {
		userData: state.user,
		isLoggedIn: state.authenticated
	}
}
*/