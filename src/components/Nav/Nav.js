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
                            <NavDropdown title="About Us">
                                <NavDropdownItem to="/somewhere" title="Something" icon="zmdi-file-text"/>
                            </NavDropdown>
                            <NavItem to="/events" title="Events" icon="zmdi-file-text" />
                            <NavItem to="/sponsors" title="Sponsors" icon="zmdi-file-text"/>
                            <NavItem to="/sponsors" title="Sponsors" icon="zmdi-file-text" />
                            <NavItem to="/sponsors" title="Sponsors" icon="zmdi-file-text" />
                        </ul>
                    </div>
                    <a className="ms-toggle-left btn-navbar-menu"><i className="zmdi zmdi-menu"></i></a>
                </div>
            </nav>

        )
    }
}

export default Nav;