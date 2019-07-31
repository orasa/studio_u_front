import React, { Component } from 'react';
import axios from 'axios';
import Category from './Category';

class PostVideo extends Component {
	// Data
	state = {
		link: '',
		category: '',
		description: '',
		categories: []
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	componentWillMount() {
		axios
			.get('http://localhost:4000/api/categories')
			.then(res => {
				this.setState({
					categories: res.data
				});
				console.log('res.data from axios get category', res.data);
			})
			.catch(err => {
				console.log('err', err);
			});
		//
	}

	render() {
		return (
			<div
				className="modal fade"
				id="newVideo"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						{/* createVideoPost is in App.js */}

						<form onSubmit={this.props.createVideoPost(this.state)}>
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">
									Post Video
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
								<div className="form-group">
									<label>Link</label>
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text" id="basic-addon3">
												https://youtu.be/
											</span>
										</div>
										<input
											type="text"
											name="link"
											value={this.state.link}
											onChange={e => this.handleChange(e)}
											className="form-control"
										/>
									</div>
								</div>

								<div className="form-group">
									<label>Choose Category</label>
									<select
										name="category"
										value={this.state.category}
										onChange={e => this.handleChange(e)}
										className="form-control"
									>
										{this.state.categories.map(c => {
											return (
												<option value={c._id} key={c._id}>
													{c.name}
												</option>
											);
										})}
									</select>
								</div>

								<div className="form-group">
									<label>Description</label>
									<input
										type="text"
										name="description"
										value={this.state.description}
										onChange={(e, text) => this.handleChange(e)}
										className="form-control "
									/>
								</div>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-dismiss="modal"
								>
									Close
								</button>
								<button type="submit" className="btn btn-primary">
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default PostVideo;
