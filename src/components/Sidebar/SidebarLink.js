import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SidebarLink extends Component {
  render() {
    return (
        <li>
        {this.props.to.startsWith("/") ?
            <Link className="link" to={this.props.to}><i className={"fa " + this.props.icon}></i> {this.props.title}</Link>:
          <a target="_blank" rel="noopener noreferrer" className="link" href={this.props.to}><i className={"fa " + this.props.icon}></i> {this.props.title}</a>}
        </li>
    )
  }
}
