import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class Sidebar extends Component {



	//Render
	render() {
		return(

  					<div id="sidebar" className="col-2 ">
  						<h4>Categories</h4>
	  						<div className="ul ">
	  							<li>Web Application</li>
	  							<li>JavaScripts</li>
	  							<li>Python</li>
	  							<li>Git</li>
	  						</div>
  					</div>

		)

	}
}


export default Sidebar
