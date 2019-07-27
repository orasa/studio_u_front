import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Samui from './samui.jpg'
import './App.css';
import axios from 'axios'
import { Link } from 'react-router-dom'
// import Signup from './Signup'
// import Login from './Login'
import Sidebar from './Sidebar'
import VideosHub from './VideosHub'
import PostVideo from './PostVideo'


class App extends Component {
//data
 state = {
	 category: '',
   newVideo: null
 }
 //functions
 getVideos = (id) => {
	 this.setState({
		 category: id
	 })
 }
 createVideo = (e, text) => {
   e.preventDefault()
   console.log(e)

     let newVideo = {
       link: text,
       category: this.props.category,
       description: text
      }
     console.log('video', newVideo)

     axios.post('http://localhost:4000/api/video',
     newVideo,
       {headers: {
         Authorization: `Bearer ${localStorage.getItem('token')}`
       }}
     ).then((res) => {
       // let videos = this.state.videos
       // videos.unshift(res.data)
       // this.setState({videos})
       this.setState({
         newVideo: res.data
       })
     }).catch((err) => {
       console.log('err', err)
     })
    }
 //

 // redirectPostVideoForm = () => {
 //   window.location.href = '/PostVideo'
 // }

	//Render
	render() {
		return(
    <div className="wrap">

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
          <PostVideo />
        {/*<a className="postVideo btn mr-2 mt-3" href="#" role="button" onClick={() => this.redirectPostVideoForm()}>Post Your Favorite Tutorial</a>*/}

				<div id="main">
          <a className="postVideo btn mr-2 mt-3" href="#" role="button" onClick={() => this.PostVideo}>Post Your Favorite Tutorial</a>


  					{/* import a child Componnet Sidebar, Content to render here*/}
            <Sidebar getVideos={this.getVideos}/>
  					<VideosHub category={this.state.category} newVideo={this.state.newVideo}/>
  				</div>
			</div>
		)
	}
}


export default App;
