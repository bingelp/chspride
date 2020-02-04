import React, { Component } from "react";
import vendorMap from "../map.jpg";
import { Link } from "react-router-dom";
import "./Vendor.css";
import ETap from "../../../components/ETapestryForm";
const festivalDate = "TBD";
export default class Vendors extends Component {
  header() {
    return (
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
            Why should you consider becoming a vendor at Charleston Pride
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

  register() {
    return (
      <div className="card card-royal-inverse">
        <div className="card-body">
          <h2 className="text-center mb-4">How to register?</h2>
          <p className="lead lead-lg text-center mt-4 col">
            You can easily register online by filling out the form below. The
            standard fee for vendors is <strong>$150</strong>. If electricity is
            needed, <strong>$25.00</strong> will be added to the registration.
            Nonprofit organizations are entitled to a{" "}
            <strong>50% discount</strong>. Proof of nonprofit status must be on
            file with Charleston Pride Festival two weeks prior to the Festival.
          </p>
        </div>
      </div>
    );
  }

  details() {
    return (
      <div className="card card-royal">
        <div className="card-body">
          <p className="lead lead-lg text-center col">
            Dimensions for vendor booths are <strong>10′ x 10′</strong>.
            Charleston Pride only provides the plot for a vendor space and does
            not supply tents, tables or chairs. Vendor packets will be sent to
            the email address on file two weeks prior to the Festival.
          </p>
          <p className="lead lead-lg text-center col">
            Please note that vendors are required to meet certain obligations,
            including, but not limited to, providing proof of liability
            insurance and the appropriate licenses for Food and Beverage
            vending. Vendors must submit these documents to our vendor
            coordinator at
            <a
              className="color-royal"
              href="mailto:vendors@charlestonpride.org"
            >
              {" "}
              vendors@charlestonpride.org
            </a>
            .
          </p>
          <p className="text-center">
            <em>All sales are final.</em>
          </p>
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
              <this.register />
            </div>
            <div className="col">
              <this.details />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ETap
                form="VendorRegistration"
                title="Vendor Registration"
                color="royal"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
