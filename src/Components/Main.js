import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import NewUser from '../pages/NewUser';
import UserInfo from '../pages/UserInfo';
import UserLogin from '../pages/UserLogin';
import UserLogout from '../pages/UserLogout';
import ForgotPassword from '../pages/ForgotPassword';
import ChangePassword from '../pages/ChangePassword';
import ResetPasswordResponse from '../pages/ResetPasswordResponse';
import ChangePasswordResponse from '../pages/ChangePasswordResponse';
import Verified from '../pages/Verified';
import Verify from '../pages/Verify';
import p404 from '../pages/Page404';


class Main extends Component {
	render() {
		return (
			<div>
			<main>
				<Switch>
					<Route exact path="/" component={UserLogin} />
					<Route path="/logout" component={UserLogout} />
					<Route path="/adduser" component={NewUser} />
					<Route path="/users" component={UserInfo} />
					<Route path="/forgot" component={ForgotPassword} />
					<Route path="/reset" component={ChangePassword} />
					<Route path="/resetresponse" component={ResetPasswordResponse} />
					<Route path="/changeresponse" component={ChangePasswordResponse} />
					<Route path="/verified" component={Verified} />
					<Route path="/verify" component={Verify} />
					<Route exact path="*" component={p404} />
				</Switch>
				</main>
			</div>
		);
	}
}

export default Main;