import React, { Component } from 'react';
import axios from 'axios'

export default class AddStudent extends Component {

  constructor (props) {
    super(props);
    this.state = {
        inputEmail: '',
        inputName: '',
        inputImage: '',
        students: [],
        campuses: []
      },
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addStudent = this.addStudent.bind(this);

  }

  componentDidMount () {
      axios.get('/api/students')
      .then(res => res.data)
      .then(students => this.setState({students}))
      axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => this.setState({campuses}))
  }

  addStudent (name) {
      axios.post('/api/students', {name})
      .then(res => res.data)
      .then(student => this.setState({ students: [...this.state.students, student]})
      )
  }

  handleNameChange (evt) {
    const value = evt.target.value;

    this.setState({
          inputName: value
    });
  }

  handleEmailChange (evt) {
    const value = evt.target.value;

    this.setState({
          inputEmail: value
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
        inputEmail: this.state.inputEmail,
        inputName: this.state.inputName,
        inputImage: this.state.inputImage
    }

    const addStudent = this.addStudent;

    addStudent(inputValue);
    this.setState({
      inputName: '',
      inputEmail: '',
      inputImage: ''

    });
  }

  render () {
    const inputName = this.state.inputName;
    const inputEmail = this.state.inputEmail;
    const inputImage = this.state.inputImage;
    const handleSubmit = this.handleSubmit;
    const campuses = this.state.campuses
    const handleNameChange = this.handleNameChange
    const handleEmailChange = this.handleEmailChange
    const handleImageChange = this.handleImageChange
    

    return (
      <div className="well" style={{marginTop: '20px'}}>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <fieldset>
            <legend>New Student</legend>
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
              <label className="col-xs-2 control-label">Email</label>
              <div className="col-xs-10">
                <input
                  className="form-control"
                  type="text"
                  onChange={handleEmailChange}
                  value={inputEmail}
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
              <label className="col-xs-2 control-label">Campus</label>
              <div className="col-xs-10">
                <select>
                {
                  campuses.map(campus =>
                    <option value={campus.id}>{campus.name}</option>
                  )
                }
                  
                </select>
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button
                  type="submit"
                  className="btn btn-success">
                  Create Student
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}