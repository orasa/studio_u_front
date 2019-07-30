import React, { Component } from 'react';
import axios from 'axios';
import Signup from './Signup';
import Login from './Login';

class NavBar extends Component {
	// Data
	state = {
		// name: '',
		// email: '',
		// password: '',
		// error: ''
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
					this.props.auth();
					console.log('Hello again');
				}
				window.location = '/';
				console.log('Hello again');
			})
			.catch(err => {
				console.log('err', err);
			});
	};

	signup = e => {
		e.preventDefault();

		axios
			.post('http://localhost:4000/api/signup', this.state)
			.then(res => {
				console.log('res', res);
				localStorage.setItem('token', res.data.token);
				// redirect to App
				window.location = '/';
			})
			.catch(err => {
				console.log('err', err);
			});
	};

	// Render
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg bg-secondary">
					<a className="navbar-brand" href="#">
						Studio Unicorns
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									Home <span className="sr-only">(current)</span>
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									{/*signup modal*/}
									<button
										type="button"
										className="btn btn-primary"
										data-toggle="modal"
										data-target="#signup"
									>
										Sign Up
									</button>
									<div
										className="modal fade"
										id="signup"
										tabIndex="-1"
										role="dialog"
										aria-labelledby="exampleModalLabel"
										aria-hidden="true"
									>
										<div className="modal-dialog" role="document">
											<div className="modal-content">
												<div className="modal-header">
													<h5 className="modal-title" id="exampleModalLabel">
														Signup
													</h5>
													<button
														type="button"
														className="close"
														data-dismiss="modal"
														aria-label="Close"
													>
														<span aria-hidden="true">&times;</span>
													</button>
												</div>
												<div className="modal-body">
													<Signup signup={this.signup} />
												</div>
												<div className="modal-footer">
													<button
														type="button"
														className="btn btn-secondary"
														data-dismiss="modal"
													>
														Close
													</button>
													<button type="button" className="btn btn-primary">
														Save changes
													</button>
												</div>
											</div>
										</div>
									</div>

									{/*end Singup modal*/}
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									{/*Modal login with form*/}
									<button
										type="button"
										className="btn btn-primary"
										data-toggle="modal"
										data-target="#login"
									>
										Log In
									</button>
									<div
										className="modal fade"
										id="login"
										tabIndex="-1"
										role="dialog"
										aria-labelledby="exampleModalLabel"
										aria-hidden="true"
									>
										<div className="modal-dialog" role="document">
											<div className="modal-content">
												<div className="modal-header">
													<h5 className="modal-title" id="exampleModalLabel">
														Log In
													</h5>
													<button
														type="button"
														className="close"
														data-dismiss="modal"
														aria-label="Close"
													>
														<span aria-hidden="true">&times;</span>
													</button>
												</div>
												<div className="modal-body">
													<Login login={this.login} />
												</div>
												<div className="modal-footer">
													<button
														type="button"
														className="btn btn-secondary"
														data-dismiss="modal"
													>
														Close
													</button>
													<button type="button" className="btn btn-primary">
														Save changes
													</button>
												</div>
											</div>
										</div>
									</div>

									{/*end modal login*/}
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Sign Out
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Dropdown
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<a className="dropdown-item" href="#">
										Sign Up
									</a>
									<a className="dropdown-item" href="#">
										Log In
									</a>
									<div className="dropdown-divider" />
									<a className="dropdown-item" href="#">
										Settings
									</a>
								</div>
							</li>
						</ul>
					</div>
				</nav>
				{/* search form */}
				<span>
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2 m-3"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button
							className="btn btn-outline-success my-2 my-sm-0"
							type="submit"
						>
							Search
						</button>
					</form>
				</span>
			</div>
		);
	}
}
export default NavBar;
