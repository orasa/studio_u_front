import React, { Component } from 'react';
import './App.css'
import axios from 'axios'
import Video from './Video'
// import VideosHub from './VideosHub'


class Profile extends Component {
	// Data
	state = {
		user: '',
		email: '',
		password: ''

		// likes: [],
		// fans: [],
		// videos: []
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

					})
	      }).catch((err) => { "Nooo, bloody way!"
		})
	}
	componentWillMount() {
		this.get_loggedUser()

	}


	// Render
	render() {
		return (

			<div className="profileWrap">
				<h2 className="profileTitle ">Your Profile</h2>
				<div className="userDetails">
					<table>
						 <tbody>
							 <tr >
								<td class="userName">Your User's Name: {this.state.user.name}</td>
								</tr>
								<tr>
									<td class="userEmail">Your Email: {this.state.user.email}</td>
								</tr>
								<tr>
									{/* <td>Your fans: {this.state.video.fans}</td>*/}

								</tr>

						 </tbody>
					</table>

				</div>
			</div>
		);
	}
}
export default Profile;
