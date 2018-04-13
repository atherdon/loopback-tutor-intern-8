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

class Main extends Component {
	render() {
		return (
			<div>
			<main>
				<Switch>
					<Route exact path="/" component={UserLogin} />
					<Route exact path="/logout" component={UserLogout} />
					<Route path="/add" component={MakeBooking} />
					<Route path="/adduser" component={NewUser} />
					<Route exact path="/view" component={ViewBooking} />
					<Route exact path="/edit" component={EditBooking} />
					<Route exact path="/users" component={UserInfo} />
					<Route exact path="/reset" component={ResetPassword} />
				</Switch>
				</main>
			</div>
		);
	}
}

export default Main;