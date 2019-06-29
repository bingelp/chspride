import React, { Component } from "react";
import { ExternalLink, ExternalBtn } from "../../../components/LinkUtil";
import affa from "../Assets/affa.png";

class Picnic extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2019-10-08T13:00">
            September 8<span className="day"> Sunday</span> 1:00 PM
          </time>
          <i className="ms-timeline-point bg-royal" />
        </div>
        <div id="picnic" className="card card-royal">
          <div className="card-header">
            <h3 className="card-title">
              AFFA Pride Family Picnic @ 1:00 PM - 4:00 PM | RiverFront Park
            </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={affa}
                  alt="Dudley's Logo"
                  className="img-fluid mb-2"
                />{" "}
              </div>
              <div className="col-md-8">
                <p>
                  Families, whether given or chosen, come in all shapes and
                  sizes. Join the Alliance For Full Acceptance for an afternoon
                  of fun for all ages as we celebrate the kickoff of Charleston
                  Pride! There will be games and activities for children and
                  plenty of time for community members to socialize in a fun and
                  welcoming
                </p>
                <ExternalLink
                  to="https://goo.gl/maps/MtEyCWDRaK6hSz136"
                  title="1061 Everglades Ave, North Charleston"
                />
              </div>
            </div>
            <ExternalBtn
              to="https://www.affa-sc.org/"
              icon="globe"
              title="AFFA"
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

export default Picnic;
