import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SidebarLink extends Component {
  itemClick = () => {
    var element = document.getElementById("ms-slidebar");
    element.classList.remove("open");
  };
  render() {
    return (
      <li>
        {this.props.to.startsWith("/") ? (
          <Link className="link" to={this.props.to} onClick={this.itemClick}>
            <i className={"fa " + this.props.icon} /> {this.props.title}
          </Link>
        ) : (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            href={this.props.to}
          >
            <i className={"fa " + this.props.icon} /> {this.props.title}
          </a>
        )}
      </li>
    );
  }
}
