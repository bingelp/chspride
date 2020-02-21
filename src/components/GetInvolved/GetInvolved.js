import React from "react";
import { Link } from "react-router-dom";
import "./GetInvolved.css";

class GetInvolved extends React.Component {
  Item(props) {
    return (
      <div
        className={
          "ms-feature col-12 col-md-4 flipInX animation-delay-4 card card-" +
          props.color +
          "-inverse bg-" +
          props.icon
        }
      >
        <div className="text-center card-body">
          <span className="ms-icon ms-icon-circle ms-icon-xxlg ms-icon-white">
            <i className={"fa fa-" + props.icon + " color-" + props.color} />
          </span>
          <h3>{props.title}</h3>
        </div>
        <div className=" text-center">
          {props.dest.startsWith("/") ? (
            <Link
              to={props.dest}
              className={"btn btn-raised font-weight-bold btn-" + props.color}
            >
              Go!
            </Link>
          ) : (
            <a
              href={props.dest}
              target="_blank"
              rel="noopener noreferrer"
              className={"btn font-weight-bold btn-raised btn-" + props.color}
            >
              Go!
            </a>
          )}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id="getInvolved" className="mt-4">
        <h2 className="text-center color-primary mb-2  fadeInDown animation-delay-4">
          Get Involved
        </h2>
        <div className="row">
          <this.Item
            icon="book"
            color="flickr"
            dest="/purchase-pride-guide-ad"
            title="Purchase an Ad"
          />
          <this.Item
            icon="map-marker"
            color="whatsapp"
            dest="/vendor-registration"
            title="Become a Vendor"
          />
          <this.Item
            icon="flag"
            color="dribbble"
            dest="/participate-in-parade"
            title="Participate in the Parade"
          />
          <this.Item
            icon="heart"
            color="royal"
            dest="/donate"
            title="Make a Donation"
          />
          <this.Item
            icon="star"
            color="info"
            dest="/friends-of-pride"
            title="Become a Friend of Pride"
          />
          <this.Item
            icon="envelope"
            color="danger"
            dest="/join-our-mailing-list"
            title="Join Our Mailing List"
          />
          <this.Item
            icon="smile-o"
            color="success"
            dest="/volunteer"
            title="Volunteer with Pride"
          />
          <this.Item
            icon="amazon"
            color="warning"
            dest="https://smile.amazon.com/ch/27-4256750"
            title="Donate via AmazonSmile"
          />
          <this.Item
            icon="shopping-cart"
            color="primary"
            dest="/store"
            title="Buy Some Swag"
          />
        </div>
      </div>
    );
  }
}

export default GetInvolved;
