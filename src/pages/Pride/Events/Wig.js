import React, { Component } from "react";
import { ExternalLink, ExternalBtn } from "../../../components/LinkUtil";
import eljefe from "../Assets/eljefe.jpg";

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
              Wig Out Wednesday @ 9:00 PM | The Drag Factory - El Jefe{" "}
            </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={eljefe}
                  alt="El Jefe Logo"
                  className="img-fluid mb-2"
                />
              </div>
              <div className="col-md-8">
                <p>
                  Come wig out with us on Wednesday night! Every Wednesday night
                  is a different show, a different cast, and it's always a great
                  time! Wig Out Wednesdays at the Drag Factory - Music by DJ
                  Trevor D. Party starts at 9:00 pm. Show starts at 10:00 pm!{" "}
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
