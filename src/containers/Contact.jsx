require('../stylesheets/contact.scss');

import React from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import $ from "jquery";

export default class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      phone: "",
      email: "",
      message: "",
      interest: "",
      when: "",
    };
    this.nameChange = this.nameChange.bind(this);
    this.companyChange = this.companyChange.bind(this);
    this.phoneChange = this.phoneChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.messageChange = this.messageChange.bind(this);
    this.interestChange = this.interestChange.bind(this);
    this.whenChange = this.whenChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  nameChange(e){
    this.setState({name: e.target.value})
  }

  companyChange(e){
    this.setState({company: e.target.value})
  }

  phoneChange(e){
    this.setState({phone: e.target.value})
  }

  emailChange(e){
   this.setState({email: e.target.value})
  }

  messageChange(e){
    this.setState({message: e.target.value})
  }

  interestChange(e){
    this.setState({interest: e.target.value})
  }

  whenChange(e){
    this.setState({when: e.target.value})
  }

  clearForm(){
    window.scrollTo(0, 0);
    console.log('cleared');
    this.setState({name: ''});
    this.setState({company: ''});
    this.setState({phone: ''});
    this.setState({email: ''});
    this.setState({message: ''});
    this.setState({interest: ''});
    this.setState({when: ''});
    this.refs.name.value = "";
    this.refs.company.value = "";
    this.refs.phone.value = "";
    this.refs.email.value = "";
    this.refs.message.value = "";
    this.refs.interest.value = "";
    this.refs.when.value = "";
  }

  handleSubmit(e) {
    var self;
    e.preventDefault();
    self = this;
    var data = {
      name: this.state.name,
      company: this.state.company,
      phone: this.state.phone,
      email: this.state.email,
      message: this.state.message,
      interest: this.state.interest,
      when: this.state.when
    }
    // Submit form via jQuery/AJAX
    $.ajax({
      type: 'POST',
      url: 'https://script.google.com/macros/s/AKfycby5D8h4ra5LJ9U8heLdFum0juvSDluNfV-O1WGoOWFamm1ccvPH/exec',
      data: data
    })
    .done(function(data) {
      self.clearForm();
    })
    .fail(function(jqXhr) {
      console.log('failed to register');
    });
  }


  render() {
    return (
      <div id="contact">
        <Nav/>

        <div className="contact-hero">
          <h1 className="contact-headline">Get in Touch</h1>
          <h4 className="contact-description">We'd love to hear from you</h4>
        </div>


        <div className="contact-form">
          {status}

          <form onSubmit={this.handleSubmit} >
            <div className="form-group">
              <input placeholder="CONTACT NAME" className="form-control" name="name" ref="name" required type="text" onChange={this.nameChange} val={this.state.name} />
            </div>
            <div className="form-group">
              <input placeholder="COMPANY" className="form-control" name="company" ref="company" required type="text" onChange={this.companyChange} val={this.state.company}/>
            </div>
            <div className="form-group">
              <input placeholder="PHONE" className="form-control" name="phone" ref="phone" required type="phone" onChange={this.phoneChange} val={this.state.phone}/>
            </div>
            <div className="form-group">
              <input placeholder="EMAIL" className="form-control" name="email" ref="email" required type="email" onChange={this.emailChange} val={this.state.email}/>
            </div>
            <div className="form-group">
              <textarea id="message" placeholder="MESSAGE" className="form-control" name="message" ref="message" rows="4" onChange={this.messageChange} val={this.state.message}/>
            </div>

            <div id="interests" className="form-group">
              <h3>INTEREST</h3>
              <div className="interests-inner">
                <label className="interest-inline"><input className="interest" name="interest" ref="interest" type="radio" value="R and D" onClick={this.interestChange} /><img src={require("../img/contact/interests/r_d.png")} /><p>R&D</p></label>
                <label className="interest-inline"><input className="interest" name="interest" ref="interest" type="radio" value="Hardware" onClick={this.interestChange} /><img src={require("../img/contact/interests/hardware.png")} /><p>HARDWARE</p></label>
                <label className="interest-inline"><input className="interest" name="interest" ref="interest" type="radio" value="Growth" onClick={this.interestChange} /><img src={require("../img/contact/interests/growth.png")} /><p>GROWTH</p></label>
                <label className="interest-inline"><input className="interest" name="interest" ref="interest" type="radio" value="Design" onClick={this.interestChange} /><img src={require("../img/contact/interests/design.png")} /><p>DESIGN</p></label>
                <label className="interest-inline"><input className="interest" name="interest" ref="interest" type="radio" value="Software" onClick={this.interestChange} /><img src={require("../img/contact/interests/software.png")} /><p>SOFTWARE</p></label>
                <label className="interest-inline"><input className="interest" name="interest" ref="interest" type="radio" value="Data" onClick={this.interestChange} /><img src={require("../img/contact/interests/data.png")} /><p>DATA</p></label>
              </div>
            </div>

            <div id="when" className="form-group">
              <h3>HOW SOON DO YOU NEED HELP?</h3>
              <label className="radio-inline"><input name="when" ref="when" type="radio" value="Immediately" onClick={this.whenChange} /><span>IMMEDIATELY</span></label>
              <label className="radio-inline"><input name="when" ref="when" type="radio" value="This Month" onClick={this.whenChange} /><span>THIS MONTH</span></label>
              <label className="radio-inline"><input name="when" ref="when" type="radio" value="This Quarter" onClick={this.whenChange} /><span>THIS QUARTER</span></label>
              <label className="radio-inline"><input name="when" ref="when" type="radio" value="This Year" onClick={this.whenChange} /><span>THIS YEAR</span></label>
              <label className="radio-inline"><input name="when" ref="when" type="radio" value="Other" onClick={this.whenChange} /><span>OTHER</span></label>
              <label className="radio-inline"><input name="when" ref="when" type="radio" value="Just Looking Around" onClick={this.whenChange} /><span>JUST LOOKING AROUND</span></label>
            </div>

            <div id="submit" className="form-group">
              <button className="btn btn-primary" type="submit">SEND MESSAGE</button>
            </div>
          </form>

          <div id="find-us" className="contact-cta">
            <h1 className="contact-cta-title">Find Us</h1>
            <p className="contact-cta-text">1875 Connecticut Ave NW<br/>Floor 10<br/>Washington, DC, 20009</p>
          </div>
        </div>

        <Footer/>
      </div>
    );
  }
}
