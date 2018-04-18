import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
      return (
        <header className="ms-header ms-header-white">
            <div className="container container-full">
                <div className="ms-title">
                    <Link to='/' className="animated fadeInLeftBig animation-delay-4">                         
                        <h1>CHS
                        <span className="p">P</span>
                        <span className="r">R</span>
                        <span className="i">I</span>
                        <span className="d">D</span>
                        <span className="e">E</span>
                        </h1>
                    </Link>
                </div>
                <div className="header-right">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/charlestonpride" className="btn-circle btn-facebook animated zoomInDown animation-delay-5"><i className="zmdi zmdi-facebook"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/charlestonpride" className="btn-circle btn-twitter animated zoomInDown animation-delay-6"><i className="zmdi zmdi-twitter"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/charlestonpride/" className="btn-circle btn-instagram animated zoomInDown animation-delay-7"><i className="zmdi zmdi-instagram"></i></a>
                    <Link to='/donate' className="btn-circle btn-success animated zoomInDown animation-delay-7"><i className="zmdi zmdi-money-box"></i></Link>
                </div>
            </div>
        </header>
      );
    }
  }
export default Header;