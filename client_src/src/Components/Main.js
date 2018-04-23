import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import MakeBooking from '../pages/MakeBooking';
import ViewBooking from '../pages/ViewBooking';
import EditBooking from '../pages/EditBooking';
import NewUser from '../pages/NewUser';
import UserInfo from '../pages/UserInfo';
import UserLogin from '../pages/UserLogin';
import UserLogout from '../pages/UserLogout';
import ResetPassword from '../pages/ResetPassword';
import ResetPasswordResponse from '../pages/ResetPasswordResponse';
import Verified from '../pages/Verified';
import Verify from '../pages/Verify';
import p404 from '../pages/Page404';
import acc from '../pages/Authacc';


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
					<Route path="/auth/account" component={acc} />
					<Route exact path="*" component={p404} />
				</Switch>
				</main>
			</div>
		);
	}
}

export default Main;