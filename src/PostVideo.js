import React, {Component} from 'react'
import axios from 'axios'
import Category from './Category'

class PostVideo extends Component {

	// Data
	state = {
		link: '',
		category: '',
		description: '',
		categories: []
	}

	//Functions
	//create Change Input function
	//call it on the render on form onChange and pass argument; the input we need


	ChangeInput = (e, text) => {
		this.setState({[text]: e.target.value}, () => {
			console.log('state', this.state)
		})
	}

	clearMessage = () => {
		this.setState({
			text: ''
		})
	}

	// get categories from server
	// then, inject categores into this.state.categories

		componentWillMount() {
			axios.get('http://localhost:4000/api/category').then((res) => {
				this.setState({
					categories: res.data,

				})
			}).catch((err) => {
				console.log('err', err)
			})
		}



	// create video onSubmit and Onchange

	// Render
	render() {
		return (

		<div className="row">

			 <form onSubmit={(e, text) => {
						this.props.createVideo(e, text)}
					}>


    <div className="form-group">
			      <label htmlFor="link">Add Youtube Video Url id:</label>
			      <input type="text" className="form-control" id="url_id" value={this.state.link} onChange={(e, text) => this.ChangeInput(e, 'link')} />
			    </div>

			    <div className="form-group">
			      <label htmlFor="category">Select(select one):</label>
			       <select className="form-control" id="category"value={this.state.category} onChange={(e, text
							 ) => this.ChangeInput(e, 'category')} >
							 {
								this.state.categories.map((c) => {
									return (<option key={c._id}>{c.name}</option>)
								})
							}



							 // map through the list of this.state.categories

							 // for each one, return <option>name of category</option>
			      </select>
			    </div>

			    <div className="form-group">
					  <label htmlFor="description">Description:</label>
					  <textarea className="form-control" rows="5" id="description" value={this.state.description} onChange={(e, text) => this.ChangeInput(e, 'description')}></textarea>
			    </div>
		 	     <button type="submit" className="btn btn-default">Submit</button>
	     </form>
	  </div>
	)}
}


export default PostVideo
