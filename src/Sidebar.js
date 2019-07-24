import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import './App.css';
import Category from './Category';


class Sidebar extends Component {

	state = {
		sidebarName: "Categories",
		categories: []
	}

	// Lifecycle
	componentWillMount() {
		axios.get('http://localhost:4000/api/category').then((res) => {
			this.setState({
				categories: res.data
			})
		}).catch((err) => {
			console.log('err', err)
		})
	}

		//fuctions
		selectCategory = (id) => {
			let categories = this.state.categories
			categories.forEach((c) => delete c.active)
			let category = categories.find((c) => c._id === id)
			category.active = true
			this.setState({categories})
			this.props.getVideos(id)
	}



	//Render
	render() {
		return (

			<div id="sidebar" className="col-2 p-2 m-2">
					 <h4>{this.state.sidebarName}</h4>
					 <div className="sidebarUl">
					 {
						this.state.categories.map((c) => {
							return <Category category={c} key={c._id}
						selectCategory={this.selectCategory} />
						})
					}

					 </div>
				 </div>
		);
	}
}


export default Sidebar;
