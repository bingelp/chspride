import React, { Component } from 'react';
import { ExternalLink} from '../../../components/LinkUtil'
import { Link } from 'react-router-dom'
// import cruise from '../Assets/prideOnHarbor_400x150.jpg'

class PrideOnHarbor extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-15T19:00"><span className="date">September 15<span className="day"> Saturday</span></span> 7:00 PM</time>
          <i className="ms-timeline-point"></i>
        </div>
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Pride on the Harbor @ 7:00-10:30pm | Aquarium Wharf</h3>
          </div>
          {/* <img src={cruise} alt="Pride on the Harbor Logo" className="mb-2"></img> */}
          <div className="card-body">
            <div className="row">
              <div className="col">
              <p>Come sail away with Charleston Pride! The evening will feature hors d’oeuvres, an open bar courtesy of Breakthru Beverage South Carolina, and DJ K spinning the beats on this three hour harbor cruise! This boat features two levels with an air-conditioned floor and an open air top deck. This is an event you won’t want to miss! All you need is a ticket and we will provide the rest! Boarding will begin at 7:00pm at the Aquarium Wharf. The boat will depart at 7:30 pm and will return at 10:30 pm. Space is limited so make sure you get your tickets early. All proceeds benefit Charleston Pride and help to make Pride possible!</p>
              <ExternalLink to="https://www.google.com/maps/place/360+Concord+St,+Charleston,+SC+29401/" title="360 Concord St, Charleston, SC" />
              </div>
            </div>
            <Link to="/events/pride-on-the-harbor" className="btn btn-raised btn-info animated fadeInUp animation-delay-10">
              <i className="fa fa-ticket"></i> Tickets</Link>
            <h3 className="pull-right"><span className="color-primary">$45</span>, 21+</h3>
          </div>
        </div>
      </li>);
  }
}

export default PrideOnHarbor;