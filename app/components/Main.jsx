import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import  Sidebar  from './Sidebar'
import Campuses from './Campuses'
import Students from './Students'
import SingleStudent from './SingleStudent'
import SingleCampus from './SingleCampus'
import Home from './Home'

export default class Main extends Component {
  render () {
    return (
      <Router>
            <div>
               <Switch>
                 <Route exact path="/students" component={Students} />
                 <Route exact path="/campuses" component={Campuses}/>
                 <Route exact path="/students/:studentId" component={SingleStudent}/>
                 <Route exact path="/campuses/:campusId" component={SingleCampus}/>
                 <Route component={Home}/>
              </Switch>
          </div>
      </Router>
    )
  }
}
