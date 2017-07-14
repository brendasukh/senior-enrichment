import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import AddStudent from './AddStudent'

export default class Students extends Component {
    constructor () {
        super();
        this.state = {
        students: []
    }
    this.deleteStudent = this.deleteStudent.bind(this)
    this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount () {

        axios.get('/api/students')
        .then(res => res.data)
        .then(students => this.setState({ students }));
    }

    deleteStudent(studentId){
        const filteredStudents = this.state.students.filter(students =>
        students.id !== studentId)
        const filterStudent = this.state.students.filter(student =>
        student.id === studentId)
        axios.delete(`/api/students/${studentId}`, {filterStudent})
        .then(res => res.data)
        .then(students => this.setState({ students: filteredStudents}) )
    }
    
    handleClick(evt){
        evt.preventDefault()
        const value=evt.target.value
        console.log(value)
        this.deleteStudent(value)
    }
    render () {
        const handleClick = this.handleClick
        return (
            <div>
            
                <div className="outside-wrap">
                    <AddStudent/>
                    <div className="nav">
                        <h1><Link to='/'>Iroh's School of Javascript</Link></h1>
                        <ul className="nav-links">
                            <li><Link to="/students">STUDENTS</Link></li>
                            <li><Link to="/campuses">CAMPUSES</Link></li>
                        </ul>
                    </div>
                    <h1>Students</h1>
                    <div className="container">
                        {
                        (this.state.students) && this.state.students.map(student => (
                            <div className="row">
                                <Link to={`/students/${student.id}`}>
                                <div className="card">
                                    <div className= "col-xs-10">
                                    <img src={student.image} alt="Avatar" style={{width: 100 + '%'}}></img>
                                    <h4><b>{student.name}</b></h4> 
                                    <h4><b>{student.email}</b></h4> 
                                    <button value={student.id} onClick={handleClick}>Delete</button>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                                
                        }

                    </div>
                </div>
            </div>
    )
    }
}
