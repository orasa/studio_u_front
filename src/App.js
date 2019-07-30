import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Samui from './samui.jpg'
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Sidebar from './Sidebar';
import VideosHub from './VideosHub';
import PostVideo from './PostVideo';

class App extends Component {
	//data
	state = {
		videos: [],
		link: '',
		category: '',
		description: '',
		links: [],
		categories: []
	};

	getVideos = id => {
		this.setState({
			category: id
		});
	};

	// redirectPostVideoForm = () => {
	// 	window.location.href = '/PostVideo';
	// };

	//Render
	render() {
		return (
			<div className="wrap">
				<PostVideo />
				<div id="title" className="row">
					<p className="title text-left">Studio Unicorns</p>
					<p className="title text-left">
						'To Code is to be, to be is to Code'.
					</p>
					<nav className="button text-right ">
						<Signup />
						<Login />
					</nav>
				</div>

				<div id="header" className="row bg-light" />

				<a
					className="postVideo btn mr-2 mt-3"
					role="button"
					data-toggle="modal"
					data-target="#newVideo"
				>
					Post Your Favorite Tutorial
				</a>

				<div id="main">
					<button onClick={() => this.PostVideo}>
						Post Your Favorite Tutorial
					</button>

					{/* import a child Componnet Sidebar, Content to render here*/}
					<Sidebar getVideos={this.getVideos} />
					<VideosHub category={this.state.category} />
				</div>
			</div>
		);
	}
}

export default App;
