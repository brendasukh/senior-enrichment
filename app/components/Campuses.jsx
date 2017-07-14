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
    this.deleteCampus = this.deleteCampus.bind(this)
    this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount () {
        axios.get('/api/campuses')
        .then(res => res.data)
        .then(campuses => this.setState({ campuses }));

        axios.get('/api/students')
        .then(res => res.data)
        .then(students => this.setState({ students }))

    }

    deleteCampus(campusId){
        const filteredCampuses = this.state.campuses.filter(campuses =>
        campuses.id !== campusId)
        const filterCampus = this.state.campuses.filter(campus =>
        campus.id === campusId)
        axios.delete(`/api/campuses/${campusId}`, {filterCampus})
        .then(res => res.data)
        .then(campuses => this.setState({ campuses: filteredCampuses}) )
    }

    handleClick(evt){
        evt.preventDefault()
        const value=evt.target.value
        this.deleteCampus(value)
    }


    render () {
        const handleClick = this.handleClick
        return (
        <div>
            
            <div className="outside-wrap">
                <AddCampus/>
                <div className="nav">
                    <h1><Link to='/'>Iroh's School of Javascript</Link></h1>
                    <ul className="nav-links">
                        <li><Link to="/students">STUDENTS</Link></li>
                        <li><Link to="/campuses">CAMPUSES</Link></li>
                    </ul>
                </div>
                <h1>Campuses</h1>
                <div className="container">
                    {
                    (this.state.campuses) && this.state.campuses.map(campus => (
                        <div className="row">
                            <Link to={`/campuses/${campus.id}`}>
                              <div className="card">
                                <div className= "col-xs-10">
                                <img src={campus.image} alt="Avatar" style={{width: 100 + '%'}}></img>
                                <h4><b>{campus.name}</b></h4> 
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
