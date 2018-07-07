import React from "react";
import './Footer.css'

const Footer = () => (
  <footer className="ms-footer">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3 mt-2">
          <h1 className="footer-chs">Charleston</h1>
          <h1 className="footer-pride initialism">
            <span>P</span>
            <span>R</span>
            <span>I</span>
            <span>D</span>
            <span>E</span>
          </h1>
        </div>
        <div className="col-md-6 col-lg-3 order-lg-last text-center">
            <h4>Contact Us</h4>
          <address className="text-center" >
              <p><i className="color-info-light zmdi zmdi-email mr-1"></i><br/><a href="mailto:info@charlestonpride.org">info@charlestonpride.org</a></p>
            <p><i className="color-danger-light zmdi zmdi-pin mr-1"></i><br/>PO Box 61558<br />North Charleston, SC 29419</p>
          </address>
        </div>
        <div className="col-lg-6">
          <div className="m-5">
            <p>Copyright &copy; 2018 Charleston Pride Festival, Inc. All Rights Reserved.</p>
            <p>Charleston Pride Festival, Inc. is a 501(c)(3) public charity under the Internal Revenue Service Code of 1986 and the State of South Carolina.</p>
          </div>
        </div>
        </div>
    </div>
  </footer>
);

export default Footer;