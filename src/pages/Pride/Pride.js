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
import Typed from "typed.js";
import WOW from "wowjs";

class Pride extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false
    }).init();

    let options = {
      strings: [
        "10 Years of Celebration",
        "10 Years of Progress",
        "10 Years of Pride"
      ],
      typeSpeed: 80,
      startDelay: 1000,
      loop: true,
      backDelay: 1000,
      autoInsertCss: false,
      showCursor: false
    };
    this.typed = new Typed(".typed-class", options);
  }
  componentWillUnmount() {
    this.typed.destroy();
  }

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

  Accomodations(props) {
    return (
      <div className="col-lg-4">
        <h2>Hotel and Accomodations</h2>
        <Hotel />
        <Toast />
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
            <this.Accomodations />
          </div>
        </div>
      </div>
    );
  }
}

export default Pride;
