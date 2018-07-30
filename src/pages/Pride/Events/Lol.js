import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { ExternalBtn } from '../../../components/LinkUtil'

class Lol extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-20T20:00">September 20<span className="day"> Thursday</span> 8:00 PM</time>
          <i className="ms-timeline-point bg-warning"></i>
        </div>
        <div className="card card-warning">
          <div className="card-header">
            <h3 className="card-title">LGBTLOL @ 8:00 PM | Charleston Music Hall </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h4>Presented by <abbr title="Alliance For Full Acceptance">AFFA</abbr> and Charleston Pride</h4>
                <p>Come celebrate humanity and show your Pride at a night of comedy featuring some of your favorite stand-up comics, who also just happen to be members of the LGBTQ community.</p>
                <p>Comedians: Jenn Snyder, Shawna Jarrett, Kevin Delgado, Robyn Scott, Sam Reisman</p>
                <p>Host: Curt Mariah</p>
                <p>Also featuring DJ Pat Nasty</p>
                <h3><span className="color-warning">$10</span> with code: <span className="color-warning">affapride</span></h3>
              </div>
            </div>
            <div className="row">
              <div className="col">
              <Link to="/events/pride/lgbtlol" className="btn btn-raised color-warning btn-white animated fadeInUp animation-delay-7">
              <i className="fa fa-info-circle"></i> More Info</Link>
            <ExternalBtn to="https://www.ticketfly.com/purchase/event/1734208" icon="ticket" title="Tickets" color="warning"/>
            <h3 className="pull-right"><span className="color-warning">$15</span> </h3>
              </div>
            </div>

            <p>This event is <strong>FREE</strong> for <Link to="/friends-of-pride">Friends of Pride</Link>.</p>
          </div>
        </div>
      </li>
    );
  }
}

export default Lol;