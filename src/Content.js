import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class Content extends Component {

	//Data
	


	//Render
	render() {
		return (

			<div id="Content" className="col-9 ">
				<div className="d-flex flex-row mb-2 p-3">
					<div className="col bg-light mr-2 p-5">Flex item 1</div>
					<div className="col bg-light mr-2 p-5">Flex item 2</div>
					<div className="col bg-light p-5">Flex item 3</div>
				</div>
				<div className="d-flex flex-row mb-3 p-3">
					<div className="col p-2 bg-light mr-2 p-5">Flex item 4</div>
					<div className="col p-2 bg-light mr-2 p-5">Flex item 5</div>
					<div className="col p-2 bg-light p-5">Flex item 6</div>
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




export default Content
