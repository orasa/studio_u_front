import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Samui from './samui.jpg'
import './Test2.css';
import axios from 'axios'
import { Link } from 'react-router-dom'
// import Signup from './Signup'
// import Login from './Login'
import Sidebar2 from './Sidebar2'
import VideosHub2 from './VideosHub2'
import PostVideo from './PostVideo'
import Video from './Video'


class Test3 extends Component {
//data
 state = {

   videos : [],
   link: '',
   category: '',
   description: '',
   links: [],
   categories: []
 }

 getVideos = (id) => {
	 this.setState({
		 category: id
	 })
 }

 redirectPostVideoForm = () => {
   window.location.href = '/PostVideo'
 }

	//Render
	render() {
		return(
    <div className="wrap">

				<div id="title" className="row">
					<p className="appName text-left">Studio Unicorns</p>

				</div>

				<div id="header" className="row bg-light">
          <small className="title text-left">'Come, your destiny awaits!'</small>
					<nav className="button text-right ">
          </nav>
				</div>
          {/*<Test2 />*/}

        <a className="postVideo btn mr-2 mt-3"  role="button" onClick={() => this.redirectPostVideoForm()}>Post Your Tutorial</a>
          <div className="category row bg-light">
            {/* import a child Componnet Sidebar,to render here*/}
            <Sidebar2 getVideos={this.getVideos}/>
          </div>

      {/*render all video*/}
      <div id="main">
        {/*<Video category={this.state.category}/>*/}
        <VideosHub2  />
      </div>
    </div>
		)
	}
}


export default Test3
