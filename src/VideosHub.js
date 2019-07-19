import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Iframe from 'react-iframe'
import Video from './Video'


class VideosHub extends Component {

	state = {

		 videos: [{
			 id: 3,
			 description: 'My Favorite Tutorials',
			 link: 'https://www.youtube.com/embed/kHV7gOHvNdk',
			 category: "id",
			 likes: "number",
			 date: Date.now,
			 user: "id",
			 fans: ["id", "id", "id"]
		 },
		 {
			 id: 3,
			 description: '',
			 link: 'https://www.youtube.com/embed/kHV7gOHvNdk',
			 category: "id",
			 likes: "number",
			 date: Date.now,
			 user: "id",
			 fans: ["id", "id", "id"]
		 },
		 {
			 id: 3,
			 description: '',
			 link: 'https://www.youtube.com/embed/kHV7gOHvNdk',
			 category: "id",
			 likes: "number",
			 date: Date.now,
			 user: "id",
			 fans: ["id", "id", "id"]
		 }
		]
	 }



	//Data



	//Render
	render() {
		return (

       <div id="Content" className="col-9 ">
					<div className="col bg-light mr-2 p-5">
						{
 						this.state.videos.map((vid) => {
 							return <Video video={vid} key={vid.id}/>
 						})
 					}
					 </div>
			 </div>


		)
	}
}


export default VideosHub
