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

	// Lifecycle use componentDidmount

	componentWillMount() {
		axios.get('http://localhost:4000/api/category').then((res) => {
			res.data[0].active = true
			this.setState({
				categories: res.data
			})
			this.selectCategory(res.data[0]._id)
			console.log('res.data[0], res.data[0]');
		}).catch((err) => {
			console.log('err', err)
		})
	}

		//functions
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

			<div className="list-group m-3">
				  <button type="button" className="list-group-item list-group-item-action active">
				    Pick cateory
				  </button>
				  <button type="button" className="list-group-item list-group-item-action">
						{
					   this.state.categories.map((c) => {
						 return <Category category={c} key={c._id}
					   selectCategory={this.selectCategory} />
				     }) 
					  }
					</ button>
				  {/* <button type="button" className="list-group-item list-group-item-action">Mobile Applications
					</button>
				  <button type="button" className="list-group-item list-group-item-action">Database
					</button>
				  <button type="button" className="list-group-item list-group-item-action" >User Interface
					</button>*/}
			</div>

 )

		  {/*	<div id="sidebar" className="col-2 p-2 m-2">
					 <h4>{this.state.sidebarName}</h4>
					 <div className="sidebarUl">
					 {
						this.state.categories.map((c) => {
							return <Category category={c} key={c._id}
						selectCategory={this.selectCategory} />
						})
					}
					 </div>
				 </div>*/}

	}
}


export default Sidebar
