import React from "react";
import "./Sponsors.css";
import helper from "../../components/Helper";

export default class Sponsor extends React.Component {
  render(props) {
    return (
      <div className="ms-thumbnail-container">
        <figure
          className={
            "ms-thumbnail ms-thumbnail-bottom ms-thumbnail-" +
            helper(this.props.meta.level)
          }
        >
          <img
            src={
              process.env.REACT_APP_ASSETS + "sponsors/" + this.props.meta.image
            }
            alt={this.props.meta.name}
            className="img-fluid"
          />
          <figcaption className="ms-thumbnail-caption text-center">
            <div className="ms-thumbnail-caption-content">
              <h4 className="ms-thumbnail-caption-title">
                {this.props.meta.name}
              </h4>
              <p>{this.props.meta.description}</p>
              <a
                href={
                  this.props.meta.web +
                  "?utm_source=charleston_pride&utm_medium=website&utm_campaign=sponsors"
                }
                target="_blank"
                rel="noopener noreferrer"
                className={
                  "btn-circle btn-circle-raised btn-circle-" +
                  helper(this.props.meta.level)
                }
              >
                <i className="zmdi zmdi-globe" />
                <div className="ripple-container" />
              </a>
            </div>
          </figcaption>
        </figure>
      </div>
    );
  }
}
