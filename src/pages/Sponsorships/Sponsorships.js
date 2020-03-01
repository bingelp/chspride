import React from "react";
import CountUp from "react-countup";
import "./sponsorships.css";
import LevelTable from "./LevelTable";
import { Link } from "react-router-dom";
import Branding from "./Branding";
import ETap from "../../components/ETapestryForm";

class Sponsorships extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brandings: [],
      levels: []
    };
  }

  componentDidMount() {
    fetch("https://chspride-api.azurewebsites.net/api/sponsorships/chspride")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ levels: data });
      });
    fetch("https://chspride-api.azurewebsites.net/api/sponsorships/branding")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ brandings: data });
      });
  }

  header() {
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

  stats() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="col-10">
              <h4>
                <strong>Charleston Pride</strong> is the Lowcountry’s biggest
                organization that celebrates the LGBTQ community throughout the
                year and holds an annual Parade and Festival in downtown
                Charleston. Throughout the main week of Pride events,
                participants can attend various events all focused on educating
                the community and promoting equality.
              </h4>
              <h2 className="text-center mb-4 wow fadeInUp animation-delay-2">
                Some Numerical Data
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="card card-warning card-body text-center wow zoomInUp animation-delay-3">
                <h2 className="counter">
                  <CountUp start={0} end={7500} duration={6} />+
                </h2>
                <i className="color-warning fa fa-4x fa-group" />
                <p className="mt-2 no-mb lead small-caps">
                  Pride Festival Attendees
                </p>
                <small>2019</small>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card card-info card-body text-center wow zoomInUp animation-delay-2">
                <h2 className="counter">
                  <CountUp start={0} end={12140} duration={6} />+
                </h2>
                <i className="color-info fa fa-4x fa-facebook" />
                <p className="mt-2 no-mb lead small-caps">Likes on Facebook</p>
                <small>Jan. 2020</small>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card card-success card-body text-center wow zoomInUp animation-delay-5">
                <h2 className="counter">
                  <CountUp start={0} end={19} duration={6} />
                </h2>
                <i className="color-success fa fa-4x fa-calendar" />
                <p className="mt-2 no-mb lead small-caps">
                  Events During Pride Week
                </p>
                <small>2019</small>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card card-danger card-body text-center wow zoomInUp animation-delay-4">
                <h2 className="counter">
                  <CountUp start={0} end={44} duration={6} />
                </h2>
                <i className="color-danger fa fa-4x fa-comments-o" />
                <p className="mt-2 no-mb lead small-caps">Sponsors</p>
                <small>2019</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  registration() {
    return (
      <div className="card" id="register">
        <div className="card-body text-center">
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
    );
  }

  levels(props) {
    return (
      <div id="levels" className="card">
        <div className="card-body text-center">
          <div className="row">
            <div className="col">
              <h1>2020 General Sponsorships</h1>
              <h3>
                To become a sponsor of <strong>Charleston Pride</strong>, fill
                out the form below
              </h3>
            </div>
          </div>
          <LevelTable levels={props.levels} />
          <div className="row mt-2">
            <div className="col">
              <h4>
                We offer different sponsorship packages to suit your
                organization’s needs. If there are any questions or you’d like
                to craft a custom sponsorship package, please reach out to us at{" "}
                <a href="mailto:sponsorships@charlestonpride.org">
                  sponsorships@charlestonpride.org
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }

  brandings(brandings) {
    return (
      <div id="branding" className="card">
        <div className="card-body">
          <h1 className="text-center">2020 Branding Opportunities</h1>
          <div className="row justify-content-center">
            {brandings.map(b => (
              <Branding
                key={b.id}
                name={b.name}
                event={b.event}
                rate={b.rate}
                available={b.available}
                presenter={b.presenter}
                level={b.level}
                details={b.details}
              />
            ))}
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
          <this.stats />
          {this.brandings(this.state.brandings)}
          <this.levels levels={this.state.levels} />
          <ETap
            title="Register to be a Sponsor"
            form="sponsorship"
            disabledText="Registration has closed."
            color="info"
            enabledText="To become a Sponsor, fill out the form below"
          />
        </div>
      </div>
    );
  }
}

export default Sponsorships;
