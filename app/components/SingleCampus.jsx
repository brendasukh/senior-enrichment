import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SingleCampus extends Component {

  constructor () {
    super();
    this.state = {
      campus: {},
      students: []
      
    }
    this.fetchCampus = this.fetchCampus.bind(this)
    this.fetchStudents = this.fetchStudents.bind(this)
  }

  fetchCampus (campusId) {
    axios.get(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => this.setState({
        campus
      }));
  }

  fetchStudents () {
    axios.get('/api/students')
    .then(res => res.data)
    .then(students => this.setState({students})
    )}

  componentDidMount () {
    const campusId = this.props.match.params.campusId;
    this.fetchCampus(campusId);
    this.fetchStudents();
  }

  componentWillReceiveProps (nextProps) {
    const nextCampusId = nextProps.match.params.campusId;
    const currentCampusId = this.props.match.params.campusId;
    if (nextCampusId !== currentCampusId)
      this.fetchCampus(nextCampusId);
  }
  render () {
    const campus = this.state.campus
    const students = this.state.students
    const filteredStudents = students.filter(student =>
              student.campusId === campus.id)
    console.log(students)

    return (
      <div className="campus">
        <div>
          <h3>{ campus.name }</h3>
          <h3>{filteredStudents.map(student =>
              <Link to={`/students/${student.id}`}> <li> {student.name}</li> </Link>
            )}
          </h3>
          <img src={ campus.image } className='img-thumbnail'></img>

        </div>
      </div>
    )
  }
}
