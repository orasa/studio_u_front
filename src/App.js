import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Samui from './samui.jpg'
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import VideosHub from './VideosHub';
import PostVideo from './PostVideo';
import NavBar from './NavBar';
import Profile from './Profile';

class App extends Component {
	//data
	state = {
		videos: [],
		categories: [],
		category: ''
	};

	getVideos = id => {
		this.setState({
			category: id
		});
	};

	createVideoPost = (e, data) => {
		e.preventDefault()
		let token = localStorage.getItem('token')
		if (token) {
			console.log('data in App', data);
			axios
				.post('http://localhost:4000/api/video', data, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem('token')}`
					}
				})
				.then(res => {
					let videos = this.state.videos;
					videos.unshift(res.data);
					console.log('createVideoPost res', res);
					this.setState({ videos });
				})
				.catch(err => {
					console.log('err axios post', err);
				});
			} else {
				console.log('NO');
				window.location = '/login'
			}
	};

	//Render
	//import component PostVideo call function createVideoPost
	render() {
		return (
			<div className="wrap">
				<Profile />
				<PostVideo createVideoPost={this.createVideoPost} />
				<div id="title" className="row p-3">
					<p className="title text-left">Studio Unicorns</p>
				</div>

				<NavBar />
				<button
					type="button"
					className="btn btn-outline-dark m-3 btn-lg"
					data-toggle="modal"
					data-target="#newVideo"
				>
					Post Your Favorite Video
				</button>

				<div id="header" className="row bg-light" />

				<div id="main">
					{/* import a child Componnet Sidebar, Content to render here*/}
					<Sidebar
						categories={this.state.categories}
						getVideos={this.getVideos}
					/>
					<VideosHub videos={this.state.videos} />
				</div>
			</div>
		);
	}
}

export default App;
