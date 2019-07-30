import React, { Component } from 'react';
import axios from 'axios';
import Category from './Category';

class PostVideo extends Component {
	// Data
	state = {
		link: '',
		category: '',
		description: '',
		links: [],
		categories: []
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = e => {
		e.preventDefault();
		console.log('this.state onSubmit', this.state);
		this.setState({
			link: '',
			category: '',
			description: ''
		});
	};

	createVideoPost = e => {
		let data = {
			link: this.state.link,
			category: this.state.category,
			description: this.state.description
		};
		axios
			.post('http://localhost:4000/api/video', data, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})
			.then(res => {
				let videos = this.state.links;
				videos.push(res.data);
				console.log('axious respons data', res.data);
				this.setState({ videos });
			})
			.catch(err => {
				console.log('err axios post', err);
			});
	};

	componentWillMount() {
		axios
			.get('http://localhost:4000/api/videos')
			.then(res => {
				this.setState({
					links: res.data
				});
			})
			.catch(err => {
				console.log('err', err);
			});
		//axious get categories
		axios
			.get('http://localhost:4000/api/category')
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

	print = () => {
		console.log('this.state', this.state);
	};

	render() {
		return (
			<div
				class="modal fade"
				id="newVideo"
				tabindex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<form onSubmit={this.createVideoPost()}>
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">
									Post Video
								</h5>
								<button
									type="button"
									class="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<div className="form-group">
									<label>Link</label>
									<div className="input-group">
										<div class="input-group-prepend">
											<span class="input-group-text" id="basic-addon3">
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
							<div class="modal-footer">
								<button
									type="button"
									class="btn btn-secondary"
									data-dismiss="modal"
								>
									Close
								</button>
								<button type="submit" class="btn btn-primary">
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
