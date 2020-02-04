import React, { Component } from "react";
import "./Store.css";
class Store extends Component {
  componentDidMount() {
    window.addEventListener("message", this.handleMessage(), !1);
  }
  handleMessage() {
    return function(e) {
      var t = "printYourCauseiFrame";
      if (!e || !e.data || e.data.length < 2) return 0;
      var a = document.getElementById(t);
      if (!a) return 0;
      var r = e.data[0],
        i = e.data[1];
      "setIframeHeight" === r
        ? a.setAttribute("height", i)
        : "iframeScrollUp" === r && window.scrollTo(0, i);
    };
  }

  Header() {
    var headerClass =
      "no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5";
    var heroClass =
      "lead color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7";
    return (
      <div className="ms-hero-page-override ms-hero-img-volunteer ms-hero-bg-warning">
        <div className="container">
          <div className="text-center">
            <h1 className={headerClass}>Charleston Pride Store</h1>
            <p className={heroClass}>Show Your Pride</p>
          </div>
        </div>
      </div>
    );
  }

  PrintYourCause() {
    return (
      <div className="card card-warning">
        <div className="card-body">
          <iframe
            id="printYourCauseiFrame"
            src="https://app.printyourcause.com/campaign/charlestonpride"
            width="100%"
            height="500px"
            allow="fullscreen"
            title="PrintYouCause"
          />
          <script type="text/javascript" />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <this.Header />
        <div className="container mt-3">
          <this.PrintYourCause />
        </div>
      </div>
    );
  }
}

export default Store;
