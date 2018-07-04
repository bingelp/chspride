import React, { Component } from 'react'
import map from './map.png'
import { Link } from 'react-router-dom';
import CountdownClock from '../CountdownClock';
import SocialList from '../SocialList/SocialList';
import bettyWho from './betty_who.jpg'
import le1f from './le1f.jpg'
import patti from './pat.jpg'


export default class Festival extends Component {


  GroupItem(props) {
    return (
      <li className="list-group-item">{props.children}</li>
    )
  }

  Entertainer(props){
    return(
    <div className="card width-auto">
    <figure className="ms-thumbnail ms-thumbnail-horizontal">
      <img src={props.img} alt={props.name} className="img-fluid"></img>
      <figcaption className="ms-thumbnail-caption text-center">
        <div className="ms-thumbnail-caption-content">
          <h4 className="ms-thumbnail-caption-title mb-2">{props.name}</h4>
          {/* <a href="javascript:void(0)" className="btn-circle btn-circle-raised btn-circle-xs mr-1 btn-circle-white color-danger">
            <i className="zmdi zmdi-favorite"></i>
          </a>
          <a href="javascript:void(0)" className="btn-circle btn-circle-raised btn-circle-xs ml-1 mr-1 btn-circle-white color-warning">
            <i className="zmdi zmdi-star"></i>
          </a>
          <a href="javascript:void(0)" className="btn-circle btn-circle-raised btn-circle-xs ml-1 btn-circle-white color-success">
            <i className="zmdi zmdi-share"></i>
          </a> */}
          <SocialList facebook={props.facebook} twitter={props.twitter} instagram={props.instagram} web={props.web}/>
        </div>
      </figcaption>
    </figure>
    <div className="text-center">
      <h4 className="color-warning">{props.name}</h4>
    </div>
  </div>)
  }
  render() {
    return (
      <div>
        <div className="ms-hero-page-override ms-hero-img-vendor ms-hero-bg-royal">
          <div className="container">
            <div className="text-center">
              <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
                Pride Festival</h1>
              <h2 className="lead lead-lg color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">Brittlebank Park</h2>
              <h2 className="lead lead-lg color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">0 Lockwood Blvd  Charleston, SC 29403</h2>
              <h3 className="lead lead-lg color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
                Saturday, September 22nd 2018 @ 10:00am-3:00pm</h3>
              <CountdownClock eventTime="2018-09-22T10:00:00" color="warning" />
              <Link to="/vendor-registration" className="btn btn-raised btn-info animated fadeInUp animation-delay-10">
                <i className="fa fa-heart"></i> Become a Vendor</Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3 className="color-primary wow fadeInUp animation-delay-2">The Charleston Pride Festival in Brittlebank Park is the cornerstone to the Pride Festival. Join us for an afternoon in the park!</h3>
              <ul className="list-group">
                <this.GroupItem>Vendors will have booths set up around the park.</this.GroupItem>
                <this.GroupItem>Food trucks, water, beer, wine, and liquor will be on sale.</this.GroupItem>
                <this.GroupItem>Cash &amp; cards will be accepted, ATM on site</this.GroupItem>
                <this.GroupItem>Bring tents and chairs for your comfort throughout the day!</this.GroupItem>
                <this.GroupItem>Pets are always welcome, of course, but please no coolers.</this.GroupItem>
              </ul>
              <p>Note that for the safety of all attendees, bags will be subject to check at the entry gate.</p>
              <p>For more information or any questions, please reach out to us at <a href="mailto:info@charlestonpride.org">info@charlestonpride.org</a>.</p>

              
            </div>
            <div className="col-12 col-md-6">
              <img src={map} alt="Vendor map" className="img-fluid my-3"></img>
              <h4>Parking</h4>
              <p>Parking in the Brittlebank Park parking area is reserved for handicapped parking only, but all day parking is available at the Joe Riley Stadium parking lot for $5.00.</p>
              <p>A courtesy shuttle will also be available all day from 9:30 AM – 3:30 PM between Brittlebank Park and the Charleston Visitor’s Center. Shuttle loading will take place at the entrance of the Brittlebank Parking lot.</p>
            </div>

          </div>
          <div className="row text-center">
              <div className="col-12">
                <h2>Entertainment</h2>
              </div>
              <div className="col-12 col-lg-6">
                <this.Entertainer name="Betty Who" img={bettyWho} web="http://bettywhomusic.com" facebook="bettywhomusic" instagram="bettywho" twitter="bettywho"/>
              </div>
              <div className="col-12 col-lg-6">
              <this.Entertainer name="Le1f" img={le1f} web="http://riotboi.com" facebook="le1f" instagram="le1f" twitter="le1f"/>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-12">
                <h2>Emcee</h2>
              </div>
              <div className="col-12 col-lg-6 offset-lg-3">
                <this.Entertainer name="Patti O'Furniture" img={patti} web="http://dudleysonann.com" facebook="allaboutpatti" instagram="allaboutpatti" twitter="allaboutpatti"/>
              </div>
              <h4>Special Guest Performances from the <Link to="/events/pageant">Empress and Emperor of Charleston Pride 2018</Link> and many others while DJ Beck Danger spins the beats!</h4>

            </div>
        </div>
      </div>
    )
  }
}


