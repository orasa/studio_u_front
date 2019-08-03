import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import App from './App'
import PostVideo from './PostVideo'
import Profile from './Profile'
import MyVideos from './MyVideos'

class Routes extends Component {
	// Data
	state = {}
	// Functions
	// Render
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/myVideos" component={MyVideos} />
					<Route path="/profile" component={Profile} />
					<Route path="/signup" component={Signup} />
          <Route path ="/login" component={Login} />
          <Route path="/PostVideo" component={PostVideo} />
					<Route path="/" component={App} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes
