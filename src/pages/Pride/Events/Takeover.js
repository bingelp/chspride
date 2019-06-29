import React, { Component } from "react";
import { ExternalBtn } from "../../../components/LinkUtil";
import takeover from "../Assets/takeover.jpg";

class Takeover extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2019-10-07T19:00">
            September 7<span className="day"> Saturday</span> 7:00 PM
          </time>
          <i className="ms-timeline-point bg-warning" />
        </div>
        <div id="takeover" className="card card-warning">
          <div className="card-header">
            <h3 className="card-title">
              Week Kickoff Takeover @ 7:00 PM - 11:00 PM | Taco Boy{" "}
            </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img src={takeover} alt="" className="img-fluid mb-2" />{" "}
              </div>
              <div className="col-md-8">
                <p>
                  Join <strong>Takeover Charleston</strong> as they celebrate 10
                  years and help kick off Charleston Pride!{" "}
                  <strong>Always</strong> a good time, with a drag show, amazing
                  food, tasty drinks, and music by DJ Trevor D.! A portion of
                  sales benefit Charleston Pride.
                </p>
              </div>
            </div>
            <ExternalBtn
              to="https://www.tacoboy.net/"
              icon="globe"
              color="warning"
              title="Taco Boy"
            />
            <div className="pull-right">
              <h3>
                <span className="color-warning">FREE</span>
              </h3>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Takeover;
