import React, { Component } from "react";
import { ExternalLink, ExternalBtn } from "../../../components/LinkUtil";

class Interfaith extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2019-10-08T17:00">
            5:00 PM
          </time>
          <i className="ms-timeline-point bg-royal" />
        </div>
        <div id="interfaith" className="card card-royal">
          <div className="card-header">
            <h3 className="card-title">
              A Celebration of Pride and Faith @ 5:00 PM - 7:00 PM |
              Metropolitan Community Church
            </h3>
          </div>
          <div className="card-body">
            <div className="alert alert-royal alert-light">
              <h4>
                <span className="fa fa-exclamation-triangle" /> This event has
                been postponed due to Hurricane Dorian.
              </h4>{" "}
            </div>
            <div className="row">
              <div className="col">
                <p>
                  A gathering of people and communities of faith to bless the
                  10th Celebration of LGBTQIA Pride in the Low Country. Our
                  Faith which has been used to wound us and kept us from self
                  acceptance has become our most valuable resource in reclaiming
                  our sacred selves. Begin your week of celebration as we invoke
                  Spirit together.
                </p>
                <ExternalLink
                  to="https://goo.gl/maps/dXqcXK5R1Zc7q5Z4A"
                  title="7860 A Dorchester Rd, North Charleston"
                />
              </div>
            </div>
            <ExternalBtn
              to="http://mcccharleston.com/"
              icon="globe"
              title="Metropolitan Community Church"
              color="royal"
            />
            <div className="pull-right">
              <h3>
                <span className="color-royal">FREE</span>
              </h3>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Interfaith;
