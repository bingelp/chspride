import React, { Component } from "react";
import "./Cruise.css";
import ETapestryForm from "../../components/ETapestryForm";
import CountdownClock from "../../components/CountdownClock";
import { Link } from "react-router-dom";

export default class Cruise extends Component {
  constructor() {
    super();
    this.state = {
      enabled: false
    };
  }
  componentDidMount() {
    fetch(
      "https://skvfc3ly76.execute-api.us-east-1.amazonaws.com/prod/settings/647978d7-d6e2-4088-9b08-50dbcf9be188"
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({
          enabled: data.enabled
        });
      });
  }

  Form(props) {
    return props.enabled ? (
      <ETapestryForm form="cruise" title="Cruise" />
    ) : (
      <div className="text-center">
        <h3>Sorry, ticket sales are closed.</h3>
        <p>
          Please reach out to us at{" "}
          <a href="mailto:info@charlestonpride.org">info@charlestonpride.org</a>{" "}
          if you have any questions/concerns.
        </p>
      </div>
    );
  }
  render() {
    return (
      <div>
        <div className="ms-hero-page-override ms-hero-img-cruise ms-hero-bg-primary">
          <div className="container">
            <div className="text-center">
              <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
                Pride on the Harbor
              </h1>
              <h2 className="lead lead-lg color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
                Come sail away with Charleston Pride!
              </h2>
              <h3 className="lead color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
                Saturday, April 27, Boarding @ 8:00 PM | From Aquarium Wharf
              </h3>
              <CountdownClock
                eventTime="2019-04-27T20:00:00-04:00"
                color="white"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-9">
                  <p>
                    The evening will feature hors d’oeuvres, an open bar
                    courtesy of{" "}
                    <strong>Breakthru Beverage South Carolina</strong>, and DJ
                    Beck Danger spinning the beats on this{" "}
                    <strong>three hour</strong> harbor cruise! This boat
                    features two levels with an air-conditioned floor and an
                    open air top deck. This is an event you won’t want to miss!
                  </p>
                  <p>
                    All you need is a ticket and we will provide the rest!
                    Boarding will begin at 8:00 pm at the Aquarium Wharf (360
                    Concord St, Charleston). The boat will depart at 8:30 pm and
                    will return at 11:30 pm. Space is limited so make sure you
                    get your tickets early. All proceeds benefit Charleston
                    Pride and help to make Pride possible!
                  </p>
                  <p>
                    This event is <strong>Free</strong> for{" "}
                    <Link to="/friends-of-pride">Friends of Pride</Link>. Email{" "}
                    <a href="mailto:friends@charlestonpride.org">
                      friends@charlestonpride.org
                    </a>{" "}
                    to reserve.
                  </p>
                </div>
                <div />
                <div className="col-lg-3">
                  <div className="panel panel-primary">
                    <div className="panel-heading">
                      <h3 className="panel-title">Details</h3>
                    </div>
                    <div className="panel-body">
                      <ul className="list-unstyled">
                        <li>
                          <strong>Date: </strong> Saturday, April 27
                        </li>
                        <li>
                          <strong>Location: </strong> Aquarium Wharf
                        </li>
                        <li>
                          <strong>Boarding: </strong> 8:00 pm
                        </li>
                        <li>
                          <strong>Departure: </strong> 8:30 pm
                        </li>
                        <li>
                          <strong>Return: </strong> 11:30 pm
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <em>
                    This event is 21 and up. You must have your ID ready to
                    present at the dock. We will have your name at the dock
                    along with the number of tickets you purchased. Please
                    arrive at the dock with your group. Everyone in your group
                    must have IDs. All sales are final.
                  </em>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <this.Form enabled={this.state.enabled} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
