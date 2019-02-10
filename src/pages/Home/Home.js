import React from "react";
import WOW from "wowjs";
import Typed from "typed.js";
import "./Home.css";
import Sponsors from "../Sponsors/SponsorHero";
import CountdownClock from "../../components/CountdownClock";
import GetInvoved from "../../components/GetInvolved/GetInvolved";
import { ButtonLink } from "../../components/LinkUtil";

class Home extends React.Component {
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

  Countdown() {
    return (
      <div className="wrap ms-hero-bg-success ms-hero-img-stage">
        <div className="container text-center">
          <h1 className="color-white mb-1">Charleston Pride Week 2018</h1>
          <h2 className="color-white mb-1">September 15-22, 2018</h2>
          <CountdownClock eventTime="2018-09-15T09:00:00-04:00" color="white">
            <h2 className="color-white mb-1">Happy Pride!</h2>
          </CountdownClock>
          <ButtonLink to="/events/pride" icon="calendar-o" color="success">
            Schedule
          </ButtonLink>
          <ButtonLink to="/pride-guide" icon="book" color="warning">
            Pride Guide
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

  Center() {
    return (
      <div className="wrap ms-hero-bg-success ms-hero-img-stage">
        <div className="container text-center">
          <div className="row">
            <div className="col align-self-center">
              <h1 className="color-warning text-center m-3 ">Coming Soon</h1>
              <h1 className="color-white text-center m-3 ">
                Charleston's First LGBTQ Community Space
              </h1>
              <h2 className="color-white text-center m-3 ">
                The Alliance For Full Acceptance (AFFA) &amp; Charleston Pride
                are Partnering to Create a New Community Space
              </h2>
              <h3 className="color-white text-center m-3 d-none d-lg-block">
                This community space will take our LGBTQ community organizing to
                the next level, creating positive change throughout the
                Lowcountry and beyond. Help us make this a reality.
              </h3>
              <ButtonLink to="/lgbtq-center" icon="star-o" color="success">
                {" "}
                More Info
              </ButtonLink>
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
              <h1 className="animated fadeInUp animation-delay-12 small-caps">
                Charleston{" "}
                <span className="initialism">
                  <span>P</span>
                  <span>r</span>
                  <span>i</span>
                  <span>d</span>
                  <span>e</span>
                </span>
              </h1>
              <h1>
                <span className="typed-class typed-block color-primary" />
                <span className="typed-cursor color-warning">|</span>
              </h1>
              <h2 className="no-m ms-site-title color-white center-block mt-2 animated zoomInDown animation-delay-7">
                2009-2019
              </h2>
              <a
                className="btn btn-warning btn-xlg btn-raised animated flipInX animation-delay-16"
                href="#getInvolved"
              >
                <i className="zmdi zmdi-flag" /> Get Involved
                <div className="ripple-container" />
              </a>
            </div>
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
        <this.Center />
        <GetInvoved />
        <this.Mission />
      </div>
    );
  }
}
export default Home;
