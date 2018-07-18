import React, { Component } from 'react';
import { ExternalLink, ExternalBtn} from '../../../components/LinkUtil'
import dudleys from '../Assets/dudleys.jpg'

class Patti extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2018-10-20T22:00">10:00 PM</time>
          <i className="ms-timeline-point bg-royal"></i>
        </div>
        <div className="card card-royal">
          <div className="card-header">
            <h3 className="card-title">Patti O'Furniture Show @ 10:00 PM | Dudleys on Ann </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img src={dudleys} alt="Dudley's Logo" className="img-fluid mb-2"></img> </div>
              <div className="col-md-8">
                <p>Thursdays mean one thing: The Patti O'Furniture Show LIVE at 11pm. Her mix of drag, comedy, quirky costumes, and quick wit have been entertaining audiences since 1998. Welcome to the world of comedy coture that is the "Yard Sale with Legs!" </p>
                <ExternalLink to="https://goo.gl/maps/Jk8Z4Zsapu12" title="42 Ann St, Charleston" />
              </div>
            </div>
            <ExternalBtn to="https://www.dudleysonann.com/" icon="globe" title="Dudley's on Ann" color="royal" />
            <div className="pull-right">
              <h3 ><span className="color-royal">FREE</span>, 21+</h3>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Patti;