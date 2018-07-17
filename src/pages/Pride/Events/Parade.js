import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Parade extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-22T09:00">September 22<span className="day"> Saturday</span> 9:00 AM</time>
          <i className="ms-timeline-point bg-danger"></i>
        </div>
        <div className="card card-danger">
          <div className="card-header">
            <h3 className="card-title">Charleston Pride Parade @ 9:00 AM | Downtown Charleston </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <p>This is a Pride parade like no other. Join crowds of people lining King Street as our parade runs right through the heart of downtown Charleston. Stepping off at 9:00 am, the parade route goes from Ann Street down King Street to Broad Street and then to Colonial Lake.</p>
              </div>
            </div>
            <Link to="/events/pride/parade" className="btn btn-raised btn-danger animated fadeInUp animation-delay-10">
              <i className="fa fa-flag"></i> More Info</Link>
            <div className="pull-right">
              <h3 ><span className="color-danger">FREE</span></h3>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Parade;