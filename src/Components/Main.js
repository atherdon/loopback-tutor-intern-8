import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import acc from '../pages/Authacc';
import Cart from '../pages/Cart';
import ChangePassword from '../pages/ChangePassword';
import ChangePasswordResponse from '../pages/ChangePasswordResponse';
import Home from '../pages/Home';
import ForgotPassword from '../pages/ForgotPassword';
import NewUser from '../pages/NewUser';
import p404 from '../pages/Page404';
import ResetPasswordResponse from '../pages/ResetPasswordResponse';
import UserInfo from '../pages/UserInfo';
import UserLogin from '../pages/UserLogin';
import UserLogout from '../pages/UserLogout';
import Verified from '../pages/Verified';
import Verify from '../pages/Verify';
import InviteForm from '../pages/InviteForm';



class Main extends Component {
	render() {
		return (
			<div>
			<main>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/auth/account" component={acc} />
					<Route path="/cart" component={Cart} />
					<Route path="/reset" component={ChangePassword} />
					<Route path="/changeresponse" component={ChangePasswordResponse} />
					<Route path="/forgot" component={ForgotPassword} />
					<Route path="/adduser" component={NewUser} />
					<Route path="/resetresponse" component={ResetPasswordResponse} />
					<Route path="/profile" component={UserInfo} />
					<Route path="/login" component={UserLogin} />
					<Route path="/logout" component={UserLogout} />
					<Route path="/verified" component={Verified} />
					<Route path="/verify" component={Verify} />
					<Route path="/invite" component={InviteForm} />
					<Route exact path="*" component={p404} />
				</Switch>
				</main>
			</div>
		);
	}
}

export default Main;