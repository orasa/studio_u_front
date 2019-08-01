import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

// child of VideosHub,
class Video extends Component {
	state = {
		video: this.props.video,
		videos: []
	}


//functions
//to add likes see note on addLike_note.js

	incrementLikes = () => {
 	 console.log("Give me some loves")
	 axios
		 .patch(`http://localhost:4000/api/videos/${this.state.video._id}`, {likes: this.state.video.likes + 1})
		 .then(res => {
			 this.setState({
				 video: res.data
			 });
			 console.log('res.data from axios ', res.data);
		 })
		 .catch(err => {
			 console.log('err', err);
		 });
  }


	//Render

	render() {
		return (
			<div className="card-columns d-flex  m-2">
				<div className="card mt-2 bg-light">
							<iframe
								className="w-100 p-1" width="150"
								src={`https://www.youtube.com/embed/${this.state.video.link}`}
								frameBorder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowsfullscreen="true"
							/>
							<div className="card-body">
								<h5 className="card-title">{this.state.video.description}</h5>
								<p className="card-text">{this.state.video.category.name}</p>

						   {/*add FontAwesomeIcon*/}
				         <FontAwesomeIcon
							  icon={ faHeart }
								 onClick={ this.incrementLikes }
							  style={{ color: "#84d9ff"}}
				        />
							{/*display number and update when increased */}
							   <span>{this.state.video.likes}</span>

				  </div>
			</div>
		</div>
		);
	}
}

export default Video;
