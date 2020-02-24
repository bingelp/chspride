import React, { Component } from "react";
import Sponsors from "../Sponsors/SponsorHero";
import "./Pride.css";
import Tour from "./Events/Tour";
import Interfaith from "./Events/Interfaith";
import Tabboo from "./Events/Tabboo";
import Symposium from "./Events/Symposium";
import Wig from "./Events/Wig";
import Lol from "./Events/Lol";
import Patti from "./Events/Patti";
import Takeover from "./Events/Takeover";
import Parade from "./Events/Parade";
import Festival from "./Events/Festival";
import Prism from "./Events/Prism";
import Hotel from "./Accomodations/Hotel";
import Toast from "./Accomodations/ToastToEquality";
import Rhapsody from "./Events/Rhapsody";
import Picnic from "./Events/Picnic";
import Family from "./Events/Family";
import Trivia from "./Events/Trivia";
import OutForArt from "./Events/OutForArt";
import Twerk from "./Events/Twerk";
import Disco from "./Events/Disco";
import LastCall from "./Events/LastCall";

class PreviousPride extends Component {
  Header(props) {
    return (
      <div className="ms-hero ms-hero-page-override ms-hero-bg-warning">
        <div className="container">
          <div className="text-center">
            <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
              Charleston Pride 2019
            </h1>
            <h2>
              <span className="typed-class typed-block color-warning" />
              <span className="typed-cursor color-white">|</span>
            </h2>
            <h2 className="lead color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
              September 7-14, 2019
            </h2>
            {/* <ButtonLink to="/pride-guide" icon="book" color="warning">
              Pride Guide
            </ButtonLink> */}
          </div>
        </div>
      </div>
    );
  }

  Calendar(props) {
    return (
      <div className="col-lg-8">
        <h1>Schedule of Events</h1>
        <ul className="ms-timeline">
          <Rhapsody />
          <Takeover />
          <Picnic />
          <Tour />
          <Interfaith />
          <Family />
          <Trivia />
          <Tabboo />
          <OutForArt />
          <Wig />
          <Symposium />
          <Patti />
          <Twerk />
          <Lol />
          <Disco />
          <Parade />
          <Festival />
          <Prism />
          <LastCall />
        </ul>
      </div>
    );
  }

  Accommodations(props) {
    return (
      <div className="col-lg-4">
        <h2>Hotel and Accommodations</h2>
        <Hotel />
        <Toast />
      </div>
    );
  }

  Dorian() {
    return (
      <div className="alert alert-danger">
        <h1>
          <span className="fa fa-exclamation-triangle" /> The following events
          have been canceled due to Hurricane Dorian:
        </h1>
        <ul>
          <li>
            <h3>AFFA Pride Family Picnic</h3>
          </li>
          <li>
            <h3>Real Rainbow Row Tour</h3>
          </li>
          <li>
            <h3>A Celebration of Pride and Faith</h3>
          </li>
        </ul>
        <h4>
          Stay tuned to{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://www.facebook.com/charlestonpride"}
          >
            Facebook
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://www.instagram.com/charlestonpride"}
          >
            Instagram
          </a>{" "}
          for the latest announcements and please stay safe out there!
        </h4>
      </div>
    );
  }

  render() {
    return (
      <div id="pride">
        <this.Header />
        <Sponsors />

        <div className="container">
          <div className="row">
            <this.Calendar />
            <this.Accommodations />
          </div>
        </div>
      </div>
    );
  }
}

export default PreviousPride;
