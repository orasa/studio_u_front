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

			 <div className="choice d-flex flex-row bd-highlight mb-3 bg-warning">
				<div className="col p-1  bg-primary p-1 mr-1">
			    <div className="col p-1  bg-secondary p-1 mr-1">
					  <li>{this.state.choice.name}</li>
				  </div>
			  </div>
		 </div>


		)
	}
}



export default Choice
