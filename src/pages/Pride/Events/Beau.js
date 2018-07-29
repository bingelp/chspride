import React, { Component } from 'react';
import { ExternalLink, ExternalBtn} from '../../../components/LinkUtil'
import beau from '../Assets/beau_magazine.jpg'

class Beau extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-19T17:00">September 20<span className="day"> Thursday</span> 5:00 PM</time>
          <i className="ms-timeline-point"></i>
        </div>
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Beau Magazine Happy Hour @ 5:00 PM - 7:00 PM | South Seas Tiki Lounge </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img src={beau} alt="Beau Magazine Logo" className="img-fluid mb-2"></img> </div>
              <div className="col-md-8">
                <p>Join Charleston's OUT Crowd as we all toast to 2018 Charleston Pride at South Seas Tiki Lounge! This event is sponsored by BEAU Magazine so you know it'll be FUN!</p>
                <ExternalLink to="https://goo.gl/maps/xmGTZqBK9pm" title="23 Ann Street (at Camde Depot Plaza), Charleston" />
              </div>
            </div>
            <ExternalBtn to="https://beau-magazine.com/" icon="globe" title="BEAU Magazine" color="primary" />
            <div className="pull-right">
              <h3 ><span className="color-primary">FREE</span></h3>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Beau;