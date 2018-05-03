import React from 'react';
import './App.css';

export default class Bottom extends React.Component{
	render(){
	return(		<div className="container">
    			<div className="bottom">
				<div className="bottom-heading">
    			<p> Dont take our word for it.<br/>Try it out yourself. </p>
    			</div>
    			<div className="bottom-button">

                <button type="button" className="btn btn-primary btn-lg btn-spl">
                <i className="fab fa-apple"></i>
                placeholder
                </button>
                </div>
    			</div>
    			<div className="bottom-sub-heading container"> <p className="heavy-text"> Still not Convinced? </p> <p className="light-text"> May be this ol' list of features will help! </p>
    			</div>

    			</div>
		);
}
}