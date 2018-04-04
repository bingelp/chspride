import React from 'react';

import './Header.scss'

class Header extends React.Component {
    render() {
      return (
        <header className="ms-header">
            <div className="container container-full">
                <div className="ms-title">
                    <a href="index.html">
                        <span className="ms-logo animated zoomInDown animation-delay-5">C</span>
                        <h1 className="animated fadeInRight animation-delay-6">Charleston <span>Pride</span></h1>
                    </a>
                </div>
                <div className="header-right">
                </div>
            </div>
        </header>
      );
    }
  };
export default Header;