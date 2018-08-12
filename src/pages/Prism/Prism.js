import React, { Component } from 'react';
import { ExternalBtn, ExternalLink } from '../../components/LinkUtil'
import { Link } from 'react-router-dom'
import './Prism.css'
import jade_jolie from './jade_jolie.jpg'
import jaidynn_diore_fierce from './jaidynn_diore_fierce.jpg'
import trinity_the_trick_taylor from './trinity_the_trick_taylor.jpg'
import yuhua_hamasaki from './yuhua_hamasaki.jpg'
import prism_logo from './prism-logo.jpg'

class Prism extends Component {

  Header(props) {
    return (
      <div className="ms-hero ms-hero-page-override ms-hero-img-prism ms-hero-bg-dark">
        <div className="container">
          <div className="text-center">
            <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Prism Party</h1>
            <h2 className="lead color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">The Official After Party of Charleston Pride</h2>
            <h3 className="lead color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">Saturday, September 22 @ 9:00 PM - 1:30 AM | Music Farm</h3>
            <h3 className="lead color-warning text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">$20 <span className="color-white">|</span> 18+</h3>
            <ExternalBtn to="https://www.etix.com/ticket/p/4283681/prism-party-charleston-the-music-farm-charleston" icon="ticket" title="Tickets" color="warning" />
            <p className="color-white">This event is <strong>Free</strong> for <Link to="/friends-of-pride">Friends of Pride</Link>. Email <a href="mailto:info@charlestonpride.org">info@charlestonpride.org</a> to reserve.</p>
          </div>
        </div>
      </div>
    )
  }

  Queen(props) {
    return (
      <div className="col-lg-3 col-6 queen">
        <div className="card">
          <figure className="ms-thumbnail ms-thumbnail-horizontal">
            <img src={props.src} alt={props.name} className="img-fluid" />
            <figcaption className="ms-thumbnail-caption text-center">
              <div className="ms-thumbnail-caption-content">
                <h4 className="ms-thumbnail-caption-title mb-2">{props.name}</h4>
              </div>
            </figcaption>
          </figure>
          <div className="card-body text-center">
            <h4>{props.name}</h4>
          </div>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div id="prism">
        <this.Header />
        <div className="container">
          <div className="card">
            <div className="row">
              <div className="col-12 col-md-3 text-center">
                <img src={prism_logo} alt="prism logo" className="img-fluid" />
                <ExternalBtn to="https://www.etix.com/ticket/p/4283681/prism-party-charleston-the-music-farm-charleston" icon="ticket" title="Tickets" color="primary" />
              </div>
              <div className="col-12 col-md-9">
                <h3 className="text-center">We painted the town every <span className="initialism"><span>c</span><span>o</span><span>l</span><span>o</span><span>r</span></span> of the rainbow this year. Now, it's time to show Charleston how beautiful life can be when those colors come together! You won't want to miss the Charleston Pride Prism Party as we close out a fantastic week of celebrating Pride.</h3>
                <h3 className="text-center">The Prism Party will be hosted by <ExternalLink to="https://www.facebook.com/thepotluckclub" title="Patti O'Furniture" /> with <ExternalLink to="https://www.facebook.com/djtrevord/" title="DJ Trevor D" /> spinning the beats all night. We're proud to introduce the Queens of Charleston hour showcasing some of our amazing local girls to kickoff the night!</h3>
              </div>
            </div>
            <div className="row">
              <h3 className="text-center col-12">Entertainment Featuring the Contestants of Ru Paul's Drag Race</h3>
              <this.Queen name="Jade Jolie" src={jade_jolie} />
              <this.Queen name="Jaidyn Diore Fierce" src={jaidynn_diore_fierce} />
              <this.Queen name="Trinity Taylor" src={trinity_the_trick_taylor} />
              <this.Queen name="Yuhua Hamasaki" src={yuhua_hamasaki} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Prism;