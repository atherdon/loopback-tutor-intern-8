import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import UsersInfo from './UserInfo';
import MakeBooking from './MakeBooking';
import ViewBooking from './ViewBooking';
import EditBooking from './EditBooking';
import NewUser from './NewUser';
import UserInfo from './UserInfo';

class Main extends Component {
	render() {
		return (
			<div>
			<main>
				<Switch>
					<Route exact path="/" component={UsersInfo} />
					<Route path="/add" component={MakeBooking} />
					<Route path="/adduser" component={NewUser} />
					<Route exact path="/view" component={ViewBooking} />
					<Route exact path="/edit" component={EditBooking} />
					<Route exact path="/users" component={UserInfo} />
				</Switch>
				</main>
			</div>
		);
	}
}

export default Main;