import React from 'react';
import WOW from 'wowjs';
import Typed from 'typed.js'
import './Home.css';
import Sponsors from '../Sponsors/SponsorHero';
import UpcomingEvents from '../Events/UpcomingEvents';
import CountdownClock from '../CountdownClock'
import GetInvoved from '../GetInvolved/GetInvolved'


class Home extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();

        let options = {
            strings: ["Love", "Peace", "Equality", "Acceptance", "Respect", "Family", "Community"],
            typeSpeed: 80,
            startDelay: 2000,
            loop: true,
            backDelay: 1000,
            autoInsertCss: false,
            showCursor: false,
        };
    
        new Typed(".typed-class", options);
    };
    render() {
      return (
      <div>
        <div>
            <div className="ms-hero-page ms-hero-video ms-hero-img-crowd ms-hero-bg-primary color-white intro-hero-full">
                <div className="intro-hero-full-content">
                    <div className="container text-center">
                        <span className="ms-hero-logo"></span>
                        <h1 className="animated fadeInUp animation-delay-12 small-caps">Charleston Pride</h1>
                        <h1><span className="typed-class typed-block color-primary"></span><span className="typed-cursor color-warning">|</span></h1>
                        <h2 className="no-m ms-site-title color-white center-block mt-2 animated zoomInDown animation-delay-7">September 15-22, 2018</h2>
                        <a className="btn btn-warning btn-xlg btn-raised animated flipInX animation-delay-16" href="#getInvolved"><i className="zmdi zmdi-flag"></i> Get Involved<div className="ripple-container"></div></a>
                    </div>
                </div>
            </div>
        </div>
        <Sponsors/>
              <div className="wrap bg-warning color-dark">
                  <div className="container">
                      <h1 className="color-white text-center mb-1">Charleston Pride Week 2018</h1>
                      <h2 className="color-white text-center mb-1">September 15-22, 2018</h2>
                      <CountdownClock eventTime="2018-09-15T09:00:00" color="white" />
                  </div>
              </div>
        <UpcomingEvents/>
        <GetInvoved/>
       </div>
      );
    }
  }
export default Home;