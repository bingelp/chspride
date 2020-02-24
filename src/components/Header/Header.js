import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
  SocialLink(props) {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={"https://www." + props.site + ".com/charlestonpride/"}
        className={
          "btn-circle animated zoomInDown animation-delay-5 btn-" + props.site
        }
      >
        <i className={"zmdi zmdi-" + props.site} />
      </a>
    );
  }
  Store(props) {
    return (
      <Link
        to="/store"
        className="btn-circle animated zoomInDown animation-delay-5"
      >
        <i className="zmdi zmdi-shopping-cart" />
      </Link>
    );
  }

  Menu(props) {
    return (
      <a
        className="btn-ms-menu btn-circle btn-circle-primary ms-toggle-left animated zoomInDown animation-delay-10"
        href="#/"
      >
        <i className="zmdi zmdi-menu" />
      </a>
    );
  }

  Pride(props) {
    return (
      <Link to="/" className="animated fadeInLeftBig animation-delay-4">
        <h1>
          Charleston <span className="p">P</span>
          <span className="r">R</span>
          <span className="i">I</span>
          <span className="d">D</span>
          <span className="e">E</span>
        </h1>
      </Link>
    );
  }

  render() {
    return (
      <header className="ms-header ms-header-white">
        <div className="container container-full">
          <div className="ms-title">
            <this.Pride />
          </div>
          <div className="header-right">
            <this.SocialLink site="facebook" />
            <this.SocialLink site="twitter" />
            <this.SocialLink site="instagram" />
            <this.Store />
            <this.Menu />
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
