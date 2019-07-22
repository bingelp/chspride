import React, { Component } from "react";
import { ExternalLink, ExternalBtn } from "../../../components/LinkUtil";

class Trivia extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-19T17:00">
            September 10<span className="day"> Tuesday</span> 7:00 PM
          </time>
          <i className="ms-timeline-point bg-danger" />
        </div>
        <div className="card card-danger" id="triva">
          <div className="card-header">
            <h3 className="card-title">
              LGBTQ+ Trivia @ 7:00 PM - 9:00 PM | Snafu Brewing
            </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={process.env.REACT_APP_ASSETS + "pride/snafu.jpeg"}
                  alt="Snafu Brewing Logo"
                  className="img-fluid mb-2"
                />{" "}
              </div>
              <div className="col-md-8">
                <p>
                  A new addition to Charleston Pride Week! Come on out to Snafu
                  Brewing and grab a few beers with your best trivia teammates.
                  We'll be covering topics from local LGBTQ+ history to queer
                  pop culture, and the top three teams will win some GREAT
                  prizes!
                </p>
                <ExternalLink
                  to="https://goo.gl/maps/xEMHMcPXQimKCFVdA"
                  title="3280 Industry Dr, North Charleston"
                />
              </div>
            </div>
            <ExternalBtn
              to="http://www.snafubrewingcompany.com/"
              icon="globe"
              title="Snafu Brewing"
              color="danger"
            />
            <div className="pull-right">
              <h3>
                <span className="color-danger">FREE</span>
              </h3>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Trivia;
