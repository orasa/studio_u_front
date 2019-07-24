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
					<Route path="/" component={App} />
					<Route path="/Signup" component={Signup} />
          <Route path ="/Login" component={Login} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes
