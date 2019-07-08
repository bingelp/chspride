import React, { Component } from "react";
import { ExternalLink, ExternalBtn } from "../../../components/LinkUtil";
import cah from "../Assets/cah.png";
import quietkingz from "../Assets/quietkings.png";

class Disco extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2019-10-13T22:00">
            10:00 PM
          </time>
          <i className="ms-timeline-point bg-danger" />
        </div>
        <div id="disco" className="card card-danger">
          <div className="card-header">
            <h3 className="card-title">
              Color Me Silent Headphone Party @ 10:00 PM | Carolina Ale House
            </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <div className="row">
                  <div className="col-6 col-md-12">
                    <img
                      src={cah}
                      alt="Carolina Ale House's Logo"
                      className="img-fluid mb-2"
                    />
                  </div>
                  <div className="col-6 col-md-12">
                    <img
                      src={quietkingz}
                      alt="QuietKingz's Logo"
                      className="img-fluid mb-2"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <h2 className="text-center">
                  <small className="color-danger">Presented By</small>
                  <br />
                  QuietKingz
                </h2>
                <p>
                  Dance the night away, support Charleston Pride, enjoy premium
                  cocktails, 72 draft beer selection, and great food, at
                  Carolina Ale House. This innovative, Silent Disco dance party,
                  hosted by Carolina Ale House and presented by QuietKingz
                  offers an experience you won’t soon forget. Pick up your
                  headphones, and with the click of a button, cycle through the
                  beats spun by the three live, on-site DJ’s (featuring DJ
                  Trevor D, DJ K, and DJ-G) to find your favorite. A portion of
                  sales benefit Charleston Pride.
                </p>
                <ExternalLink
                  to="https://goo.gl/maps/ix9fR37s8rkHTVRWA"
                  title="145 Calhoun St, Charleston"
                />
              </div>
            </div>
            <ExternalBtn
              to="https://www.facebook.com/events/2208879402540673/"
              icon="ticket"
              title="Tickets"
              color="danger"
            />
            <div className="pull-right">
              <h3>
                <span className="color-danger">$10</span>, 18+
              </h3>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Disco;
