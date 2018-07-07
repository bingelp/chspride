import React, { Component } from 'react'
import NavDropdownItem from './NavDropdownItem'

export default class NavDropdown extends Component {
  render(props) {
    return (
        <li className="nav-item dropdown text-center">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-name={this.props.title}>{this.props.title} <i className="fa fa-chevron-down"></i></a>
            <ul className="dropdown-menu">
                {this.props.pages && this.props.pages.map(p => <NavDropdownItem key={p.title} title={p.title} icon={p.icon} to={p.to} divide={p.divide} />)}
                {this.props.children}
            </ul>
        </li>
    )
  }
}
