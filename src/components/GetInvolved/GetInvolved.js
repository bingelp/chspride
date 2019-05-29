import React from "react";
import { Link } from "react-router-dom";

class GetInvolved extends React.Component {
  Item(props) {
    return (
      <div className="ms-feature col-12 col-md-4 col-lg-2 card flipInX animation-delay-4">
        <div className="text-center card-body">
          <span
            className={
              "ms-icon ms-icon-circle ms-icon-xxlg color-" + props.color
            }
          >
            <i className={"fa fa-" + props.icon} />
          </span>
          <h4 className={"color-" + props.color}>{props.title}</h4>
          {props.dest.startsWith("/") ? (
            <Link
              to={props.dest}
              className={"btn btn-raised btn-" + props.color}
            >
              Go!
            </Link>
          ) : (
            <a
              href={props.dest}
              target="_blank"
              rel="noopener noreferrer"
              className={"btn btn-raised btn-" + props.color}
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
      <div id="getInvolved" className="container mt-4">
        <h2 className="text-center color-primary mb-2  fadeInDown animation-delay-4">
          Get Involved
        </h2>
        <div className="row">
          <this.Item
            icon="heart-o"
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
            icon="shopping-cart"
            color="caution"
            dest="/store"
            title="Buy Some Swag"
          />
          <this.Item
            icon="amazon"
            color="warning"
            dest="https://smile.amazon.com/ch/27-4256750"
            title="Donate via AmazonSmile"
          />
        </div>
      </div>
    );
  }
}

export default GetInvolved;
