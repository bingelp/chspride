import React, { Component } from "react";
import { ExternalBtn } from "../../../components/LinkUtil";

class Twerk extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-13T18:00">
            September 13<span className="day"> Friday</span> 6:00 PM
          </time>
          <i className="ms-timeline-point" />
        </div>
        <div id="symposium" className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">
              Twerk &amp; Twirl 101 @ 6:00 PM | Arthur W. Christopher Community
              Complex
            </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h2 className="text-center">
                  <small>Featuring</small>
                  <br />
                  The Holy City Twirlers &amp; Latrice Royale
                </h2>
                <p>
                  <strong>
                    The Ryan White Wellness Center of Roper St. Francis
                    Healthcare
                  </strong>{" "}
                  and the <strong>Holy City Twirlers</strong> invite you to
                  their official PRIDE color guard training session class with
                  special guest and veteran color guard, Rupaul’s Drag Race star{" "}
                  <strong>Latrice Royale</strong>.
                </p>
                <p>
                  This event will start with a fun high energy twerk 101
                  provided by <strong>Tipsy Twerk</strong> ending with a
                  hands-on color guard tutorial with Latrice and her Holy City
                  friends – learn some of the routine will also be featured
                  during this year’s PRIDE parade.
                </p>
                <p>
                  Ticket sales will support HIV care and prevention services
                  (PrEP, PEP) at the Ryan White Wellness Center. The center is
                  the tricounty’s only one-stop-shop for low-to-no cost
                  comprehensive and high quality sexual health care.{" "}
                </p>
                <p>
                  Admission is $20 and practice flags will be provided by the
                  Holy City Twirlers.
                </p>
                <p>
                  Special thanks to corporate sponsor Longs Drugs, the center’s
                  onsite specialty pharmacy provider.
                </p>
                <p>
                  For more information, contact Topher Larkin at
                  topher.larkin@rsfh.com or visit the center’s Facebook page
                  (https://www.facebook.com/theryanwhitewellnesscenter/)
                </p>
                <p>
                  Classes are open to all ages and fitness levels. Please twerk
                  and twirl responsibly.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <ExternalBtn
                  to="https://www.eventbrite.com/e/twerk-twirl-101-w-the-holy-city-twirlers-latrice-royale-tickets-63672683711"
                  icon="ticket"
                  title="Tickets"
                  color="primary"
                />
                <div className="pull-right">
                  <h3>
                    <span className="color-primary">$20</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Twerk;
