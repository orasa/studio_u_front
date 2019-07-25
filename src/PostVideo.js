import React, {Component} from 'react'
import axios from 'axios'

class PostVideo extends Component {

	// Data
	state = {
		link: '',
		category: '',
		description: ''
	}


	// Functions
	changeUrl_id = (e) => {
		this.setState({url_id: e.target.value})
	}

	changeCategory = (e) => {
		this.setState({category: e.target.value})
	}

	changeDescription = (e) => {
		this.setState({description: e.target.value})
	}
	// create video onSubmit and Onchange
	createVideo = (e, text) => {
	 e.preventDefault()
	 console.log(e)
	 let video = {
			link: text,
			category: this.props.category
		}

	 axios.post('http://localhost:4000/api/videos').then((res) => {
		 this.setState({
			 videos: res.data
		 })
	 }).catch((err) => {
		 console.log('err', err)
	 })

	 let videos = this.state.videos
	   videos.push(video)
	 this.setState({videos})
 }


	// Render
	render() {
		return (
			//
			<div className="row">
			 <form onSubmit={(e) => this.props.createVideo(e)}>
			    <div class="form-group">
			      <label for="link">Add Youtube Video Url id:</label>
			      <input type="text" class="form-control" id="url_id" value={this.state.link} onChange={(e) => this.changeLink(e)} />
			    </div>

			    <div class="form-group">
			      <label for="category">Select Category (select one):</label>
			       <select class="form-control" id="category"value={this.state.category} onChange={(e) => this.change.category(e)} >
			      </select>
			    </div>

			    <div class="form-group">
					  <label for="description">Description:</label>
					  <textarea class="form-control" rows="5" id="description" value={this.state.link} onChange={(e) => this.changeLink(e)}></textarea>
			</div>
			<button type="submit" class="btn btn-default">Submit</button>
	  </form>
	 </div>

		)
	}
}

export default PostVideo
