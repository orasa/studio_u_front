import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Iframe from 'react-iframe'

import Choice from './Choice'


class Content extends Component {

	state = {

		 choices: [{
			 id: 1,
			 name: "Node.js"
		 },
		 {
			 id: 2,
			 name: "Express.js"
		 },
		 {
			 id: 3,
			 name: "React"
		 },
		 {
			 id: 4,
			 name: "HTML5 & Bootstraps"
		 },
		 {
			 id: 5,
			 name: "MongoDB"
		 },
		 {
			 id: 6,
			 name: "Angular"
		 }
		]
	 }

	//Data


	//Render
	render() {
		return (

       <div id="Content" className="col-9 bg-light">

						{
 						this.state.choices.map((c) => {
 							return <Choice choice={c} key={c.id}/>
 						})
 					}
					</div>


		)
	}
}


export default Content
