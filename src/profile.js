import React, { Component } from 'react';
import './Profile.css'
import axios from 'axios'
// import Video from './Video'
import MyVideos from './MyVideos'
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
	//find loggedin User, sending token back to server, setState for user to be this user
	//use the user._id to find all the videos from this user
	//creat function get_videosByUser can call it in get_loggedUser, set state of video
	//
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
					})
	      }).catch((err) => { "Nooo, bloody way!"
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
								<td className="info">Name:</td>
								<td className="userName"> {this.state.user.name}</td>
								</tr>
								{/* email */}
								<tr >
 								<td className="info">Email:</td>
 								<td className="userName"> {this.state.user.email}</td>
 								</tr>
								{/**/}

								{/*Your Favorite list of vedeos that you likes*/}
								{/*Your likes sum of all likes you get from others*/}
								<tr >
 								<td className="info">Fans:</td>
								{/*
									<td class="userName"> {this.state.video.fans}</td>*/}
 						</tr>
								{/**/}
						 </tbody>
						 <tr >
							 <td className="List">Lists:
								 <button className="videoLink">
									<a href="/MyVideos">My Videos</a>
								 </button>
							 </td>

						 <td className="MyVideos">
						 </td>
						 </tr>
					</table>
				</div>
			</div>
			</div>
		);
	}
}
export default Profile;
