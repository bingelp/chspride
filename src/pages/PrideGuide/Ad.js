import React, { Component } from "react";
import "./Ad.css";
export default class Ad extends Component {
  header() {
    return (
      <div className="ms-hero-page-override ms-hero-bg-warning ms-hero-img-ad">
        <div className="container">
          <div className="text-center">
            <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
              2020 Pride Guide
            </h1>
            <p className="lead color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
              Spread the word about your business or organization and advertise
              in the Charleston Pride Guide!
            </p>
          </div>
        </div>
      </div>
    );
  }

  details() {
    return (
      <div className="card card-warning">
        <div className="card-body">
          <h1 className="text-center">Pride Guide Details</h1>
          <div className="row">
            <div className="col-md-6">
              <div>
                <h3>Distribution</h3>
                <ul>
                  <li>
                    <strong>5.75” x 8.75”</strong> Booklet Layout
                  </li>
                  <li>
                    <strong>3,000</strong> copies
                  </li>
                  <li>
                    Distributed throughout <strong>Tri-Country Area</strong>
                  </li>
                </ul>
              </div>
              <div>
                <h3>Added Value</h3>
                <ul>
                  <li>Ad space in the 2020 Charleston Pride Guide</li>
                  <li>Digital version on Charleston Pride Website</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <h3>Advertising Deadlines</h3>
                <ul>
                  <li>
                    Ad reservation deadline: <strong>July 5, 2020</strong>
                  </li>
                  <li>
                    Print ready artwork deadline: <strong>July 8, 2020</strong>
                  </li>
                </ul>
              </div>
              <div>
                <h3>Ad Design Guidelines</h3>
                <ul>
                  <li>All ads should be submitted as an electronic file</li>
                  <li>Acceptable file formats are PDF or EPS file</li>
                  <li>
                    Please ensure that all images embedded into ads are
                    converted to four color process (CMYK) and all text is
                    converted to outlines prior to saving the ad as a PDF file.{" "}
                  </li>
                  <li>
                    Please embed all fonts in the files to ensure accurate
                    printing
                  </li>
                  <li>
                    Image resolution <strong>must</strong> be at least 300 dpi
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12">
              <h4>
                For questions about ad specs or to have Charleston Pride design
                an ad on your behalf, please contact
                <a href="mailto:sales@charlestonpride.org">
                  {" "}
                  sales@charlestonpride.org
                </a>
                .
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }

  rates() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Advertising Rates</h1>
            </div>
            <div className="col-md-6">
              <div className="card card-warning-inverse">
                <div className="card-header">
                  <h2 className="card-title">Premium Center Fold Ad</h2>
                </div>
                <div className="card-body">
                  <p>
                    For, <strong>$1,500</strong>, make a major statement for
                    your business or organization with an exclusive center fold
                    ad in the middle of the Charleston Pride Guide
                  </p>
                  <ul>
                    <li>11.00" W x 8.75" H (includes bleed)</li>
                    <li>Keep text 0.5" away from the edges</li>
                  </ul>
                </div>
              </div>
              <div className="card card-warning-inverse">
                <div className="card-header">
                  <h2 className="card-title">Premium Back Cover</h2>
                </div>
                <div className="card-body">
                  <p>
                    For <strong>$1,250</strong>, your ad can be placed on the
                    back cover of the Pride Guide, printed on glossy paper.
                    There’s only one back cover, so buy your ad soon!
                  </p>
                  <ul>
                    <li>5.75" W x 8.75" H (includes bleed)</li>
                    <li>Keep text 0.5" away from the edges</li>
                  </ul>
                </div>
              </div>
              <div className="card card-warning-inverse">
                <div className="card-header">
                  <h2 className="card-title">Premium Inside Cover</h2>
                </div>
                <div className="card-body">
                  <p>
                    For <strong>$1,000</strong>, your ad can be placed on one of
                    the prominent inside covers, printed on glossy paper. There
                    are only two of these coveted spaces so order early to
                    guarantee your spot.
                  </p>
                  <ul>
                    <li>5.75" W x 8.75" H (includes bleed)</li>
                    <li>Keep text 0.5" away from the edges</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-warning-inverse">
                <div className="card-header">
                  <h2 className="card-title">Full Page</h2>
                </div>
                <div className="card-body">
                  <p>
                    For <strong>$750</strong>, you will get a full page ad in
                    the Charleston Pride Festival Guide. <strong>Great</strong>{" "}
                    Visibility!
                  </p>
                  <ul>
                    <li>5.75" W x 8.75" H (includes bleed)</li>
                    <li>Keep text 0.5" away from the edges</li>
                  </ul>
                </div>
              </div>
              <div className="card card-warning-inverse">
                <div className="card-header">
                  <h2 className="card-title">Half Page</h2>
                </div>
                <div className="card-body">
                  <p>
                    For <strong>$500</strong>, receive a half-page as in the
                    Charleston Pride Festival Guide. While half-page ads may
                    share a page with others ads or text, they still give your
                    business or organization enough space to make a colorful
                    statement.
                  </p>
                  <ul>
                    <li>4.5" W x 3.785" H</li>
                  </ul>
                </div>
              </div>
              <div className="card card-warning-inverse">
                <div className="card-header">
                  <h2 className="card-title">Quarter Page</h2>
                </div>
                <div className="card-body">
                  <p>
                    For <strong>$350</strong>, feature your business in a simple
                    yet elegant way with a quarter page ad. This ad size
                    features enough space to highlight your business at a very
                    affordable rate <strong>or</strong> purchase two separate
                    ads for double coverage.
                  </p>
                  <ul>
                    <li>2.16" W x 3.785" H</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  form() {
    return (
      <div className="card">
        <div className="card-body text-center">
          <h1>Purchase an Ad</h1>
          <h2>Ad sales have not yet opened for 2020</h2>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <this.header />
        <div className="container mt-3">
          <this.details />
          <this.rates />
          <this.form />
        </div>
      </div>
    );
  }
}
