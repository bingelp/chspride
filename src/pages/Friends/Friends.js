import React from "react";
import "./Friends.css";
import shirt from "./shirt.png";
import hat from "./hat.png";
import visor from "./visor.png";
import RippleImage from "../../components/RippleImage";

class Friends extends React.Component {
  RainbowItem(props) {
    return (
      <li>
        <i className={"fa fa-" + props.icon} /> {props.text} {props.super}
      </li>
    );
  }

  Rainbow(props) {
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

  DoubleRainbowItem(props) {
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

  DoubleRainbow(props) {
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

  FinePrint(props) {
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
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
                * Including but not limited to annual Pride on the Harbor
                Cruises and Toast to Equality. Tickets can be reserved by
                emailing{" "}
                <a href="mailto:friends@charlestonpride.org">
                  friends@charlestonpride.org
                </a>
                . Tickets must be requested a minimum of 24hrs before start of
                event and event must not already be sold out.
              </em>
            </p>
            <p>
              <em>
                &#8224; Acknowledgement will only appear if desired. Membership
                must be started before the cut off date for the Pride Guide.
              </em>
            </p>
            <p>
              <em>^</em> Exclusive gift is your choice of specially branded hat,
              visor, or shirt.
            </p>
          </div>
        </div>
      </div>
    );
  }

  Header() {
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

  Registration() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
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
            <iframe
              id="etapIframe"
              title="friends-of-pride"
              src="https://app.etapestry.com/onlineforms/CharlestonPrideFestivalInc/friends.html"
            />
            <script
              src="//app.etapestry.com/hosted/eTapestry.com/etapEmbedResponsiveResizing.js"
              type="text/JavaScript"
            />
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <this.Header />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
              <h4>
                Become an official <strong>Friend of Pride</strong> through
                joining our monthly donor program.{" "}
                <strong>Friends of Pride</strong> get exclusive access to many
                of our events and some extra perks along the way.
              </h4>
            </div>
          </div>
          <div>
            <div className="text-center">
              <h1>Membership Options</h1>
            </div>
            <div className="row">
              <this.Rainbow>
                <this.RainbowItem
                  icon="ticket"
                  text="Free Entry to Official Charleston Pride Events/Fundraisers"
                  super="*"
                />
                <this.RainbowItem
                  icon="address-book"
                  text="Acknowledgement in Pride Guide"
                  super="&#8224;"
                />
                <this.RainbowItem
                  icon="glass"
                  text="VIP Access to Toast to Equality"
                />
                <this.RainbowItem
                  icon="flag"
                  text="Access to the VIP Tent at the Festival (Includes Open Bar)"
                />
                <this.RainbowItem
                  icon="star-o"
                  text="VIP Access to Prism &amp; Last Call"
                />
                <this.RainbowItem
                  icon="handshake-o"
                  text="Meet and Greet with Entertainment (if avaliable)"
                />
                <this.RainbowItem
                  icon="gift"
                  text="Exclusive Gift Only Available to Friends of Pride"
                  super="^"
                />
              </this.Rainbow>
              <this.DoubleRainbow>
                <this.DoubleRainbowItem
                  icon="ticket"
                  text="Free Entry to Official Charleston Pride Events/Fundraisers"
                  double="true"
                  super="*"
                />
                <this.DoubleRainbowItem
                  icon="address-book"
                  text="Acknowledgement in Pride Guide"
                  super="&#8224;"
                />
                <this.DoubleRainbowItem
                  icon="glass"
                  text="VIP Access to Toast to Equality"
                  double="true"
                />
                <this.DoubleRainbowItem
                  icon="flag"
                  text="Access to the VIP Tent at the Festival (Includes Open Bar)"
                  double="true"
                />
                <this.DoubleRainbowItem
                  icon="star-o"
                  text="VIP Access to Prism &amp; Last Call"
                  double="true"
                />
                <this.DoubleRainbowItem
                  icon="handshake-o"
                  text="Meet and Greet with Entertainment (if avaliable)"
                  double="true"
                />
                <this.DoubleRainbowItem
                  icon="gift"
                  text="Exclusive Gift Only Available to Friends of Pride"
                  super="^"
                />
              </this.DoubleRainbow>
            </div>
            <div className="row">
              <h2 className="text-center col-12">
                Pick From One of the Following as Your Exclusive Gift
              </h2>

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
        <this.Registration />
        <this.FinePrint />
      </div>
    );
  }
}

export default Friends;
