import React, {Component} from 'react'
import './Form.css'
import axios from 'axios'

class Form extends Component {
	// Data

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



	// Render
	render() {
		return (
			<div className="row">
				<form>
			    <div class="form-group">
			      <label for="url_id">Url_id:</label>
			      <input type="text" class="form-control" id="url_id">
			    </div>
			    <div class="form-group">
			      <label for="category">Select Category (select one):</label>
			      <select class="form-control" id="category">
			        {this.state.category}
			      </select>
			    </div>
			    <div class="form-group">
			  <label for="description">Description:</label>
			  <textarea class="form-control" rows="5" id="description"></textarea>
			</div>
			<button type="submit" class="btn btn-default">Submit</button>
	  </form>
	 </div>
 )
 }
}

export default Form
