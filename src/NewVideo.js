import React, {Component} from 'react'

class NewVideo extends Component {

	// Data
	state = {
		link: ''
	}

	// Functions
	changeUrl = (e) => {
		this.setState({
			link: e.target.value
		})
	}

	// Render
	render() {
		return (
			<div id="new-video">
				<form onSubmit={(e) => this.props.createVideo(e)}>
					<div className="input-group">
						<input type="link" className="form-control" placeholder="New Video..." value={this.state.link} onChange={(e) => this.changeUrl(e)} />


              <div class="form-group">
						  <div className="input-group-append">
							<button type="submit" className="btn btn-success">Post</button>
						</div>
					</div>
        </div>
				</form>
			</div>
		)
	}
}

export default NewVideo
