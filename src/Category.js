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
			<div>
				<span>

				 <a className="categoryBtn btn btn-info mr-5 bg-light" href="#" role="button"><li>{this.state.category.name}</li></a>
		     </span>
		 </div>

		)
	}
}

export default Category;
