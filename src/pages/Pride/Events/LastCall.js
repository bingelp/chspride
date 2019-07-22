import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "../../../components/LinkUtil";

class LastCall extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2019-10-14T23:00">
            11:00 PM
          </time>
          <i className="ms-timeline-point bg-primary" />
        </div>
        <div id="last-call" className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">
              Last Call @ 11:00 PM - 1:30 AM | Music Farm
            </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={process.env.REACT_APP_ASSETS + "pride/latrice.jpeg"}
                  alt="Latrice Royale"
                  className="img-fluid mb-2"
                />
              </div>
              <div className="col-md-8">
                <h4>The Official After Party of Charleston Pride</h4>
                <p>
                  Did you really think we’d stop the party at 11 PM? After you
                  leave Prism, head across the street to Music Farm for Last
                  Call: The Official After Party of Charleston Pride! Symone N.
                  O’Bishop will keep the celebration going as you dance the
                  night away with Latrice Royale and the Queens of Charleston on
                  stage.
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
                  to="/last-call"
                  className="btn btn-raised btn-primary animated fadeInUp animation-delay-10"
                >
                  <i className="fa fa-info-circle" /> More Info &amp; Tickets
                </Link>
                <h3 className="pull-right">
                  <span className="color-primary">$15</span>,{" "}
                  <span className="color-primary">$20</span> at Door,{" "}
                  <span className="color-primary">18+</span>
                </h3>
              </div>
            </div>
            <p>
              This event is <strong>FREE</strong> for{" "}
              <Link to="/friends-of-pride">Friends of Pride</Link> and with VIP
              ticket to Prism.
            </p>
          </div>
        </div>
      </li>
    );
  }
}

export default LastCall;
