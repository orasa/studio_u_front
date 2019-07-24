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

           <div className="choice">
           {this.state.choice.name}
			 	  </div>

		)
	}
}


export default Choice
