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

				 <a className="categoryButton btn-info mr-2" href="#" role="button">
					  <li className={ this.state.category.active ? 'active' : '' } onClick={() => this.props.selectCategory(this.state.category._id)}># {this.state.category.name}</li>
				</a>
		     </span>
		 </div>

		)
	}
}

export default Category;
