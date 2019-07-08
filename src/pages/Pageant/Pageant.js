import React, { Component } from "react";
import CountdownClock from "../../components/CountdownClock";
import ETap from "../../components/ETapestryForm";
import "./Pageant.css";
import BaddKitty from "./badd_kitty.png";
import { Link } from "react-router-dom";

export default class Pageant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showRegistration: true
    };
  }

  Header(props) {
    return (
      <div className="ms-hero-page-override ms-hero-img-pageant ms-hero-bg-royal">
        <div className="container">
          <div className="text-center">
            <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
              Charleston Pride 2019 Empress and Emperor Pageant
            </h1>
            <h2 className="lead lead-lg color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
              Midtown Theater | Saturday, August 31th @ 9:00 pm | Doors open @
              8:00 pm
            </h2>
            <h2 className="lead lead-lg color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
              Tickets: $10 @ Door (Cash &amp; Card)
            </h2>
            <CountdownClock eventTime="2019-08-31T21:00:00" color="warning" />
            {props.showRegistration && (
              <a href="#register" className="btn btn-raised btn-royal">
                Register
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  Sponsor() {
    return (
      <div className="wrap bg-royal">
        <div className="container text-center">
          <div>
            <h1>Presented By</h1>
            <a
              href="https://www.baddkitty.net/?utm_source=charleston_pride&amp;utm_medium=website&amp;utm_campaign=pageant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={BaddKitty} alt="Badd Kitty Logo" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  Details(props) {
    return (
      <div className="container mt-6">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h3 className="wow zoomInDown">
              Join Us as We Crown the Empress and Emperor of Charleston Pride
              2019!
            </h3>
            <p>
              This year’s pageant will be held at{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.midtownproductions.org/"
              >
                Midtown Theatre
              </a>{" "}
              on Saturday, August 31st at 9:00 PM.
            </p>
            <p>
              Our host will guide our contestants through each round while our
              prestigious judges decide who wins it all.
            </p>
            <p>
              Our current reigning Empress and Emperor of Charleston Pride will
              also be stepping down from her 2018 reign. Make sure not to miss{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/carmella.monroe.96"
              >
                Carmella Monet Monroe
              </a>{" "}
              and{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/NytesDeville"
              >
                Nytes Deville
              </a>{" "}
              as they hands over their crowns to our next stars! There will also
              be special performances from previous winners.{" "}
            </p>
            <p>
              A cover charge of $10 will be going to support Charleston Pride.
            </p>
            <p>
              This event is <strong>Free</strong> for{" "}
              <Link to="/friends-of-pride">Friends of Pride</Link>. Email{" "}
              <a href="mailto:friends@charlestonpride.org">
                friends@charlestonpride.org
              </a>{" "}
              to reserve.
            </p>
            {props.showRegistration && (
              <p>
                Potential registrants can fill out the registration form below.
                Contestants must be registered by August 20th.
              </p>
            )}
          </div>
          <div className="col-12 col-lg-6">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="fa fa-trophy" /> Past Winners
                </h3>
              </div>
              <table className="table table-no-border table-striped">
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Empress</th>
                    <th>Emperor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2018</td>
                    <td>Carmella Monet Monroe</td>
                    <td>Nytes Deville</td>
                  </tr>
                  <tr>
                    <td>2017</td>
                    <td>Bridgette Pharaohs</td>
                    <td>Vacant</td>
                  </tr>
                  <tr>
                    <td>2016</td>
                    <td>Demi Valentino</td>
                    <td>Vacant</td>
                  </tr>
                  <tr>
                    <td>2015</td>
                    <td>Jaisee Alexander</td>
                    <td>Vacant</td>
                  </tr>
                  <tr>
                    <td>2014</td>
                    <td>Desiree Valentino</td>
                    <td>Ryder Knightly</td>
                  </tr>
                  <tr>
                    <td>2013</td>
                    <td>Melody Lucas</td>
                    <td>Oliver Fox</td>
                  </tr>
                  <tr>
                    <td>2012</td>
                    <td>Imani Valentino</td>
                    <td>Gavin Reznor</td>
                  </tr>
                  <tr>
                    <td>2011</td>
                    <td>Ava Clear</td>
                    <td>Kevin Michaels</td>
                  </tr>
                  <tr>
                    <td>2010</td>
                    <td>Celina Drake</td>
                    <td>Mike Oxbig</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  Registration(props) {
    if (props.showRegistration) {
      return (
        <div className="container" id="register">
          <div className="text-center card">
            <div className="card-body">
              <h2>Pageant Registration</h2>
              <p>
                By registering below I hereby apply to participate in the{" "}
                Emperor and Empress of Charleston Pride Pageant 2019. I
                acknowledge that I have read and understand all of the{" "}
                <a
                  href="https://docs.google.com/document/d/1EUHMMKD9MrMv9yOKXbsNplWe__eJfvJO1lVHseHzGwI/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  rules and regulations
                </a>{" "}
                regarding the pageant and agree to abide by said rules. As a
                contestant in the Emperor and Empress of Charleston Pride
                Pageant, I fully understand that I enter at my own risk and
                expense. I hereby hold harmless and waive all rights of any
                lawsuit against Charleston Pride Festival, Inc., the Pageant
                Directors, any sponsors, or personnel associated with the
                pageant. I also understand and agree to allow myself to be
                videotaped, recorded, and photographed, and release any and all
                rights I might have to any profits from such videotaping,
                photography, sound recordings, internet postings, documentation,
                or other media associated with the Emperor and Empress of
                Charleston Pride Pageant. I further understand and agree that
                should I win the title of “Emperor or Empress of Charleston
                Pride Festival,” I will represent the title to the best of my
                ability and will perform at all engagements outlined under the
                aforementioned rules of the pageant. I agree to return at the
                end of my reign to relinquish my title to the new Emperor and
                Empress of Charleston Pride. I understand that the crown will
                remain the property of the directors throughout my reign. If at
                any time any of these agreements are violated, my title may be
                revoked, and I must return the crown in perfect condition to the
                Pageant Directors, along with any cash prizes which may have
                been awarded.
              </p>
              <ETap title="Pagent Registration" form="pageantregistration" />
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="text-center ">
          <h2>Registration has Closed</h2>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <this.Header showRegistration={this.state.showRegistration} />
        <this.Details showRegistration={this.state.showRegistration} />
        <this.Registration showRegistration={this.state.showRegistration} />
      </div>
    );
  }
}
