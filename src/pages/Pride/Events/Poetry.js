import React, { Component } from 'react';
import { ExternalLink, ExternalBtn } from '../../../components/LinkUtil'

class Poetry extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-18T17:00">September 18<span className="day"> Tuesday</span> 5:00 PM</time>
          <i className="ms-timeline-point bg-info"></i>
        </div>
        <div className="card card-info">
          <div className="card-header">
            <h3 className="card-title">OUT Spoken @ 5:00 PM | REDUX, Charleston  </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h4>Presented by Condon Family Law and Charleston Pride</h4>
                <p>Enjoy an evening of spoken word and poetry. This artisitic form continues to be a creative outlet for communities across the world and right here in Charleston. Come hear from local talent and share your own work during open mic time. Cocktail hour at 5 pm, show starts at 6 pm.</p>
                <ExternalLink to="https://goo.gl/maps/ExJArKBVap32" title="1056 King St, Charleston" />
              </div>
            </div>
            <ExternalBtn to="http://reduxstudios.org/" icon="globe" color="info" title="Redux" />
            <div className="pull-right">
              <h3 ><span className="color-info">FREE</span></h3>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Poetry;