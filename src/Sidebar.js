import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css';
import Category from './Category';

class Sidebar extends Component {
	state = {
		categories: []
	};

	// Lifecycle use componentDidmount

	componentWillMount() {
		axios
			.get(`${process.env.REACT_APP_API}/api/categories`)
			.then(res => {
				res.data[0].active = true;
				this.setState({
					categories: res.data
				});
				// this.selectCategory(res.data[0]._id);
				console.log('res.data[0], res.data[0]');
			})
			.catch(err => {
				console.log('err', err);
			});
	}

	//functions
	selectCategory = id => {
		let categories = this.state.categories
		categories.forEach(c => delete c.active)
		let category = categories.find((c) => c._id === id)
		category.active = true;
		this.setState({ categories });
		this.props.setCategory(id);
	};

	//Render
	render() {
		return (
			<div className="list-group m-3">
			<h5 className="category m-1">Pick By Categories</h5>
				<button
					type="button"
					className="list-group-item list-group-item-action"
				>
					{this.state.categories.map(c => {
						return (
							<Category
								category={c}
								key={c._id}
								selectCategory={this.selectCategory}
							/>
						);
					})}
				</button>
			</div>
		);
	}
}

export default Sidebar;
