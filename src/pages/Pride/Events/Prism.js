import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ExternalBtn } from "../../../components/LinkUtil";

class Prism extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-22T21:00">
            9:00 PM
          </time>
          <i className="ms-timeline-point bg-warning" />
        </div>
        <div id="prism" className="card card-warning">
          <div className="card-header">
            <h3 className="card-title">
              Prism Party @ 9:00 PM - 1:30 AM | Music Farm
            </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h4>The Official After Party of Charleston Pride</h4>
                <p>
                  We painted the town every color of the rainbow this year. Now,
                  it's time to show Charleston how beautiful life can be when
                  those colors come together! You won't want to miss the
                  Charleston Pride Prism Party as we close out a fantastic week
                  of celebrating Pride.
                </p>
                <ExternalLink
                  to="https://goo.gl/maps/DJ716VWeiSw"
                  title="32 Ann St. Charleston"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Link
                  to="/prism-party"
                  className="btn btn-raised color-warning btn-white animated fadeInUp animation-delay-7"
                >
                  <i className="fa fa-info-circle" /> More Info
                </Link>

                <ExternalBtn
                  to="https://www.etix.com/ticket/p/4283681/prism-party-charleston-the-music-farm-charleston"
                  icon="ticket"
                  title="Tickets"
                  color="warning"
                />
                <h3 className="pull-right">
                  <span className="color-warning">$20</span>
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
