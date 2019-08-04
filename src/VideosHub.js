import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App2.css';
// import './Test2.css';
import Video from './Video';
// import PostVideo from './PostVideo'


class VideosHub extends Component {
	state = {
		videos: []
	};

	//Functions
	//get videos
	//componentWillMount with no axios will load the life cycle to
	//start the state
	componentWillMount() {}

//After the componentWillMount wait for a while and use Component will //recieve props to catch the video from
//parent component(function getAllVideos on App.js, props is all the
//vedos pass fromt parent fuction)
	componentWillReceiveProps(props) {
		console.log("Props", props.videos);
		this.setState({videos: props.videos})
	}

	//Render
	render() {
		return (
			<div className="VideosHub">
				{this.state.videos.map(vid => {
					console.log('vid form Map1', vid)
					return <Video video={vid} key={vid._id} />;
				})
			}
			</div>
		);
	}
}

export default VideosHub;
