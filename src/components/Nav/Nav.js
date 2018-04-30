import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import NavDropdown from './NavDropdown';
import NavDropdownItem from './NavDropdownItem';

class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md  navbar-static ms-navbar">
                <div className="container container-full">
                    <div className="navbar-header">
                        <Link to='/' className="navbar-brand">
                            <h1>CHS<span>PRIDE</span></h1>
                        </Link>
                    </div>

                    <div className="collapse navbar-collapse" id="ms-navbar">
                        <ul className="navbar-nav">
                            <NavItem to="/sponsors" title="Our Sponsors" icon="fa-heart" />
                            <NavItem to="/sponsorships" title="Become a Sponsor" icon="fa-handshake-o" />
                            <NavDropdown title="About Us">
                                <NavDropdownItem to="/about/board" title="Board Of Directors" icon="fa-group"/>
                                <NavDropdownItem to="/about/bylaws" title="Bylaws" icon="fa-legal"/>
                            </NavDropdown>
                        </ul>
                    </div>
                    <a className="ms-toggle-left btn-navbar-menu"><i className="zmdi zmdi-menu"></i></a>
                </div>
            </nav>

        )
    }
}

export default Nav;