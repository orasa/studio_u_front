import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App2.css';
// import './Test2.css';
import Video from './Video';
// import PostVideo from './PostVideo'
import axios from 'axios';

class VideosHub extends Component {
	state = {
		videos: []
	};

	//Functions
	//get videos
	componentWillMount() {
		axios
			.get('http://localhost:4000/api/videos')
			.then(res => {
				this.setState({
					videos: res.data
				});
			})
			.catch(err => {
				console.log('err', err);
			});
	}

	//Render
	render() {
		return (
			<div>
				{this.state.videos.map(vid => {
					console.log('vid form Map1', vid);
					return <Video video={vid} key={vid._id} />;
				})}
			</div>
		);
	}
}

export default VideosHub;
