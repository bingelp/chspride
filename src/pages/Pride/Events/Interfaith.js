import React, { Component } from 'react';
import { ExternalLink, ExternalBtn } from '../../../components/LinkUtil'

class Interfaith extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-16T17:00">5:00 PM</time>
          <i className="ms-timeline-point bg-royal"></i>
        </div>
        <div id="interfaith" className="card card-royal">
          <div className="card-header">
            <h3 className="card-title">Pride Interfaith Service @ 5:00 PM | St. Stephen's Episcopal Church </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <p>Join us for Charleston’s Interfaith Lesbian, Gay, Bisexual, Transgender, and Queer Pride Service. The service is open to Charlestonians of every faith and philosophy.  Welcoming and affirming religious leaders will be there as we celebrate or diversity and commit ourselves to work for equal dignity and justice for all.  All are welcome.</p>
                <ExternalLink to="https://goo.gl/maps/1XgcfFhdJGD2" title="67 Anson St, Charleston" />
              </div>
            </div>
            <ExternalBtn to="http://www.ststephenscharleston.org/" icon="globe" title="St. Stephen's Episcopal Church" color="royal" />
            <div className="pull-right">
              <h3 ><span className="color-royal">FREE</span></h3>
            </div>
            <h3 className="color-royal" >Postponed. Details coming soon.</h3>
          </div>
        </div>
      </li>
    );
  }
}

export default Interfaith;