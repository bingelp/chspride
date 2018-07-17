import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Prism extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-22T21:00">9:00 PM</time>
          <i className="ms-timeline-point bg-warning"></i>
        </div>
        <div className="card card-warning">
          <div className="card-header">
            <h3 className="card-title">Charleston Pride Prism Party @ 9:00 PM - 1:30 AM | Music Farm, Charleston </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <p>We painted the town every color of the rainbow this year and it's time to show Charleston how beautiful life can be when those colors come together! You won't want to miss the Charleston Pride Prism Party as we close out a fantastic week of celebrating our Pride" Location Music Farm (32 Ann St. Charleston, SC) Tickets and details coming soon.</p>
              </div>
            </div>
            <Link to="/events/pride/prism-party" className="btn btn-raised btn-warning animated fadeInUp animation-delay-10">
              <i className="fa fa-ticket"></i> Tickets</Link>
            <div className="pull-right">
              <h3 ><span className="color-warning">$20</span></h3>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Prism;