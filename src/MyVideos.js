import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyVideos.css';
import axios from 'axios'
import Video from "./Video"

class MyVideos extends Component {
 state = {
	 videos: [],
	 user:{}
 }

 get_loggedUser = () => {
		 axios.get(`http://localhost:4000/api/find_user`, {
				 headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`
				 }
			 })
			 .then(res => {
				 console.log("****** user from App.js", res.data)
				 this.setState({
					 user: res.data
				 }, () => {
					 this.get_videosByUser();
					 console.log("videos", this.state.videos)

				 })
			 }).catch((err) => { "Nooo, bloody way!"
	 })
 }

 get_videosByUser = () => {
	 axios.get(`http://localhost:4000/api/videos?user=${this.state.user._id}`,
		 {	headers: {
				 Authorization: `Bearer ${localStorage.getItem("token")}`
			 }
		 })
		 .then(res => {
			 console.log("****** Video from get_videosByUser", res.data)

			 this.setState({
				 videos: res.data
			 }, () => console.log('videos after setState', this.state.videos))
		 }).catch((err) => { console.log(">>>>> Err from get Video by Users Nooo, bloody way!",err)
 })
}

 //need to call compomentWillMount here to load life cycle of //profile as profile is a component by itself
 componentWillMount() {
	 this.get_loggedUser()
 }

	//Render
	render() {
		return (
			<div className="container">
				<h2 className="myListTitle m-3 p-3">List of videos posted by {this.state.user.name}</h2>
				<div className="videoBox">
					{this.state.videos.map(vid => {
							{/*
							console.log('vid form Map1', vid);*/}
							return <Video video={vid} key={vid._id} />;
					  })
					 }
			 </div>
			</div>
		);
	}
}

export default MyVideos;
