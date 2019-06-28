import React, { Component } from "react";
import vendorMap from "../map.png";
import { Link } from "react-router-dom";
import "./Vendor.css";
import CountdownClock from "../../../components/CountdownClock";
import VendorRegistration from "./VendorRegistration";
const festivalDate = "Saturday, September 14th 2019";
export default class Vendors extends Component {
  render() {
    return (
      <div>
        <div className="ms-hero-page-override ms-hero-img-vendor ms-hero-bg-royal">
          <div className="container">
            <div className="text-center">
              <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
                Vendor Information
              </h1>
              <h2 className="lead lead-lg color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
                Charleston Pride Festival
              </h2>
              <h3 className="lead lead-lg color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
                {festivalDate} @ 10:00am-3:00pm
              </h3>
              <CountdownClock eventTime="2019-09-14T10:00:00" color="warning" />
              <Link
                to="/festival"
                className="btn btn-raised btn-info animated fadeInUp animation-delay-10"
              >
                <i className="fa fa-heart" /> Festival Information
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3 className="color-primary wow fadeInUp animation-delay-2">
                Why should you consider becoming a vendor at Charleston Pride
                Festival?
              </h3>
              <p className="wow fadeInUp animation-delay-3">
                Being a vendor is a great way to promote your
                organization/company’s commitment to equal rights for all
                Americans. Additionally, a booth at Pride will promote your
                organization among a deeply diverse group of individuals.
              </p>
              <p className="wow fadeInUp animation-delay-3">
                For Pride 2018, we had an estimated <strong>5,000+</strong>{" "}
                attendants! These people were not only gay, lesbian, bisexual,
                or transgender, but also straight individuals who appreciate the
                values of equality. By being at Charleston Pride Festival, you
                can increase your organization’s visibility amongst much of
                Charleston’s citizens.
              </p>
              <h4>
                Discounted Booth Fee with a minimum{" "}
                <strong className="color-success-inverse">Green</strong> level{" "}
                <Link to="/become-a-sponsor">Sponsorship</Link>!
              </h4>
            </div>
            <div className="col-12 col-md-6">
              <img
                src={vendorMap}
                alt="Vendor map"
                className="img-fluid my-3"
              />
            </div>
          </div>
          <VendorRegistration />
        </div>
      </div>
    );
  }
}
