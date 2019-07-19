import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Iframe from 'react-iframe'


class Video extends Component {

	state = {
		video: this.props.video
	}

	//Render
	render() {
		return(
			<div className="video d-flex flex-row mb-2 p-3">
   <li>
		  {this.state.video.description}
			 <div className="col bg-light mr-2 p-5">	 
				<iframe width="100" height="100" src={this.state.video.link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowsFullScreen></iframe>
			</div>
	 </li>
		</div>

		)
	}
}

export default Video
