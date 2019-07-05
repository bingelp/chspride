import React, { Component } from "react";
import { ExternalBtn, ExternalLink } from "../../../components/LinkUtil";
import rhapsody from "../Assets/rhapsody.jpg";

class Rhapsody extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2019-10-07T10:30">
            September 7<span className="day"> Saturday</span> 10:30 AM
          </time>
          <i className="ms-timeline-point bg-info" />
        </div>
        <div id="rhapsody" className="card card-info">
          <div className="card-header">
            <h3 className="card-title">
              Rhapsody Pride @ 10:30 AM | Rhapsody CrossFit
            </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img src={rhapsody} alt="" className="img-fluid mb-2" />{" "}
              </div>
              <div className="col-md-8">
                <p>
                  Surround yourself with people who smile when you show up, stay
                  with you until the clock runs out, push you to raise the bar
                  and cheer you on every rep-of-the-way.
                </p>
                <p>
                  This is who we are at <strong>Rhapsody</strong>, and we want
                  you to celebrate Pride with us.
                </p>

                <p>
                  Join us for a free sweat session suited for any and all
                  fitness levels – snag your spot online at{" "}
                  <ExternalLink to="https://rhapsodycrossfit.com">
                    rhapsodycrossfit.com
                  </ExternalLink>
                </p>
                <ExternalLink
                  to="https://g.page/rhapsodycrossfit?share"
                  title="700 King St Suite D, Charleston"
                />
              </div>
            </div>
            <ExternalBtn
              to="https://rhapsodycrossfit.com/"
              icon="globe"
              color="info"
              title="Rhapsody Crossfit"
            />
            <div className="pull-right">
              <h3>
                <span className="color-info">FREE</span>
              </h3>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Rhapsody;
