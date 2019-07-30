import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Iframe from 'react-iframe'
import Video from './Video'
import PostVideo from './PostVideo'
import axios from 'axios'



class VideosHub extends Component {

		state = {
		videos: []

		}

		//Functions
		componentWillMount() {
		 axios.get('http://localhost:4000/api/videos').then((res) => {
			 this.setState({
				 videos: res.data
			 })
		 }).catch((err) => {
			 console.log('err', err)
		 })
	 }

	 //when user add new video it will call createVideo() reside on App

	 componentWillReceiveProps(props) {
		 // axios.get(`http://localhost:4000/api/videos?category=${props.category}`).then((res) => {
			//  this.setState({
			// 	 videos: res.data
			//  })
		 // }).catch((err) => {
			//  console.log('err', err)
		 // })
		 console.log('newVideo', props.newVideo)
		 let videos = this.state.videos
		 videos.push(props.newVideo)
		 this.setState({
 			// videos: res.data
			videos
 		})
	 }


   //move to App.js
	 //
	//  createVideo = (e, text) => {
 	//  e.preventDefault()
 	//  console.log(e)
	//
	//  let video = {
	// 		link: text,
	// 		category: this.props.category,
	// 		description: text
	// 	}
	// 	console.log('video', video)
	// 	axios.post('http://localhost:4000/api/api/videos',
	// 		{headers: {
	// 			Authorization: `Bearer ${localStorage.getItem('token')}`
	// 		}}
	// 	).then((res) => {
	// 		let videos = this.state.videos
	// 		videos.unshift(res.data)
	// 		this.setState({videos})
	// 	}).catch((err) => {
	// 		console.log('err', err)
	// 	})
	// }


	//Render
	render() {
		return (

       <div id="VideosHub" className="col-9 ">


					<div className="col bg-light mr-2 p-5">
						{
 						this.state.videos.map((vid) => {
							console.log('vid form Map', vid);
 							return <Video video={vid} key={vid._id}/>
 						})
 					}
					 </div>
			 </div>

		)
	}
}

export default VideosHub
