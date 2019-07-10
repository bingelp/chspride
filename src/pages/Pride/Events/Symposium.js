import React, { Component } from "react";
import { ExternalLink, ExternalBtn } from "../../../components/LinkUtil";

class Symposium extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-12T18:00">
            September 12<span className="day"> Thursday</span> 7:00 PM
          </time>
          <i className="ms-timeline-point" />
        </div>
        <div id="symposium" className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">
              Criminal Justice Panel Discussion @ 7:00 PM - 9:00 PM | Hollings
              Science Center, Room 101
            </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h2 className="text-center">
                  <small>Special Guest</small>: Latrice Royale
                </h2>
                <h2 className="text-center">
                  <small>Moderated By</small>: ACLU
                </h2>
                <p>
                  Join the ACLU of South Carolina in a panel discussion about
                  civil liberties issues affecting LGBTQ people. Hosted in
                  partnership with the Ryan White Wellness Center and Charleston
                  Pride, this event will feature special guest Timothy Wilcots,
                  better known as RuPaul Drag Race's Latrice Royale, who will
                  share their story about experiencing the criminal justice
                  system as an LGBTQ person of color.
                </p>
                <p>
                  Prior to and following the event, the ACLU of SC will provide
                  voter registration and information.
                </p>
                <p>
                  This event is free and open to the public. All are welcome.
                  Doors open at 6:30 PM.
                </p>
                <ExternalLink
                  to="https://goo.gl/maps/iFcdWzE7dcDhF9pD6"
                  title="58 Coming St, Charleston"
                />
              </div>
            </div>
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

export default Symposium;
