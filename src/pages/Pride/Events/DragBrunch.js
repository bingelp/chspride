import React, { Component } from 'react';
import { ExternalLink, ExternalBtn} from '../../../components/LinkUtil'
import tabbuli from '../Assets//tabbuli.jpg'

class DragBrunch extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-16T11:00">September 16<span className="day"> Sunday</span> 11:00 AM</time>
          <i className="ms-timeline-point bg-success"></i>
        </div>
        <div className="card card-success">
          <div className="card-header">
            <h3 className="card-title">Drag Brunch @ 11:00 AM - 2:00 PM | Haus of Tabbuli - Tabbuli Grill </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img src={tabbuli} alt="" className="img-fluid mb-2"></img> </div>
              <div className="col-md-8">
                <p>Come kick back with us and sip mimosas, gulp bloody marys, and watch a fabulous drag show hosted by Symone N. O’Bishop.  Enjoy Tabbuli’s fabulous brunch buffet, listen to beat from DJ Beck Danger and take in all the sights and sounds of the Haus of Tabbuli. </p>
                <ExternalLink to="https://goo.gl/maps/6vM5HDnfMfw" title="6 N Market St, Charleston, SC" />
              </div>
            </div>
            <ExternalBtn to="http://tabbuli.com/" icon="globe" title="Tabbuli" color="success" />
            <div className="pull-right">
              <h3 ><span className="color-success">FREE</span> Admission</h3>

            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default DragBrunch;