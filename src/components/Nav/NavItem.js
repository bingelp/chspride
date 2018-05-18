import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import "./NavItem.css"
export default class NavItem extends Component {
  render() {
    return (
        <li className={"nav-item " + this.props.background}><NavLink className="nav-link" to={this.props.to}><i className={"fa " + this.props.icon}></i>{this.props.title}</NavLink></li>
    )
  }
}
