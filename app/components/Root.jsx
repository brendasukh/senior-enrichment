import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Main';
import Campuses from './Campuses'
import Students from './Students'

export default class Root extends Component {

  render () {
    return (
      <Router>
        <div id="main" className="container-fluid">
        <Main/>
              <Switch>
              <Route exact path="/campuses" component={Campuses} />
              <Route exact path="/students" component={Students} />
              </Switch>
        </div>
    </Router>
    );
  }
}

