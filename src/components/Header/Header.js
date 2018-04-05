import React from 'react';

import './Header.scss'

class Header extends React.Component {
    render() {
      return (
        <header className="ms-header ms-header-white">
            <div className="container container-full">
                <div className="ms-title">
                    <a className="animated fadeInLeftBig animation-delay-4" href="index.html">
                        <h1>CHS
                        <span className="p">P</span>
                        <span className="r">R</span>
                        <span className="i">I</span>
                        <span className="d">D</span>
                        <span className="e">E</span>
                        </h1>
                    </a>
                </div>
                <div className="header-right">
                    <a className="btn-circle btn-facebook animated zoomInDown animation-delay-5"><i className="zmdi zmdi-facebook"></i></a>
                    <a className="btn-circle btn-twitter animated zoomInDown animation-delay-6"><i className="zmdi zmdi-twitter"></i></a>
                    <a className="btn-circle btn-instagram animated zoomInDown animation-delay-7"><i className="zmdi zmdi-instagram"></i></a>
                </div>
            </div>
        </header>
      );
    }
  };
export default Header;