import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Samui from './samui.jpg'
import './App.css';
import Sidebar from './Sidebar'
import Content from './Content'

class App extends Component {



	//Render
	render() {
		return(
			<div className="wrap ">
				<div id="title" className="row">
					<p className="title text-left">Studio Unicorns</p>
					<nav className="button text-right ">
						<a className="btn btn-info mr-2" href="#" role="button">SignUp</a>
						<a className="btn btn-info mr-2" href="#" role="button">Log In</a>
					</nav>
				</div>

				<div id="header" className="row bg-light">
					<div id="main" className="row p-p1 ">
						{/* import a childe Componnet Sidebar, Content to render here*/}

          	<Sidebar />
						<Content />
  				</div>
				</div>
			</div>
		)
	}
}


export default App;
