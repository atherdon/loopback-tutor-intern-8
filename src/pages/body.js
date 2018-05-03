import React, {Component} from 'react';
import './App.css';
import groci from './groci.png';

class Body extends Component{
	render(){
		return(
			<div className="divtwo">
		<div className="heading">
			<p> Organize your shopping <br/> experience</p>
		</div>
		<div className="subheading"><h2><small> This is Michelangelo Grocery List.Maybe we can make it better?</small></h2> </div>
		<div className="button"><button type="button" className="btn btn-spl btn-primary btn-lg"><i className="fab fa-github"></i>Get Started Now</button></div>
  		<div className="image-container">
  		<img src={groci} className="img center-block img-responsive" alt = "screenshot of application"/>
  		</div>
  		     </div>
			);
	}
}
	export default Body;