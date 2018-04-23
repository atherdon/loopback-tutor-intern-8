import React, { Component } from 'react';

class Verified extends Component{
	render() {
		return (
		<div>
			<h1>Email verified successfully</h1>
			<h3>You are now ready to <a href="/">log in</a>.</h3>
		</div>
		)
	}
}

export default Verified;