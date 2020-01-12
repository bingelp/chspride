import React from "react";
import "./Home.css";
import Sponsors from "../Sponsors/SponsorHero";
import CountdownClock from "../../components/CountdownClock";
import GetInvolved from "../../components/GetInvolved/GetInvolved";
import { ButtonLink } from "../../components/LinkUtil";

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

  Center() {
    return (
      <div className="wrap ms-hero-bg-danger ms-hero-img-float">
        <div className="container text-center">
          <div className="row">
            <div className="col align-self-center">
              <h1 className="color-danger text-center m-3 ">Coming Soon</h1>
              <h1 className="color-white text-center m-3 ">
                Charleston's Equality Hub
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
              <ButtonLink to="/lgbtq-center" icon="star-o" color="danger">
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
                Pride Week
              </h2>
              <h2 className="no-m ms-site-title color-white center-block mt-2 animated zoomInUp animation-delay-8">
                Summer 2020
              </h2>
            </div>
          </div>
        </div>
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
      <div>
        <this.Hero />
        <Sponsors />
        <GetInvolved />
        <this.Mission />
      </div>
    );
  }
}
export default Home;
