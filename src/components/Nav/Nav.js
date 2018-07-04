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
                                <NavDropdownItem to="/board-of-directors" title="Board Of Directors" icon="fa-group" />
                                <NavDropdownItem to="/bylaws" title="Bylaws" icon="fa-legal" />
                                <DropdownDivider/>
                                <NavDropdownItem to="/serve-on-the-board" title="Serve on the Board" icon="fa-user-plus" todo="Add Contact Form" />
                                <NavDropdownItem to="/board-roles" title="Board Roles" icon="fa-puzzle-piece" />
                                {/* <NavDropdownItem to="/contact-us" title="Contact Us" icon="fa-envelope-o" todo="Contact form" /> */}
                            </NavDropdown>
                            <NavDropdown title="Sponsors">
                                <NavDropdownItem to="/our-sponsors" title="2018 Sponsors" icon="fa-heart" todo="Add Social Buttons"/>
                                <NavDropdownItem to="/become-a-sponsor" title="Become a Sponsor" icon="fa-handshake-o" />
                            </NavDropdown>
                            <NavDropdown title="Get Involved">
                                <NavDropdownItem title="Become a Friend of Pride" to="/friends-of-pride" icon="fa-star" todo="Add Etap" />
                                <NavDropdownItem to="/join-our-mailing-list" title="Join our Mailing List" icon="fa-envelope" />
                                <NavDropdownItem to="/volunteer" title="Volunteer" icon="fa-smile-o" todo="Add Subtitle"/>
                                <NavDropdownItem to="/serve-on-the-board" title="Serve on the Board" icon="fa-user-plus" todo="Add Contact Form"  />
                                <DropdownDivider/>
                                <NavDropdownItem to="/purchase-pride-guide-ad" title="Purchase a Pride Guide Ad" icon="fa-book"/>
                                <NavDropdownItem to="/vendor-registration" title="Register to Be a Vendor" icon="fa-map-marker" />
                                <NavDropdownItem to="/participate-in-parade" title="Partcipate in Parade" icon="fa-flag" />
                            </NavDropdown>
                            <NavDropdown title="Events">
                                {/* <NavDropdownItem to="events/pride-on-the-harbor" title="Pride on the Harbor" icon="fa-ship" /> */}
                                <NavDropdownItem to="http://toasttoequality.com/?utm_source=charleston_pride" title="Toast to Equality" icon="fa-glass"/>
                                <NavDropdownItem to="/events/rainbows" title="Rainbows Pride Night" icon="fa-bullhorn" />
                                <NavDropdownItem to="/events/pageant" title="Empress and Emperor Pageant" icon="fa-trophy" />
                                <DropdownDivider />
                                <NavDropdownItem to="/events/pride/festival" title="Festival Information" icon="fa-map" />
                                <NavDropdownItem to="/events/pride/parade" title="Parade Information" icon="fa-flag" />
                            </NavDropdown>
                            
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            {/* <NavItem background="bg-warning" title="Pride 2018" to="/pride" icon="fa-flag" todo="new"/> */}
                            <NavItem background="bg-warning" title="Toast To Equality" to="http://toasttoequality.com/?utm_source=charleston_pride" icon="fa-glass"/>
                            <NavItem background="bg-royal" title="Donate" to="/donate" icon="fa-heart-o" />
                        </ul>
                    </div>
                    <a className="ms-toggle-left btn-navbar-menu"><i className="zmdi zmdi-menu"></i></a>
                </div>
            </nav>

        )
    }
}
const DropdownDivider = () => (<li className="dropdown-divider"></li>);
export default Nav;