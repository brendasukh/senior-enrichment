import React, { Component } from 'react';
import axios from 'axios';
import ChangeStudent from './ChangeStudent'

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
      <div className="student">
        <ChangeStudent/>
        <div>
          <h3>{ student.name }</h3>
          <h3>{filteredCampus.map(campus => 
            <li>{campus.name}</li>)}
          </h3>
        </div>
      </div>
    )
  }
}
