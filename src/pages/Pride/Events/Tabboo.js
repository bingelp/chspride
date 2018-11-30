import React, { Component } from 'react';
import { ExternalLink, ExternalBtn} from '../../../components/LinkUtil'
import tabbuli from '../Assets/tabbuli.jpg'

class Tabboo extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-19T22:00">10:00 PM</time>
          <i className="ms-timeline-point bg-success"></i>
        </div>
        <div id="tabboo" className="card card-success">
          <div className="card-header">
            <h3 className="card-title">Tabboo Tuesday @ 10:00 PM | Haus of Tabbuli - Tabbuli Grill </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img src={tabbuli} alt="" className="img-fluid mb-2"></img> </div>
              <div className="col-md-8">
                <p>Tuesdays are always tabboo at Tabbuli. Don't ever be afraid to be you. Join us tonight and take in the Tabbuli experience.</p>
                <p>peace love tabbuli</p>
                <ExternalLink to="https://goo.gl/maps/6vM5HDnfMfw" title="6 N Market St, Charleston" />
              </div>
            </div>
            <ExternalBtn to="http://tabbuli.com/" icon="globe" title="Tabbuli" color="success" />
            <div className="pull-right">
              <h3 >Cover: 18+ <span className="color-success">$10</span>, 21+ <span className="color-success">$5</span></h3>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Tabboo;