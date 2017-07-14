import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import  Sidebar  from './Sidebar'
import Campuses from './Campuses'
import Students from './Students'
import SingleStudent from './SingleStudent'
import SingleCampus from './SingleCampus'

export default class Main extends Component {
  render () {
    return (
        <div className="outside-wrap">
            <div className="nav">
                <h1><Link to='/'>Iroh's School of Javascript</Link></h1>
                <ul className="nav-links">
                    <li><Link to="/students">STUDENTS</Link></li>
                    <li><Link to="/campuses">CAMPUSES</Link></li>
                </ul>
            </div>
            <h1>Coming Soon</h1>
                    <div className="container">
                            <div className="row">
                                <div className="card">
                                    <div className= "col-xs-10">
                                    <img src="https://upload.wikimedia.org/wikipedia/en/5/5f/Legend_of_Korra_concept_art.png" alt="Avatar" style={{width: 100 + '%'}}></img>
                                    <h4><b>Korra</b></h4> 
                            </div>
                    </div>
                </div>
            </div>
        </div>

    )
  }
}
