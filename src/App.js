import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Samui from './samui.jpg'
import './App.css';
import axios from 'axios';
import Sidebar from './Sidebar';
import VideosHub from './VideosHub';
import PostVideo from './PostVideo';
import NavBar from './NavBar';


class App extends Component {
	//data
	state = {

		videos: [],
		categories: [],
		category: '',
		searchString: ''
	};

getAllVideos = () => {
	axios.get(`http://localhost:4000/api/videos`).then((res) => {
		console.log('**** videos from getAllVideos', res.data);
		this.setState({
			videos: res.data
		})
	}).catch((err) => {
		console.log('err', err)
	})
}

	setCategory = (id) => {
		console.log('id', id);
		this.setState({
			category: id
		}, () => this.getVideosByCategory())
	}

	getVideosByCategory = () => {
		console.log('ssss', this.state.category);
		axios.get(`http://localhost:4000/api/videos?category=${this.state.category}`).then((res)=>{
			this.setState({
				videos: res.data
			}, () => console.log(this.state.videos))
		}).catch((err) => {
			console.log("err form getVideosByCategory", err);
		})
	}

	search = (e) => {
		console.log(e.target.value);
		this.setState({
			searchString: e.target.value
		})
		let videos = this.state.videos
		let found = videos.filter((v) => v.description.includes(e.target.value))
		console.log('>>>>>> found', found);
		this.setState({
			videos: found
		})
	}

checkAuth = () => {
	if(localStorage.getItem('token')) {
		return true
	} else {
		return false
	}
}
	createVideoPost = (e, data) => {
		e.preventDefault()
		console.log('data', data);
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
					document.getElementById('newVideo').classList.remove('show')
					document.getElementById('newVideo').removeAttribute("style")
					document.getElementById('newVideo').setAttribute('style', 'display: none')
					document.getElementsByClassName('modal-backdrop')[0].classList.remove('show')
				})
				.catch(err => {
					console.log('err axios post', err);
				});
			} else {
				console.log('NO');
				window.location = '/login'
			}
	};

	componentWillMount() {
		this.getAllVideos()
	}


	//Render
	//import component PostVideo call function createVideoPost
	render() {
		return (
			<div className="wrap">
				{/*<Profile />*/}
				<NavBar search={this.search} />
				 <PostVideo createVideoPost={this.createVideoPost}/>
				{this.checkAuth() ? <button
					type="button"
					className="btn btn-outline-dark m-3 btn-lg"
					data-toggle="modal"
					data-target="#newVideo"
				>
					Post Your Favorite Video
				</button> : null }

				<div id="header" className="row bg-light" />

				<div id="main">
					{/* import a child Componnet Sidebar, Content to render here*/}
					<div className="sidebar">
						<Sidebar
							categories={this.state.categories}
							setCategory={this.setCategory}
						/>
					</div>
						<VideosHub videos={this.state.videos} />
				</div>
			</div>
		);
	}
}

export default App;
