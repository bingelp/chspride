import React, { Component } from 'react';
import {ExternalLink, ButtonLink } from '../../../components/LinkUtil'

class Tour extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-16T14:00">2:00 PM</time>
          <i className="ms-timeline-point bg-danger"></i>
        </div>
        <div className="card card-danger">
          <div className="card-header">
            <h3 className="card-title">Real Rainbow Row Tour @ 2:00 PM - 4:00 PM | Downtown Charleston </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <p><em>The Real Rainbow Row</em> walking tour is a <strong>fabulous</strong> two-hour interactive exploration of Charleston’s rich, gay history and current LGBTQ community. Highlights include the story of Dawn Langley Hall, one of the first transsexuals in the US, the gay artists that helped create Charleston’s Art Renaissance, the significance of The Battery in LGBT society, The Spoleto Festival, and the historic Charleston landmark where Gertrude Stein and Alice Taklas spent Valentine’s Day. Join Charleston Pride and <ExternalLink to="https://bulldogtours.com/" title="Bulldog Tours"/> as we skip along the cobblestone streets and discover the colorful stories that form a unique part of Charleston’s history.</p>
                <p>$5 of each ticket sale goes to the LGBTQ History archive at the College of Charleston.</p>
                <ExternalLink to="https://goo.gl/maps/ahE6LR7x2M82" title="18 Anson St, Charleston" />
              </div>
            </div>

            <ButtonLink to="/events/pride/real-rainbow-row-tour" icon="tickets" color="danger" >Tickets</ButtonLink>
            <div className="pull-right">
              <h3 ><span className="color-danger">$15</span></h3>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Tour;