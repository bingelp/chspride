import React from "react";
import "./Home.css";
import Sponsors from "../Sponsors/SponsorHero";
import CountdownClock from "../../components/CountdownClock";
import GetInvolved from "../../components/GetInvolved/GetInvolved";
import { ButtonLink } from "../../components/LinkUtil";
import bridge from "./bridge.png";

class Home extends React.Component {
  Countdown() {
    return (
      <div className="wrap ms-hero-bg-success ms-hero-img-stage">
        <div className="container text-center">
          <h1 className="color-white mb-1">Charleston Pride Week 2019</h1>
          <h2 className="color-white mb-1">September 7-14, 2019</h2>
          <CountdownClock eventTime="2019-09-07T09:00:00-04:00" color="white">
            <h2 className="color-white mb-1">Happy Pride!</h2>
          </CountdownClock>
          <ButtonLink to="/pride" icon="flag" color="success">
            More Info
          </ButtonLink>
        </div>
      </div>
    );
  }

  Apply() {
    return (
      <div className="wrap ms-hero-bg-success ms-hero-img-stage">
        <div className="container text-center">
          <h1 className="color-white mb-1">
            Help Make Charleston Pride Week 2020 The Best One Yet!{" "}
          </h1>
          <h2 className="color-white mb-1">Serve on the Board</h2>
          <ButtonLink to="/serve-on-the-board" icon="pencil" color="success">
            Apply
          </ButtonLink>
        </div>
      </div>
    );
  }

  Mission() {
    return (
      <div className="wrap ms-hero-bg-dark ms-hero-img-rainbow">
        <div className="container">
          <div className="row">
            <div className="col align-self-center">
              <h3 className="color-white text-center m-3 ">
                Our mission is to promote the visibility of the{" "}
                <span className="initialism">
                  <span>L</span>
                  <span>G</span>
                  <span>B</span>
                  <span>T</span>
                  <span>Q</span>
                </span>{" "}
                community by educating society, honoring our heritage,
                advocating for our culture, and celebrating our diverse society.
              </h3>
              <h3 className="color-white text-center m-3 d-none d-lg-block">
                Our purpose is to highlight the uniqueness and diversity of our
                community through distinct events throughout the year promoting
                our history and culture, including the annual Charleston Pride
                Parade and Festival
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }

  Hero() {
    return (
      <div>
        <div className="ms-hero-page ms-hero-img-crowd ms-hero-bg-primary color-white intro-hero-full">
          <div className="intro-hero-full-content">
            <div className="container text-center">
              <span className="ms-hero-logo" />
              <h1>BRIDGE THE GAP</h1>
              <h1 className="animated fadeInUp animation-delay-5 small-caps">
                Charleston{" "}
                <span className="initialism">
                  <span>P</span>
                  <span>r</span>
                  <span>i</span>
                  <span>d</span>
                  <span>e</span>
                </span>
              </h1>

              <h2 className="no-m ms-site-title color-white center-block mt-2 animated zoomInUp animation-delay-5">
                Pride Week: August 22-29 2020
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }

  Bridge() {
    return (
      <div className="container my-5">
        <div className="row jumbotron bg-white " id="bridge">
          <div className="col-12 text-center">
            <img src={bridge} className="img-fluid" alt="Bridge the Gap" />
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <this.Hero />
        <Sponsors />
        <GetInvolved />
        <this.Bridge />
        <this.Mission />
      </div>
    );
  }
}
export default Home;
