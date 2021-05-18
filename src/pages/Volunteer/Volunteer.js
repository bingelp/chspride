import React, { Component } from "react";
import "./Volunteer.css";
export default class Volunteer extends Component {
  header() {
    var headerClass =
      "no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5";
    var heroClass =
      "lead color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7";
    return (
      <div className="ms-hero-page-override ms-hero-img-volunteer ms-hero-bg-warning">
        <div className="container">
          <div className="text-center">
            <h1 className={headerClass}>Volunteer with Charleston Pride</h1>
            <p className={heroClass}>
              Volunteers don't just do the work - they make it work.
            </p>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <this.header />
        <div className="container mt-3">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfzVngmWTbpu2F65xD50vqYUue4K1UG8wAN9iKHap3qQlvlPA/viewform?embedded=true"
            width="800"
            height="1000"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="volunteer signup"
          >
            Loading…
          </iframe>
        </div>
      </div>
    );
  }
}
