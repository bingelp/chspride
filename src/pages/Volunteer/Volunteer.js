import React, { Component } from "react";
import "./Volunteer.css";

export default class Volunteer extends Component {
  Header() {
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
              Volunteers dont just do the work - they make it work.
            </p>
          </div>
        </div>
      </div>
    );
  }

  Registration() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h3>
              By filling out the form below you are signing up to be contacted
              about volunteer opportunities.
            </h3>
            <p>
              If there are any questions please reach out to us at{" "}
              <a href="mailto:volunteers@charlestonpride.org">
                volunteers@charlestonpride.org
              </a>
            </p>
            <iframe
              id="etapIframe"
              title="volunteer"
              src="https://app.etapestry.com/onlineforms/CharlestonPrideFestivalInc/volunteer.html"
            />
            <script
              src="//app.etapestry.com/hosted/eTapestry.com/etapEmbedResponsiveResizing.js"
              type="text/JavaScript"
            />
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <this.Header />
        <this.Registration />
      </div>
    );
  }
}
