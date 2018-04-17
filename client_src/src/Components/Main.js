import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import MakeBooking from './MakeBooking';
import ViewBooking from './ViewBooking';
import EditBooking from './EditBooking';
import NewUser from './NewUser';
import UserInfo from './UserInfo';
import UserLogin from './UserLogin';
import UserLogout from './UserLogout';
import ResetPassword from './ResetPassword';
import ResetPasswordResponse from './ResetPasswordResponse';
import Verified from './Verified';
import Verify from './Verify';

class Main extends Component {
	render() {
		return (
			<div>
			<main>
				<Switch>
					<Route exact path="/" component={UserLogin} />
					<Route path="/logout" component={UserLogout} />
					<Route path="/add" component={MakeBooking} />
					<Route path="/adduser" component={NewUser} />
					<Route path="/view" component={ViewBooking} />
					<Route path="/edit" component={EditBooking} />
					<Route path="/users" component={UserInfo} />
					<Route path="/reset" component={ResetPassword} />
					<Route path="/response" component={ResetPasswordResponse} />
					<Route path="/verified" component={Verified} />
					<Route path="/verify" component={Verify} />
				</Switch>
				</main>
			</div>
		);
	}
}

export default Main;