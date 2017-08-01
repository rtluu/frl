require('../stylesheets/footer.scss');

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
      <footer className="footer">
        <div className="left">
          <p>Copyright Fast Rope Labs 2017.</p>
        </div>
        <div className="right">
          <Link to="/contact" className="page-link">Contact</Link>
        </div>
      </footer>
    );
  }
}
