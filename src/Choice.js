import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class Choice extends Component {

	state = {
		choice: this.props.choice
	}

	//Render
	render() {
		return(
			<div>
				<span>
				<button className="choice bg-info">
					<div className="subject col bg-light mr-2 p-5">
					<li>{this.state.choice.name}</li>
					</div>
				</button>
		    </span>
	    </div>


		)
	}
}

export default Choice
