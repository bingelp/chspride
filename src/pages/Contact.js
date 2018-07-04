import React, { Component } from 'react'
import Section from '../components/Section/Section'
export default class Contact extends Component {

  MessageCol(props){
    return(
    <div className="card card-primary animated fadeInUp animation-delay-7" >
      <div className="ms-hero-bg-primary ms-hero-img-mountain">
        <h2 className="text-center no-m pt-4 pb-4 color-white index-1">Message Us</h2>
      </div>
      <div className="card-body">
        <form className="form-horizontal">
          <fieldset>
            <div className="form-group row">
              <label for="inputEmail" autocomplete="false" className="col-lg-3 control-label">Name</label>
              <div className="col-lg-9">
                <input type="text" className="form-control" id="inputName" placeholder="Name" /> </div>
            </div>
            <div className="form-group row">
              <label for="inputEmail" autocomplete="false" className="col-lg-3 control-label">Email</label>
              <div className="col-lg-9">
                <input type="email" className="form-control" id="inputEmail" placeholder="Email" /> </div>
            </div>
            <div className="form-group row">
              <label for="inputEmail" autocomplete="false" className="col-lg-3 control-label">Subject</label>
              <div className="col-lg-9">
                <input type="text" className="form-control" id="inputSubject" placeholder="Subject" /> </div>
            </div>
            <div className="form-group row">
              <label for="textArea" className="col-lg-3 control-label">Message</label>
              <div className="col-lg-9">
                <textarea className="form-control" rows="3" id="textArea" placeholder="Your message..."></textarea>
              </div>
            </div>
            <div className="form-group row justify-content-end">
              <div className="col-lg-10">
                <button type="submit" className="btn btn-raised btn-primary">Submit</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>)
  }

  ContactCol(props){
    return(
    <div className="card card-primary animated fadeInUp animation-delay-7">
      <div className="card-body">
        <div className="text-center mb-2">
          <h3 className="no-m">Charleston Pride Festival, Inc</h3>
        </div>
        <address className="no-mb">
          <p>
              <i className="color-danger-light zmdi zmdi-pin mr-1"></i> PO Box 61558</p>
          <p>
              <i className="color-warning-light zmdi zmdi-map mr-1"></i> North Charleston, SC 29419</p>
          <p>
            <i className="color-info-light zmdi zmdi-email mr-1"></i>
            <a href="mailto:info@charlestonpride.org">info@charlestonpride.org</a>
          </p>
          <p>
            <i className="color-royal-light zmdi zmdi-phone mr-1"></i><a href="tel:8434109924"> (843) 410-9924</a> </p>
        </address>
      </div>
    </div>
    )
  }
  

  render() {
    return (
    <Section title="Contact Us" subtitle="You may contact Charleston Pride Festival through email, online contact form, postal mail, or phone by following the instructions below. Please note that the preferred method of contact and the quickest is email. Most emails will be responded to within 24 business hours.">
      <div className="row">
        <div className="col-8" >
        <this.MessageCol/>
        </div>
        <div className="col-4">
        <this.ContactCol/>
        </div>
      </div>
    </Section>
    )
  }
}
