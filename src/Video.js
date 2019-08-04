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

//find the likes on db and udate the count with + 1, setState

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

				<div className="card mt-2 bg-light p-2">
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
							  style={{ color: "#ff1f13", marginRight: "10"}}
				        />
							{/*display number and update when increased */}
							   <span>{this.state.video.likes}</span>

				  </div>
			</div>

		);
	}
}

export default Video;
