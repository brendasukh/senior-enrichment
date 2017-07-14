import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import AddCampus from './AddCampus'

export default class  Campuses extends Component{
    constructor () {
        super();
        this.state = {
        campuses: [],
        students: []
        }
    }
    componentDidMount () {
        axios.get('/api/campuses')
        .then(res => res.data)
        .then(campuses => this.setState({ campuses }));

        axios.get('/api/students')
        .then(res => res.data)
        .then(students => this.setState({ students }))

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
            <AddCampus/>
            <h3>Campuses</h3>
            <div className="row">
                <ul>
                {
                (this.state.campuses) && this.state.campuses.map(campus => (
                    <div className="col-xs-4" key={ campus.id }>
                        <Link to={`/campuses/${campus.id}`}><li>{campus.name}</li></Link>
                    </div>
                ))
                }
                </ul>
            </div>
        </div>
    )
    }
}
