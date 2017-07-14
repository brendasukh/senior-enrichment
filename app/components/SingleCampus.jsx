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
            
        <div className="outside-wrap">
            <div className="nav">
                <h1><Link to='/'>Iroh's School of Javascript</Link></h1>
                <ul className="nav-links">
                    <li><Link to="/students">STUDENTS</Link></li>
                    <li><Link to="/campuses">CAMPUSES</Link></li>
                </ul>
            </div>
            <h1>{campus.name}</h1>
            <div className="container">
                {(filteredStudents) && filteredStudents.map(student => 
                  
                  <div className="row">
                          <div className="card">
                            <div className= "col-xs-10">
                            <img src={student.image} alt="Avatar" style={{width: 100 + '%'}}></img>
                            <h4>
                                <b><Link to={`/students/${student.id}`}>{student.name}</Link></b>
          
                            </h4> 
                            </div>
                          </div>
                    </div>
                        
                )}

            </div>
                  
                  )
                    
        </div>
    )
  }
}
