import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "../../../components/LinkUtil";

class Prism extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2019-10-14T10:00">
            7:00 PM
          </time>
          <i className="ms-timeline-point bg-warning" />
        </div>
        <div id="prism" className="card card-warning">
          <div className="card-header">
            <h3 className="card-title">
              Prism @ 7:00 PM - 11:00 PM | Charleston Bus Shed &amp; Visitor’s
              Center
            </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h4>The Official Party of Charleston Pride</h4>
                <p>
                  We painted the town every color of the rainbow this year. Now,
                  it's time to show Charleston how beautiful life can be when
                  those colors come together! You won't want to miss the
                  Charleston Pride Prism as we close out a fantastic week of
                  celebrating Pride.
                </p>
                <ExternalLink
                  to="https://goo.gl/maps/tGEDVecd2GeVUmx57"
                  title="375 Meeting St., Charleston"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Link
                  to="/prism"
                  className="btn btn-raised btn-warning animated fadeInUp animation-delay-10"
                >
                  <i className="fa fa-info-circle" /> More Info &amp; Tickets
                </Link>
                <h3 className="pull-right">
                  <span className="color-warning">$15</span>,{" "}
                  <span className="color-warning">$50</span> VIP,{" "}
                  <span className="color-warning">18+</span>
                </h3>
              </div>
            </div>
            <p>
              This event is <strong>FREE</strong> for{" "}
              <Link to="/friends-of-pride">Friends of Pride</Link>.
            </p>
          </div>
        </div>
      </li>
    );
  }
}

export default Prism;
