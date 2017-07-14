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
    }
    componentDidMount () {

        axios.get('/api/students')
        .then(res => res.data)
        .then(students => this.setState({ students }));
    }

    deleteStudent(student){
        console.log('delete button clicked');
        const filteredStudents = this.state.students.filter(students =>
        students.id !== student.id )
        axios.delete(`/api/students/${student.id}`, {student})
        .then(res => res.data)
        .then(students => this.setState({ students: filteredStudents}) )
    }

    render () {
        return (
            <div>
                <div className="outside-wrap">
                    <div className="nav">
                        <h1><Link to='/'>Margaret Hamilton Interplanetary Academy of JavaScript</Link></h1>
                        <ul className="nav-links">
                            <li><Link to="/students">STUDENTS</Link></li>
                            <li><Link to="/campuses">CAMPUSES</Link></li>
                        </ul>
                    </div>
                </div>
                <AddStudent/>
                <h3>Students</h3>
                <div className="row">
                    <ul>
                    {
                        (this.state.students) && this.state.students.map(student => (
                            <div className="col-xs-4" key={ student.id }>
                                <Link to={`/students/${student.id}`}><li>{student.name}</li></Link>
                                <button onClick="{()=>this.deleteStudent(student)}">DELETE</button>
                            </div>
                        ))
                        }
                    </ul>
                </div>
            </div>
    )
    }
}
