import React, { Component } from "react";
import "./Rainbows.css";
import Logo from "./Charleston-Rainbows-horizontal.png";
import Rainbow from "./rainbows.jpg";
import Musc from "./MUSCDarkLogo.png";
import Darkness from "./darkness-to-light-logo.svg";
import { Link } from "react-router-dom";

export default class Rainbows extends Component {
  render() {
    var h1ClassName =
      "no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5";
    var h2ClassName =
      "lead lead-lg color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7";
    return (
      <div>
        <div className="ms-hero-page-override ms-hero-img-rainbows ms-hero-bg-primary">
          <div className="container">
            <div className="text-center">
              <h1 className={h1ClassName}>Charleston Rainbows Pride Night</h1>
              <h2 className={h2ClassName}>Presented By</h2>
              <h2 className={h2ClassName}>
                Charleston Pride, MUSC Health, and Darkness To Light
              </h2>
              <h2 className={h2ClassName}>
                Wednesday, August 14th @ 7:05 PM | Joe Riley Stadium
              </h2>
            </div>
          </div>
        </div>
        <div className="container mb-5">
          <div className="card-hero bg-white text-center">
            <div className="card-body">
              <img
                className="img-fluid"
                src={Logo}
                alt="Charleston Rainbows Logo"
              />
              <p>
                Come out and watch the Charleston RiverDogs don their Charleston
                Rainbows uniforms and show your PRIDE!
              </p>
              <p>
                Jerseys will be auctioned off to benefit Charleston Pride to
                help support Pride Week!
              </p>

              <h2>
                Regular Seating
                <br />
                $9
              </h2>
              <p>
                Use the code <strong>pride19</strong> at checkout
              </p>
              <p>$2 from each ticket goes to Charleston Pride</p>
              <a
                href="http://riverdogs.com/groups"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-raised btn-primary animated fadeInUp animation-delay-5"
              >
                <i className="fa fa-ticket" /> Get Tickets
              </a>
              <p>
                This event is <strong>Free</strong> for{" "}
                <Link to="/friends-of-pride">Friends of Pride</Link>. Email{" "}
                <a href="mailto:friends@charlestonpride.org">
                  friends@charlestonpride.org
                </a>{" "}
                to reserve.
              </p>
              <p>
                Note: For those who would prefer using a gender neutral
                restroom, please know there is a single user restroom that is
                available at the stadium. Right outside the press box on the 3rd
                level (the main concourse is Level 2).{" "}
              </p>

              <p>
                Please reach out to{" "}
                <a href="mailto:info@charlestonpride.org">
                  info@charlestonpride.org
                </a>{" "}
                with any questions or concerns.
              </p>
              <img
                id="musc"
                className="img-fluid"
                src={Musc}
                alt="MUSC Health Logo"
              />
              <div className="clear-fix" />
              <img
                id="dtl"
                className="img-fluid"
                src={Darkness}
                alt="Darkness to Light Logo"
              />

              <div className="clear-fix" />
              <img src={Rainbow} alt="Charleston Rainbows Logo" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
