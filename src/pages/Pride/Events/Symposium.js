import React, { Component } from 'react';

class Symposium extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-19T14:00">September 19<span className="day"> Wednesday</span> 6:00 PM</time>
          <i className="ms-timeline-point"></i>
        </div>
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">State of the Community Symposium @ 6:00 PM - 8:00 PM | Hotel Indigo, Mt. Pleasant </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <p>Details coming soon</p>
              </div>
            </div>
            <div className="pull-right">
              <h3 ><span className="color-primary">FREE</span></h3>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Symposium;