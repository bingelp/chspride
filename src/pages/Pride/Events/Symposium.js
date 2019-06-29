import React, { Component } from "react";

class Symposium extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-12T18:00">
            September 12<span className="day"> Thursday</span> 6:00 PM
          </time>
          <i className="ms-timeline-point" />
        </div>
        <div id="symposium" className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">
              Criminal Justice Panel Discussion w/ Latrice Royale &amp; ACLU @
              7:00 PM - 9:00 PM | TBD
            </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <p>
                  Voting rights and voter suppression has been a hot topic in
                  the recent election cycle. The consequence of disenfranchising
                  voters, especially within communities of color have a lasting
                  impact on issues regarding health care/health inequities,
                  affordable housing, immigration, LGBTQ rights, and other
                  discriminations.
                </p>
                <p>
                  Moderated by the ACLU, panelist will include members of the
                  Charleston community and local activist ranging from topics of
                  with special guest Timothy Wilcots, better known as RuPaul
                  Drag Race’s Latrice Royale, who has their own story to tell
                  about voting rights for the formerly incarcerated and
                  experiences in prison as an LGBTQ person of color.
                </p>
                <p>
                  This event is free and open to the public. All are welcome.
                  ACLU will be on hand before and after the event to encourage
                  voter registration.
                </p>
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
