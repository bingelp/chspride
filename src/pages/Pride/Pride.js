import React, { Component } from "react";
import Sponsors from "../Sponsors/SponsorHero";
import "./Pride.css";
import GetInvolved from "../../components/GetInvolved/GetInvolved";
import bridge from "./Assets/bridge.png";

class Pride extends Component {
  Header() {
    return (
      <div className="ms-hero ms-hero-page-override ms-hero-bg-warning">
        <div className="container">
          <div className="text-center">
            <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
              2020
            </h1>
            <h1 className="bride color-warning">BRIDGE THE GAP</h1>
            <h2 className="color-white text-center center-block mw-800 fw-300 animated fadeInUp animation-delay-7">
              August 22-29, 2020
            </h2>
          </div>
        </div>
      </div>
    );
  }

  Details() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-7">
              <h1>Saturday, August 29, 2020</h1>
              <h2>Pride Parade</h2>
              <h2>Festival</h2>
              <h2>Prism</h2>
              <h3 className="color-primary">More Details Coming Soon</h3>
            </div>
            <div className="col-md-5">
              <img src={bridge} className="img-fluid" alt="Bridge the Gap" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id="pride">
        <this.Header />
        <Sponsors />

        <div className="container text-center">
          <this.Details />
          <div className="card my-5">
            <div className="card-body">
              <GetInvolved />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pride;
