require('../stylesheets/nav.scss');

import React from 'react';
import { Link } from 'react-router-dom';

 export default class Nav extends React.Component {

   constructor(props) {
     super(props);
     this.state = {

     };
   }

  render(){
    return(
      <nav className="nav">
        <div className="left">
          <a className="home-link" href="/">
            <div id="fr-logo"></div>
          </a>
        </div>
        <div className="right">
          <Link to="/#work" className="page-link">Work </Link>
          <Link to="/team" className="page-link" href="/team">Team</Link>
          <Link to="/contact" className="page-link">Contact</Link>
        </div>
      </nav>
    );
  }
}
