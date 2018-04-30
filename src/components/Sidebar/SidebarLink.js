import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SidebarLink extends Component {
  render() {
    return (
        <li>
            <Link className="link" to={this.props.to}><i className={"fa " + this.props.icon}></i> {this.props.title}</Link>
        </li>
    )
  }
}
