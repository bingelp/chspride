import React from "react";
import CountUp from "react-countup";
import "./sponsorships.css";
import LevelTable from "./LevelTable";
import { Link } from "react-router-dom";

const levels = [
  {
    id: 1,
    name: "Red",
    price: 10000,
    namingRights: 1,
    mediaPosts: 2,
    tShirt: true,
    prismParty: 10,
    boothDiscount: true,
    adSpace: 2,
    vipTent: true,
    website: true,
    prideGuide: true,
    marketing: true,
    paradeEntryFeeWaived: true,
    columns: 1
  },
  {
    id: 2,
    name: "Orange",
    price: 7500,
    namingRights: 0,
    mediaPosts: 2,
    tShirt: true,
    prismParty: 8,
    boothDiscount: true,
    adSpace: 2,
    vipTent: true,
    website: true,
    prideGuide: true,
    marketing: true,
    paradeEntryFeeWaived: true,
    columns: 1
  },
  {
    id: 3,
    name: "Yellow",
    price: 5000,
    namingRights: 0,
    mediaPosts: 2,
    tShirt: true,
    prismParty: 6,
    boothDiscount: true,
    adSpace: 1,
    vipTent: true,
    website: true,
    prideGuide: true,
    marketing: true,
    paradeEntryFeeWaived: true,
    columns: 1
  },
  {
    id: 4,
    name: "Green",
    price: 2500,
    namingRights: 0,
    mediaPosts: 0,
    tShirt: true,
    prismParty: 4,
    boothDiscount: true,
    adSpace: 0.5,
    vipTent: true,
    website: true,
    prideGuide: true,
    marketing: true,
    paradeEntryFeeWaived: true,
    columns: 1
  },
  {
    id: 5,
    name: "Blue",
    price: 1000,
    namingRights: 0,
    mediaPosts: 0,
    tShirt: false,
    prismParty: 0,
    boothDiscount: false,
    adSpace: 0.25,
    vipTent: true,
    website: true,
    prideGuide: true,
    marketing: true,
    paradeEntryFeeWaived: true,
    columns: 1
  },
  {
    id: 6,
    name: "Purple",
    price: 500,
    namingRights: 0,
    mediaPosts: 0,
    tShirt: false,
    prismParty: 0,
    boothDiscount: false,
    adSpace: 0,
    vipTent: false,
    website: true,
    prideGuide: true,
    marketing: true,
    paradeEntryFeeWaived: true,
    columns: 1
  }
];
class Sponsorships extends React.Component {
  Header() {
    return (
      <div className="ms-hero-page-override ms-hero-img-sponsorships ms-hero-bg-info">
        <div className="container">
          <div className="text-center">
            <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
              Become a Sponsor
            </h1>
            <p className="lead lead-sm color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-6">
              A sponsorship is a great way to promote your
              organization/company’s commitment to equal rights for all people.
              Additionally, a sponsorship will promote your organization among a
              deeply diverse group of individuals.
            </p>
            <Link
              to="/our-sponsors"
              className="btn btn-raised btn-info animated fadeInUp animation-delay-10"
            >
              <i className="fa fa-heart" /> View Our Sponsors
            </Link>
          </div>
        </div>
      </div>
    );
  }

  Stats() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <h4>
              <strong>Charleston Pride</strong> is the Lowcountry’s biggest
              organization that celebrates the LGBTQ community throughout the
              year and holds an annual Parade and Festival in downtown
              Charleston. Throughout the main week of Pride events, participants
              can attend various events all focused on educating the community
              and promoting equality.
            </h4>
            <h2 className="text-center mb-4 wow fadeInUp animation-delay-2">
              Some Numerical Data
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-warning card-body text-center wow zoomInUp animation-delay-3">
              <h2 className="counter">
                <CountUp start={0} end={5000} duration={6} />+
              </h2>
              <i className="color-warning fa fa-4x fa-group" />
              <p className="mt-2 no-mb lead small-caps">
                Pride Festival Attendees
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-info card-body text-center wow zoomInUp animation-delay-2">
              <h2 className="counter">
                <CountUp start={0} end={10600} duration={6} />+
              </h2>
              <i className="color-info fa fa-4x fa-facebook" />
              <p className="mt-2 no-mb lead small-caps">Likes on Facebook</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-success card-body text-center wow zoomInUp animation-delay-5">
              <h2 className="counter">
                <CountUp start={0} end={16} duration={6} />
              </h2>
              <i className="color-success fa fa-4x fa-calendar" />
              <p className="mt-2 no-mb lead small-caps">
                Events During Pride Week
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-danger card-body text-center wow zoomInUp animation-delay-4">
              <h2 className="counter">
                <CountUp start={0} end={45} duration={6} />
              </h2>
              <i className="color-danger fa fa-4x fa-comments-o" />
              <p className="mt-2 no-mb lead small-caps">2018 Sponsors</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  Registration() {
    return (
      <div className="container">
        <div className="row">
          <div id="register" className="card">
            <div className="card-body">
              <h3>
                To become a sponsor of <strong>Charleston Pride</strong>, fill
                out the form below
              </h3>
              <p>
                We offer different sponsorship packages to suit your
                organization’s needs. If there are any questions or you’d like
                to craft a custom sponsorship package, please reach out to us at{" "}
                <a href="mailto:sponsorships@charlestonrpide.org">
                  sponsorships@charlestonpride.org
                </a>
              </p>
              <iframe
                id="etapIframe"
                title="sponsorships"
                src="https://app.etapestry.com/onlineforms/CharlestonPrideFestivalInc/sponsorship.html"
              />
              <script
                src="//app.etapestry.com/hosted/eTapestry.com/etapEmbedResponsiveResizing.js"
                type="text/JavaScript"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  Levels() {
    return (
      <div id="levels" className="container">
        <LevelTable levels={levels} />
      </div>
    );
  }
  render() {
    return (
      <div>
        <this.Header />
        <this.Stats />
        <this.Levels />
        <this.Registration />
      </div>
    );
  }
}

export default Sponsorships;
