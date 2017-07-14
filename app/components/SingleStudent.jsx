import React, { Component } from 'react';
import axios from 'axios';
import ChangeStudent from './ChangeStudent'
import {Link} from 'react-router-dom';

export default class SingleStudent extends Component {

  constructor () {
    super();
    this.state = {
      student: {},
      campuses: []
    };
    this.fetchStudent = this.fetchStudent.bind(this)
    this.fetchCampus = this.fetchCampus.bind(this)
  }

  fetchStudent (studentId) {
    axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => this.setState({
        student
      }));
  }

  fetchCampus () {
    axios.get('/api/campuses/')
      .then(res => res.data)
      .then(campuses => this.setState({
        campuses
      }));
  }

  componentDidMount () {
    const studentId = this.props.match.params.studentId;
    this.fetchStudent(studentId);
    this.fetchCampus();

  }

  componentWillReceiveProps (nextProps) {
    const nextStudentId = nextProps.match.params.studentId;
    const currentStudentId = this.props.match.params.studentId;
    if (nextStudentId !== currentStudentId)
      this.fetchStudent(nextStudentId);
  }

  render () {
    const student = this.state.student
    const campuses = this.state.campuses
    const filteredCampus = campuses.filter(campus =>
    campus.id === student.campusId)
    console.log(filteredCampus)
    
    return (
      <div>
            
      <div className="outside-wrap">
          <div className="nav">
              <h1><Link to='/'>Iroh's School of Javascript</Link></h1>
              <ul className="nav-links">
                  <li><Link to="/students">STUDENTS</Link></li>
                  <li><Link to="/campuses">CAMPUSES</Link></li>
              </ul>
          </div>
          <h1>{student.name}</h1>
          <div className="container">
              {
                  <div className="row">
                        <div className="card">
                          <div className= "col-xs-10">
                          <img src={student.image} alt="Avatar" style={{width: 100 + '%'}}></img>
                          <h4>
                          {(filteredCampus) && filteredCampus.map(campus =>
                            
                              <b><Link to={`/campuses/${campus.id}`}>{campus.name}</Link></b>
                              
                            )}
                          </h4>
                          <h4><b>{student.email}</b></h4> 
                              </div>
                          </div>
                  </div>
                      
              }

          </div>
      </div>
  </div>
    )
  }
}
