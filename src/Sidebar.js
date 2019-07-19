import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Category from './Category';

class Sidebar extends Component {
	state = {
		sidebarName: "Categories",

		categories: [
			{id: 1,
			name: "Programming"},
			{id: 2,
			name: "Web Applications"},
			{id: 3,
			name: "Data Science"},
			{id: 4,
			name: "Mobile-App"}
		]

	};

	//Render
	render() {
		return (

			<div id="sidebar" className="col-2 p-2 m-2">
					 <h4>{this.state.sidebarName}</h4>
					 <div className="sidebarUl">
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


export default Sidebar;
