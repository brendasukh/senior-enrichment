import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {

  return (
    <div>
        <h4 className="menu-item">
          <Link to="/students">STUDENTS</Link>
          <Link to="/campuses">CAMPUSES</Link>
        </h4>
     </div>
  );
}

export default Main