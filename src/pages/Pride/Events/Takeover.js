import React, { Component } from 'react';
import { ExternalBtn} from '../../../components/LinkUtil'
import takeover from '../Assets/takeover.jpg'

class Takeover extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
      <div className="ms-timeline-date">
        <time className="timeline-time" dateTime="2018-10-21T18:00">September 21<span className="day"> Friday</span> 6:00 PM</time>
        <i className="ms-timeline-point bg-info"></i>
      </div>
      <div id="takeover" className="card card-info">
        <div className="card-header">
          <h3 className="card-title">Takeover Charleston @ 6:00 PM - 10:00 PM | Taco Boy </h3>
        </div>
        <div className="card-body">
          <div className="row">
          <div className="col-md-4">
                <img src={takeover} alt="" className="img-fluid mb-2"></img> </div>
              <div className="col-md-8">
              <p>Takeover is <strong>always</strong> a great time, but this year they are pulling out some surprises. DJ Trevor D is spinning the beats as you enjoy the best tacos and cocktails in Charleston. A portion of sales benefit Charleston Pride!</p>
              </div>
          </div>
          <ExternalBtn to="https://www.tacoboy.net/" icon="globe" color="info" title="Taco Boy" />
          <div className="pull-right">
            <h3 ><span className="color-info">FREE</span></h3>
          </div>
        </div>
      </div>
    </li>
    );
  }
}

export default Takeover;