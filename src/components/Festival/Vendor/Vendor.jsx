import React, { Component } from 'react'
import vendorMap from './vendors.png'
import { Link } from 'react-router-dom';
import "./Vendor.css"
import CountdownClock from '../../CountdownClock';
import VendorRegistration from './VendorRegistration'

export default class Vendors extends Component {

  render() {
    return (
      <div>
        <div className="ms-hero-page-override ms-hero-img-vendor ms-hero-bg-royal">
          <div className="container">
            <div className="text-center">
              <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
                Charleston Pride <span>Festival</span></h1>
              <h2 className="lead lead-lg color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
                Saturday, September 22nd 2018 @ 10:00am-3:00pm</h2>
              <CountdownClock eventTime="2018-09-22T10:00:00" color="warning" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3 className="color-primary wow fadeInUp animation-delay-2">Why should you consider becoming a vendor at Charleston Pride Festival?</h3>
              <p className="wow fadeInUp animation-delay-3" >Being a vendor is a great way to promote your organization/company’s commitment to equal rights for all Americans.
               Additionally, a booth at Pride will promote your organization among a deeply diverse group of individuals.</p>
              <p className="wow fadeInUp animation-delay-3">For Pride 2017, we had an estimated <strong>4,000+</strong> attendants!
               These people were not only gay, lesbian, bisexual, or transgender, but also straight individuals who appreciate the values of equality. 
               By being at Charleston Pride Festival, you can increase your organization’s visibility amongst much of Charleston’s citizens.</p>
              <h4>Discounted Booth Fee with a minimum <strong className="color-success-inverse">Green</strong> level  <Link to="/sponsorships">Sponsorship</Link>!</h4>
            </div>
            <div className="col-12 col-md-6">
              <img src={vendorMap} alt="Vendor map" className="img-fluid my-3"></img>
            </div>
          </div>
          <VendorRegistration />
        </div>
      </div>
    )
  }
}