import React, { Component } from 'react'

export default class NavDropdown extends Component {
  render() {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-name={this.props.title}>{this.props.title} <i className="zmdi zmdi-chevron-down"></i></a>
            <ul className="dropdown-menu">
                {this.props.children}
            </ul>
        </li>
    )
  }
}
