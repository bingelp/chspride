import React from "react";
import SponsorsList from "./SponsorsList";
import "./Sponsors.css";
import helper from "../../components/Helper";
import { Link } from "react-router-dom";

export default class Sponsors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sponsors: []
    };
  }

  componentDidMount() {
    fetch(
      "https://skvfc3ly76.execute-api.us-east-1.amazonaws.com/prod/sponsors"
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ sponsors: data });
      });
  }

  render(props) {
    return (
      <div>
        <div className="ms-hero-sponsors ms-hero-img-sponsor ms-hero-bg-royal">
          <div className="container">
            <div className="text-center">
              <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
                Our Sponsors Make It Possible
              </h1>
              <Link
                to="/become-a-sponsor"
                className="btn btn-raised btn-info animated fadeInUp animation-delay-10"
              >
                <i className="fa fa-heart" /> Become a Sponsor
              </Link>
            </div>
          </div>
        </div>
        <div id="sponsors" className="container">
          <SponsorsList
            sponsorshipLevel="Red"
            cardColor={helper(1)}
            sponsors={this.state.sponsors.filter(s => s.level === 1)}
          />
          <SponsorsList
            sponsorshipLevel="Orange"
            cardColor={helper(2)}
            sponsors={this.state.sponsors.filter(s => s.level === 2)}
          />
          <SponsorsList
            sponsorshipLevel="Yellow"
            cardColor={helper(3)}
            sponsors={this.state.sponsors.filter(s => s.level === 3)}
          />
          <SponsorsList
            sponsorshipLevel="Green"
            cardColor={helper(4)}
            sponsors={this.state.sponsors.filter(s => s.level === 4)}
          />
          <SponsorsList
            sponsorshipLevel="Blue"
            cardColor={helper(5)}
            sponsors={this.state.sponsors.filter(s => s.level === 5)}
          />
          <SponsorsList
            sponsorshipLevel="Purple"
            cardColor={helper(6)}
            sponsors={this.state.sponsors.filter(s => s.level === 6)}
          />
        </div>
      </div>
    );
  }
}
