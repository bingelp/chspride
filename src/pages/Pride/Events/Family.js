import React, { Component } from "react";
import { ExternalLink, ExternalBtn } from "../../../components/LinkUtil";
import hub from "../Assets/EqualityHub.png";

class Family extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2019-10-09T15:00">
            September 9<span className="day"> Monday</span> 3:00 PM
          </time>
          <i className="ms-timeline-point" />
        </div>
        <div className="card card-primary" id="equalityhub">
          <div className="card-header">
            <h3 className="card-title">
              Family Night @ 3:00 PM - 8:00 PM | Equality Hub{" "}
            </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={hub}
                  alt="Equality Hub Logo"
                  className="img-fluid mb-2"
                />
                <ul>
                  <li>3:00 PM – Photography Sessions, 15 min.</li>
                  <li>5:30 PM – Light Snacks &amp; Refreshments</li>
                  <li>6:00 PM – Additional Pride Week Details</li>
                  <li>6:15 PM – Family Movie Night</li>
                </ul>
              </div>
              <div className="col-md-8">
                <p>
                  Come one, come all to visit the Equality Hub, a communal space
                  produced by Charleston Pride and the Alliance For Full
                  Acceptance, for a family-friendly Pride Week event, featuring
                  15-minute Mini Sessions with Charles Merry of CMPhotography,
                  complimentary refreshments, a family-friendly movie and
                  additional details on Pride Week events!
                </p>
                <p>
                  We want to ensure that LGBTQ+ families – as well as their
                  Allies – have access to Lowcountry photography services that
                  are inclusive and supportive of everyone! 15-minute Mini
                  Sessions with CMPhotography are <strong>FREE</strong> of
                  charge. Donations to Charleston Pride, in lieu of a
                  photography retainer, are encouraged.
                </p>
                <p>
                  Please note: At this time, only 12 Mini Session spots are
                  available; spots must be registered in advance. Send an email
                  to{" "}
                  <a href="mailto:info@charlestonpride.org">
                    info@charlestonpride.org
                  </a>{" "}
                  to reserve your spot today. Canceled spots will be filled.
                  Complimentary refreshments will be first come, first serve.
                  All ages are welcome!
                </p>

                <ExternalLink
                  to="https://goo.gl/maps/Qwr4U75XYCA52bHa6"
                  title="1801 Reynolds Ave, North Charleston"
                />
              </div>
            </div>
            <ExternalBtn
              to="http://chsequalityhub.org/"
              icon="globe"
              title="Equality Hub"
              color="primary"
            />
            <div className="pull-right">
              <h3>
                <span className="color-primary">FREE</span>
              </h3>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Family;
