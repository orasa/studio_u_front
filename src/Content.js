import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Iframe from 'react-iframe'
import axios from 'axios'
import Video from './Video'


class Content extends Component {
//Data
	state = {

		 videos: []
	 }
	 //Fuctions
	 componentWillMount() {
		axios.get('http://localhost:4000/api/video').then((res) => {
			this.setState({
				videos: res.data
			})
		}).catch((err) => {
			console.log('err', err)
		})
	}
	componentWillReceiveProps(props) {
		axios.get(`http://localhost:4000/api/video?category=${props.category}`).then((res) => {
			this.setState({
				videos: res.data
			})
		}).catch((err) => {
			console.log('err', err)
		})
	}


	createVideo = (e, text) => {
		e.preventDefault()
		let choice = {
		}
	}



	//Render
	render() {
		return (
			<div id="Content" className="col-9 ">
				 <div className="col bg-light mr-2 p-5">
					 {
					 this.state.videos.map((vid) => {
						 return <Video video={vid} key={vid._id}/>
					 })
				 }
					</div>
			</div>
       
   	)
	}
}


export default Content
