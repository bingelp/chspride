import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavItem.css";
export default class NavItem extends Component {
  itemClick = () => {
    var element = document.getElementById("ms-slidebar");
    element.classList.remove("open");
  };
  render() {
    return (
      <li className={"nav-item bg-" + this.props.background}>
        {this.props.to.startsWith("/") ? (
          <NavLink
            className="nav-link"
            to={this.props.to}
            onClick={this.itemClick}
          >
            <i className={"fa " + this.props.icon} />
            {this.props.title}
          </NavLink>
        ) : (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item"
            href={this.props.to}
          >
            <i className={"fa " + this.props.icon} /> {this.props.title}
          </a>
        )}
      </li>
    );
  }
}
