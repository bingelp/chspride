import React, { Component } from "react";
import { Link } from "react-router-dom";
import todrick from "../Assets/todrick.jpg";

class Festival extends Component {
  render() {
    return (
      <li className="ms-timeline-item wow materialUp">
        <div className="ms-timeline-date">
          <time className="timeline-time" dateTime="2019-10-14T10:00">
            10:00 AM
          </time>
          <i className="ms-timeline-point bg-success" />
        </div>
        <div id="festival" className="card card-success">
          <div className="card-header">
            <h3 className="card-title">
              Charleston Pride Festival @ 10:00 AM - 3:00 PM | Brittlebank Park
            </h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={todrick}
                  alt="Todrick Hall"
                  className="img-fluid mb-2"
                />
              </div>
              <div className="col-md-8">
                <h4>Headlining: Todrick Hall</h4>
                <p>
                  Head to Brittlebank Park, beside the beautiful Ashley River,
                  to walk among vendors, food trucks, and beer and alcohol
                  sales, all while taking in entertainment and speakers from the
                  stage. Nothing says Pride like a day in the park. Show your
                  Pride and plan to celebrate! Also featuring entertainment by
                  DJ Beck Danger and the Empress and Emperor of Charleston
                  Pride!
                </p>
              </div>
            </div>
            <Link
              to="/festival"
              className="btn btn-raised btn-success animated fadeInUp animation-delay-10"
            >
              <i className="fa fa-map" /> More Info
            </Link>
            <div className="pull-right">
              <h3>
                <span className="color-success">FREE</span>
              </h3>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Festival;
