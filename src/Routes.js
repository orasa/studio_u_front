import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import App from './App'

class Routes extends Component {
	// Data
	state = {}
	// Functions
	// Render
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/signup" component={Signup} />
          <Route path ="/login" component={Login} />
          <Route path="/" component={App} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes
