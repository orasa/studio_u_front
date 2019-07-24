import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Samui from './samui.jpg'
import './App.css';
import { Link } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Sidebar from './Sidebar'
import VideosHub from './VideosHub'


class App extends Component {
//data
 state = {
	 category: ''
 }
 //functions
 getVideos = (id) => {
	 this.setState({
		 category: id
	 })
 }

	//Render
	render() {
		return(
			<div className="wrap ">
				<div id="title" className="row">
					<p className="title text-left">Studio Unicorns</p>
					<p className="title text-left">'To Code is to be, to be is to Code'.</p>
					<nav className="button text-right ">
						<Link to="/Signup"><button className="Signup">Signup</button></Link>

						<Link to="/Login"><button className="Login">Login</button></Link>

					</nav>
				</div>

				<div id="header" className="row bg-light">
				</div>
				<a className="postVideo btn mr-2 mt-3" href="#" role="button">Post My Favorite Tutorial</a>
				<div id="main" >

					{/* import a childe Componnet Sidebar, Content to render here*/}
          <Sidebar getVideos={this.getVideos}/>
					<VideosHub category={this.state.category}/>
				</div>
			</div>
		)
	}
}


export default App;
