import React, { Component } from 'react';
import { ExternalLink, ExternalBtn } from '../../../components/LinkUtil'
import redux from '../Assets/redux.png'

class Paris extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-17T16:30">September 17<span className="day" > Monday</span> 6:30 PM</time>
          <i className="ms-timeline-point bg-warning"></i>
        </div>
        <div className="card card-warning">
          <div className="card-header">
            <h3 className="card-title"><em>Paris is Burning</em> Screening @ 6:30 PM | REDUX, Charleston </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col text-center">
                <img id="redux" src={redux} alt="Redux logo" className="img-fluid mb-2"></img>
                <p><em>Paris is Burning</em> is an iconic, award-winning documentary about the ball community in New York City in the 1980s. It explores issues of gender, race and class identity facing the LGBTQ community that are as relevant today as they were then.</p>
                <p>After the screening, please join us for a conversation with <strong>Jr. LaBeija</strong>, ball commentator and star of <em>Paris is Burning</em>, and <strong>Vanity Reid Deterville</strong>, Charleston Pride Director of Outreach, local activist and political science student. They will discuss the film’s influence on the lives of queer and transgender people of color, and how ball culture has evolved since the film’s release.</p>
                <p>Doors open at 6:00 pm, screening starts at 6:30 pm.</p>
                <ExternalLink to="https://goo.gl/maps/ExJArKBVap32" title="1056 King Street, Charleston" />
              </div>
            </div>
            <ExternalBtn to="http://reduxstudios.org/" icon="globe" color="warning" title="Redux" />
            <div className="pull-right">
              <h3 ><span className="color-warning">FREE</span></h3>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Paris;