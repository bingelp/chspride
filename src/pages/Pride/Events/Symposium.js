import React, { Component } from 'react';
import { ExternalLink } from '../../../components/LinkUtil'

class Symposium extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-19T14:00">September 19<span className="day"> Wednesday</span> 6:00 PM</time>
          <i className="ms-timeline-point"></i>
        </div>
        <div id="symposium" className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">State of the Community Symposium @ 6:00 PM - 8:00 PM | Hotel Indigo, Mt. Pleasant </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
              <p>For the first time local leaders and activists come together to assess the state of the LGBT community in Charleston. Charleston Pride is proud to be joined by the <ExternalLink to="https://www.affa-sc.org/" title="Alliance For Full Acceptance"/>, <ExternalLink to="http://www.waf.org/" title="We Are Family"/>, <ExternalLink to="http://palmettocommunitycare.org/" title="Palmetto Community Care"/>, and others in exploring the challenges and achievements of the past year while also looking ahead to the future. Following statements from each of the organizations, we invite attendees to participate in a town hall discussion session. Come prepared with any questions you've been wanting to ask!</p>
              <p>Opening with a review of the history of the LGBT movement led by Dr. Butler of the <ExternalLink to="https://www.ccpl.org/" title="Charleston County Public Library" />, the State of the Community Symposium will be held at the Hotel Indigo in Mt. Pleasant with a cash bar available.</p>
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