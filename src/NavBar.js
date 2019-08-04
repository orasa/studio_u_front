import React, { Component } from 'react';
import './App.css'
import Signup from './Signup';
import Login from './Login';


class NavBar extends Component {
	// Data

	//functions
logOut = () => {
	localStorage.removeItem('token');
	console.log('You are successfully Signed out!');
	alert("You are about to sign out, see you again soon!")
	window.location = '/'
}

	// Render
	render() {
		return (

			<div>
				<h1 className="title">Studio Unicorns</h1>
				<nav className="navbar navbar-expand-lg">

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
								<a className="nav-link " href="#">
									<button
										type="button"
										className="btn btn-outline-light"
										data-toggle="modal"
										data-target="#about"
									>
										Home
									</button>
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#">
									{/*signup modal*/}
									<button
										type="button"
										className="btn btn-outline-light"
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
										className="btn btn-outline-light"
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
													<button type="button" className="btn btn-outline-light">
														Save changes
													</button>
												</div>
											</div>
										</div>
									</div>

							</a>
								{/*end modal login*/}
							</li>
							{/* Sign out button */}
							<li className="nav-item">
								<a className="nav-link" href="#">
									<button
										type="button"
										className="btn btn-outline-light"
										onClick={() => this.logOut()}
									>
										Sign Out
									</button>
								</a>
							</li>
							{/*End Signup button*/}
							{/* Profile button*/}
							<li className="nav-item">
								<a className="nav-link" href="/profile">
									<button type="button"
									className="btn btn-outline-light">Profile</button>
								</a>
							</li>

						</ul>
					</div>
				</nav>
				{/* search form */}
				<span>
					<input
						className="searchBar form-control mr-sm-1 m-3"
						type="search"
						placeholder="Search"
						aria-label="Search"
						onChange={(e) => this.props.search(e)}
					/>
				</span>
			</div>
		);
	}
}
export default NavBar;
