import React, { Component } from "react";
import { ExternalLink } from "../../components/LinkUtil";
import "./Prism.css";
import SocialList from "../../components/SocialList/SocialList";
import { Link } from "react-router-dom";
import ETapestryForm from "../../components/ETapestryForm";

class Prism extends Component {
  Header(props) {
    return (
      <div className="ms-hero ms-hero-page-override ms-hero-img-prism ms-hero-bg-dark">
        <div className="container">
          <div className="text-center">
            <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
              <span className="initialism">
                <span>P</span>
                <span>r</span>
                <span>i</span>
                <span>s</span>
                <span>m</span>
              </span>
              : <small>The Official Party of Charleston Pride</small>
            </h1>
            <h2 className="lead color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
              Saturday, September 14 @ 7:00 PM - 11:00 PM
            </h2>
            <h2 className="lead color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
              Charleston Bus Shed <span className="color-warning">&amp;</span>{" "}
              Visitor’s Center
            </h2>
          </div>
        </div>
      </div>
    );
  }

  Entertainer(props) {
    return (
      <div className={"card width-auto card-" + props.card + "-inverse"}>
        <figure
          className={
            "ms-thumbnail ms-thumbnail-horizontal ms-thumbnail-" + props.card
          }
        >
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
          <h4>{props.name}</h4>
        </div>
      </div>
    );
  }
  Queen(props) {
    return (
      <div className="col-lg-6 col-12 queen">
        <div className={"card card-" + props.card + "-inverse"}>
          <figure
            className={
              "ms-thumbnail ms-thumbnail-horizontal ms-thumbnail-" + props.card
            }
          >
            <img src={props.src} alt={props.name} className="img-fluid" />
            <figcaption className="ms-thumbnail-caption text-center">
              <div className="ms-thumbnail-caption-content">
                <h4 className="ms-thumbnail-caption-title mb-2">
                  {props.name}
                </h4>
              </div>
            </figcaption>
          </figure>
          <div className="card-body text-center">
            <h4>{props.name}</h4>
          </div>
        </div>
      </div>
    );
  }

  Dudleys() {
    return (
      <div className="col-12 col-md-4 text-center">
        <h2>Presented By:</h2>
        <img
          src="https://s3.amazonaws.com/charlestonpride.assets/chspride/prism/dudleys.jpg"
          alt="dudleys"
          className="img-fluid"
          width="200px"
        />
      </div>
    );
  }

  PriceTable() {
    return (
      <div class="row no-gutters">
        <div class="col-lg-4">
          <div class="price-table price-table-info wow zoomInUp animation-delay-2">
            <header class="price-table-header">
              <span class="price-table-category">General Admission</span>
              <h3>
                <sup>$</sup>15.00 <sub>Online</sub>
                <br />
                <sup>$</sup>20.00 <sub>At Door</sub>
              </h3>
            </header>
            <div class="price-table-body">
              <ul class="price-table-list">
                <li>Access to the Party.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="price-table price-table-success prominent wow zoomInDown animation-delay-2">
            <header class="price-table-header">
              <span class="price-table-category">VIP</span>
              <h3>
                <sup>$</sup>50.00 <sub />
              </h3>
              General Admission Plus
            </header>
            <div class="price-table-body">
              <ul class="price-table-list">
                <li>Meet and Greet with Todrick Hall and the Ru Paul Queens</li>
                <li>
                  Admission to Last Call at Music Farm - the official late night
                  dance party of Charleston Pride
                  <br />
                  <small>(details coming soon)</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="price-table price-table-warning wow zoomInUp animation-delay-2">
            <header class="price-table-header">
              <span class="price-table-category">Friends of Pride</span>
              <h3>Free</h3>
              Same as VIP
            </header>
            <div class="price-table-body">
              <ul class="price-table-list">
                <li>
                  As a <Link to="/friends"> Friend of Pride </Link>
                  you get access to both Prism and Last Call. Reserve your
                  ticket by emailing Megan at{" "}
                  <a href="mailto:friends@charlestonpride.org">
                    friends@charlestonpride.org
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  Description(props) {
    return (
      <div className="col-12 col-md-8">
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center">
                We painted the town every{" "}
                <span className="initialism">
                  <span>c</span>
                  <span>o</span>
                  <span>l</span>
                  <span>o</span>
                  <span>r</span>
                </span>{" "}
                of the rainbow this year. Now, it's time to show Charleston how
                beautiful life can be when those colors come together! You won't
                want to miss{" "}
                <span className="initialism">
                  <span>P</span>
                  <span>r</span>
                  <span>i</span>
                  <span>s</span>
                  <span>m</span>
                </span>
                : <em>The Official Party of Charleston Pride</em> as we close
                out a fantastic week of celebrating Pride.
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div id="prism">
        <this.Header />
        <div className="container">
          <div class="card">
            <div class="row">
              <this.Dudleys />
              <this.Description PriceTable={this.PriceTable} />
            </div>
          </div>
          <div className="card">
            <h1 class="text-center">Entertainment</h1>
            <div className="card-body">
              <div className="row text-center">
                <div className="col-12 col-lg-6">
                  <this.Entertainer
                    name="Host - Brooke Collins"
                    img="https://s3.amazonaws.com/charlestonpride.assets/chspride/prism/brooke.jpg"
                    web=""
                    facebook="brooke.collins.1800"
                    instagram=""
                    twitter=""
                    card="danger"
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <this.Entertainer
                    name="DJ - Earl Newell Jr"
                    img="https://s3.amazonaws.com/charlestonpride.assets/chspride/prism/earl.jpg"
                    web="https://www.thedancedoctors.com/"
                    facebook="scdancedoctors"
                    instagram="quietkingz"
                    twitter=""
                    card="info"
                  />
                </div>
              </div>
              <div className="row">
                <h3 className="text-center col-12">
                  Entertainment Featuring the Contestants of Ru Paul's Drag Race
                </h3>
                <this.Queen
                  name="Alexis Mateo"
                  src="https://s3.amazonaws.com/charlestonpride.assets/chspride/prism/AlexisMateo.jpg"
                  card="success"
                />
                <this.Queen
                  name="Mayhem Miller"
                  src="https://s3.amazonaws.com/charlestonpride.assets/chspride/prism/mayhem.jpg"
                  card="warning"
                />
                <this.Queen
                  name="Vanessa Vanjie Mateo"
                  src="https://s3.amazonaws.com/charlestonpride.assets/chspride/prism/vanjie.jpg"
                  card="royal"
                />
                <this.Queen
                  name="Queens of Charleston - Coming Soon"
                  src="https://s3.amazonaws.com/charlestonpride.assets/chspride/prism/carmella.jpg"
                  card="primary"
                />
              </div>
            </div>
          </div>
          <div className="card text-center">
            <h1>Tickets</h1>
            <p>This event is 18+</p>
            <this.PriceTable />
            <ETapestryForm form="prism" title="Prism" />
          </div>
        </div>
      </div>
    );
  }
}
export default Prism;
