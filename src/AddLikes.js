import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

class AddLikes extends Component {

state = {
	likes: this.props.likes
 }

//functions



render() {
	return(
		<div>

		icon={faHeart}
		style={{ color: "#84d9ff"}}
		<button onClick={this.incrementLikes} >
		{this.state.count}</button>
		</div>
	 )
  }

}

export default AddLikes
