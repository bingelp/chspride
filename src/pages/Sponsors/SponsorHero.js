import React from "react";
import Sponsor from "./SponsorHeroItem";
import { Link } from "react-router-dom";

export default class SponsorHero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sponsors: [],
      timerID: null
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
        this.timerID = setInterval(() => this.tick(), 3000);
      });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let [first, ...rest] = this.state.sponsors;
    let sponsors = [...rest, first];
    this.setState({ sponsors: sponsors });
  }

  render() {
    return (
      <div className="container text-center">
        <h2>Thank You to Our Sponsors</h2>
        <div className="row">
          {this.state.sponsors &&
            this.state.sponsors
              .slice(0, 6)
              .map(s => <Sponsor key={s.id} meta={s} />)}
        </div>
        <Link to="/become-a-sponsor" className="btn btn-success btn-raised">
          {" "}
          <i className="zmdi zmdi-thumb-up" />Become a sponsor
        </Link>
        <Link to="/our-sponsors" className="btn btn-info btn-raised">
          {" "}
          <i className="zmdi zmdi-eye" />View All Sponsors
        </Link>
      </div>
    );
  }
}
