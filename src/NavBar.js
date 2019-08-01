import React, { Component } from 'react';
import Signup from './Signup';
import Login from './Login';
import Signout from './Login';
import Profile from './Profile'


class NavBar extends Component {
	// Data
	state = {
		// name: '',
		// email: '',
		// password: '',
		// error: ''
	};

logOut = () => {
	localStorage.removeItem('token');
	console.log('You are successfully Signed out!');
	window.location = '/login'
}

	// Render
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg bg-light">
					<a className="navbar-brand mb-1 p-3 bg-light" href="#">
						<h2>Studio Unicorns</h2>
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
									<button
										type="button"
										className="btn btn-outline-primary"
										data-toggle="modal"
										data-target="#about"
									>
										Home
									</button>
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#">
									<button
										type="button"
										className="btn btn-outline-primary"
										data-toggle="modal"
										data-target="#about"
									>
										About
									</button>

								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									{/*signup modal*/}
									<button
										type="button"
										className="btn btn-outline-primary"
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
										className="btn btn-outline-primary"
										data-toggle="modal"
										data-target="#login"
									>
										Log In
									</button>
									{/*login card*/}
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
													<Login login={this.login}  />
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

							</a>
								{/*end modal login*/}
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									<button
										type="button"
										className="btn btn-outline-primary"
										onClick={() => this.logOut()}
									>
										Sign Out
									</button>
								</a>
							</li>
							{/*End Signup button*/}
							<li className="nav-item">
								<a className="nav-link" href="/profile">
									<button type="button"
									className="btn btn-outline-primary">Profile</button>
								</a>
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
