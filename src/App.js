import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Samui from './samui.jpg'

import './App.css';

class App extends Component {



	//Render
	render() {
		return(
			<div className="wrap bg-light">
				<div className="nav un-styled">
					<div className="ul li-unstyled">
						<li >SignUp</li>
						<li>LogIn</li>
					</div>
				</div>
				<div id="header" className="row bg-light">

					<h1 className="title">Studio Unicorns</h1>

					<div id="main" className="row bg-secondary p-p1 ">
  					<div id="sidebar" className="col-2 bg-light">
  						<h5>Categories</h5>
  						<ul>
  							<li>Web Application</li>
  							<li>JavaScripts</li>
  							<li>Python</li>
  							<li>Git</li>
  						</ul>
  					</div>
  					<div id="videoContent" className="col-9 bg-warning">
  						<div className="d-flex flex-row mb-2 bg-primary p-3">
  							<div className="col bg-light mr-2 p-5">Flex item 1</div>
  							<div className="col bg-light mr-2 p-5">Flex item 2</div>
  							<div className="col bg-light p-5">Flex item 3</div>
  						</div>
  						<div className="d-flex flex-row mb-3 bg-primary p-2">
  							<div className="col p-2 bg-light mr-2 p-5">Flex item 4</div>
  							<div className="col p-2 bg-light mr-2 p-5">Flex item 5</div>
  							<div className="col p-2 bg-light p-5">Flex item 6</div>
  						</div>
  					</div>

  				</div>
				</div>



			</div>

		)

	}
}


export default App;
