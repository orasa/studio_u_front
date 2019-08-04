import React, { Component } from 'react';
import './Signup.css';
import axios from 'axios';


class Signup extends Component {
	// Data
	state = {
		name: '',
		email: '',
		password: ''
	};

	// Functions
	changeName = e => {
		this.setState({ name: e.target.value });
	};

	changeEmail = e => {
		this.setState({ email: e.target.value });
	};

	changePassword = e => {
		this.setState({ password: e.target.value });
	};

	signup = e => {
		e.preventDefault();
		axios
			.post(`${process.env.REACT_APP_API}/api/categories`, this.state)
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
					<div className="card signup">
						<div className="card-body">
							<form onSubmit={e => this.signup(e)}>
								<div className="form-group">
									<input
										type="text"
										className="form-control"
										placeholder="Full Name..."
										value={this.state.name}
										onChange={e => this.changeName(e)}
									/>
								</div>
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
								<button type="submit" className="btn btn-success">
									Signup
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Signup;
