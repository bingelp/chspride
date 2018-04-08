import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import $ from 'jquery'

class Nav extends React.Component {
    render() {
        $('.navbar').on('click mousedown mouseup touchstart', 'a.has_children', function () {
            if ( $(this).next('ul').hasClass('open_t') && !$(this).parents('ul').hasClass('open_t')) {
                $('.open_t').removeClass('open_t');
                return false;
            }
            $('.open_t').not($(this).parents('ul')).removeClass('open_t');
            $(this).next('ul').addClass('open_t');
            return false;
        });
      return (
<nav className="navbar navbar-expand-md  navbar-static ms-navbar ms-navbar-white">
<div className="container container-full">
    <div className="navbar-header">
        <Link to='/' className=" navbar-brand animated fadeInLeftBig animation-delay-4">                         
            <h1>CHS<span>PRIDE</span></h1>
        </Link>
    </div>

    <div className="collapse navbar-collapse" id="ms-navbar">
        <ul className="navbar-nav">
        <li className="nav-item">
            <NavLink to='/' className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to='/events' className="nav-link">Events</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to='/sponsors' className="nav-link">Sponsors</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to='/friends' className="nav-link">Friends</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to='/get-involved' className="nav-link">Get Involved</NavLink>
        </li>
        <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="aboutDropdownMenuLink" data-hover="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  About Us
                </a>
                <div className="dropdown-menu" aria-labelledby="aboutDropdownMenuLink">
                  <Link className="dropdown-item" to="/about/board">Board of Directors</Link>
                  <Link className="dropdown-item" to="/about/bylaws">Bylaws</Link>
                  <Link className="dropdown-item" to="/about/contact">Contact</Link>
                </div>
        </li>
        <li className="nav-item">
            <NavLink to='/pride-2018' className="nav-link">Pride 2018</NavLink>
        </li>

        </ul>
    </div>
    <a className="ms-toggle-left btn-navbar-menu"><i className="zmdi zmdi-menu"></i></a>
</div>
</nav>
      )
    }
}

export default Nav;