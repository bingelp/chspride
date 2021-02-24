import React from "react";
import "./Home.css";
import CountdownClock from "../../components/CountdownClock";
import GetInvolved from "../../components/GetInvolved/GetInvolved";
import { ButtonLink } from "../../components/LinkUtil";
import bridge from "./bridge.png";
import volunteer from "./volunteer.jpg";

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
            Help Make Charleston Pride Week 2021 The Best One Yet!{" "}
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

              {/* <h2 className="no-m ms-site-title color-white center-block mt-2 animated zoomInUp animation-delay-5">
                Pride Week: August 22-29 2020
              </h2> */}
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

  Board() {
    return (
      <div className="container my-5">
        <div className=" text-center">
          <div class="card card-danger">
            <div class="card-header">
              <h1 class="card-title">Volunteer Your Time and Talent</h1>
            </div>
            <div class="card-body">
              <div className="row">
                <div className="col-12 col-lg-4">
                  <img src={volunteer} className="img-fluid" alt="volunteer" />
                </div>
                <div className="col-12 col-lg-8">
                  <h3>
                    Attention Charleston! It’s a new year and a new day to be
                    proud. We survived 2020 and now is the time to show our
                    pride! LET US CELEBRATE. We are inviting you to join us in
                    welcoming a new year and a new term for the Charleston Pride
                    Board of directors. Do you have a knack for social media?
                    Technology? Events? Or maybe something new. We are seeking
                    to add your talents and passions to the 2021 Board of
                    Directors.
                  </h3>
                  <ButtonLink
                    to="/serve-on-the-board"
                    icon="pencil"
                    color="primary"
                  >
                    Apply
                  </ButtonLink>
                </div>
              </div>
            </div>

            <div class="card-footer"></div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <this.Hero />
        <this.Board />
        <GetInvolved />
        <this.Bridge />
        <this.Mission />
      </div>
    );
  }
}
export default Home;
