require('../../stylesheets/case.scss');

import React from 'react'
import Nav from '../../components/Nav.jsx'
import Footer from '../../components/Footer.jsx'

export default class Upside extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
    return (
      <div>
        <Nav />

        <div id="upside" className="case-header">
          <div className="case-hero">
            <h1 className="case-headline">Upside</h1>
            <h3 className="case-tagline">Creating unicorn startups</h3>
          </div>
        </div>

        <div className="case-content">

          <div className="content-main">
            <h4 className="text-header">Travel Reinvented</h4>
            <p className="text">Founded by the Creators of Priceline.com, Upside allows business travelers to easily customize travel packages and redeem rewards every time they travel. While the Upside team has decades of experience in the travel industry, they came to us to help lead their growth initiatives and further innovate their product by embedding data-driven solutions.</p>
            <h4 className="text-header">Our Solution</h4>
            <p className="text">Our data science team was able to create a tool that searched through billions of flight and hotel combinations to deliver the ideal travel packages to business travelers and rewards based on mileage traveled. An elastic pricing algorithm was also put in place for balancing traveler preferences, pricing of hotels, pricing of airlines and overall demand. To ensure any bad actors from exploiting heavily discounted fares we also incorporated a fraud detection and mitigation system.</p>
            <p className="text">On the growth side, we acted as a stand-in Growth Lead, walking the team through a series of experiment sprints to gain as many insights about their customers and initial market traction.</p>
          </div>

          <div className="content-side">

            <div className="logo-block">
              <div className="logo-inner">
                <img className="logo" src={require("../../img/case/upside-logo.png")}  />
                <a className="url"><h6 className="url-text">upside.com</h6></a>
                <p className="what-we-did">Categories: Data science, product, growth</p>
              </div>
              <a className="share-link" href="mailto:?subject=Fastrope Labs&body=I found this case study and thought that you might want to see it — http://fastrope.in/upside"><button className="share-button">share this</button></a>
            </div>

            <div className="testimony-block">
              <div className="testimony-pic" />
              <p className="testimony-text">"Testimonial goes right here because  FastRope is just THE coolest ever."</p>
              <p className="testimony-source">- Barack Obama</p>
            </div>

          </div>
        </div>

        <Footer />
      </div>
    )
  }
}
