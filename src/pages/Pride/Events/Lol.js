import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ExternalBtn } from "../../../components/LinkUtil";

class Lol extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2019-10-13T20:00">
            September 20<span className="day"> Friday</span> 8:00 PM
          </time>
          <i className="ms-timeline-point bg-warning" />
        </div>
        <div id="lgbtlol" className="card card-warning">
          <div className="card-header">
            <h3 className="card-title">
              LGBTLOL @ 8:00 PM | Charleston Music Hall{" "}
            </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <p>
                  Come celebrate humanity and show your Pride at a night of
                  comedy featuring some of your favorite stand-up comics, who
                  also happen to be members of the LGBTQ community.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h2 className="text-center">
                  <small className="color-warning">Headliner</small>
                  <br />
                  Ky Krebs
                </h2>
              </div>
              <div className="col">
                <h2 className="text-center">
                  <small className="color-warning">Host</small>
                  <br />
                  Jenn Snyder
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3 className="text-center">
                  Shawna Jarrett, Julie Osborne, Ava Smartt, and Shaine Laine
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col" />
            </div>
            <div className="row">
              <div className="col">
                <Link
                  to="lol"
                  className="btn btn-raised color-warning btn-white animated fadeInUp animation-delay-7"
                >
                  <i className="fa fa-info-circle" /> More Info
                </Link>
                <ExternalBtn
                  to="https://www.ticketfly.com/purchase/event/1870417"
                  icon="ticket"
                  title="Tickets"
                  color="warning"
                />
              </div>
              <div className="col">
                <h3 className="text-right">
                  <span className="color-warning">$10</span> with code:{" "}
                  <span className="color-warning">chspride</span>
                </h3>
                <p className="text-right">
                  This event is <strong>FREE</strong> for{" "}
                  <Link to="/friends-of-pride">Friends of Pride</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Lol;
