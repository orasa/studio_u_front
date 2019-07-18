import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Category from './Category';

class Sidebar extends Component {
	state = {
		sidebarName: "Categories",

		categories: 	[
			{id: 1,
			name: "Web Application"},
			{id: 2,
			name: "Git"},
			{id: 3,
			name: "Programming"}

		]

	};

	//Render
	render() {
		return (

			<div id="sidebar" className="col-2 ">
					 <h4>{this.state.sidebarName}</h4>
					 <div className="ul">
					 {
						this.state.categories.map((c) => {
							return <Category category={c} key={c.id}/>
						})
					}


					 </div>
				 </div>
		);
	}
}
{/*
<div id="sidebar" className="col-2 ">
		 <h4>Categories</h4>
		 <div className="ul ">
			 <li>Web Application</li>
			 <li>JavaScripts</li>
			 <li>Python</li>
			 <li>Git</li>
		 </div>
	 </div>*/}




export default Sidebar;
