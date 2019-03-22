import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Donate.css";

export default class MailingList extends Component {
  Header() {
    var headerClass =
      "no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5";
    var heroClass =
      "lead color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7";
    return (
      <div className="ms-hero-page-override ms-hero-img-donate ms-hero-bg-success">
        <div className="container">
          <div className="text-center">
            <h1 className={headerClass}>Donate</h1>
            <p className={heroClass}>Help Make Charleston Pride a Reality!</p>
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
              A lot of time, effort, and money goes into organizing and putting
              on <strong>Charleston Pride</strong>.
              <strong> Charleston Pride Festival, Inc</strong> is funded
              strictly through sponsors and funds raised at events. Due to this
              fact, we have to raise money throughout the year in order for{" "}
              <strong>Charleston Pride</strong> to be successful. If you cannot
              make it to one of our fundraisers, you can now donate here! Also
              check out our monthly donor program,{" "}
              <Link to="/friends-of-pride">Friends of Pride</Link>.
            </h3>
            <iframe
              id="etapIframe"
              title="donate"
              src="https://app.etapestry.com/onlineforms/CharlestonPrideFestivalInc/donate.html"
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
