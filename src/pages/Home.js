import React, { Component } from 'react';
import axios from 'axios'

class Home extends Component {

	addToCart () {
		axios.get('http://localhost:3000/add-to-cart')
		.then(response => console.log(response.data))
		.catch(err => console.log(err))
	}

	render() {
		return (
			<div>
				<h1> This is home</h1>
				<div className="row">
					<div className="col-sm-6 col-md-4">
						<div className="thumbnail">
						<img src="img.jpg" alt="img.jpg"/>
						<div className="caption">
							<h3>Thumbnail label</h3>
							<p>Description about product</p>
							<p><button onClick={this.addToCart.bind(this)} className="btn btn-primary" role="button">Add to cart</button> <a href="#" className="btn btn-default" role="button">Button</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default Home;