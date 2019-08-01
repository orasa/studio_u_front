import React, { Component } from 'react';


class Profile extends Component {
	// Data
	state = {
		name: '',
		email: '',
		password: '',
		likes: [],
		fans: [],
		videos: []
	};
	// Functions

	// Render
	render() {
		return (
			<div>
				<h1>Your Profile</h1>
				<table>
					<tr>
						<td>Name</td>
						<td>Nui</td>
					</tr>
					<tr>
						<td>City</td>
						<td>Samui</td>
					</tr>
				</table>
			</div>
		);
	}
}
export default Profile;
