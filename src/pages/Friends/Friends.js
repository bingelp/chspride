import React from "react";
import "./Friends.css";
import shirt from "./shirt.png";
import hat from "./hat.png";
import visor from "./visor.png";
import RippleImage from "../../components/RippleImage";
import ETap from "../../components/ETapestryForm";

class Friends extends React.Component {
  rainbowItem(props) {
    return (
      <li>
        <i className={"fa fa-" + props.icon} /> {props.text} {props.super}
      </li>
    );
  }

  rainbow(props) {
    return (
      <div className="col-12 col-lg-6">
        <div className="price-table price-table-info wow zoomInUp animation-delay-2">
          <header className="price-table-header">
            <span className="price-table-category">Rainbow</span>
            <h3>
              <sup>$</sup>20.00 <sub>/mo.</sub>
            </h3>
          </header>
          <div className="price-table-body">
            <ul className="price-table-list">{props.children}</ul>
          </div>
        </div>
      </div>
    );
  }

  doubleRainbowItem(props) {
    if (props.double) {
      return (
        <li>
          <i className={"fa fa-" + props.icon} /> {props.text}
          <i className="fa fa-times" aria-hidden="true" /> 2 {props.super}
        </li>
      );
    }
    return (
      <li>
        <i className={"fa fa-" + props.icon} /> {props.text} {props.super}
      </li>
    );
  }

  doubleRainbow(props) {
    return (
      <div className="col-12 col-lg-6">
        <div className="price-table price-table-success wow zoomInDown animation-delay-2">
          <header className="price-table-header">
            <span className="price-table-category">Double Rainbow</span>
            <h3>
              <sup>$</sup>30.00 <sub>/mo.</sub>
            </h3>
          </header>
          <div className="price-table-body">
            <ul className="price-table-list">{props.children}</ul>
          </div>
        </div>
      </div>
    );
  }

  finePrint() {
    return (
      <div className="card">
        <div className="card-body text-center">
          <h3>Terms and Conditions</h3>
          <p>
            <em>
              Membership is a 12 month commitment at which point membership
              becomes month-to-month and can be cancelled anytime after one
              year.
            </em>
          </p>
          <p>
            <em>
              * Including but not limited to annual Pride on the Harbor Cruises
              and Toast to Equality. Tickets can be reserved by emailing{" "}
              <a href="mailto:friends@charlestonpride.org">
                friends@charlestonpride.org
              </a>
              . Tickets must be requested a minimum of 24hrs before start of
              event and event must not already be sold out.
            </em>
          </p>
          <p>
            <em>
              &#8224; Acknowledgment will only appear if desired. Membership
              must be started before the cut off date for the Pride Guide.
            </em>
          </p>
          <p>
            <em>^</em> Exclusive gift is your choice of specially branded hat,
            visor, or shirt.
          </p>
        </div>
      </div>
    );
  }

  header() {
    return (
      <div className="ms-hero-page-override ms-hero-img-friends ms-hero-bg-primary">
        <div className="container">
          <div className="text-center">
            <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
              Friends of Pride
            </h1>
            <p className="lead color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
              At Charleston Pride, we believe that we can make a big difference
              in our community with a little help from our friends.
            </p>
          </div>
        </div>
      </div>
    );
  }

  gift() {
    return (
      <div className="card card-warning-inverse">
        <div className="card-body">
          <div className="row">
            <h2 className="text-center col">
              Pick From One of the Following as Your Exclusive Gift
            </h2>
          </div>
          <div className="row">
            <div className="col-4">
              <RippleImage src={hat} alt="hat" />
            </div>
            <div className="col-4">
              <RippleImage src={shirt} alt="shirt" />
            </div>
            <div className="col-4">
              <RippleImage src={visor} alt="visor" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <this.header />
        <div className="container mt-3">
          <div className="card">
            <div className="card-body text-center">
              <h1>Membership Options</h1>
              <div className="row">
                <div className="col">
                  <h4>
                    Become an official <strong>Friend of Pride</strong> through
                    joining our monthly donor program.{" "}
                    <strong>Friends of Pride</strong> get exclusive access to
                    many of our events and some extra perks along the way.
                  </h4>
                </div>
              </div>
              <div className="row">
                <this.rainbow>
                  <this.rainbowItem
                    icon="ticket"
                    text="Free Entry to Official Charleston Pride Events/Fundraisers"
                    super="*"
                  />
                  <this.rainbowItem
                    icon="address-book"
                    text="Acknowledgment in Pride Guide"
                    super="&#8224;"
                  />
                  <this.rainbowItem
                    icon="glass"
                    text="VIP Access to Toast to Equality"
                  />
                  <this.rainbowItem
                    icon="flag"
                    text="Access to the VIP Tent at the Festival (Includes Open Bar)"
                  />
                  <this.rainbowItem
                    icon="star-o"
                    text="VIP Access to Prism &amp; Last Call"
                  />
                  <this.rainbowItem
                    icon="handshake-o"
                    text="Meet and Greet with Entertainment (if available)"
                  />
                  <this.rainbowItem
                    icon="gift"
                    text="Exclusive Gift Only Available to Friends of Pride"
                    super="^"
                  />
                </this.rainbow>
                <this.doubleRainbow>
                  <this.doubleRainbowItem
                    icon="ticket"
                    text="Free Entry to Official Charleston Pride Events/Fundraisers"
                    double="true"
                    super="*"
                  />
                  <this.doubleRainbowItem
                    icon="address-book"
                    text="Acknowledgment in Pride Guide"
                    super="&#8224;"
                  />
                  <this.doubleRainbowItem
                    icon="glass"
                    text="VIP Access to Toast to Equality"
                    double="true"
                  />
                  <this.doubleRainbowItem
                    icon="flag"
                    text="Access to the VIP Tent at the Festival (Includes Open Bar)"
                    double="true"
                  />
                  <this.doubleRainbowItem
                    icon="star-o"
                    text="VIP Access to Prism &amp; Last Call"
                    double="true"
                  />
                  <this.doubleRainbowItem
                    icon="handshake-o"
                    text="Meet and Greet with Entertainment (if available)"
                    double="true"
                  />
                  <this.doubleRainbowItem
                    icon="gift"
                    text="Exclusive Gift Only Available to Friends of Pride"
                    super="^"
                  />
                </this.doubleRainbow>
              </div>
            </div>
          </div>
          <this.gift />
          <ETap title="Become a Friend of Pride" form="friends" color="primary">
            <h3>
              To become a <strong>Friend of Pride</strong>, fill out the form
              below
            </h3>
            <p>
              If there are any questions, please reach out to us at{" "}
              <a href="mailto:friends@charlestonpride.org">
                friends@charlestonpride.org
              </a>
            </p>
          </ETap>
          <this.finePrint />
        </div>
      </div>
    );
  }
}

export default Friends;
