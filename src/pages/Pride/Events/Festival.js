import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Festival extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-22T11:00">11:00 AM</time>
          <i className="ms-timeline-point bg-success"></i>
        </div>
        <div className="card card-success">
          <div className="card-header">
            <h3 className="card-title">Charleston Pride Festival @ 11:00 AM - 3:00 PM | Brittlebank Park, Charleston </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <p>Headlining: Betty Who and Le1f. Head to Brittlebank Park, beside the beautiful Ashley River, to walk among vendors, food trucks, and beer and alcohol sales, all while taking in entertainment and speakers from the stage. Nothing says Pride like a day in the park. Show your Pride and plan to celebrate! Also featuring entertainment by DJ Beck Danger and the Empress and Emperor of Charleston Pride!</p>
              </div>
            </div>
            <Link to="/events/pride/festival" className="btn btn-raised btn-success animated fadeInUp animation-delay-10">
              <i className="fa fa-map"></i> More Info</Link>
            <div className="pull-right">
              <h3 ><span className="color-success">FREE</span></h3>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Festival;