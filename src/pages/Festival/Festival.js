import React, { Component } from "react";
import map from "./map.png";
import CountdownClock from "../../components/CountdownClock";
import SocialList from "../../components/SocialList/SocialList";
import { Link } from "react-router-dom";
import RippleImage from "../../components/RippleImage";
import patti from "./pat.jpg";
import todrick from "./todrick.jpg";
const festivalDate = "Saturday, September 14th 2019";

export default class Festival extends Component {
  GroupItem(props) {
    return <li className="list-group-item">{props.children}</li>;
  }

  Entertainer(props) {
    return (
      <div className="card width-auto">
        <figure className="ms-thumbnail ms-thumbnail-horizontal">
          <img src={props.img} alt={props.name} className="img-fluid" />
          <figcaption className="ms-thumbnail-caption text-center">
            <div className="ms-thumbnail-caption-content">
              <h4 className="ms-thumbnail-caption-title mb-2">{props.name}</h4>
              <SocialList
                facebook={props.facebook}
                twitter={props.twitter}
                instagram={props.instagram}
                web={props.web || ""}
              />
            </div>
          </figcaption>
        </figure>
        <div className="text-center">
          <h4 className="color-warning">{props.name}</h4>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <div className="ms-hero-page-override ms-hero-img-vendor ms-hero-bg-royal">
          <div className="container">
            <div className="text-center">
              <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
                Pride Festival
              </h1>
              <h2 className="lead lead-lg color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
                Brittlebank Park
              </h2>
              <h2 className="lead lead-lg color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
                0 Lockwood Blvd, Charleston
              </h2>
              <h3 className="lead lead-lg color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
                {festivalDate} @ 10:00am-3:00pm
              </h3>
              <CountdownClock eventTime="2019-09-14T10:00:00" color="warning" />
              <Link
                to="/vendor-registration"
                className="btn btn-raised btn-info animated fadeInUp animation-delay-10"
              >
                <i className="fa fa-heart" /> Become a Vendor
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3 className="color-primary wow fadeInUp animation-delay-2">
                The Charleston Pride Festival in Brittlebank Park is the
                cornerstone to the Pride Festival. Join us for an afternoon in
                the park!
              </h3>
              <ul className="list-group">
                <this.GroupItem>
                  Vendors will have booths set up around the park.
                </this.GroupItem>
                <this.GroupItem>
                  Food trucks, water, beer, wine, and liquor will be on sale.
                </this.GroupItem>
                <this.GroupItem>
                  Cash &amp; cards will be accepted, ATM on site
                </this.GroupItem>
                <this.GroupItem>
                  Bring tents and chairs for your comfort throughout the day!
                </this.GroupItem>
                <this.GroupItem>
                  Pets are always welcome, of course, but please no coolers.
                </this.GroupItem>
              </ul>
              <p>
                Note that for the safety of all attendees, bags will be subject
                to check at the entry gate.
              </p>
              <p>
                For more information or any questions, please reach out to us at{" "}
                <a href="mailto:info@charlestonpride.org">
                  info@charlestonpride.org
                </a>
                .
              </p>
            </div>
            <div className="col-12 col-md-6">
              <RippleImage src={map} alt="Vendor Map" />
              <h4>Parking</h4>
              <p>
                Parking in the Brittlebank Park parking area is reserved for
                handicapped parking only, but all day parking is available at
                the Joe Riley Stadium parking lot for $5.00.
              </p>
              <p>
                A courtesy shuttle will also be available all day from 9:30 AM –
                3:30 PM between Brittlebank Park and the Charleston Visitor’s
                Center. Shuttle loading will take place at the entrance of the
                Brittlebank Parking lot.
              </p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-12">
              <h1>Entertainment</h1>
            </div>
            <div className="col-12">
              <h2 className="color-primary">Headliner</h2>
            </div>
            <div className="col-12 ">
              <this.Entertainer
                name="Todrick Hall"
                img={todrick}
                facebook="toddyrockstar"
                instagram="todrick"
                twitter="todrick"
              />
            </div>
          </div>
          <div className="row text-center">
            <div className="col-12 col-lg-6">
              <this.Entertainer
                name="Emcee - Patti O'Furniture"
                img={patti}
                web="http://dudleysonann.com"
                facebook="allaboutpatti"
                instagram="allaboutpatti"
                twitter="allaboutpatti"
              />
            </div>
            <div className="col-12 col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h2 className="color-warning">Beats by DJ Beck Danger</h2>
                  <h2 className="color-primary">Special Performances By</h2>
                  <h3 className="color-warning">
                    The Empress &amp; Emperor of Charleston Pride 2019
                  </h3>
                  <h4 className="color-primary">
                    Guest Performances By the Queens of Charleston
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
