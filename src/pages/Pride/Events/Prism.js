import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { ExternalLink } from '../../../components/LinkUtil'

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
            <h3 className="card-title">Charleston Pride Prism Party @ 9:00 PM - 1:30 AM | Music Farm</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <p>We painted the town every color of the rainbow this year. Now, it's time to show Charleston how beautiful life can be when those colors come together! You won't want to miss the Charleston Pride Prism Party as we close out a fantastic week of celebrating Pride.</p>
                <p>Tickets and details coming soon.</p>
                <ExternalLink to="https://goo.gl/maps/DJ716VWeiSw" title="32 Ann St. Charleston" />
              </div>
            </div>
            <div className="row">
              <div className="col">
              <Link to="/events/pride/prism-party" className="btn btn-raised animated fadeInUp animation-delay-10 disabled">
              <i className="fa fa-ticket"></i> Tickets</Link>
              <em>Coming Soon</em>
              <h3 className="pull-right" ><span className="color-warning">$20</span></h3>
              </div>
            </div>
              <p>This event is <strong>FREE</strong> for <Link to="/friends-of-pride">Friends of Pride</Link>.</p>
          </div>
        </div>
      </li>
    );
  }
}

export default Prism;