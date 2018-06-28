import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import "./NavItem.css"
export default class NavItem extends Component {
  render() {
    return (
      <li className={"nav-item " + this.props.background}>
      {this.props.to.startsWith("/")?
        <NavLink className="nav-link" to={this.props.to}><i className={"fa " + this.props.icon}></i>{this.props.title}</NavLink>:
        <a target="_blank" rel="noopener noreferrer" className="nav-item" href={this.props.to}><i className={"fa " + this.props.icon}></i> {this.props.title}</a>
    }</li>
    )
  }
}
