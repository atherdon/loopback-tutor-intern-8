import React from 'react';
import './App.css';
export default class Features extends React.Component{
	render(){
		return(
				<div className="col-md-3 col-xs-12 col-sm-12 col-lg-3 col-xl-3">
				<div className="feature-container">
							{ this.props.img === "" ? <span></span> : <div className="icon-container"> <i className={this.props.img}></i></div> }
						<p className="feature-heading">{this.props.heading}</p>
						<p className="feature-content">{this.props.content}</p>
					</div>
				</div>
			);
	}
}