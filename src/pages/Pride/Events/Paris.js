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
                <p>Charleston Pride will host a screening of the culturally-rich documentary, <em>Paris is Burning</em>, and a talkback with ball commentator <strong>Junior Labeija</strong> and local activist <strong>Vanity Reid Deterville</strong>. Deterville and Labeija will discuss the film's influence on the stories and lives of queer and transgender people of color, and how the ball scene has evolved since the late '80s. </p>
                <ExternalLink to="https://goo.gl/maps/ExJArKBVap32" title="1056 King Street, Charleston, SC" />
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