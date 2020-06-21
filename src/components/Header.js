import React from 'react';
import { Link } from 'react-router-dom';

function Header(props){
  return (
    <header>
      <ul>
        <li>
          <link to='/'>Home</link>
        </li>
        <li>
          <link to='/history'>History</link>
        </li>
      </ul>
      <h1>RESTy Application</h1>
    </header>
  );
}

export default Header;