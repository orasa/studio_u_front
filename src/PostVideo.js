import React, {Component} from 'react'
import axios from 'axios'
import Category from './Category'

class PostVideo extends Component {

	// Data
	state= {
    link: '',
    category: '',
    description: '',
    links: [],
    categories: []
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log('this.state onSubmit', this.state);
    this.setState({
      link: '',
      category: '',
      description: ''
    })
  }

  createVideoPost = (e) => {
    let data =  {
        link: this.state.link,
        category: this.state.category,
        description: this.state.description
      }
      //4444444
      axios.post('http://localhost:4000/api/video', data,
          {headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }).then((res) => {
          let videos = this.state.links
          videos.push(res.data)
          console.log('axious respons data',res.data);
          this.setState({videos})
        }).catch((err) => {
          console.log('err axios post', err)
        })
  }


  componentWillMount() {
    axios.get('http://localhost:4000/api/videos').then((res) => {
      this.setState({
        links: res.data
      })
    }).catch((err) => {
      console.log('err', err)
    })
    //axious get categories
    axios.get('http://localhost:4000/api/category').then((res) => {
      this.setState({
        categories: res.data
      })
      console.log('res.data from axios get category', res.data);
    }).catch((err) => {
      console.log('err', err)
    })
    //
  }

  print =() => {
    console.log('this.state', this.state);
  }

	render() {
		return (
			<div className="mt-5">
        {/*<form>*/}
        	<div className="card w-50 m-auto p-4">

            <label>Link</label>
            <input type="text"
              name="link"
              value={this.state.link}
              onChange={(e) => this.handleChange(e)}
              className="form-control"
               />

     <div className="form-group" >
       <label >Choose Category</label>
       <select name="category"
          value={this.state.category}
          onChange={(e) => this.handleChange(e)}
          className="form-control" >
         {
           this.state.categories.map((c) => {
             return(<option value={c._id} key={c._id}>{c.name}</option>)
           })
         }

       </select>

     </div>

               <label>Description</label>
                <input type="text"
                  name="description"
                  value={this.state.description}
                  onChange={(e, text) => this.handleChange(e)}
                  className="form-control "
                   />
                 <button onClick={(e => {this.onSubmit(e);this.createVideoPost(e) })} type="submit" className="btn btn-info mt-4">Submit</button>
			  </div>
       {/*</form>*/}
    </div>
		)
	}

}


export default PostVideo
