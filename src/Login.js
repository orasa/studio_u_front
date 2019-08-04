import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {
	// Data
	state = {
		name: '',
		email: '',
		password: '',
		error: ''
	};

	// Functions
	changeEmail = e => {
		this.setState({ email: e.target.value });
	};

	changePassword = e => {
		this.setState({ password: e.target.value });
	};

	login = e => {
		e.preventDefault();
		axios
			.post('http://localhost:4000/api/login', this.state)
			.then(res => {
				console.log('Test res.data.token', res.data.token);
				if (!res.data.token) {
					this.setState({
						error: res.data
					});
				} else {
					this.setState({
						error: ''
					});
					localStorage.setItem('token', res.data.token);
					// this.props.auth();
					console.log('Hello again');
					//redirect to homepage
					window.location = '/';
					console.log('Hello again');

				}

			})
			.catch(err => {
				console.log('err', err);
			});
	};




	// Render
	render() {
		return (
			<div className="row">
				<div className="col-4 offset-4">
					<div className="card login">
						<div className="card-body">
							<form onSubmit={e => this.login(e)}>
								<div className="form-group">
									<input
										type="email"
										className="form-control"
										placeholder="Email..."
										value={this.state.email}
										onChange={e => this.changeEmail(e)}
									/>
								</div>
								<div className="form-group">
									<input
										type="password"
										className="form-control"
										placeholder="Password..."
										value={this.state.password}
										onChange={e => this.changePassword(e)}
									/>
								</div>
								<div className="error">{this.state.error}</div>
									<button type="submit" className="btn btn-success">
										Login
									</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Login;
