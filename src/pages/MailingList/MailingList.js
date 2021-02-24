import React, { Component } from "react";
import "./MailingList.css";

export default class MailingList extends Component {
  header() {
    var headerClass =
      "no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5";
    var heroClass =
      "lead color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7";
    return (
      <div className="ms-hero-page-override ms-hero-img-mailing ms-hero-bg-primary">
        <div className="container">
          <div className="text-center">
            <h1 className={headerClass}>Join our Mailing List</h1>
            <p className={heroClass}>
              Be in the know about all things Charleston Pride!
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
        <iframe
          title="constant-contact"
          className="container mt-3"
          src="https://lp.constantcontactpages.com/su/ibqAtRz"
        ></iframe>
      </div>
    );
  }
}
