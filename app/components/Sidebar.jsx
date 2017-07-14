import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {

  render () {
    return (
      <sidebar>
        <section>
          <h4 className="menu-item">
            <Link to="/students">STUDENTS</Link>
          </h4>
        </section>
        <section>
          <h4 className="menu-item">
            <Link to="/campuses">CAMPUSES</Link>
          </h4>
        </section>
        <hr />
      </sidebar>
    );
  }
}