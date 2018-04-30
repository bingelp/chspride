import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SidebarTabLink extends Component {
  render() {
    return (
        <li><Link className="dropdown-item" to={this.props.to}><i className={"fa " + this.props.icon}></i> {this.props.title}</Link></li>
    )
  }
}
