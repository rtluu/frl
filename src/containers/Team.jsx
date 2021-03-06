require('../stylesheets/team.scss');

import React from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

export default class Team extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.openOverlay = this.openOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  openOverlay(e){
    e.stopPropagation();
    e.target.className = 'teammate open';
  }

  closeOverlay(e){
    e.target.className = 'teammate';
  }

  render(){
    return (
      <div id="team">
        <Nav />
        <h1 className="team-title">The Fast Rope Team</h1>
        <h3 className="team-description">Our team comprised of veteran founders, socially-conscious entrepreneurs, and engineers offer strategy and solutions that drive real change. Collectively we've worked with some of the world's most innovative companies, successfully raised capital and invested in startups.</h3>
        <div className="team-box">
          <ul className="team-list">
            <li id="mark" className="teammate" tabIndex="1" onFocus={this.openOverlay} onBlur={this.closeOverlay}>
              <img className="teammate-pic" src={require("../img/team/mark.png")}></img>
              <div className="teammate-overlay">
                <h4 className="teammate-title">Dr. Mark Hanson, Founder + Partner</h4>
                <p className="teammate-description">Mark previously founded BeClose (acquired by Alarm.com), a health tech startup combining IoT and AI into a consumer wellness service that was deployed by major payors, including United Healthcare and CMS. Mark, a highly cited reseracher in the areas of wearables, information processing, and digital health, holds faculty appointments in medicine and engineering at George Washington University.</p>
              </div>
            </li>
            <li id="dhruva" className="teammate" tabIndex="1" onFocus={this.openOverlay} onBlur={this.closeOverlay}>
              <img className="teammate-pic" src={require("../img/team/dhruva.png")}></img>
              <div className="teammate-overlay">
                <h4 className="teammate-title">Dhruva Rajendra, Founder + Partner</h4>
                <p className="teammate-description">Prior to FastRope Labs, Dhruva co-founded Latch, a company providing connected security and access solutions that has raised over $20 million.  Dhruva started his career at a health informatics company where he led and managed technology engagements with multiple Fortune 500 companies, including UnitedHealth and Qualcomm Health.</p>
              </div>
            </li>
            <li id="jon" className="teammate" tabIndex="1" onFocus={this.openOverlay} onBlur={this.closeOverlay}>
              <img className="teammate-pic" src={require("../img/team/jon.png")}></img>
              <div className="teammate-overlay">
                <h4 className="teammate-title">Jon Ogolo, Senior Product Manager</h4>
                <p className="teammate-description">Jon is FastRope’s hard-charging PM with insatiable curiosity and a knack for solving problems. He began his career in FinTech working with a boutique advisory firm building proprietary tools for large institutional investors. Since then, he has worked at Deloitte, helped launch Main Street Genome, and founded a full stack office catering company.</p>
              </div>
            </li>
            <li id="garren" className="teammate" tabIndex="1" onFocus={this.openOverlay} onBlur={this.closeOverlay}>
              <img className="teammate-pic" src={require("../img/team/garren.png")}></img>
              <div className="teammate-overlay">
                <h4 className="teammate-title">Garren Givens, Senior Tech Advisor</h4>
                <p className="teammate-description">Previously, Garren served as Executive Director of the Presidential Innovation Fellows Program under President Obama.  Garren has led innovation and technology projects for federal agencies and in the private sector.</p>
              </div>
            </li>
            <li id="benH" className="teammate" tabIndex="1" onFocus={this.openOverlay} onBlur={this.closeOverlay}>
              <img className="teammate-pic" src={require("../img/team/benH.png")}></img>
              <div className="teammate-overlay">
                <h4 className="teammate-title">Ben Hood, Product Management & Technical Advisor</h4>
                <p className="teammate-description">Ben Hood has been an entrepreneur and digital product manager for over a decade, most recently focused on energy and cybersecurity. He has extensive experience creating big data applications for the U.S. government, and began his career at Winamp and AOL Video. Ben has undergraduate degrees in computer engineering and physics, and a Ph.D. in astrophysics.</p>
              </div>
            </li>
            <li id="andrew" className="teammate" tabIndex="1" onFocus={this.openOverlay} onBlur={this.closeOverlay}>
              <img className="teammate-pic" src={require("../img/team/andrew.png")}></img>
              <div className="teammate-overlay">
                <h4 className="teammate-title">Andrew Darin, Health & Fitness Associate</h4>
                <p className="teammate-description">Before consulting for FastRope Labs, Andrew spent 8 years as a personal trainer and small business operator. Andrew also designed and founded a wellness program at an $18 million dollar non profit organization. Andrew has a Bachelors degree in Kinesiology and is a Certified Strength and Conditioning Specialist.</p>
              </div>
            </li>
            <li id="mike" className="teammate" tabIndex="1" onFocus={this.openOverlay} onBlur={this.closeOverlay}>
              <img className="teammate-pic" src={require("../img/team/mike.png")}></img>
              <div className="teammate-overlay">
                <h4 className="teammate-title">Mike Michon, Mechanical Engineer </h4>
                <p className="teammate-description">Michael founded a small product development firm consulting on a variety of projects, ranging from biomedical devices to mobile applications.  He later created and licensed a proprietary visual project management tool (insEYEte) to be deployed by 501c organizations including the American Red Cross and Catholic Charities.  He currently designs craniofacial implants for KLS Martin and is part of the team upstarting the manufacturing of patient specific implants in the States</p>
              </div>
            </li>
            <li id="benB" className="teammate" tabIndex="1" onFocus={this.openOverlay} onBlur={this.closeOverlay}>
              <img className="teammate-pic" src={require("../img/team/benB.png")}></img>
              <div className="teammate-overlay">
                <h4 className="teammate-title">Ben Boudaud,  Embedded Designer</h4>
                <p className="teammate-description">Ben is an embedded HW/FW design engineer with 8 years of experience in ultra-low power wearable and implantable medical devices. Ben holds an MS in EE and has previous system-level design experience ranging from motion tracking to non-invasive vital signs monitoring to cardiac and neuro stimulation platforms.</p>
              </div>
            </li>
            <li id="stephen" className="teammate" tabIndex="1" onFocus={this.openOverlay} onBlur={this.closeOverlay}>
              <img className="teammate-pic" src={require("../img/team/stephen.png")}></img>
              <div className="teammate-overlay">
                <h4 className="teammate-title">Stephen Kae, Growth Lead</h4>
                <p className="teammate-description">Stephen is a brand builder and startup junkie that has consulted for a number of ventured-backed organizations. He served as the VP of Marketing at NotionTheory where helped scale the business tenfold and created partnerships with investment groups, fortune 500 companies and the U.S. government.</p>
              </div>
            </li>
            <li id="gil" className="teammate" tabIndex="1" onFocus={this.openOverlay} onBlur={this.closeOverlay}>
              <img className="teammate-pic" src={require("../img/team/gill.png")}></img>
              <div className="teammate-overlay">
                <h4 className="teammate-title">Andrew Gill, Fullstack Engineer</h4>
                <p className="teammate-description">Andrew loves transforming large, raw datasets into actionable results. He is experienced in the entire data pipeline including data collection, cleaning, analysis, machine learning, and data visualization. He&#39;s previously worked at Main Street Genome and Epic.</p>
              </div>
            </li>
            <li id="josh" className="teammate" tabIndex="1" onFocus={this.openOverlay} onBlur={this.closeOverlay}>
              <img className="teammate-pic" src={require("../img/team/josh.png")}></img>
              <div className="teammate-overlay">
                <h4 className="teammate-title">Josh Tackett, Fullstack Engineer</h4>
                <p className="teammate-description">Josh started his career learning from and working with Scott Case the founding CTO of priceline.com. He continued to work with numerous technology companies, solving problems in Ecommerce, conversational interfaces, Natural Language Processing (NLP) and hardware/software integration. He is a dual threat as both a software developer as well as a technology team lead.</p>
              </div>
            </li>
            <li id="matt" className="teammate" tabIndex="1" onFocus={this.openOverlay} onBlur={this.closeOverlay}>
              <img className="teammate-pic" src={require("../img/team/matt.png")}></img>
              <div className="teammate-overlay">
                <h4 className="teammate-title">Matt Blank, Product Manager</h4>
                <p className="teammate-description">Matt has a passion for getting new ventures off the ground, having worked for multiple venture-backed startups and launched projects of his own. He most recently worked as a consultant for Deloitte and is likely wearing a combination of Lululemon, Bonobos, and Allbirds as you’re reading this.</p>
              </div>
            </li>
            <li id="partha" className="teammate" tabIndex="1" onFocus={this.openOverlay} onBlur={this.closeOverlay}>
              <img className="teammate-pic" src={require("../img/team/partha.png")}></img>
              <div className="teammate-overlay">
                <h4 className="teammate-title">Partha Rajendra, Fullstack Engineer</h4>
                <p className="teammate-description">Partha is a software developer at FRL who has worked with several startups in the past. Partha holds a BA in CS and has previous experience in web applications, data extraction, and IoT.</p>
              </div>
            </li>
            <li id="leah" className="teammate" tabIndex="1" onFocus={this.openOverlay} onBlur={this.closeOverlay}>
              <img className="teammate-pic" src={require("../img/team/leah.png")}></img>
              <div className="teammate-overlay">
                <h4 className="teammate-title">Leah Snider, Fullstack Creative</h4>
                <p className="teammate-description">Leah&#39;s creative expertise ranges from graphic design, user experience design, visual design, and photography and video production. She&#39;s formerly worked with Worn Creative, Len DePas Photography and Flavor Group. Leah has a BA in Media Studies from Scripps College.</p>
              </div>
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    )
  }
}
