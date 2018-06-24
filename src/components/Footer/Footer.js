import React from "react";
import './Footer.css'

const Footer = () => (
  <footer className="ms-footer">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <h1 className="footer-chs">Charleston</h1>
          <h1 className="footer-pride">
            <span className="p">P</span>
            <span className="r">R</span>
            <span className="i">I</span>
            <span className="d">D</span>
            <span className="e">E</span>
          </h1>
        </div>
        <div className="col-md-6 col-lg-3 order-lg-last">
          <div className="row">
            <h4>Contact Us</h4>
          </div>
          <div className="row">
          <address className="" >
            <div className="col-12">
                  <div className="row">
                    <div className="col-1">
                      <i className="color-info-light zmdi zmdi-email mr-1"></i>
                    </div>
                    <div className="col-10">
                      <p><a href="mailto:info@charlestonpride.org">info@charlestonpride.org</a></p>
                    </div>
                  </div>
            </div>
            <div className="col-12">
                  <div className="row">
                    <div className="col-1">
                      <i className="color-royal-light zmdi zmdi-phone mr-1"></i>
                    </div>
                    <div className="col-10">
                      <p><a href="tel:8434109924"> (843) 410-9924</a></p>
                    </div>
                  </div>
            </div>
            <div className="col-12">
                  <div className="row">
                    <div className="col-1">
                      <i className="color-danger-light zmdi zmdi-pin mr-1"></i>
                    </div>
                    <div className="col-10">
                      <p>PO Box 61558 <br />North Charleston, SC 29419</p>
                    </div>
                  </div>
            </div>
          </address>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mt-3">
            <p>Copyright &copy; 2018 Charleston Pride Festival, Inc. All Rights Reserved.</p>
            <p>Charleston Pride Festival, Inc. is a 501(c)(3) public charity under the Internal Revenue Service Code of 1986 and the State of South Carolina.</p>
          </div>
        </div>
        </div>
    </div>
  </footer>
);

export default Footer;