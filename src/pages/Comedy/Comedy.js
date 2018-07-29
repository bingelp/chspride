import React, { Component } from 'react';
import { ExternalBtn } from '../../components/LinkUtil'
import './Comedy.css'
import jenn from './jenn.jpg'
import kevin from './kevin.jpeg'
import robyn from './robyn.jpg'
import sam from './sam.jpg'
import shawna from './shawa.png'
import curt from './curt.jpg'
import {Link } from 'react-router-dom'

class Comedy extends Component {

  Header(props) {
    return (
      <div className="ms-hero ms-hero-page-override ms-hero-img-lol ms-hero-bg-dark">
        <div className="container">
          <div className="text-center">
            <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">LGBTLOL</h1>
            <h2 className="lead color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">Presented by the Alliance For Full Acceptance (AFFA)&amp; Charleston Pride</h2>
            <h3 className="lead color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">Thursday, September 20,  @ 8:00 PM | Charleston Music Hall</h3>
            <ExternalBtn to="https://www.ticketfly.com/purchase/event/1734208" icon="ticket" title="Tickets" color="warning" />
            <h4 className="color-white">Use discount code <span className="color-warning"> affapride </span> to get <span className="color-warning">$5 Off</span></h4>
            <p className="color-white">This event is <strong>Free</strong> for <Link to="/friends-of-pride">Friends of Pride</Link>. Email <a href="mailto:info@charlestonpride.org">info@charlestonpride.org</a> to reserve.</p>
          </div>
        </div>
      </div>
    )
  }

  Comedian(props) {
    return (
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
          <div className={"btn-circle  btn-circle-raised btn-card-float right wow zoomInDown index-2 btn-circle-" + props.color}>
            <i className="fa fa-star"></i>
          </div>
          {props.title && <h4 className={"color-" + props.color}>{props.title}</h4>}
          <h3 className="uppercase">{props.name}</h3>
          <div className="bio">
          {props.children}
          </div>
        </div>
      </div>
    )
  }


  render() {
    return (
      <div id="lgbtlol">
        <this.Header />
        <div className="container">
          <div className="card">
            <h3 className="text-center">Come celebrate humanity and show your PRIDE at a night of comedy featuring some of your favorite stand-up comics, who also just happen to be members of the LGBTQ community. </h3>
            <div className="row">
              <div className="col-12">
                <this.Comedian name="Jenn Synder" title="Headliner" src={jenn} color="primary"  >
                  At 5’2, comedian Jenn Snyder packs a whole lot of funny in her one-two punch style of comedy. Topics ranging from her days growing up as a lesbian in a “good ol’ boy” town, to dealing with the public on a daily basis, this comedian will pull you in with her stories and leave you wanting more with her quick wit and hilarious observations. Born and raised in Columbia SC, her ultimate goal is to unite all people through laughter.
              </this.Comedian>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <this.Comedian name="Curt Mariah" src={curt} color="royal" title="Hosted By">
                  Food! Sex! Now that she's got your attention, DC-based/Charleston-raised Curt Mariah is going to tell you some truths. Chef by day, comedian by night, Curt's set is always served cold.
                  </this.Comedian>
              </div>
              <div className="col-12 col-md-6">
                <this.Comedian name="Shawna Jarrett" title="Featuring" src={shawna} color="success">
                  Shawna Jarrett is the lead comic on the Charleston Comedy Bus, writes/produces sketch comedy, and hosts the monthly Get Up! Comedy Night at Tin Roof. She's nominated for 2018 Best Local Comic in the Charleston City Paper Best-Of awards and is featured in shows across the southeast. Her material includes topics like gender and sexuality, businesses housed in former Pizza Huts, Venn diagrams, and her home turf of West Ashley. If you grew up in Charleston, there is a 60% chance you’ve bought drugs in her neighborhood at some point.
              </this.Comedian>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-4">
                <this.Comedian name="Kevin Delgado" src={kevin} color="danger">
                  Kevin is a stand-up and improv comic whose performances highlight his intelligent, and somewhat sarcastic sense of humor. Kevin trained and performed improv comedy for over 15 years before bringing those sensibilities to stand-up, and his background ensures that no two sets are ever quite the same. Originally from Charlotte NC, Kevin is now based out of Atlanta GA, and offers a humorous take on what it's like being an openly gay and openly Latino man in the southeast.
                </this.Comedian>
              </div>
              <div className="col-12 col-md-4">
                <this.Comedian name="Robyn Scott" src={robyn} color="info">
                  Robyn Scott is a southern belle that lives a crazy life and has a way of bringing you into her crazy world. Robyn has graced stages across the southeast including the World Famous Laughing Skull, Relapse Theater, and the Comedy Zone.
                  </this.Comedian>
              </div>
              <div className="col-12 col-md-4">
                <this.Comedian name="Sam Resiman" src={sam} color="caution">
                  Sam Reisman is a Charleston-bred comedian currently in the process of setting up roots in Boston. Relatively new to stand-up comedy, he has opened for the likes of David Lee Nelson and Jeremy McLellan, and possesses a comedic energy that was once described as “frenetic” by someone who clearly doesn’t know what that word means. Frequent talking points include gay slang, dating, and mental health. When not making his rounds in the stand-up circuit, he also dabbles in improv and writing.
                  </this.Comedian>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comedy;