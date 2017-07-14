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
                <h1><Link to='/'>Margaret Hamilton Interplanetary Academy of JavaScript</Link></h1>
                <ul className="nav-links">
                    <li><Link to="/students">STUDENTS</Link></li>
                    <li><Link to="/campuses">CAMPUSES</Link></li>
                </ul>
            </div>
            <div className="therest">
                <img src="https://static.tumblr.com/76690b46eb1382be6c096a0237a95df9/c3ac1wq/kkXnqkfsh/tumblr_static_tumblr_static_filename_640.jpg"></img>
                <img src="https://68.media.tumblr.com/631156371c7e00c2fd750373cb4fdf92/tumblr_o02zh3pFAT1uycfyqo1_500.gif"></img>
            </div>
        </div>

    )
  }
}
