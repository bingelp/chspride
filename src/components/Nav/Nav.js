import React from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import NavDropdown from "./NavDropdown";

class Nav extends React.Component {
  render(props) {
    return (
      <nav className="navbar navbar-expand-lg  navbar-static ms-navbar">
        <div className="container container-full">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              <h1>
                #CHS<span>PRIDE</span>
              </h1>
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="ms-navbar">
            <ul className="navbar-nav">
              {this.props.left.map(e => (
                <NavDropdown key={e.key} title={e.title} pages={e.pages} />
              ))}
            </ul>
            <ul className="navbar-nav ml-auto">
              {this.props.right.map(e => (
                <NavItem
                  key={e.key}
                  title={e.title}
                  background={e.background}
                  to={e.to}
                  icon={e.icon}
                />
              ))}
            </ul>
          </div>
          <a className="ms-toggle-left btn-navbar-menu">
            <i className="zmdi zmdi-menu" />
          </a>
        </div>
      </nav>
    );
  }
}
export default Nav;
