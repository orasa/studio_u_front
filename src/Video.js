import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Iframe from 'react-iframe'


class Video extends Component {

	state = {
		video: this.props.video
	}

	//Render
	render() {
		console.log('>>>>>>>>>>',this.state.video)
		return(

			<div className="card-columns d-flex  m-3">
				<div className= "card">
					<div className='p-3'>
						<div className='iframe'>
							<iframe className='w-100'  src={`https://www.youtube.com/embed/${this.state.video.link}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowsfullscreen="true"></iframe>
							<div className="card-body">
								<h5 className='card-title'>{this.state.video.category.name}</h5>
								<p className='card-text'>text about video</p>
							</div>
						</div>
					</div>
				</div>

	 </div>



		)
	}
}

export default Video
