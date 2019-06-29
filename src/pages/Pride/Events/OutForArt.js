import React, { Component } from "react";
import { ExternalLink, ExternalBtn } from "../../../components/LinkUtil";
import miller from "../Assets/miller.png";

class OutForArt extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-11T17:30">
            September 11<span className="day"> Wednesday</span> 5:30 PM
          </time>
          <i className="ms-timeline-point bg-warning" />
        </div>
        <div id="out-for-are" className="card card-warning">
          <div className="card-header">
            <h3 className="card-title">
              Out for Art @ 5:30 PM | Miller Gallery
            </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col text-center">
                <img
                  id="miller"
                  src={miller}
                  alt="Miller Gallery logo"
                  className="img-fluid mb-2"
                />
                <p>
                  Celebrate LGBTQIA+ female artists with a special exhibit
                  featuring works by <strong>Jo Hay</strong>, followed by a
                  screening of the documentary <em>She is Juiced</em> and a
                  Q&amp;A with Hay and filmmaker
                  <strong> Lois Norman</strong>.
                </p>
                <p>
                  The film features four LGBTQIA+ female artists and their work
                  - exploring how we express all of who we are, and all of who
                  we can dare to be.
                </p>
                <ExternalLink
                  to="https://g.page/millergallerychs?share"
                  title="149 1/2 E Bay St, Charleston"
                />
              </div>
            </div>
            <ExternalBtn
              to="https://www.millergallerychs.com/"
              icon="globe"
              color="warning"
              title="Miller Gallery"
            />
            <div className="pull-right">
              <h3>
                <span className="color-warning">FREE</span>, 18+
              </h3>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default OutForArt;
