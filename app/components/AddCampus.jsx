import React, { Component } from 'react';
import axios from 'axios'

export default class AddCampus extends Component {

  constructor (props) {
    super(props);
    this.state = {
        inputImage: '',
        inputName: '',
        campuses: []
      },
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addCampus = this.addCampus.bind(this);
  }

  componentDidMount () {
      axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => this.setState({campuses}))
  }

  addCampus (name) {
      axios.post('/api/campuses', {name})
      .then(res => res.data)
      .then(campus => this.setState({ campuses: [...this.state.campuses, campus]})
      )
  }

  handleNameChange (evt) {
    const value = evt.target.value;

    this.setState({
          inputName: value
    });
  }

  handleImageChange (evt) {
    const value = evt.target.value;

    this.setState({
          inputImage: value
      });
  }

  handleSubmit (evt) {
    evt.preventDefault();
    const inputValue={
        inputImage: this.state.inputImage,
        inputName: this.state.inputName
    }

    const addCampus = this.addCampus;

    addCampus(inputValue);
    this.setState({
      inputName: '',
      inputImage: '',

    });
  }

  render () {
    const inputName = this.state.inputName;
    const inputImage = this.state.inputImage;
    const handleSubmit = this.handleSubmit;
    const handleNameChange = this.handleNameChange
    const handleImageChange = this.handleImageChange

    return (
      <div className="well" style={{marginTop: '20px'}}>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <fieldset>
            <legend>New Campus</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Name</label>
              <div className="col-xs-10">
                <input
                  className="form-control"
                  type="text"
                  onChange={handleNameChange}
                  value={inputName}
                />
              </div>
            </div>
             <div className="form-group">
              <label className="col-xs-2 control-label">ImageUrl</label>
              <div className="col-xs-10">
                <input
                  className="form-control"
                  type="text"
                  onChange={handleImageChange}
                  value={inputImage}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button
                  type="submit"
                  className="btn btn-success">
                  Create Campus
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}