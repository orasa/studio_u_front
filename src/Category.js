import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class Category extends Component {

	state = {
		category: this.props.category
	}

	//Render
	render() {
		return(
			 <li>{this.state.category.id}# {this.state.category.name}</li>

		)
	}
}

export default Category;
