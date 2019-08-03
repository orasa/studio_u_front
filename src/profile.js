import React, { Component } from 'react';
import './App.css'
import axios from 'axios'
import Video from './Video'
// import VideosHub from './VideosHub'


class Profile extends Component {
	// Data
	state = {
		user: {},
		email: '',
		password: '',

		likes: [],
		fans: [],
		videos: []
	}
	//Functions
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
				console.log(`http://localhost:4000/api/profile?user=${this.state.user._id}`)
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


	// Render
	render() {
		return (

			<div className="profileWrap">
				<h2 className="profileTitle ">Your Profile</h2>
				<div className="userInfo">
				 <div className="userDetails">
					 <table>
						 <tbody>
							 <tr >
								<td className="info">UserName:</td>
								<td className="userName"> {this.state.user.name}</td>
								</tr>
								{/* email */}
								<tr >
 								<td className="info">Email:</td>
 								<td className="userName"> {this.state.user.email}</td>
 								</tr>
								{/**/}
								<tr >
 								<td className="info">Your List(Videos Posted by you):</td>
 								<td className="userName"> {this.state.user.videos}</td>
 								</tr>
								{/*Your Favorite list of vedeos that you likes*/}
								{/*Your likes sum of all likes you get from others*/}
								<tr >
 								<td className="info">Fans:</td>
								{/*
									<td class="userName"> {this.state.video.fans}</td>*/}

 						</tr>
								{/**/}
						 </tbody>
					</table>
				</div>
				<div className="videoList">
					<table>
						 <tbody>
							 <tr >
								<td className="yourList">Your video Lists(posted by you): {this.state.user.name}</td>
								</tr>
								<tr>
									<td className="likesByOhers">Your likes: {this.state.user.email}</td>
								</tr>
								<tr>
									{/* <td>Your fans: {this.state.video.fans}</td>*/}
								</tr>
						 </tbody>
					</table>
				</div>
			</div>
				{/* videoListVideos posted by this user*/}

				{/* end videoList*/}
			</div>
		);
	}
}
export default Profile;
