require('../../stylesheets/case.scss');

import React from 'react'
import Nav from '../../components/Nav.jsx'
import Footer from '../../components/Footer.jsx'

export default class GWMFA extends React.Component {

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

        <div id="gwmfa" className="case-header">
          <div className="case-hero">
            <h1 className="case-headline">GW MFA</h1>
            <h3 className="case-tagline">Disrupting healthcare delivery</h3>
          </div>
        </div>

        <div className="case-content">

          <div className="content-main">
            <h4 className="text-header">Evaluating Risk, Performance and Opportunity of healthcare clinics</h4>
            <p className="text">George Washington University Medical Faculty Associates (GW MFA) operates over 50 practices in the Washington, DC area. They wanted to better understand their risk exposure so they could formulate a data-driven growth strategy. This required analyzing large sample sets of data and comparing historical trends.</p>
            <img className="example" src={require("../../img/case/gwmfa-ex.png")}  />
            <h4 className="text-header">Our Solution</h4>
            <p className="text">Fast Rope ingested performance data from each of the GW MFA practices and combined it with data from the US Census, Bureau of Labor Statistics, Centers for Medicare & Medicaid Services, and Real Estate Data. We performed a component analysis to model the financial risk and opportunity of each practice site and adapted and developed into cloud-hosted health intelligence tool, CartoMD, providing GIS-aware predictive analytics and granular heat maps to illustrate expansion opportunity hot spots.</p>
            <p className="text">GW MFA is now using CartoMD to formulate a growth strategy for future practice expansion</p>
          </div>

          <div className="content-side">

            <div className="logo-block">
              <div className="logo-inner">
                <img className="logo" src={require("../../img/case/gwmfa-logo.png")}  />
                <a className="url"><h6 className="url-text">www.gwdocs.com</h6></a>
                <p className="what-we-did">Category: Data Science, Web</p>
              </div>
              <a className="share-link" href="mailto:?subject=Fast Rope Labs&body=I found this case study and thought that you might want to see it — http://fastrope.in/gwmfa"><button className="share-button">share this</button></a>
            </div>

            <div className="testimony-block">
              <div className="testimony-pic" />
              <p className="testimony-text">"Testimonial goes right here because  Fast Rope is just THE coolest ever."</p>
              <p className="testimony-source">- Barack Obama</p>
            </div>

          </div>
        </div>

        <Footer />
      </div>
    )
  }
}
