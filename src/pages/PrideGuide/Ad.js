import React from "react";
import "./Ad.css";
import ETap from "../../components/ETapestryForm";
export class Ad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rates: undefined
    };
  }

  componentDidMount() {
    fetch("https://chspride-api.azurewebsites.net/api/advertisements/pride")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ rates: data });
      });
  }

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

  adRate(rate) {
    return (
      <div className="card card-warning-inverse">
        <div className="card-header">
          <h2 className="card-title">
            {rate.title}{" "}
            <span className="pull-right">
              {rate.available ? "$" + rate.rate : "SOLD OUT"}
            </span>
          </h2>
        </div>
        <div className="card-body">
          <p>{rate.description}</p>
          <ul>
            <li>
              {rate.width}" W x {rate.height}" H{" "}
              {rate.bleed && "(includes bleed)"}
            </li>
            {rate.margin && (
              <li>Keep text {rate.margin}" away from the edges</li>
            )}
          </ul>
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

  rates(rates) {
    let halfwayThrough = Math.floor(rates.length / 2);
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Advertising Rates</h1>
            </div>
            <div className="col-md-6">
              {rates.slice(0, halfwayThrough).map(r => this.adRate(r))}
            </div>
            <div className="col-md-6">
              {rates
                .slice(halfwayThrough, rates.length)
                .map(r => this.adRate(r))}
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
          {this.state.rates && this.rates(this.state.rates)}
          <ETap
            title="Purchase an Ad"
            form="prideguide"
            color="warning"
            contact="sales"
            disabledText="Ad registration is currently closed."
            enabledText="To purchase an Ad, fill out the form below"
          />
        </div>
      </div>
    );
  }
}

export default Ad;
