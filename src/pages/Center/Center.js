import React, { Component } from "react";
import centerMockup from "./center-mockup.png";
import centerLayout from "./center-layout.jpg";
import ETap from "../../components/ETapestryForm";
import "./Center.css";

class Center extends Component {
  render() {
    return (
      <div id="center">
        <div className="ms-hero-page-override ms-hero-img-parade ms-hero-bg-primary">
          <div className="container">
            <div className="text-center">
              <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">
                Support Charleston's First LGBTQ Community Space
              </h1>
              <h2 className="lead lead-lg color-white text-center center-block mt-2 mw-800 fw-300 animated fadeInUp animation-delay-7">
                This center will take our LGBTQ community organizing to the next
                level, creating positive change throughout the Lowcountry and
                beyond
              </h2>
            </div>
          </div>
        </div>
        <div className="container details">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3 className="color-primary wow fadeInUp animation-delay-2">
                Charleston's LGBTQ Center
              </h3>
              <p className="wow fadeInUp animation-delay-3 lead">
                For years, many in Charleston have talked and dreamed about the
                need for a central location for the LGBTQ community to gather,
                organize, strategize, learn and find support. Now, this dream is
                becoming a reality.
              </p>
              <p className="wow fadeInUp animation-delay-3">
                <a
                  href="https://www.affa-sc.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>The Alliance For Full Acceptance (AFFA)</strong>
                </a>{" "}
                and <strong>Charleston Pride</strong> are partnering to lease a
                shared office and meeting space that will be located in the same
                building as{" "}
                <a
                  href="https://www.waf.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>We Are Family (WAF)</strong>
                </a>
                , Charleston's organization focused on serving LGBTQ youth. This
                physical hub, located in <strong>North Charleston</strong>, will
                create endless opportunities for collaboration between our local
                organizations, as well as a place to house pop-up services and
                resources for our community. Along with providing resources to
                the community, there will be an approximately{" "}
                <strong>500 square foot meeting space</strong> available to
                community groups that do not have physical space.
              </p>
            </div>
            <div className="col-12 col-md-6 text-center">
              <img
                src={centerMockup}
                alt="Mockup of Center"
                className="img-fluid my-3"
              />
              <em className="text-center">Mockup of Center</em>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <img
                src={centerLayout}
                alt="Layout of Center"
                className="img-fluid my-3"
              />
              <em className="text-center">Layout of Center</em>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <p className="lead">
                In preparation to occupy the new building in{" "}
                <strong>April 2019</strong>, we are raising{" "}
                <strong>$12,000</strong> to fulfill a wishlist that includes:
              </p>
              <ul>
                <li>Signage for the front and side of the building</li>
                <li>
                  Modular conference room furniture and chairs that can be
                  arranged in multiple configurations for different types of
                  gatherings
                </li>
                <li>
                  Media and web conferencing equipment to connect and
                  collaborate with organizers and leaders throughout the country{" "}
                </li>
                <li>A display area for community resources and information</li>
                <li>Comfortable seating for visitors</li>
                <li>Appliances for a coffee station/kitchenette</li>
                <li>Storage room shelving</li>
                <li>Telecommunications and security system setup</li>
              </ul>
              <p>
                While each item on the list isn't required, it will help create
                a comfortable and efficient space that we can move into and
                utilize at full capacity as soon as we open the center.
              </p>
            </div>
            <div className="col-12 col-md-6 text-center">
              <h2 className="color-warning">
                This center will take our LGBTQ community organizing to the next
                level, creating positive change throughout the Lowcountry and
                beyond.
              </h2>
            </div>
          </div>
          <div className="text-center">
            <h2 className="color-primary">
              Are you able to help support this effort?
            </h2>
            <h3 id="donate">Please donate below</h3>
            <ETap form="donate-center" title="lgbtq-center" />
          </div>
        </div>
      </div>
    );
  }
}

export default Center;
