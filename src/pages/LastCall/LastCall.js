import React, { Component } from "react";
import { ExternalBtn } from "../../components/LinkUtil";
import "./LastCall.css";
import SocialList from "../../components/SocialList/SocialList";
import { Link } from "react-router-dom";

class LastCall extends Component {
  Header(props) {
    return (
      <div className="ms-hero ms-hero-page-override ms-hero-img-lastcall ms-hero-bg-dark-transparent">
        <div className="container">
          <div className="text-center">
            <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
              Last Call
            </h1>
            <h2 className="lead color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
              The Official After Party of Charleston Pride
            </h2>
            <h3 className="lead color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
              Saturday, September 14 @ 11:00 PM (Doors 10:00 PM)
            </h3>
            <h3 className="lead color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
              Music Farm (32 Ann St.)
            </h3>
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
          <img
            src={
              "https://d2f908d3j7stzr.cloudfront.net/chspride/lastcall/" +
              props.img
            }
            alt={props.name}
            className="img-fluid"
          />
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

  // Sponsor() {
  //   return (
  //     <div className="col-12 col-md-4 text-center">
  //       <h2>Presented By:</h2>
  //       <img
  //         src="https://d2f908d3j7stzr.cloudfront.net/chspride/lastcall/quietkingz.png"
  //         alt="Quiet Kings"
  //         className="img-fluid"
  //         width="200px"
  //       />
  //       <h3>QuietKingz</h3>
  //     </div>
  //   );
  // }

  Description(props) {
    return (
      <div className="col">
        <div className="card-body">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="">
                Did you really think we’d stop the party at 11 PM? After you
                leave Prism, head across the street to Music Farm for Last Call:
                The Official After Party of Charleston Pride! Symone N. O’Bishop
                will keep the celebration going as you dance the night away with
                Latrice Royale and the Queens of Charleston on stage.
              </h3>
              <ExternalBtn
                to="https://www.etix.com/ticket/p/2765377/last-callthe-official-after-party-of-charleston-pride-charleston-the-music-farm-charleston"
                icon="ticket"
                title="Tickets"
                color="success"
              />
              <h4>
                <span className="color-success">$15</span> Advance |{" "}
                <span className="color-success">$20</span> at Door
              </h4>
              <h4>
                <span className="color-success">FREE</span> for{" "}
                <Link to="/friends-of-pride" className="color-success">
                  Friends of Pride
                </Link>{" "}
                OR with VIP ticket to{" "}
                <Link to="/prism" className="color-success">
                  Prism
                </Link>
              </h4>
              <p>
                <Link to="/friends-of-pride">Friends of Pride</Link>, email{" "}
                <a href="mailto:friends@charlestonpride.org">
                  friends@charlestonpride.org
                </a>{" "}
                to reserve.
              </p>
              <h4>This event is 18+</h4>
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
              <this.Description PriceTable={this.PriceTable} />
            </div>
          </div>
          <div className="card">
            <h1 class="text-center">Entertainment</h1>
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <this.Entertainer
                    name="Featuring - Latrice Royale"
                    img="latrice.jpg"
                    web="https://www.latriceroyale.com/"
                    facebook="LatriceRoyaleInc"
                    instagram="LatriceRoyale"
                    twitter="LatriceRoyale"
                    card="success"
                  />
                </div>
              </div>
              <div className="row text-center">
                <div className="col-12 col-lg-6">
                  <this.Entertainer
                    name="Host - Symone N. O’Bishop"
                    img="symone.jpg"
                    web="https://theofficialsnob.com/"
                    facebook="Thesnobishop"
                    instagram="snobishop"
                    twitter="TheOfficialSnob"
                    card="royal"
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <this.Entertainer
                    name="DJ - Earl Newell Jr"
                    img="earl.jpg"
                    web="https://www.thedancedoctors.com/"
                    facebook="scdancedoctors"
                    instagram="quietkingz"
                    twitter=""
                    card="info"
                  />
                </div>
              </div>
            </div>
            <h2 className="text-center">
              Guest Performances By the Queens of Charleston
              <br />
              <small>
                <em>Coming Soon</em>
              </small>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
export default LastCall;
