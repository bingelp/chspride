import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SidebarTabLink extends Component {
  render() {
    return (
      <li>
        {this.props.to.startsWith("/") ?
          <Link className="dropdown-item" to={this.props.to}><i className={"fa " + this.props.icon}></i> {this.props.title}</Link> :
          <a target="_blank" rel="noopener noreferrer" className="dropdown-item" href={this.props.to}><i className={"fa " + this.props.icon}></i> {this.props.title}</a>}
      </li>    )
  }
}
