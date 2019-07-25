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
		//Fuctions
		componentWillMount() {
		 axios.get('http://localhost:4000/api/videos').then((res) => {
			 this.setState({
				 videos: res.data
			 })
		 }).catch((err) => {
			 console.log('err', err)
		 })
	 }

	 componentWillReceiveProps(props) {
		 axios.get(`http://localhost:4000/api/videos?category=${props.category}`).then((res) => {
			 this.setState({
				 videos: res.data
			 })
		 }).catch((err) => {
			 console.log('err', err)
		 })
	 }

	 //
	 createVideo = (e, text) => {
 	 e.preventDefault()
 	 console.log(e)

	 let video = {
			link: text,
			category: this.props.category,
			description: text
		}
		console.log('video', video)
		axios.post(
			`${process.env.REACT_APP_API}/api/videos`,
			{headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}}
		).then((res) => {
			let videos = this.state.videos
			videos.unshift(res.data)
			this.setState({videos})
		}).catch((err) => {
			console.log('err', err)
		})
	}


	//Render
	render() {
		return (

       <div id="VideosHub" className="col-9 ">
				 <h1>Latest Video Post by Users</h1>

					 <div className="col bg-light mr-2 p-5">
						 <PostVideo postVideo={this.createVideo} />
						</div>

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


export default VideosHub
