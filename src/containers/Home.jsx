require('../stylesheets/app.scss');
require('../stylesheets/home.scss');

import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
    this.changeText = this.changeText.bind(this);
    this.changeBack = this.changeBack.bind(this);
  }

  changeText(){
    this.setState({hovered: true});
  }

  changeBack(){
    this.setState({hovered: false});
  }


  render(){
    var envision = {};
    if(this.state.hovered){
      envision.text = "Coming Soon";
    } else{
      envision.text = "Innovating wind power capacity";
    }
    return (
      <div id="home">
        <Nav />

        <div className="hero-block">
          <div className="hero-inner">
            <h1 className="hero-headline">We are <span id="bold">building</span> the world we <span id="italic">want</span> to live in.</h1>
            <div className="hero-divider"></div>
            <h4 className="hero-description">Fastrope is an elite team of entrepreneurial builders who partner with world-class innovators to make crazy ideas real.</h4>
            <Link to="/contact" className="hero-button-link">
              <button id="hero-button">
                <h5 className="button-text">LET'S BUILD SOMETHING AMAZING</h5>
              </button>
            </Link>
          </div>
        </div>

        <div className="press-block">
          <h4 className="press-description">Our work has been featured in:</h4>
          <ul className="press-list">
            <li id="forbes" className="press-item">
              <img src={require("../img/home/press/forbes.png")} />
            </li>
            <li id="usatoday" className="press-item">
              <img src={require("../img/home/press/usatoday.png")} />
            </li>
            <li id="cnn" className="press-item">
              <img src={require("../img/home/press/cnn.png")} />
            </li>
            <li id="techcrunch" className="press-item">
              <img src={require("../img/home/press/techcrunch.png")} />
            </li>
            <li id="bloomberg" className="press-item">
              <img src={require("../img/home/press/bloomberg.png")} />
            </li>
            <li id="fortune" className="press-item">
              <img src={require("../img/home/press/fortune.png")} />
            </li>
          </ul>
        </div>

        <div className="capabilities-block">
          <div className="capabilities-inner">
            <h1 className="capabilities-headline">Deep <span id="bold">science</span> and <span id="italic">empathy</span> are fundamental to everything we do.</h1>
            <ul className="capabilities-list">
              <li className="capabilities-item">
                <img src={require("../img/home/capabilities/r_d.png")} />
                <h5 className="capabilities-text">R&D</h5>
              </li>
              <li className="capabilities-item">
                <img src={require("../img/home/capabilities/design.png")} />
                <h5 className="capabilities-text">DESIGN</h5>
              </li>
              <li className="capabilities-item">
                <img src={require("../img/home/capabilities/hardware.png")} />
                <h5 className="capabilities-text">HARDWARE</h5>
              </li>
              <li className="capabilities-item">
                <img src={require("../img/home/capabilities/software.png")} />
                <h5 className="capabilities-text">SOFTWARE</h5>
              </li>
              <li className="capabilities-item">
                <img src={require("../img/home/capabilities/data.png")} />
                <h5 className="capabilities-text">DATA</h5>
              </li>
              <li className="capabilities-item">
                <img src={require("../img/home/capabilities/growth.png")} />
                <h5 className="capabilities-text">GROWTH</h5>
              </li>
            </ul>
          </div>
        </div>

        <div className="inspire-block">
          <h3 className="inspire-text">We tackle audacious and inspiring problems with awesome partners, and together we make an impact at global scale.</h3>
        </div>

        <div id="work" className="work-block">
          <Link to="/verite" id="labor" className="work-item">
            <h4 className="work-text">Ending human trafficking</h4>
          </Link>
          <Link to="/gwmfa" id="healthcare" className="work-item">
            <h4 className="work-text">Disrupting healtcare delivery</h4>
          </Link>
          <Link to="/networkforgood" id="crowdsourcing" className="work-item">
            <h4 className="work-text">Accelerating micro- philanthropy</h4>
          </Link>
          <Link to="/upside" id="unicorn" className="work-item">
            <h4 className="work-text">Creating unicorn startups</h4>
          </Link>
          <Link to="/wodify" id="fitness" className="work-item">
            <h4 className="work-text">Supercharging human<br></br>ability</h4>
          </Link>
          <div id="wind" className="work-item" onMouseOver={this.changeText} onMouseOut={this.changeBack}>
            <h4 className="work-text">{envision.text}</h4>
          </div>
        </div>

        <div className="people-block">
          <h3 className="people-text">Meet our team of passionate and brilliant builders, including scientists, technologists, and creatives who are as inspiring as their work.<Link to="/team"><span id="team-arrow"/></Link></h3>
        </div>

        <div className="cta-block">
          <div className="cta-inner">
            <h1 className="cta-headline">No idea is <span id="bold">too big</span> or <span id="italic">too small</span>, so...</h1>
              <Link to="/contact" className="cta-button-link" href="#contact">
                <button id="cta-button">
                  <h5 className="button-text">LET'S BUILD SOMETHING AMAZING</h5>
                </button>
              </Link>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}
