import React, { Component } from "react";
import { ExternalLink, ExternalBtn } from "../../../components/LinkUtil";

class Patti extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-12T22:00">
            10:00 PM
          </time>
          <i className="ms-timeline-point bg-royal" />
        </div>
        <div id="patti" className="card card-royal">
          <div className="card-header">
            <h3 className="card-title">
              Still Alive! With Brooke Collins @ 10:00 PM | Dudley's on Ann{" "}
            </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4 text-center">
                <img
                  src={process.env.REACT_APP_ASSETS + "pride/dudleys.jpg"}
                  alt="Dudley's Logo"
                  className="img-fluid mb-2"
                />
              </div>
              <div className="col-md-8">
                <p>
                  The legendary Brooke Collins takes to the Dudley’s stage every
                  Thursday in front of a confused audience who exclaims, “She’s
                  still ALIVE?!” With gorgeous outfits, amazing headdresses, and
                  constant comedy, a night with Brooke is the perfect start to
                  your weekend!
                </p>
                <ExternalLink
                  to="https://goo.gl/maps/Jk8Z4Zsapu12"
                  title="42 Ann St, Charleston"
                />
              </div>
            </div>
            <ExternalBtn
              to="https://www.dudleysonann.com/"
              icon="globe"
              title="Dudley's on Ann"
              color="royal"
            />
            <div className="pull-right">
              <h3>
                <span className="color-royal">FREE</span>, 21+
              </h3>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Patti;
