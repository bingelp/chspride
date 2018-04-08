import React from 'react';
import WOW from 'wowjs';
import Typed from 'typed.js'
import './home.css';
import { NavLink } from 'react-router-dom';
import Sponsors from '../Sponsors/SponsorHero';


class Home extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();

        var options = {
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
                        <h2 className="no-m ms-site-title color-white center-block mt-2 animated zoomInDown animation-delay-7">#IAmCharlestonPride</h2>
                        <h1 className="animated fadeInUp animation-delay-12 small-caps">Charleston Prides For: <span className="typed-class typed-block color-primary"></span><span className="typed-cursor color-warning">|</span></h1>
                        <h2 className="no-m ms-site-title color-white center-block mt-2 animated zoomInDown animation-delay-7">September 22, 2018</h2>
                        <NavLink className="btn btn-warning btn-xlg btn-raised animated flipInX animation-delay-16" to="/about"><i className="zmdi zmdi-flag"></i> Get Involved<div className="ripple-container"></div></NavLink>
                    </div>
                </div>
            </div>
        </div>
        <Sponsors/>
       </div>
      );
    }
  };
export default Home;