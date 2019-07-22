import React, { Component } from "react";
import { ExternalLink, ExternalBtn } from "../../../components/LinkUtil";

class Wig extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2019-10-11T21:00">
            9:00 PM
          </time>
          <i className="ms-timeline-point bg-danger" />
        </div>
        <div id="wig" className="card card-danger">
          <div className="card-header">
            <h3 className="card-title">
              The Drag Factory @ 9:00 PM | El Jefe{" "}
            </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4 text-center">
                <img
                  src={process.env.REACT_APP_ASSETS + "pride/eljefe.jpg"}
                  alt="El Jefe Logo"
                  className="img-fluid mb-2"
                />
              </div>
              <div className="col-md-8">
                <p>
                  Come to the Drag Factory on Wednesday night! Every Wednesday
                  night is a different show, a different cast, and it's always a
                  great time!
                </p>
                <ExternalLink
                  to="https://goo.gl/maps/Jk8Z4Zsapu12"
                  title="468 King St, Charleston"
                />
              </div>
            </div>
            <ExternalBtn
              to="https://www.eljefechs.com/"
              icon="globe"
              title="El Jefe"
              color="danger"
            />
            <div className="pull-right">
              <h3>
                18+ <span className="color-danger">Cover</span>, 21+{" "}
                <span className="color-danger">FREE</span>
              </h3>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Wig;
