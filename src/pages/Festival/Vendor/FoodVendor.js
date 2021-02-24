import React, { Component } from "react";
import vendorMap from "../map.jpg";
import { Link } from "react-router-dom";
import "./Vendor.css";
import ETap from "../../../components/ETapestryForm";
const festivalDate = "Saturday, August 29, 2020";
export default class FoodVendors extends Component {
  header() {
    return (
      <div className="ms-hero-page-override ms-hero-img-vendor ms-hero-bg-royal">
        <div className="container">
          <div className="text-center">
            <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
              Food Vendor Information
            </h1>
            <h2 className="lead lead-lg color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
              Charleston Pride Festival
            </h2>
            <h3 className="lead lead-lg color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
              Date {festivalDate}
            </h3>
          </div>
        </div>
      </div>
    );
  }

  why() {
    return (
      <div className="card card-royal">
        <div className="card-body">
          <h3 className="color-royal wow fadeInUp animation-delay-2">
            Why should you consider becoming a food vendor at Charleston Pride
            Festival?
          </h3>
          <p className="wow fadeInUp animation-delay-3">
            Being a vendor is a great way to promote your organization/company’s
            commitment to equal rights for all Americans. Additionally, a booth
            at Pride will promote your organization among a deeply diverse group
            of individuals.
          </p>
          <p className="wow fadeInUp animation-delay-3">
            For Pride 2019, we had an estimated <strong>7,500+</strong>{" "}
            attendants! These people were not only gay, lesbian, bisexual, or
            transgender, but also straight individuals who appreciate the values
            of equality. By being at Charleston Pride Festival, you can increase
            your organization’s visibility amongst much of Charleston’s
            citizens.
          </p>
          <h4>
            Discounted Booth Fee with a minimum{" "}
            <strong className="color-success-inverse">Green</strong> level{" "}
            <Link to="/become-a-sponsor">Sponsorship</Link>!
          </h4>
        </div>
      </div>
    );
  }
  map() {
    return (
      <div className="card card-royal">
        <div className="card-header">
          <h3 className="card-title">
            <i className="fa fa-map" />
            Festival Map
          </h3>
        </div>
        <div className="card-body">
          <img src={vendorMap} alt="Vendor map" className="img-fluid my-3" />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <this.header />
        <div className="container mt-3">
          <div className="row">
            <div className="col-12 col-md-6">
              <this.why />
            </div>
            <div className="col-12 col-md-6">
              <this.map />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ETap
                form="FoodVendorRegistration"
                title="Food Vendor Registration"
                color="royal"
                contact="vendors"
                disabledText="Food Vendor registration is closed"
                enabledText="Please only fill out this form if directed to do so by the Festival Director."
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
